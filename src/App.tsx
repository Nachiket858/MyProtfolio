import {
  Brain,
  Briefcase,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Star,
  Youtube,
} from 'lucide-react';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { usePathname } from './components/simpleRouter';

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  youtube?: string[];
  github: string[];
};

type ShowcaseProject = {
  title: string;
  summary: string;
  stack: string;
  github?: string;
  live?: string;
};

type SkillGroup = {
  title: string;
  points: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'AI Face Recognition Attendance System',
    summary:
      'Computer-vision attendance automation using face recognition workflows for secure, fast check-ins.',
    tags: ['Computer Vision', 'Python', 'Face Recognition'],
    youtube: ['https://www.youtube.com/watch?v=estMi2NEydg'],
    github: ['https://github.com/Nachiket858/FaceAttend'],
  },
  {
    id: 2,
    title: 'SMS Spam Detection Android App',
    summary:
      'ML-driven spam detection app to classify suspicious text messages and improve mobile safety.',
    tags: ['Android', 'NLP', 'Classification'],
    youtube: ['https://www.youtube.com/watch?v=N-3vOLpyCAg'],
    github: ['https://github.com/Nachiket858/Fake_News_detection'],
  },
  {
    id: 3,
    title: 'YouTube Video Summarizer (Ollama)',
    summary:
      'Summarizes long-form videos into concise insights with local LLM-powered pipelines.',
    tags: ['LLM', 'Ollama', 'Summarization'],
    youtube: ['https://www.youtube.com/watch?v=hyBVG2llo68'],
    github: ['https://github.com/Nachiket858/Podcast_Summarizer_edited_updated'],
  },
  {
    id: 4,
    title: 'AI Plant / Fruit Disease Detection',
    summary:
      'Plant-health intelligence using image-based disease analysis for faster agricultural decisions.',
    tags: ['Agri AI', 'Image Classification', 'Deep Learning'],
    youtube: [
      'https://www.youtube.com/watch?v=p_WkziavNqo',
      'https://www.youtube.com/watch?v=tB2kynu3tK4',
    ],
    github: [
      'https://github.com/Nachiket858/Plant_disease_detection',
      'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI',
    ],
  },
  {
    id: 5,
    title: 'AI Interview Practice System',
    summary:
      'Interview simulator that helps learners practice with AI-generated prompts and feedback loops.',
    tags: ['Generative AI', 'Career Tech', 'Web App'],
    youtube: ['https://www.youtube.com/watch?v=EA9hW5uNI84'],
    github: ['https://github.com/Nachiket858/AI-Interview-Platform'],
  },
  {
    id: 6,
    title: 'AI College Enquiry Chatbot (RAG)',
    summary:
      'RAG-based chatbot for accurate, contextual college query answering with retrieval pipelines.',
    tags: ['RAG', 'LangGraph', 'Chatbot'],
    youtube: ['https://www.youtube.com/watch?v=9ohnjpR81SI'],
    github: [
      'https://github.com/Nachiket858/LangGraph-Chatbot',
      'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
    ],
  },
  {
    id: 7,
    title: 'Farmer Advisory Chatbot',
    summary:
      'Conversational AI assistant for agriculture guidance and practical crop-focused support.',
    tags: ['AgriTech', 'Conversational AI', 'LangGraph'],
    youtube: ['https://www.youtube.com/watch?v=bUScU_CuyoI'],
    github: ['https://github.com/Nachiket858/LangGraph-Chatbot'],
  },
  {
    id: 8,
    title: 'Generative AI Health Chatbot',
    summary:
      'Health-focused assistant with natural language interaction for personalized information support.',
    tags: ['Health AI', 'LLM', 'Assistant'],
    youtube: ['https://www.youtube.com/watch?v=CI4U3yGC2F0'],
    github: ['https://github.com/Nachiket858/Health_assistance'],
  },
  {
    id: 9,
    title: 'AI Loan Eligibility Predictor',
    summary:
      'Predictive model that evaluates loan eligibility using structured applicant features.',
    tags: ['FinTech', 'Machine Learning', 'Prediction'],
    youtube: ['https://www.youtube.com/watch?v=oVMA3CizkCI'],
    github: ['https://github.com/Nachiket858/Loan_eligibility_prediction'],
  },
  {
    id: 10,
    title: 'Online Voting System Using Face Recognition',
    summary:
      'Secure digital voting prototype with face recognition verification and anti-fraud design.',
    tags: ['CivicTech', 'Face Recognition', 'Security'],
    youtube: ['https://www.youtube.com/watch?v=8mpMi6NXxqg'],
    github: ['https://github.com/Nachiket858/face_voting_system'],
  },
  {
    id: 11,
    title: 'Sentify: Emotion Detection',
    summary:
      'Emotion recognition solution for sentiment-aware user experiences and interaction analytics.',
    tags: ['Emotion AI', 'Computer Vision', 'Sentiment'],
    youtube: ['https://www.youtube.com/watch?v=Sn-VdSLhd5A'],
    github: [
      'https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations',
    ],
  },
  {
    id: 12,
    title: 'Price Comparison Tool',
    summary:
      'Comparison engine that aggregates price signals for smarter purchase decisions.',
    tags: ['E-commerce', 'Data Extraction', 'Automation'],
    youtube: ['https://www.youtube.com/watch?v=R6cirNSMMZM'],
    github: ['https://github.com/Nachiket858/PriceCompare'],
  },
  {
    id: 13,
    title: 'Agnostic Chatbot (SIH 2025)',
    summary:
      'Hackathon-grade chatbot architecture focused on robust, domain-flexible conversations.',
    tags: ['Hackathon', 'AI Chatbot', 'RAG'],
    youtube: ['https://www.youtube.com/watch?v=XGcafUORXBU'],
    github: ['https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'],
  },
  {
    id: 14,
    title: 'Dream House Architem',
    summary:
      'AI-assisted design concept for planning dream house layouts and architectural exploration.',
    tags: ['AI Design', 'Architecture', 'Generative AI'],
    youtube: ['https://www.youtube.com/watch?v=HfzmrqFKe0Y'],
    github: ['https://github.com/Nachiket858/Dream-house-architem'],
  },
  {
    id: 15,
    title: 'Pomegranate Fruit Disease Detection',
    summary:
      'Specialized fruit-disease detection model for pomegranate crop quality monitoring.',
    tags: ['Agriculture', 'Disease Detection', 'Computer Vision'],
    youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo'],
    github: ['https://github.com/Nachiket858/pomegranate-fruit-disease-detection'],
  },
];

const showcaseProjects: ShowcaseProject[] = [
  {
    title: 'AI Face Recognition Attendance',
    summary: 'End-to-end attendance pipeline with face detection and real-time logging.',
    stack: 'Python · OpenCV · Flask · SQLite',
    github: 'https://github.com/Nachiket858/FaceAttend',
  },
  {
    title: 'AI Interview Platform',
    summary: 'Practice platform with AI-generated interview questions and live feedback.',
    stack: 'React · FastAPI · OpenAI API',
    github: 'https://github.com/Nachiket858/AI-Interview-Platform',
  },
  {
    title: 'LangGraph Chatbot',
    summary: 'Multi-turn conversational agent with RAG and stateful graph-based routing.',
    stack: 'LangChain · LangGraph · Ollama · Streamlit',
    github: 'https://github.com/Nachiket858/LangGraph-Chatbot',
  },
];

const additionalProjects: string[] = [
  'https://github.com/Nachiket858/Traffic_risk_prediction',
  'https://github.com/Nachiket858/Unified_Sign_Language',
  'https://github.com/Nachiket858/skin-desease-detection',
  'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
  'https://github.com/Nachiket858/Smart-Traffic-Management-System',
];

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    points: [
      'Python (NumPy, Pandas, Scikit-learn)',
      'PyTorch & TensorFlow / Keras',
      'Computer Vision (OpenCV, YOLO)',
      'NLP & Text Classification',
      'LLMs (Ollama, OpenAI, Gemini)',
      'RAG & LangGraph Pipelines',
    ],
  },
  {
    title: 'Web & App Development',
    points: [
      'React · TypeScript · Tailwind CSS',
      'Flask & FastAPI (Python backends)',
      'Android App Development',
      'REST API Design & Integration',
      'Streamlit for rapid prototyping',
      'SQLite / PostgreSQL',
    ],
  },
  {
    title: 'Tools & Platforms',
    points: [
      'Git & GitHub',
      'Jupyter Notebooks',
      'Hugging Face Hub',
      'Google Colab',
      'VS Code · PyCharm',
      'Docker (basics)',
    ],
  },
  {
    title: 'Domains & Problem Areas',
    points: [
      'AgriTech & Plant Disease Detection',
      'HealthTech & Medical AI',
      'FinTech & Risk Prediction',
      'CivicTech & Secure Voting',
      'EdTech & Interview Coaching',
      'E-commerce Automation',
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

function App() {
  const pathname = usePathname();

  const Page = (() => {
    if (pathname === '/about') return AboutPage;
    if (pathname === '/projects') return ProjectsPage;
    if (pathname === '/contact') return ContactPage;
    return HomePage;
  })();

  return (
    <SiteLayout>
      <Page />
    </SiteLayout>
  );
}

export default App;