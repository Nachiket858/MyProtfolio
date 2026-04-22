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

// JSON-LD: ItemList of SoftwareApplication items (rich-result eligible type)
// Using SoftwareApplication instead of generic ListItem — Google supports it
// for rich results in the "Apps" carousel.
const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${BASE_URL}/projects#itemlist`,
  name: 'AI & Automation Projects by Nachiket Shinde',
  description:
    'Production-oriented AI systems, automation pipelines, and backend projects built by Nachiket Shinde.',
  url: `${BASE_URL}/projects`,
  numberOfItems: 7,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#ai-recruiter`,
        name: 'AI Recruiter Automation Suite',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'Automation pipelines to filter & rank candidates using semantic methods, reducing manual intervention and improving shortlisting speed.',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'AI recruitment, candidate screening, n8n automation, semantic ranking',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#arjuna-chatbot`,
        name: 'Arjuna — Context-Aware Chat Assistant',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description:
          'RAG chatbot with Qdrant vector retrieval and prompt-controlled response flows via LangGraph. Improved response precision and contextual understanding.',
        url: 'https://github.com/Nachiket858/LangGraph-Chatbot',
        downloadUrl: 'https://github.com/Nachiket858/LangGraph-Chatbot',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'RAG, LangGraph, Qdrant, chatbot, LLM, context-aware',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#ai-interview-coach`,
        name: 'AI Interview Coach',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        description:
          'Prompt engineering workflows generating role-specific interview questions and personalised feedback from candidate resumes.',
        url: 'https://github.com/Nachiket858/AI-Interview-Platform',
        downloadUrl: 'https://github.com/Nachiket858/AI-Interview-Platform',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'AI interview, prompt engineering, resume parsing, LLM',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#client-onboarding`,
        name: 'API-Driven Client Onboarding',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'API-first onboarding logic with status tracking and automated notifications. Achieved 45% faster onboarding handoff.',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'API integration, client onboarding, Flask, automation, Python',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#face-attend`,
        name: 'Face Recognition Attendance System',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web, Linux, Windows',
        description:
          'Face-recognition workflow for secure, rapid contactless attendance check-ins. Eliminates manual entry errors.',
        url: 'https://github.com/Nachiket858/FaceAttend',
        downloadUrl: 'https://github.com/Nachiket858/FaceAttend',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'face recognition, OpenCV, attendance, Python, computer vision',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#pycodeml`,
        name: 'PyCodeML — ML Automation Toolkit',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Linux, Windows, macOS',
        description:
          'Reusable Python package for ML model training, hyperparameter tuning, and evaluation. Published on PyPI. Accelerates ML experimentation cycles.',
        url: 'https://pypi.org/project/pycodeml/',
        downloadUrl: 'https://pypi.org/project/pycodeml/',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'machine learning, scikit-learn, automation toolkit, PyPI, Python package',
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#price-compare`,
        name: 'Price Comparison Automation Engine',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'Automated collection and normalisation of pricing signals from multiple sources into one decision workflow.',
        url: 'https://github.com/Nachiket858/PriceCompare',
        downloadUrl: 'https://github.com/Nachiket858/PriceCompare',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'price comparison, web scraping, automation, Flask, Python',
      },
    },
  ],
};

// JSON-LD: BreadcrumbList — always eligible for rich results (shows path in SERP)
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      {/* JSON-LD — ItemList of SoftwareApplication items */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      {/* JSON-LD — BreadcrumbList (always eligible for rich results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsClient />
    </>
  );
}
