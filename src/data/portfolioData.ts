export type Project = {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  youtube?: string[];
  github: string[];
};

export const featuredProjects: Project[] = [
  { id: 1, title: 'AI Face Recognition Attendance System', summary: 'Automated attendance system using facial recognition for secure and rapid check-ins.', tags: ['Computer Vision', 'Python', 'OpenCV'], youtube: ['https://www.youtube.com/watch?v=estMi2NEydg'], github: ['https://github.com/Nachiket858/FaceAttend'] },
  { id: 2, title: 'SMS Spam Detection Android App', summary: 'Mobile ML classification app that detects spam messages and improves communication safety.', tags: ['Android', 'NLP', 'Classification'], youtube: ['https://www.youtube.com/watch?v=N-3vOLpyCAg'], github: ['https://github.com/Nachiket858/Fake_News_detection'] },
  { id: 3, title: 'YouTube Video Summarizer (Ollama)', summary: 'Summarization pipeline for extracting key points from long videos with local LLM tooling.', tags: ['Ollama', 'Summarization', 'GenAI'], youtube: ['https://www.youtube.com/watch?v=hyBVG2llo68'], github: ['https://github.com/Nachiket858/Podcast_Summarizer_edited_updated'] },
  { id: 4, title: 'AI Plant / Fruit Disease Detection', summary: 'Image-based disease identification for plants and fruits, improving diagnostic speed.', tags: ['Agriculture AI', 'Vision', 'Deep Learning'], youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo', 'https://www.youtube.com/watch?v=tB2kynu3tK4'], github: ['https://github.com/Nachiket858/Plant_disease_detection', 'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI'] },
  { id: 5, title: 'AI Interview Practice System', summary: 'Interactive interview preparation system with AI-driven prompts and feedback.', tags: ['GenAI', 'Interview', 'Web App'], youtube: ['https://www.youtube.com/watch?v=EA9hW5uNI84'], github: ['https://github.com/Nachiket858/AI-Interview-Platform'] },
  { id: 6, title: 'AI College Enquiry Chatbot (RAG)', summary: 'RAG chatbot delivering precise, context-aware answers for college information workflows.', tags: ['RAG', 'LangGraph', 'Chatbot'], youtube: ['https://www.youtube.com/watch?v=9ohnjpR81SI'], github: ['https://github.com/Nachiket858/LangGraph-Chatbot', 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'] },
  { id: 7, title: 'Farmer Advisory Chatbot', summary: 'Conversational agricultural assistant for practical farmer guidance and recommendations.', tags: ['AgriTech', 'Chatbot', 'LangGraph'], youtube: ['https://www.youtube.com/watch?v=bUScU_CuyoI'], github: ['https://github.com/Nachiket858/LangGraph-Chatbot'] },
  { id: 8, title: 'Generative AI Health Chatbot', summary: 'Health-assistance chatbot designed for conversational guidance and information support.', tags: ['Healthcare AI', 'LLM', 'Assistant'], youtube: ['https://www.youtube.com/watch?v=CI4U3yGC2F0'], github: ['https://github.com/Nachiket858/Health_assistance'] },
  { id: 9, title: 'AI Loan Eligibility Predictor', summary: 'Predictive ML model to estimate loan eligibility based on applicant attributes.', tags: ['FinTech', 'ML', 'Prediction'], youtube: ['https://www.youtube.com/watch?v=oVMA3CizkCI'], github: ['https://github.com/Nachiket858/Loan_eligibility_prediction'] },
  { id: 10, title: 'Online Voting System Using Face Recognition', summary: 'Voting platform prototype using facial identity verification for secure elections.', tags: ['CivicTech', 'Vision', 'Security'], youtube: ['https://www.youtube.com/watch?v=8mpMi6NXxqg'], github: ['https://github.com/Nachiket858/face_voting_system'] },
  { id: 11, title: 'Sentify: Emotion Detection', summary: 'Emotion recognition system for sentiment-aware experience design and interactions.', tags: ['Emotion AI', 'CV', 'Sentiment'], youtube: ['https://www.youtube.com/watch?v=Sn-VdSLhd5A'], github: ['https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations'] },
  { id: 12, title: 'Price Comparison Tool', summary: 'Product price comparison engine for quick and informed buying decisions.', tags: ['E-commerce', 'Automation', 'Data'], youtube: ['https://www.youtube.com/watch?v=R6cirNSMMZM'], github: ['https://github.com/Nachiket858/PriceCompare'] },
  { id: 13, title: 'Agnostic Chatbot (SIH 2025)', summary: 'Flexible chatbot architecture built for SIH use cases and domain-agnostic support.', tags: ['Hackathon', 'AI Chatbot', 'RAG'], youtube: ['https://www.youtube.com/watch?v=XGcafUORXBU'], github: ['https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'] },
  { id: 14, title: 'Dream House Architem', summary: 'AI-supported house planning concept for architecture and layout ideation.', tags: ['Architecture AI', 'Design', 'Generative'], youtube: ['https://www.youtube.com/watch?v=HfzmrqFKe0Y'], github: ['https://github.com/Nachiket858/Dream-house-architem'] },
  { id: 15, title: 'Pomegranate Fruit Disease Detection', summary: 'Targeted pomegranate disease detection to support crop health monitoring.', tags: ['Agriculture', 'Disease Detection', 'Vision'], youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo'], github: ['https://github.com/Nachiket858/pomegranate-fruit-disease-detection'] },
];

export const additionalProjects: string[] = [
  'https://github.com/Nachiket858/Traffic_risk_prediction',
  'https://github.com/Nachiket858/Unified_Sign_Language',
  'https://github.com/Nachiket858/skin-desease-detection',
  'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
  'https://github.com/Nachiket858/Smart-Traffic-Management-System',
];
