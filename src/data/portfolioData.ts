export type Project = {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  youtube?: string[];
  github: string[];
};

export type ShowcaseProject = {
  title: string;
  summary: string;
  stack: string;
  github?: string;
  live?: string;
};

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'AI Face Recognition Attendance System',
    summary: 'Computer-vision attendance automation using face recognition workflows for secure, fast check-ins.',
    tags: ['Computer Vision', 'Python', 'Face Recognition'],
    youtube: ['https://www.youtube.com/watch?v=estMi2NEydg'],
    github: ['https://github.com/Nachiket858/FaceAttend'],
  },
  {
    id: 2,
    title: 'SMS Spam Detection Android App',
    summary: 'ML-driven spam detection app to classify suspicious text messages and improve mobile safety.',
    tags: ['Android', 'NLP', 'Classification'],
    youtube: ['https://www.youtube.com/watch?v=N-3vOLpyCAg'],
    github: ['https://github.com/Nachiket858/Fake_News_detection'],
  },
  {
    id: 3,
    title: 'YouTube Video Summarizer (Ollama)',
    summary: 'Summarizes long-form videos into concise insights with local LLM-powered pipelines.',
    tags: ['LLM', 'Ollama', 'Summarization'],
    youtube: ['https://www.youtube.com/watch?v=hyBVG2llo68'],
    github: ['https://github.com/Nachiket858/Podcast_Summarizer_edited_updated'],
  },
  {
    id: 4,
    title: 'AI Plant / Fruit Disease Detection',
    summary: 'Plant-health intelligence using image-based disease analysis for faster agricultural decisions.',
    tags: ['Agri AI', 'Image Classification', 'Deep Learning'],
    youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo', 'https://www.youtube.com/watch?v=tB2kynu3tK4'],
    github: [
      'https://github.com/Nachiket858/Plant_disease_detection',
      'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI',
    ],
  },
  {
    id: 5,
    title: 'AI Interview Practice System',
    summary: 'Interview simulator that helps learners practice with AI-generated prompts and feedback loops.',
    tags: ['Generative AI', 'Career Tech', 'Web App'],
    youtube: ['https://www.youtube.com/watch?v=EA9hW5uNI84'],
    github: ['https://github.com/Nachiket858/AI-Interview-Platform'],
  },
  {
    id: 6,
    title: 'AI College Enquiry Chatbot (RAG)',
    summary: 'RAG-based chatbot for accurate, contextual college query answering with retrieval pipelines.',
    tags: ['RAG', 'LangGraph', 'Chatbot'],
    youtube: ['https://www.youtube.com/watch?v=9ohnjpR81SI'],
    github: ['https://github.com/Nachiket858/LangGraph-Chatbot', 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'],
  },
  {
    id: 7,
    title: 'Farmer Advisory Chatbot',
    summary: 'Conversational AI assistant for agriculture guidance and practical crop-focused support.',
    tags: ['AgriTech', 'Conversational AI', 'LangGraph'],
    youtube: ['https://www.youtube.com/watch?v=bUScU_CuyoI'],
    github: ['https://github.com/Nachiket858/LangGraph-Chatbot'],
  },
  {
    id: 8,
    title: 'Generative AI Health Chatbot',
    summary: 'Health-focused assistant with natural language interaction for personalized information support.',
    tags: ['Health AI', 'LLM', 'Assistant'],
    youtube: ['https://www.youtube.com/watch?v=CI4U3yGC2F0'],
    github: ['https://github.com/Nachiket858/Health_assistance'],
  },
  {
    id: 9,
    title: 'AI Loan Eligibility Predictor',
    summary: 'Predictive model that evaluates loan eligibility using structured applicant features.',
    tags: ['FinTech', 'Machine Learning', 'Prediction'],
    youtube: ['https://www.youtube.com/watch?v=oVMA3CizkCI'],
    github: ['https://github.com/Nachiket858/Loan_eligibility_prediction'],
  },
  {
    id: 10,
    title: 'Online Voting System Using Face Recognition',
    summary: 'Secure digital voting prototype with face recognition verification and anti-fraud design.',
    tags: ['CivicTech', 'Face Recognition', 'Security'],
    youtube: ['https://www.youtube.com/watch?v=8mpMi6NXxqg'],
    github: ['https://github.com/Nachiket858/face_voting_system'],
  },
  {
    id: 11,
    title: 'Sentify: Emotion Detection',
    summary: 'Emotion recognition solution for sentiment-aware user experiences and interaction analytics.',
    tags: ['Emotion AI', 'Computer Vision', 'Sentiment'],
    youtube: ['https://www.youtube.com/watch?v=Sn-VdSLhd5A'],
    github: ['https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations'],
  },
  {
    id: 12,
    title: 'Price Comparison Tool',
    summary: 'Comparison engine that aggregates price signals for smarter purchase decisions.',
    tags: ['E-commerce', 'Data Extraction', 'Automation'],
    youtube: ['https://www.youtube.com/watch?v=R6cirNSMMZM'],
    github: ['https://github.com/Nachiket858/PriceCompare'],
  },
  {
    id: 13,
    title: 'Agnostic Chatbot (SIH 2025)',
    summary: 'Hackathon-grade chatbot architecture focused on robust, domain-flexible conversations.',
    tags: ['Hackathon', 'AI Chatbot', 'RAG'],
    youtube: ['https://www.youtube.com/watch?v=XGcafUORXBU'],
    github: ['https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'],
  },
  {
    id: 14,
    title: 'Dream House Architem',
    summary: 'AI-assisted design concept for planning dream house layouts and architectural exploration.',
    tags: ['AI Design', 'Architecture', 'Generative AI'],
    youtube: ['https://www.youtube.com/watch?v=HfzmrqFKe0Y'],
    github: ['https://github.com/Nachiket858/Dream-house-architem'],
  },
  {
    id: 15,
    title: 'Pomegranate Fruit Disease Detection',
    summary: 'Specialized fruit-disease detection model for pomegranate crop quality monitoring.',
    tags: ['Agriculture', 'Disease Detection', 'Computer Vision'],
    youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo'],
    github: ['https://github.com/Nachiket858/pomegranate-fruit-disease-detection'],
  },
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    title: 'Sentify',
    summary: 'Real-time emotion detection with activity suggestions using DeepFace + Gemini.',
    stack: 'Flask, DeepFace, Gemini API, JavaScript',
    github: 'https://github.com/Nachiket858/Project-Sentify---Emotion-Detection-and-Activity-Suggestion',
  },
  {
    title: 'PyCodeML',
    summary: 'Python package to automate training, tuning, and evaluation for classical ML models.',
    stack: 'Python, Scikit-learn, Pandas, NumPy',
    github: 'https://github.com/Nachiket858/PyCodeML',
    live: 'https://pypi.org/project/pycodeml/',
  },
  {
    title: 'Dream House Architecture',
    summary: 'AI-powered 3D floor planning platform with authentication and design generation.',
    stack: 'Flask, MongoDB, OpenAI API',
    github: 'https://github.com/Nachiket858/Dream-house-architecture-',
  },
];

export const additionalProjects: string[] = [
  'https://github.com/Nachiket858/Traffic_risk_prediction',
  'https://github.com/Nachiket858/Unified_Sign_Language',
  'https://github.com/Nachiket858/skin-desease-detection',
  'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
  'https://github.com/Nachiket858/Smart-Traffic-Management-System',
];

export type RepoCategory = 'Computer Vision' | 'NLP & Text AI' | 'LLM & Chatbots' | 'ML Prediction' | 'Web & Product';

export type GitHubRepo = {
  name: string;
  displayName: string;
  description: string;
  url: string;
  tags: string[];
  category: RepoCategory;
};

export const githubRepos: GitHubRepo[] = [
  {
    name: 'Dream-house-architem',
    displayName: 'Dream House Architem',
    description: 'AI-powered platform for generating architectural designs and 3D floor plans of dream homes using OpenAI.',
    url: 'https://github.com/Nachiket858/Dream-house-architem',
    tags: ['Generative AI', 'Flask', 'OpenAI'],
    category: 'Web & Product',
  },
  {
    name: 'exam-proctoring-system',
    displayName: 'Exam Proctoring System',
    description: 'Automated online exam monitoring that uses computer vision to detect suspicious behavior in real time.',
    url: 'https://github.com/Nachiket858/exam-proctoring-system',
    tags: ['Computer Vision', 'OpenCV', 'Python'],
    category: 'Computer Vision',
  },
  {
    name: 'FaceAttend',
    displayName: 'FaceAttend',
    description: 'Face recognition-based attendance automation for secure, contactless, and effortless check-ins.',
    url: 'https://github.com/Nachiket858/FaceAttend',
    tags: ['Face Recognition', 'OpenCV', 'Flask'],
    category: 'Computer Vision',
  },
  {
    name: 'face_voting_system',
    displayName: 'Face Voting System',
    description: 'Secure digital voting platform with face recognition for fraud-proof voter authentication and MongoDB storage.',
    url: 'https://github.com/Nachiket858/face_voting_system',
    tags: ['Face Recognition', 'Flask', 'MongoDB'],
    category: 'Computer Vision',
  },
  {
    name: 'Fake_News_detection',
    displayName: 'Fake News Detection',
    description: 'NLP-based classification system to detect fake news and spam SMS messages with high accuracy.',
    url: 'https://github.com/Nachiket858/Fake_News_detection',
    tags: ['NLP', 'Machine Learning', 'Classification'],
    category: 'NLP & Text AI',
  },
  {
    name: 'Health_assistance',
    displayName: 'Health Assistance',
    description: 'AI-powered health chatbot providing personalized medical information, guidance, and lifestyle support.',
    url: 'https://github.com/Nachiket858/Health_assistance',
    tags: ['LLM', 'Gemini', 'Health AI'],
    category: 'LLM & Chatbots',
  },
  {
    name: 'LangGraph-Chatbot',
    displayName: 'LangGraph Chatbot',
    description: 'Multi-agent RAG chatbot built with LangGraph for contextual, retrieval-augmented conversations at scale.',
    url: 'https://github.com/Nachiket858/LangGraph-Chatbot',
    tags: ['LangGraph', 'RAG', 'LangChain'],
    category: 'LLM & Chatbots',
  },
  {
    name: 'Loan_eligibility_prediction',
    displayName: 'Loan Eligibility Prediction',
    description: 'ML model predicting loan eligibility based on applicant financial profiles, credit history, and employment.',
    url: 'https://github.com/Nachiket858/Loan_eligibility_prediction',
    tags: ['Machine Learning', 'Scikit-learn', 'FinTech'],
    category: 'ML Prediction',
  },
  {
    name: 'Plant_disease_detection',
    displayName: 'Plant Disease Detection',
    description: 'Deep learning model for automated plant and crop disease diagnosis from leaf images using CNN.',
    url: 'https://github.com/Nachiket858/Plant_disease_detection',
    tags: ['Deep Learning', 'CNN', 'AgriTech'],
    category: 'Computer Vision',
  },
  {
    name: 'Podcast_Summarizer_edited_updated',
    displayName: 'Podcast Summarizer',
    description: 'NLP pipeline that transcribes and summarizes podcasts into concise key takeaways using LLMs.',
    url: 'https://github.com/Nachiket858/Podcast_Summarizer_edited_updated',
    tags: ['NLP', 'Summarization', 'LLM'],
    category: 'NLP & Text AI',
  },
  {
    name: 'PriceCompare',
    displayName: 'PriceCompare',
    description: 'Intelligent price comparison engine that aggregates product pricing signals across multiple sources.',
    url: 'https://github.com/Nachiket858/PriceCompare',
    tags: ['Web Scraping', 'Flask', 'Automation'],
    category: 'Web & Product',
  },
  {
    name: 'Sentimet_analysis_of_review_with_price_negotiations',
    displayName: 'Sentify: Review Sentiment & Price Negotiation',
    description: 'Sentiment analysis system that evaluates product reviews and intelligently assists in price negotiations.',
    url: 'https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations',
    tags: ['NLP', 'Sentiment Analysis', 'ML'],
    category: 'NLP & Text AI',
  },
  {
    name: 'SIH-2025-Agnostoic-Chatbot',
    displayName: 'SIH 2025 Agnostic Chatbot',
    description: 'Hackathon-grade domain-agnostic RAG chatbot architecture built for Smart India Hackathon 2025.',
    url: 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
    tags: ['RAG', 'LangGraph', 'Gemini'],
    category: 'LLM & Chatbots',
  },
  {
    name: 'Traffic_risk_prediction',
    displayName: 'Traffic Risk Prediction',
    description: 'ML system for predicting traffic risk levels using road conditions and environmental parameters.',
    url: 'https://github.com/Nachiket858/Traffic_risk_prediction',
    tags: ['Machine Learning', 'Prediction', 'Safety'],
    category: 'ML Prediction',
  },
  {
    name: 'Unified_Sign_Language',
    displayName: 'Unified Sign Language',
    description: 'Computer vision system for real-time sign language gesture recognition and translation for accessibility.',
    url: 'https://github.com/Nachiket858/Unified_Sign_Language',
    tags: ['Computer Vision', 'Sign Language', 'CNN'],
    category: 'Computer Vision',
  },
  {
    name: 'VrukshaDarshan-A-Plant-Identification-Tool-Using-AI',
    displayName: 'VrukshaDarshan',
    description: 'AI-powered plant identification tool using image classification to identify plant species from photos.',
    url: 'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI',
    tags: ['AI', 'Plant ID', 'Computer Vision'],
    category: 'Computer Vision',
  },
];

export const skillGroups = [
  { title: 'AI & ML', points: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment'] },
  { title: 'GenAI Stack', points: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'Gemini / LLM APIs'] },
  { title: 'Backend & Data', points: ['Python', 'Flask', 'REST APIs', 'MongoDB', 'SQL'] },
  { title: 'Frontend & Product', points: ['React', 'TypeScript', 'Tailwind CSS', 'UX-first UI', 'SEO basics'] },
];