import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';
import Particles from '../components/Particles';
import ScrollReveal from '../components/ScrollReveal';

// ── Site-wide constants ───────────────────────────────────────────────────────
const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const PROFILE_IMAGE = `${BASE_URL}/nachiket-shinde-profile.jpg`;

// ── Viewport (must NOT be inside `metadata`) ─────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a1a',
};

// ── Root metadata (inherited by all pages as fallback) ────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Title template — inner pages fill in the %s slot
  title: {
    default: 'Nachiket Shinde | AI Systems & Automation Builder',
    template: '%s | Nachiket Shinde',
  },

  description:
    'I build AI systems that actually work. Portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, RAG pipelines, API integration, and scalable workflow automation.',

  keywords: [
    'Nachiket Shinde',
    'AI ML Engineer',
    'AI systems',
    'workflow automation',
    'Python developer',
    'backend automation',
    'API integration',
    'RAG developer',
    'LangGraph engineer',
    'n8n automation',
  ],

  authors: [{ name: 'Nachiket Shinde', url: BASE_URL }],
  creator: 'Nachiket Shinde',
  publisher: 'Nachiket Shinde',

  // Canonical — absolute URL for the root
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph
  openGraph: {
    title: 'Nachiket Shinde | AI Systems & Automation Builder',
    description:
      'I build AI systems that actually work. Portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, RAG pipelines, API integration, and scalable workflow automation.',
    url: BASE_URL,
    siteName: 'Nachiket Shinde Portfolio',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Nachiket Shinde — AI/ML Engineer & Automation Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Nachiket Shinde | AI Systems & Automation Builder',
    description:
      'I build AI systems that actually work. Portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, RAG pipelines, API integration, and scalable workflow automation.',
    images: [OG_IMAGE],
    creator: '@NachiketShinde',
  },

  // Indexing — allow all crawlers by default
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // PWA manifest
  manifest: '/manifest.json',

  // Favicon
  icons: {
    icon: '/favicon.svg',
  },
};

// ── JSON-LD: ProfilePage (rich-result eligible) + WebSite ───────────────────
// ProfilePage is Google's recommended schema for personal profile/portfolio pages.
// It IS recognised by the Rich Results Test (unlike plain Person/WebSite).
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: 'Nachiket Shinde — AI Systems & Automation Builder',
  description:
    'Personal portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, RAG pipelines, API integration, and scalable workflow automation.',
  dateCreated: '2026-04-06T00:00:00+05:30',
  dateModified: new Date().toISOString(),
  inLanguage: 'en-US',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  },
  mainEntity: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Nachiket Shinde',
    alternateName: 'Nachiket Bhagaji Shinde',
    url: BASE_URL,
    image: {
      '@type': 'ImageObject',
      '@id': `${BASE_URL}/#personimage`,
      url: PROFILE_IMAGE,
      contentUrl: PROFILE_IMAGE,
      width: 800,
      height: 800,
      caption: 'Nachiket Shinde — AI/ML Engineer & Automation Builder',
    },
    jobTitle: 'AI/ML Engineer & Automation Builder',
    description:
      'AI systems and automation builder specialising in Python, LLM integrations, RAG pipelines, and backend workflow optimisation.',
    email: 'nachiketshinde2004@gmail.com',
    telephone: '+91-87660-55949',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chhatrapati Sambhajinagar',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/Nachiket858',
      'https://www.linkedin.com/in/nachiket-shinde2004',
      `${BASE_URL}/Nachiket_Shinde_Resume.pdf`,
    ],
    knowsAbout: [
      'Machine Learning',
      'Artificial Intelligence',
      'Python',
      'LangGraph',
      'Retrieval-Augmented Generation',
      'n8n Automation',
      'FastAPI',
      'Flask',
      'REST APIs',
      'Qdrant',
      'Prompt Engineering',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'AI/ML Engineer',
      occupationLocation: {
        '@type': 'Country',
        name: 'India',
      },
      description:
        'Builds AI systems, automation pipelines, RAG-based chatbots, and backend API workflows using Python, LangGraph, and n8n.',
      skills: 'Python, Machine Learning, LangGraph, RAG, n8n, FastAPI, Flask, Qdrant',
    },
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Nachiket Shinde Portfolio',
  description:
    'Portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, and automation systems.',
  publisher: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/projects?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Bootstrap Icons CDN — reduces DNS/TLS latency */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        {/* Structured Data — ProfilePage (rich result eligible) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        {/* Structured Data — WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <ScrollReveal />
        <Particles />
        <Navigation />

        <main>{children}</main>

        <footer>
          <div className="container footer-inner">
            <p className="footer-copy">
              <i className="bi bi-c-circle" /> {new Date().getFullYear()} Nachiket Shinde
              &nbsp;&middot;&nbsp; AI/ML Engineer &nbsp;&middot;&nbsp; Automation &amp; Backend
              Systems
            </p>
            <nav aria-label="Footer navigation" className="footer-links">
              <a
                href="https://github.com/Nachiket858"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nachiket Shinde on GitHub"
              >
                <i className="bi bi-github" aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nachiket-shinde2004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nachiket Shinde on LinkedIn"
              >
                <i className="bi bi-linkedin" aria-hidden="true" /> LinkedIn
              </a>
              <a href="mailto:nachiketshinde2004@gmail.com" aria-label="Email Nachiket Shinde">
                <i className="bi bi-envelope-fill" aria-hidden="true" /> Email
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
