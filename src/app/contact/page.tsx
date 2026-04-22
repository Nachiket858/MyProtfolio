import type { Metadata } from 'next';
import ContactClient from './ContactClient';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'Contact | Hire an AI/ML Engineer & Automation Specialist',
  description:
    'Get in touch with Nachiket Shinde. Open to AI/ML projects, backend automation, RAG pipeline builds, freelance collaborations, and full-time opportunities.',
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Nachiket Shinde | AI/ML Engineer',
    description:
      'Open to AI/ML projects, backend automation, RAG pipeline builds, freelance collaborations, and full-time opportunities. Let\'s build something that moves the needle.',
    url: `${BASE_URL}/contact`,
    siteName: 'Nachiket Shinde Portfolio',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Contact Nachiket Shinde' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nachiket Shinde | AI/ML Engineer',
    description:
      'Open to AI/ML projects, backend automation, RAG pipeline builds, freelance collaborations, and full-time opportunities.',
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
