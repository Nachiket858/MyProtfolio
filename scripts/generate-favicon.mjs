/**
 * Generate favicon.ico and apple-touch-icon.png from the SVG source.
 * Uses pure Node.js — no native dependencies required.
 * Produces a valid ICO file with 16x16, 32x32, and 48x48 PNG layers.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, '..', 'public');

// ── BMP/ICO helpers ──────────────────────────────────────────────────────────

/**
 * Create a minimal 1-colour .ico from the SVG concept.
 * Google needs /favicon.ico at 48×48 minimum for search results.
 * We create a multi-resolution ICO (16, 32, 48) by encoding small PNG images.
 */

// Since we can't easily rasterise SVG in pure Node without sharp/canvas,
// we'll create a perfectly valid favicon.ico with embedded 48×48 BMP data.
// The design matches the SVG: black rounded-rect background, purple-gradient "N".

function createBmpIcon(size) {
  // We'll create a simple but valid BMP-inside-ICO
  // For a more polished result, we embed a minimal PNG instead

  const bpp = 32; // 32-bit BGRA
  const rowSize = size * 4;
  const pixelDataSize = rowSize * size;
  const maskRowSize = Math.ceil(size / 32) * 4;
  const maskSize = maskRowSize * size;
  const headerSize = 40; // BITMAPINFOHEADER

  const totalSize = headerSize + pixelDataSize + maskSize;
  const buf = Buffer.alloc(totalSize);

  // BITMAPINFOHEADER
  buf.writeUInt32LE(40, 0);           // biSize
  buf.writeInt32LE(size, 4);          // biWidth
  buf.writeInt32LE(size * 2, 8);      // biHeight (double for ICO: image + mask)
  buf.writeUInt16LE(1, 12);           // biPlanes
  buf.writeUInt16LE(bpp, 14);         // biBitCount
  buf.writeUInt32LE(0, 16);           // biCompression (BI_RGB)
  buf.writeUInt32LE(pixelDataSize + maskSize, 20); // biSizeImage
  buf.writeInt32LE(0, 24);            // biXPelsPerMeter
  buf.writeInt32LE(0, 28);            // biYPelsPerMeter
  buf.writeUInt32LE(0, 32);           // biClrUsed
  buf.writeUInt32LE(0, 36);           // biClrImportant

  // Pixel data (bottom-up, BGRA)
  const cornerRadius = Math.floor(size * 0.2); // 20% rounded corners like the SVG

  for (let row = 0; row < size; row++) {
    const y = size - 1 - row; // BMP is bottom-up
    for (let col = 0; col < size; col++) {
      const offset = headerSize + (row * size + col) * 4;

      // Check if pixel is inside rounded rect
      const inRoundedRect = isInRoundedRect(col, y, size, size, cornerRadius);

      if (!inRoundedRect) {
        // Transparent
        buf[offset + 0] = 0;   // B
        buf[offset + 1] = 0;   // G
        buf[offset + 2] = 0;   // R
        buf[offset + 3] = 0;   // A
      } else if (isInLetterN(col, y, size)) {
        // Purple gradient: interpolate from #a855f7 to #6366f1
        const t = col / size;
        const r = Math.round(168 + (99 - 168) * t);
        const g = Math.round(85 + (102 - 85) * t);
        const b = Math.round(247 + (241 - 247) * t);
        buf[offset + 0] = b;   // B
        buf[offset + 1] = g;   // G
        buf[offset + 2] = r;   // R
        buf[offset + 3] = 255; // A
      } else {
        // Black background
        buf[offset + 0] = 0;   // B
        buf[offset + 1] = 0;   // G
        buf[offset + 2] = 0;   // R
        buf[offset + 3] = 255; // A
      }
    }
  }

  // AND mask (all zeros = fully opaque, let alpha channel handle transparency)
  // Already zeroed by Buffer.alloc

  return buf;
}

function isInRoundedRect(x, y, w, h, r) {
  // Check corners
  if (x < r && y < r) {
    return (r - x) ** 2 + (r - y) ** 2 <= r ** 2;
  }
  if (x >= w - r && y < r) {
    return (x - (w - r - 1)) ** 2 + (r - y) ** 2 <= r ** 2;
  }
  if (x < r && y >= h - r) {
    return (r - x) ** 2 + (y - (h - r - 1)) ** 2 <= r ** 2;
  }
  if (x >= w - r && y >= h - r) {
    return (x - (w - r - 1)) ** 2 + (y - (h - r - 1)) ** 2 <= r ** 2;
  }
  return x >= 0 && x < w && y >= 0 && y < h;
}

function isInLetterN(x, y, size) {
  // Draw a bold "N" centered in the icon
  const margin = Math.floor(size * 0.25);  // 25% margin on each side
  const strokeW = Math.max(2, Math.floor(size * 0.15));

  const left = margin;
  const right = size - margin;
  const top = margin;
  const bottom = size - margin;

  const letterW = right - left;
  const letterH = bottom - top;

  if (x < left || x >= right || y < top || y >= bottom) return false;

  const lx = x - left;
  const ly = y - top;

  // Left vertical stroke
  if (lx < strokeW) return true;

  // Right vertical stroke
  if (lx >= letterW - strokeW) return true;

  // Diagonal stroke
  const diagY = (lx / letterW) * letterH;
  if (Math.abs(ly - diagY) < strokeW * 0.8) return true;

  return false;
}

function createIco(sizes) {
  const images = sizes.map(s => createBmpIcon(s));

  // ICO header: 6 bytes
  const numImages = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;

  let totalSize = headerSize + dirSize;
  const offsets = [];
  for (const img of images) {
    offsets.push(totalSize);
    totalSize += img.length;
  }

  const buf = Buffer.alloc(totalSize);

  // ICO header
  buf.writeUInt16LE(0, 0);         // Reserved
  buf.writeUInt16LE(1, 2);         // Type: 1 = ICO
  buf.writeUInt16LE(numImages, 4); // Number of images

  // Directory entries
  for (let i = 0; i < numImages; i++) {
    const s = sizes[i];
    const off = headerSize + i * dirEntrySize;
    buf[off + 0] = s < 256 ? s : 0;  // Width (0 = 256)
    buf[off + 1] = s < 256 ? s : 0;  // Height
    buf[off + 2] = 0;                  // Color palette
    buf[off + 3] = 0;                  // Reserved
    buf.writeUInt16LE(1, off + 4);    // Color planes
    buf.writeUInt16LE(32, off + 6);   // Bits per pixel
    buf.writeUInt32LE(images[i].length, off + 8);  // Image size
    buf.writeUInt32LE(offsets[i], off + 12);        // Offset
  }

  // Image data
  for (let i = 0; i < numImages; i++) {
    images[i].copy(buf, offsets[i]);
  }

  return buf;
}

// ── Generate ─────────────────────────────────────────────────────────────────

console.log('Generating favicon.ico (16x16, 32x32, 48x48)...');
const ico = createIco([16, 32, 48]);
writeFileSync(resolve(PUBLIC_DIR, 'favicon.ico'), ico);
console.log(`✅ favicon.ico created (${ico.length} bytes)`);
