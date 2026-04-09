import './globals.css';
import Navigation from '../components/Navigation';
import Particles from '../components/Particles';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  metadataBase: new URL('https://nachiket.kodeneurons.in'),
  title: 'Nachiket Shinde | AI Systems & Automation Builder',
  description: 'I build AI systems that actually work. Portfolio of Nachiket Shinde, AI/ML engineer focused on Python, LLM apps, APIs, workflow automation, and scalable execution.',
  keywords: 'Nachiket Shinde, AI ML Engineer, AI systems, workflow automation, Python developer, backend automation, API integration, RAG developer, LangGraph engineer',
  openGraph: {
    title: 'Nachiket Shinde | AI Systems & Automation Builder',
    description: 'I build AI systems that actually work. Portfolio of Nachiket Shinde, AI/ML engineer focused on Python, LLM apps, APIs, workflow automation, and scalable execution.',
    url: 'https://nachiket.kodeneurons.in',
    siteName: 'Nachiket Shinde Portfolio',
    images: [
      {
        url: 'https://nachiket.kodeneurons.in/nachiket-shinde-profile.jpg',
        width: 800,
        height: 800,
        alt: 'Nachiket Shinde - AI/ML Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nachiket Shinde | AI Systems & Automation Builder',
    description: 'I build AI systems that actually work. Portfolio of Nachiket Shinde, AI/ML engineer focused on Python, LLM apps, APIs, workflow automation, and scalable execution.',
    images: ['https://nachiket.kodeneurons.in/nachiket-shinde-profile.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nachiket Shinde",
  "url": "https://nachiket.kodeneurons.in",
  "image": "https://nachiket.kodeneurons.in/nachiket-shinde-profile.jpg",
  "jobTitle": "AI/ML Engineer",
  "sameAs": [
    "https://github.com/Nachiket858",
    "https://www.linkedin.com/in/nachiket-shinde2004"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Self-Employed / Freelance"
  },
  "description": "AI systems and automation builder specializing in Python, LLM integrations, and backend workflow optimization."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollReveal />
        <Particles />
        <Navigation />
        <main>{children}</main>
        <footer>
          <div className="container footer-inner">
            <p className="footer-copy">
              <i className="bi bi-c-circle" /> {new Date().getFullYear()} Nachiket Shinde
              &nbsp;&middot;&nbsp; AI/ML Engineer &nbsp;&middot;&nbsp; Automation & Backend Systems
            </p>
            <div className="footer-links">
              <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
                <i className="bi bi-github" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin" /> LinkedIn
              </a>
              <a href="mailto:nachiketshinde2004@gmail.com">
                <i className="bi bi-envelope-fill" /> Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
