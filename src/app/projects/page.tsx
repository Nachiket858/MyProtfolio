import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'Projects | AI Automation, ML & Backend Builds',
  description:
    'Explore 7+ production-oriented AI systems and automation projects by Nachiket Shinde — including RAG chatbots, recruiter automation, face recognition, ML toolkits, and API-driven workflows.',
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: 'Projects | AI Automation, ML & Backend Builds by Nachiket Shinde',
    description:
      'RAG chatbots, recruiter automation, face recognition, ML toolkits, API workflows — real problems, real solutions, measurable results.',
    url: `${BASE_URL}/projects`,
    siteName: 'Nachiket Shinde Portfolio',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Nachiket Shinde — Projects' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | AI Automation, ML & Backend Builds by Nachiket Shinde',
    description:
      'RAG chatbots, recruiter automation, face recognition, ML toolkits, API workflows — real problems, real solutions, measurable results.',
    images: [OG_IMAGE],
  },
};

// JSON-LD: ItemList of all projects for Google rich results
const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Nachiket Shinde — AI & Automation Projects',
  description:
    'A curated list of AI systems, automation pipelines, and backend projects built by Nachiket Shinde.',
  url: `${BASE_URL}/projects`,
  numberOfItems: 7,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'AI Recruiter Automation Suite',
      description:
        'Automation pipelines to filter & rank candidates using semantic methods, reducing manual intervention.',
      url: `${BASE_URL}/projects`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Arjuna — Context-Aware Chat Assistant',
      description:
        'RAG chatbot with Qdrant vector retrieval and prompt-controlled response flows via LangGraph.',
      url: 'https://github.com/Nachiket858/LangGraph-Chatbot',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI Interview Coach',
      description:
        'Prompt engineering workflows generating role-specific interview questions and feedback from resumes.',
      url: 'https://github.com/Nachiket858/AI-Interview-Platform',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'API-Driven Client Onboarding',
      description:
        'API-first onboarding logic with status tracking and automated notifications. 45% faster handoff.',
      url: `${BASE_URL}/projects`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Face Recognition Attendance System',
      description:
        'Face-recognition workflow for secure, rapid contactless attendance check-ins.',
      url: 'https://github.com/Nachiket858/FaceAttend',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'PyCodeML — ML Automation Toolkit',
      description:
        'Reusable automation package for ML model training, tuning, and evaluation. Published on PyPI.',
      url: 'https://pypi.org/project/pycodeml/',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Price Comparison Automation Engine',
      description:
        'Automated collection and normalisation of pricing signals into one workflow for faster decisions.',
      url: 'https://github.com/Nachiket858/PriceCompare',
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      {/* JSON-LD — ItemList schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsClient />
    </>
  );
}
