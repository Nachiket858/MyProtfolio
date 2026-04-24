import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Nachiket Shinde',
  description: 'The page you are looking for does not exist. Return to Nachiket Shinde\'s AI/ML portfolio.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <style>{`
        /* ── 404 Page Styles ── */
        .nf-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated background orbs */
        .nf-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .nf-orb-1 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%);
          top: -100px; left: -80px;
          animation: orbDrift1 14s ease-in-out infinite alternate;
        }
        .nf-orb-2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%);
          bottom: -80px; right: -60px;
          animation: orbDrift2 18s ease-in-out infinite alternate;
        }
        .nf-orb-3 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: orbDrift3 10s ease-in-out infinite alternate;
        }

        @keyframes orbDrift1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 60px) scale(1.15); }
        }
        @keyframes orbDrift2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-50px, -30px) scale(1.1); }
        }
        @keyframes orbDrift3 {
          from { transform: translate(-50%, -50%) scale(1); }
          to   { transform: translate(-50%, -50%) scale(1.25); }
        }

        /* ── Glitch 404 Number ── */
        .nf-code {
          position: relative;
          z-index: 1;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(7rem, 20vw, 14rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.05em;
          background: linear-gradient(135deg, #ba9eff 0%, #53ddfc 50%, #ec63ff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 4s ease-in-out infinite, glitchBase 6s step-end infinite;
          margin-bottom: 0;
          user-select: none;
        }

        .nf-code::before,
        .nf-code::after {
          content: '404';
          position: absolute;
          inset: 0;
          background: inherit;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nf-code::before {
          animation: glitchTop 6s step-end infinite;
          clip-path: polygon(0 0, 100% 0, 100% 38%, 0 38%);
          opacity: 0;
        }

        .nf-code::after {
          animation: glitchBot 6s step-end infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          opacity: 0;
        }

        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        @keyframes glitchBase {
          0%, 90%, 100% { transform: translate(0); }
          91% { transform: translate(-3px, 1px); }
          92% { transform: translate(3px, -1px); }
          93% { transform: translate(0); }
          96% { transform: translate(2px, 2px); }
          97% { transform: translate(-2px, -1px); }
          98% { transform: translate(0); }
        }

        @keyframes glitchTop {
          0%, 88%, 100% { opacity: 0; transform: translate(0); }
          89% { opacity: 0.8; transform: translate(-6px, -2px); filter: hue-rotate(90deg); }
          90% { opacity: 0; transform: translate(4px, 1px); }
          95% { opacity: 0.6; transform: translate(4px, -1px); filter: hue-rotate(180deg); }
          96% { opacity: 0; }
        }

        @keyframes glitchBot {
          0%, 88%, 100% { opacity: 0; transform: translate(0); }
          89% { opacity: 0.8; transform: translate(6px, 2px); filter: hue-rotate(-90deg); }
          90% { opacity: 0; }
          95% { opacity: 0.6; transform: translate(-4px, 1px); filter: hue-rotate(180deg); }
          96% { opacity: 0; }
        }

        /* ── Scanlines overlay ── */
        .nf-scanlines {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.03) 2px,
            rgba(0,0,0,0.03) 4px
          );
        }

        /* ── Content ── */
        .nf-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1rem;
          animation: contentIn 0.8s cubic-bezier(0.22,1,0.36,1) both 0.2s;
        }

        @keyframes contentIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nf-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #ba9eff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .nf-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #53ddfc;
          animation: pulseDotNf 2s ease-in-out infinite;
        }

        @keyframes pulseDotNf {
          0%,100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(83,221,252,0.5); }
          50%     { opacity: 0.7; transform: scale(1.3); box-shadow: 0 0 0 5px rgba(83,221,252,0); }
        }

        .nf-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #e9eaf8;
          margin: 0;
        }

        .nf-subtitle {
          font-size: 1rem;
          color: #a8aab7;
          max-width: 42ch;
          line-height: 1.65;
          margin: 0;
        }

        .nf-code-hint {
          font-family: 'Space Grotesk', monospace;
          font-size: 0.82rem;
          color: #53ddfc;
          background: rgba(83,221,252,0.06);
          border: 1px solid rgba(83,221,252,0.18);
          border-radius: 8px;
          padding: 0.55rem 1.1rem;
          letter-spacing: 0.02em;
        }

        .nf-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: linear-gradient(120deg, #8455ef, #ec63ff);
          border-radius: 9999px;
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 6px 28px rgba(139,92,246,0.4);
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }

        .nf-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%);
        }

        .nf-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 36px rgba(139,92,246,0.55);
        }

        .nf-btn-primary:hover::after {
          transform: translateX(100%);
          transition: transform 0.5s ease;
        }

        .nf-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.73rem 1.75rem;
          background: transparent;
          border: 1px solid rgba(186,158,255,0.35);
          border-radius: 9999px;
          color: #e9eaf8;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .nf-btn-ghost:hover {
          background: rgba(186,158,255,0.07);
          border-color: #ba9eff;
          transform: translateY(-2px);
        }

        /* ── Floating mini tags ── */
        .nf-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 0.5rem;
          opacity: 0.55;
        }

        .nf-tag {
          padding: 0.25rem 0.7rem;
          background: rgba(33,37,51,0.8);
          border: 1px solid rgba(186,158,255,0.15);
          border-radius: 9999px;
          font-size: 0.72rem;
          color: #a8aab7;
        }
      `}</style>

      <div className="nf-wrap">
        {/* Ambient orbs */}
        <div className="nf-orb nf-orb-1" />
        <div className="nf-orb nf-orb-2" />
        <div className="nf-orb nf-orb-3" />
        <div className="nf-scanlines" />

        {/* Glitch 404 */}
        <div className="nf-code" aria-label="404">404</div>

        {/* Content */}
        <div className="nf-content">
          <span className="nf-badge">
            <span className="nf-badge-dot" />
            Error · Page Not Found
          </span>

          <h1 className="nf-title">Oops — This page got lost in the latent space.</h1>

          <p className="nf-subtitle">
            The route you followed doesn't exist, was moved, or the model hallucinated it.
            Let's get you back on track.
          </p>

          <code className="nf-code-hint">
            HTTP 404 · Resource not found at this endpoint
          </code>

          <div className="nf-actions">
            <Link href="/" className="nf-btn-primary">
              <i className="bi bi-house-fill" /> Back to Home
            </Link>
            <Link href="/projects" className="nf-btn-ghost">
              <i className="bi bi-grid-3x3-gap-fill" /> View Projects
            </Link>
          </div>

          <div className="nf-tags">
            {['AI/ML', 'Computer Vision', 'GenAI', 'NLP', 'Python'].map(t => (
              <span key={t} className="nf-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
