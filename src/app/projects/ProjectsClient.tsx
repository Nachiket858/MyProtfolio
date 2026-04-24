'use client';

import { useState } from 'react';

type Category = 'All' | 'AI/ML' | 'Computer Vision' | 'NLP' | 'GenAI' | 'Web/Android';

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  github?: string;
  youtube?: string;
  demo?: string;
};

const FILTERS: Category[] = ['All', 'AI/ML', 'Computer Vision', 'NLP', 'GenAI', 'Web/Android'];

const PROJECTS: Project[] = [
  {
    title: 'PyCodeML — ML Automation Toolkit',
    category: 'AI/ML',
    problem: 'ML experimentation required repeated training/evaluation boilerplate.',
    solution: 'Packaged reusable automation for model training, tuning, and evaluation. Published on PyPI.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'PyPI'],
    impact: 'Accelerated ML experimentation cycles and improved repeatability.',
    github: 'https://github.com/Nachiket858/PyCodeml',
    demo: 'https://pypi.org/project/pycodeml/',
  },
  {
    title: 'AI Face Recognition Attendance System',
    category: 'Computer Vision',
    problem: 'Manual attendance was slow, error-prone, and easily manipulated.',
    solution: 'Real-time face-recognition pipeline for secure, contactless attendance check-ins.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'Flask', 'SQLite'],
    impact: 'Eliminated manual entry errors; fully contactless attendance logging.',
    github: 'https://github.com/Nachiket858/FaceAttend',
    youtube: 'https://www.youtube.com/watch?v=estMi2NEydg',
  },
  {
    title: 'SMS Spam Detection Android App',
    category: 'NLP',
    problem: 'Users struggled to identify spam or fake messages on mobile.',
    solution: 'On-device NLP model integrated into an Android app to classify incoming messages.',
    tech: ['Python', 'NLP', 'TF-IDF', 'Android', 'TensorFlow Lite'],
    impact: 'Real-time spam detection with high accuracy on mobile devices.',
    github: 'https://github.com/Nachiket858/Fake_News_detection',
    youtube: 'https://www.youtube.com/watch?v=N-3vOLpyCAg',
  },
  {
    title: 'YouTube Video Summarizer (Ollama)',
    category: 'GenAI',
    problem: 'Long YouTube videos and podcasts are time-consuming to watch fully.',
    solution: 'Local LLM (Ollama) pipeline that ingests transcripts and produces concise summaries.',
    tech: ['Python', 'Ollama', 'LangChain', 'YouTube API', 'Streamlit'],
    impact: 'Saves hours of viewing time; instant key-point extraction from any video.',
    github: 'https://github.com/Nachiket858/Podcast_Summarizer_edited_updated',
    youtube: 'https://www.youtube.com/watch?v=hyBVG2llo68',
  },
  {
    title: 'AI Plant & Fruit Disease Detection',
    category: 'Computer Vision',
    problem: 'Farmers lack fast, accurate tools to identify crop diseases in the field.',
    solution: 'CNN-based image classifier deployed as a web app to detect plant/fruit diseases from photos.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
    impact: 'Enables rapid disease identification, reducing crop loss for smallholder farmers.',
    github: 'https://github.com/Nachiket858/Plant_disease_detection',
    youtube: 'https://www.youtube.com/watch?v=p_WkziavNqo',
  },
  {
    title: 'VrukshaDarshan — Plant Identification Tool',
    category: 'Computer Vision',
    problem: 'Identifying unknown plants is difficult without botanical expertise.',
    solution: 'AI-powered plant identification tool using transfer learning on a large image dataset.',
    tech: ['Python', 'TensorFlow', 'MobileNet', 'Flask', 'HTML/CSS'],
    impact: 'Accurate plant identification accessible to anyone with a smartphone camera.',
    github: 'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI',
    youtube: 'https://www.youtube.com/watch?v=tB2kynu3tK4',
  },
  {
    title: 'AI Interview Practice System',
    category: 'GenAI',
    problem: 'Candidates lacked personalized interview practice mapped to their resume.',
    solution: 'LLM-powered platform generating role-specific questions and instant feedback from resumes.',
    tech: ['Python', 'Flask', 'LLMs', 'Prompt Engineering', 'Resume Parsing'],
    impact: 'Enabled personalized preparation with structured, actionable feedback loops.',
    github: 'https://github.com/Nachiket858/AI-Interview-Platform',
    youtube: 'https://www.youtube.com/watch?v=EA9hW5uNI84',
  },
  {
    title: 'AI College Enquiry Chatbot (RAG)',
    category: 'GenAI',
    problem: 'Students had no instant, reliable source for college admission queries.',
    solution: 'RAG-based chatbot using LangGraph over college documents for accurate, contextual answers.',
    tech: ['Python', 'LangGraph', 'RAG', 'Qdrant', 'Streamlit'],
    impact: 'Drastically reduced repetitive enquiry load; 24/7 accurate student assistance.',
    github: 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
    youtube: 'https://www.youtube.com/watch?v=9ohnjpR81SI',
  },
  {
    title: 'Farmer Advisory Chatbot',
    category: 'GenAI',
    problem: 'Farmers lack access to timely, personalised agricultural advice.',
    solution: 'LangGraph RAG chatbot delivering crop, weather, and scheme advisory in natural language.',
    tech: ['Python', 'LangGraph', 'RAG', 'LLMs', 'Flask'],
    impact: 'Democratised expert farming advice for rural users via conversational AI.',
    github: 'https://github.com/Nachiket858/LangGraph-Chatbot',
    youtube: 'https://www.youtube.com/watch?v=bUScU_CuyoI',
  },
  {
    title: 'Generative AI Health Chatbot',
    category: 'GenAI',
    problem: 'Users needed an always-available health assistant for symptom guidance.',
    solution: 'GenAI-powered chatbot providing preliminary health advice and referrals.',
    tech: ['Python', 'Gemini API', 'LangChain', 'Streamlit'],
    impact: 'Instant, responsible health guidance reducing unnecessary clinic visits.',
    github: 'https://github.com/Nachiket858/Health_assistance',
    youtube: 'https://www.youtube.com/watch?v=CI4U3yGC2F0',
  },
  {
    title: 'AI Loan Eligibility Predictor',
    category: 'AI/ML',
    problem: 'Manual loan eligibility assessment is slow and inconsistent.',
    solution: 'ML classification model predicting loan eligibility from applicant financial data.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Feature Engineering'],
    impact: 'Fast, data-driven eligibility decisions with high precision.',
    github: 'https://github.com/Nachiket858/Loan_eligibility_prediction',
    youtube: 'https://www.youtube.com/watch?v=oVMA3CizkCI',
  },
  {
    title: 'Online Voting System Using Face Recognition',
    category: 'Computer Vision',
    problem: 'Traditional voting is vulnerable to fraud and impersonation.',
    solution: 'Secure online voting platform with face-recognition-based voter verification.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'Flask', 'SQLite'],
    impact: 'Fraud-resistant digital voting with biometric identity verification.',
    github: 'https://github.com/Nachiket858/face_voting_system',
    youtube: 'https://www.youtube.com/watch?v=8mpMi6NXxqg',
  },
  {
    title: 'Sentify — Emotion & Sentiment Detection',
    category: 'NLP',
    problem: 'E-commerce reviews lack actionable sentiment insights for sellers.',
    solution: 'NLP pipeline detecting emotion from reviews and enabling intelligent price negotiation.',
    tech: ['Python', 'NLP', 'BERT', 'Flask', 'Sentiment Analysis'],
    impact: 'Turned unstructured reviews into emotion-aware pricing strategy signals.',
    github: 'https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations',
    youtube: 'https://www.youtube.com/watch?v=Sn-VdSLhd5A',
  },
  {
    title: 'Price Comparison Tool',
    category: 'Web/Android',
    problem: 'Cross-source price checks were too slow for real-time purchasing decisions.',
    solution: 'Automated collection and normalisation of pricing signals from multiple sources.',
    tech: ['Python', 'Flask', 'Web Scraping', 'BeautifulSoup', 'Data Extraction'],
    impact: 'Improved decision speed and reduced repetitive manual comparison work.',
    github: 'https://github.com/Nachiket858/PriceCompare',
    youtube: 'https://www.youtube.com/watch?v=R6cirNSMMZM',
  },
  {
    title: 'Agnostic Chatbot (SIH 2025)',
    category: 'GenAI',
    problem: 'Government institutions needed a domain-agnostic AI assistant for diverse queries.',
    solution: 'Multi-domain RAG chatbot built for Smart India Hackathon 2025 with dynamic routing.',
    tech: ['Python', 'LangGraph', 'RAG', 'Qdrant', 'LLMs'],
    impact: 'Versatile AI assistant capable of handling queries across multiple government domains.',
    github: 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
    youtube: 'https://www.youtube.com/watch?v=XGcafUORXBU',
  },
  {
    title: 'Dream House Architem',
    category: 'GenAI',
    problem: 'Users struggled to visualise custom home designs without expensive architects.',
    solution: 'Generative AI tool creating personalised architectural layouts from user preferences.',
    tech: ['Python', 'Generative AI', 'Stable Diffusion', 'Streamlit'],
    impact: 'Instant visual home design generation from natural-language descriptions.',
    github: 'https://github.com/Nachiket858/Dream-house-architem',
    youtube: 'https://www.youtube.com/watch?v=HfzmrqFKe0Y',
  },
  {
    title: 'Pomegranate Fruit Disease Detection',
    category: 'Computer Vision',
    problem: 'Pomegranate farmers struggle to identify fruit diseases before harvest loss.',
    solution: 'Deep learning model detecting pomegranate diseases from fruit images with high accuracy.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Flask'],
    impact: 'Early disease detection enabling timely intervention and reduced crop wastage.',
    github: 'https://github.com/Nachiket858/pomegranate-fruit-disease-detection',
    youtube: 'https://www.youtube.com/watch?v=p_WkziavNqo',
  },
  {
    title: 'Traffic Risk Prediction System',
    category: 'AI/ML',
    problem: 'Road authorities lack predictive tools to proactively reduce accident risk.',
    solution: 'ML model predicting traffic accident risk from road condition and traffic data.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Data Visualisation'],
    impact: 'Data-driven risk scores enabling proactive road safety measures.',
    github: 'https://github.com/Nachiket858/Traffic_risk_prediction',
  },
  {
    title: 'Smart Traffic Management System',
    category: 'Computer Vision',
    problem: 'Static traffic signals cause unnecessary congestion and delays.',
    solution: 'Computer vision-based adaptive traffic signal controller using real-time vehicle counts.',
    tech: ['Python', 'OpenCV', 'YOLO', 'Flask', 'Computer Vision'],
    impact: 'Dynamic signal timing reduces congestion and improves urban traffic flow.',
    github: 'https://github.com/Nachiket858/Smart-Traffic-Management-Syste',
  },
  {
    title: 'Unified Sign Language Recognition',
    category: 'Computer Vision',
    problem: 'Communication barriers between hearing-impaired and non-signers remain huge.',
    solution: 'Real-time hand gesture recognition model translating sign language to text.',
    tech: ['Python', 'MediaPipe', 'TensorFlow', 'OpenCV', 'Flask'],
    impact: 'Bridging communication gap for hearing-impaired individuals in real time.',
    github: 'https://github.com/Nachiket858/Unified_Sign_Language',
  },
  {
    title: 'Skin Disease Detection',
    category: 'Computer Vision',
    problem: 'Dermatological diagnosis is expensive and inaccessible in rural areas.',
    solution: 'CNN-based classifier identifying multiple skin conditions from uploaded images.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
    impact: 'Accessible preliminary skin disease screening for underserved communities.',
    github: 'https://github.com/Nachiket858/skin-desease-detection',
  },
  {
    title: 'Fraud Detection in UPI Transactions',
    category: 'AI/ML',
    problem: 'Digital payment fraud is rising with UPI adoption, causing financial losses.',
    solution: 'ML anomaly detection model identifying fraudulent UPI transaction patterns in real time.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Anomaly Detection'],
    impact: 'Real-time fraud flagging protecting users from financial fraud.',
    github: 'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
  },
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState<Category>('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="aos-fade-up">
          <p className="sec-eyebrow">Projects</p>
          <h2 className="sec-title">Impact-Oriented Builds</h2>
          <p className="sec-subtitle">
            {PROJECTS.length}+ real-world AI &amp; ML systems — from computer vision to GenAI.
          </p>
        </div>

        <div className="filter-bar aos-fade-up" style={{ transitionDelay: '80ms' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="project-card aos-fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="project-card-top">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-cat-badge">{p.category}</span>
              </div>

              <div className="project-rows">
                <div className="project-row">
                  <span className="project-row-label">
                    <i className="bi bi-exclamation-circle-fill" /> Problem
                  </span>
                  <span className="project-row-val">{p.problem}</span>
                </div>
                <div className="project-row">
                  <span className="project-row-label">
                    <i className="bi bi-lightbulb-fill" /> Solution
                  </span>
                  <span className="project-row-val">{p.solution}</span>
                </div>
                <div className="project-row">
                  <span className="project-row-label">
                    <i className="bi bi-graph-up-arrow" /> Impact
                  </span>
                  <span className="project-row-val impact-text">{p.impact}</span>
                </div>
                <div className="project-tech-tags">
                  {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>

              {(p.github || p.youtube || p.demo) && (
                <div className="project-links">
                  {p.github && (
                    <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
                      <i className="bi bi-github" /> Source Code
                    </a>
                  )}
                  {p.youtube && (
                    <a className="project-link" href={p.youtube} target="_blank" rel="noreferrer">
                      <i className="bi bi-youtube" /> Watch Demo
                    </a>
                  )}
                  {p.demo && (
                    <a className="project-link" href={p.demo} target="_blank" rel="noreferrer">
                      <i className="bi bi-box-arrow-up-right" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="projects-more aos-fade-up">
          <a className="btn-ghost" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
            <i className="bi bi-github" /> All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
