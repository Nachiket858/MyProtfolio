import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'Projects | 19+ AI, ML & Computer Vision Systems by Nachiket Shinde',
  description:
    'Explore 19+ real-world AI/ML projects by Nachiket Shinde — including face recognition, GenAI chatbots, RAG pipelines, plant disease detection, sentiment analysis, fraud detection, and more.',
  keywords: [
    'AI projects',
    'machine learning portfolio',
    'computer vision projects',
    'GenAI chatbot',
    'RAG pipeline',
    'face recognition',
    'plant disease detection',
    'sentiment analysis',
    'NLP projects',
    'Nachiket Shinde',
    'Python AI projects',
    'deep learning projects',
  ],
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: '19+ AI & ML Projects by Nachiket Shinde | Computer Vision, GenAI, NLP',
    description:
      'Face recognition, RAG chatbots, plant disease AI, loan prediction, sentiment analysis, fraud detection & more — 19+ production-grade projects by Nachiket Shinde.',
    url: `${BASE_URL}/projects`,
    siteName: 'Nachiket Shinde Portfolio',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Nachiket Shinde — AI & ML Projects' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '19+ AI & ML Projects by Nachiket Shinde | Computer Vision, GenAI, NLP',
    description:
      'Face recognition, RAG chatbots, plant disease AI, loan prediction, sentiment analysis, fraud detection & more — real problems, real solutions.',
    images: [OG_IMAGE],
  },
};

// JSON-LD: ItemList of SoftwareApplication items (rich-result eligible type)
const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${BASE_URL}/projects#itemlist`,
  name: 'AI & ML Projects by Nachiket Shinde',
  description:
    '19+ real-world AI, ML, Computer Vision, NLP and GenAI projects built by Nachiket Shinde.',
  url: `${BASE_URL}/projects`,
  numberOfItems: 19,
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#pycodeml`,
        name: 'PyCodeML — ML Automation Toolkit',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Linux, Windows, macOS',
        description: 'Reusable Python package for ML model training, hyperparameter tuning, and evaluation. Published on PyPI.',
        url: 'https://github.com/Nachiket858/PyCodeml',
        downloadUrl: 'https://pypi.org/project/pycodeml/',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'machine learning, scikit-learn, automation toolkit, PyPI, Python package',
      },
    },
    {
      '@type': 'ListItem', position: 2,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#face-attend`,
        name: 'AI Face Recognition Attendance System',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web, Windows, Linux',
        description: 'Real-time face-recognition pipeline for secure, contactless attendance check-ins.',
        url: 'https://github.com/Nachiket858/FaceAttend',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'face recognition, OpenCV, attendance, Python, computer vision',
      },
    },
    {
      '@type': 'ListItem', position: 3,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#sms-spam`,
        name: 'SMS Spam Detection Android App',
        applicationCategory: 'MobileApplication',
        operatingSystem: 'Android',
        description: 'On-device NLP model integrated into an Android app to classify incoming messages as spam or legitimate.',
        url: 'https://github.com/Nachiket858/Fake_News_detection',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'spam detection, NLP, Android, TensorFlow Lite, text classification',
      },
    },
    {
      '@type': 'ListItem', position: 4,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#yt-summarizer`,
        name: 'YouTube Video Summarizer (Ollama)',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'Local LLM pipeline that ingests YouTube transcripts and produces concise summaries using Ollama.',
        url: 'https://github.com/Nachiket858/Podcast_Summarizer_edited_updated',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'YouTube summarizer, Ollama, LangChain, LLM, transcript summarization',
      },
    },
    {
      '@type': 'ListItem', position: 5,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#plant-disease`,
        name: 'AI Plant & Fruit Disease Detection',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'CNN-based image classifier detecting plant and fruit diseases from photos.',
        url: 'https://github.com/Nachiket858/Plant_disease_detection',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'plant disease detection, CNN, TensorFlow, agriculture AI, computer vision',
      },
    },
    {
      '@type': 'ListItem', position: 6,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#vrukshadarshan`,
        name: 'VrukshaDarshan — Plant Identification Tool',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'AI-powered plant identification using transfer learning on a large botanical image dataset.',
        url: 'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'plant identification, transfer learning, MobileNet, computer vision, agriculture',
      },
    },
    {
      '@type': 'ListItem', position: 7,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#ai-interview`,
        name: 'AI Interview Practice System',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        description: 'LLM-powered platform generating role-specific interview questions and personalised feedback from resumes.',
        url: 'https://github.com/Nachiket858/AI-Interview-Platform',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'AI interview, LLM, prompt engineering, resume parsing, interview practice',
      },
    },
    {
      '@type': 'ListItem', position: 8,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#college-chatbot`,
        name: 'AI College Enquiry Chatbot (RAG)',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'RAG chatbot using LangGraph over college documents for accurate, contextual student enquiry answers.',
        url: 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'RAG chatbot, LangGraph, college enquiry, Qdrant, LLM',
      },
    },
    {
      '@type': 'ListItem', position: 9,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#farmer-chatbot`,
        name: 'Farmer Advisory Chatbot',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'LangGraph RAG chatbot delivering crop, weather and government scheme advisory in natural language for farmers.',
        url: 'https://github.com/Nachiket858/LangGraph-Chatbot',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'farmer advisory, RAG, LangGraph, agriculture chatbot, LLM',
      },
    },
    {
      '@type': 'ListItem', position: 10,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#health-chatbot`,
        name: 'Generative AI Health Chatbot',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        description: 'GenAI-powered health assistant providing preliminary symptom guidance and medical referrals.',
        url: 'https://github.com/Nachiket858/Health_assistance',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'health chatbot, Gemini API, LangChain, generative AI, symptom checker',
      },
    },
    {
      '@type': 'ListItem', position: 11,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#loan-predictor`,
        name: 'AI Loan Eligibility Predictor',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'ML classification model predicting loan eligibility from applicant financial profile data.',
        url: 'https://github.com/Nachiket858/Loan_eligibility_prediction',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'loan eligibility, machine learning, scikit-learn, fintech, prediction',
      },
    },
    {
      '@type': 'ListItem', position: 12,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#face-voting`,
        name: 'Online Voting System Using Face Recognition',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        description: 'Secure online voting platform with face-recognition-based biometric voter verification.',
        url: 'https://github.com/Nachiket858/face_voting_system',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'face recognition voting, biometric, OpenCV, election, computer vision',
      },
    },
    {
      '@type': 'ListItem', position: 13,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#sentify`,
        name: 'Sentify — Emotion & Sentiment Detection',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'NLP pipeline detecting emotion from e-commerce reviews and enabling intelligent price negotiation strategies.',
        url: 'https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'sentiment analysis, emotion detection, BERT, NLP, price negotiation',
      },
    },
    {
      '@type': 'ListItem', position: 14,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#price-compare`,
        name: 'Price Comparison Tool',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Automated collection and normalisation of pricing signals from multiple e-commerce sources.',
        url: 'https://github.com/Nachiket858/PriceCompare',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'price comparison, web scraping, BeautifulSoup, automation, Flask',
      },
    },
    {
      '@type': 'ListItem', position: 15,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#agnostic-chatbot`,
        name: 'Agnostic Chatbot (SIH 2025)',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'Multi-domain RAG chatbot built for Smart India Hackathon 2025 with dynamic domain routing.',
        url: 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'SIH 2025, RAG, LangGraph, multi-domain chatbot, Qdrant, LLM',
      },
    },
    {
      '@type': 'ListItem', position: 16,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#dream-house`,
        name: 'Dream House Architem',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'Generative AI tool creating personalised architectural home layouts from user preferences.',
        url: 'https://github.com/Nachiket858/Dream-house-architem',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'dream house, generative AI, stable diffusion, architecture, home design',
      },
    },
    {
      '@type': 'ListItem', position: 17,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#pomegranate-disease`,
        name: 'Pomegranate Fruit Disease Detection',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'Deep learning CNN detecting pomegranate fruit diseases from images to enable early farmer intervention.',
        url: 'https://github.com/Nachiket858/pomegranate-fruit-disease-detection',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'pomegranate disease, CNN, TensorFlow, agriculture AI, fruit detection',
      },
    },
    {
      '@type': 'ListItem', position: 18,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#fraud-detection`,
        name: 'Fraud Detection in UPI Transactions',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'ML anomaly detection model identifying fraudulent UPI transaction patterns in real time.',
        url: 'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'UPI fraud detection, anomaly detection, XGBoost, fintech, transaction fraud',
      },
    },
    {
      '@type': 'ListItem', position: 19,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${BASE_URL}/projects#sign-language`,
        name: 'Unified Sign Language Recognition',
        applicationCategory: 'AIApplication',
        operatingSystem: 'Web',
        description: 'Real-time hand gesture recognition model translating sign language to text using MediaPipe and TensorFlow.',
        url: 'https://github.com/Nachiket858/Unified_Sign_Language',
        author: { '@id': `${BASE_URL}/#person` },
        keywords: 'sign language recognition, MediaPipe, TensorFlow, gesture recognition, accessibility',
      },
    },
  ],
};

// JSON-LD: BreadcrumbList — always eligible for rich results
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
