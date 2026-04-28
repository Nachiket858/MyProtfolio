import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';
import Particles from '../components/Particles';
import ScrollReveal from '../components/ScrollReveal';

// ── Site-wide constants ───────────────────────────────────────────────────────
const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const PROFILE_IMAGE = `${BASE_URL}/nachiket-shinde-profile.jpg`;

// ── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a1a',
};

// ── Metadata (FIXED + Google Verification Added) ─────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  verification: {
    google: "ua1hFa6ziGscLEZLX_yAR9axd-nX-lpiy28rKhP-72Q",
  },

  title: {
    default: 'Nachiket Shinde | AI Systems & Automation Builder',
    template: '%s | Nachiket Shinde',
  },

  description:
    'Portfolio of Nachiket Shinde — AI/ML engineer with 19+ projects in computer vision, GenAI, NLP, face recognition, plant disease detection, RAG chatbots, sentiment analysis, and fraud detection.',

  keywords: [
    'Nachiket Shinde',
    'AI ML engineer India',
    'computer vision projects',
    'face recognition Python',
    'plant disease detection AI',
    'GenAI chatbot RAG',
    'NLP sentiment analysis',
    'LangGraph RAG pipeline',
    'deep learning portfolio',
    'Python AI developer',
    'fraud detection machine learning',
    'sign language recognition',
    'YouTube summarizer LLM',
    'loan eligibility prediction',
    'SIH 2025 chatbot',
  ],

  authors: [{ name: 'Nachiket Shinde', url: BASE_URL }],
  creator: 'Nachiket Shinde',
  publisher: 'Nachiket Shinde',

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: 'Nachiket Shinde | AI/ML Engineer — Computer Vision, GenAI & NLP',
    description:
      '19+ AI/ML projects by Nachiket Shinde — face recognition, RAG chatbots, plant disease detection, sentiment analysis, fraud detection, and more.',
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

  twitter: {
    card: 'summary_large_image',
    title: 'Nachiket Shinde | AI/ML Engineer — Computer Vision, GenAI & NLP',
    description:
      '19+ AI/ML projects — face recognition, RAG chatbots, plant disease detection, sentiment analysis, fraud detection & more by Nachiket Shinde.',
    images: [OG_IMAGE],
    creator: '@NachiketShinde',
  },

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

  manifest: '/manifest.json',

  icons: {
    icon: '/favicon.svg',
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: 'Nachiket Shinde — AI/ML Engineer | Computer Vision, GenAI & NLP',
  description:
    'Portfolio of Nachiket Shinde — AI/ML engineer with 19+ projects in computer vision, face recognition, GenAI chatbots, RAG pipelines, NLP, plant disease detection, and fraud detection.',
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
    jobTitle: 'AI/ML Engineer | Computer Vision, GenAI & NLP Specialist',
    description:
      'AI/ML engineer with 19+ projects spanning computer vision, face recognition, GenAI, RAG chatbots, NLP, plant disease detection, sentiment analysis, and fraud detection.',
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
      'Computer Vision',
      'Deep Learning',
      'Natural Language Processing',
      'Generative AI',
      'Python',
      'TensorFlow',
      'OpenCV',
      'LangGraph',
      'RAG',
    ],
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
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
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
              © {new Date().getFullYear()} Nachiket Shinde · AI/ML Engineer · Automation & Backend Systems
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
