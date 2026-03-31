import { useState } from 'react';
import { Brain, Briefcase, ExternalLink, Github, Linkedin, Mail, Menu, Sparkles, Star, X, Youtube } from 'lucide-react';

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

const featuredProjects: Project[] = [
  { id: 1, title: 'AI Face Recognition Attendance System', summary: 'Computer-vision attendance automation using face recognition workflows for secure, fast check-ins.', tags: ['Computer Vision', 'Python', 'Face Recognition'], youtube: ['https://www.youtube.com/watch?v=estMi2NEydg'], github: ['https://github.com/Nachiket858/FaceAttend'] },
  { id: 2, title: 'SMS Spam Detection Android App', summary: 'ML-driven spam detection app to classify suspicious text messages and improve mobile safety.', tags: ['Android', 'NLP', 'Classification'], youtube: ['https://www.youtube.com/watch?v=N-3vOLpyCAg'], github: ['https://github.com/Nachiket858/Fake_News_detection'] },
  { id: 3, title: 'YouTube Video Summarizer (Ollama)', summary: 'Summarizes long-form videos into concise insights with local LLM-powered pipelines.', tags: ['LLM', 'Ollama', 'Summarization'], youtube: ['https://www.youtube.com/watch?v=hyBVG2llo68'], github: ['https://github.com/Nachiket858/Podcast_Summarizer_edited_updated'] },
  { id: 4, title: 'AI Plant / Fruit Disease Detection', summary: 'Plant-health intelligence using image-based disease analysis for faster agricultural decisions.', tags: ['Agri AI', 'Image Classification', 'Deep Learning'], youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo', 'https://www.youtube.com/watch?v=tB2kynu3tK4'], github: ['https://github.com/Nachiket858/Plant_disease_detection', 'https://github.com/Nachiket858/VrukshaDarshan-A-Plant-Identification-Tool-Using-AI'] },
  { id: 5, title: 'AI Interview Practice System', summary: 'Interview simulator that helps learners practice with AI-generated prompts and feedback loops.', tags: ['Generative AI', 'Career Tech', 'Web App'], youtube: ['https://www.youtube.com/watch?v=EA9hW5uNI84'], github: ['https://github.com/Nachiket858/AI-Interview-Platform'] },
  { id: 6, title: 'AI College Enquiry Chatbot (RAG)', summary: 'RAG-based chatbot for accurate, contextual college query answering with retrieval pipelines.', tags: ['RAG', 'LangGraph', 'Chatbot'], youtube: ['https://www.youtube.com/watch?v=9ohnjpR81SI'], github: ['https://github.com/Nachiket858/LangGraph-Chatbot', 'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'] },
  { id: 7, title: 'Farmer Advisory Chatbot', summary: 'Conversational AI assistant for agriculture guidance and practical crop-focused support.', tags: ['AgriTech', 'Conversational AI', 'LangGraph'], youtube: ['https://www.youtube.com/watch?v=bUScU_CuyoI'], github: ['https://github.com/Nachiket858/LangGraph-Chatbot'] },
  { id: 8, title: 'Generative AI Health Chatbot', summary: 'Health-focused assistant with natural language interaction for personalized information support.', tags: ['Health AI', 'LLM', 'Assistant'], youtube: ['https://www.youtube.com/watch?v=CI4U3yGC2F0'], github: ['https://github.com/Nachiket858/Health_assistance'] },
  { id: 9, title: 'AI Loan Eligibility Predictor', summary: 'Predictive model that evaluates loan eligibility using structured applicant features.', tags: ['FinTech', 'Machine Learning', 'Prediction'], youtube: ['https://www.youtube.com/watch?v=oVMA3CizkCI'], github: ['https://github.com/Nachiket858/Loan_eligibility_prediction'] },
  { id: 10, title: 'Online Voting System Using Face Recognition', summary: 'Secure digital voting prototype with face recognition verification and anti-fraud design.', tags: ['CivicTech', 'Face Recognition', 'Security'], youtube: ['https://www.youtube.com/watch?v=8mpMi6NXxqg'], github: ['https://github.com/Nachiket858/face_voting_system'] },
  { id: 11, title: 'Sentify: Emotion Detection', summary: 'Emotion recognition solution for sentiment-aware user experiences and interaction analytics.', tags: ['Emotion AI', 'Computer Vision', 'Sentiment'], youtube: ['https://www.youtube.com/watch?v=Sn-VdSLhd5A'], github: ['https://github.com/Nachiket858/Sentimet_analysis_of_review_with_price_negotiations'] },
  { id: 12, title: 'Price Comparison Tool', summary: 'Comparison engine that aggregates price signals for smarter purchase decisions.', tags: ['E-commerce', 'Data Extraction', 'Automation'], youtube: ['https://www.youtube.com/watch?v=R6cirNSMMZM'], github: ['https://github.com/Nachiket858/PriceCompare'] },
  { id: 13, title: 'Agnostic Chatbot (SIH 2025)', summary: 'Hackathon-grade chatbot architecture focused on robust, domain-flexible conversations.', tags: ['Hackathon', 'AI Chatbot', 'RAG'], youtube: ['https://www.youtube.com/watch?v=XGcafUORXBU'], github: ['https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot'] },
  { id: 14, title: 'Dream House Architem', summary: 'AI-assisted design concept for planning dream house layouts and architectural exploration.', tags: ['AI Design', 'Architecture', 'Generative AI'], youtube: ['https://www.youtube.com/watch?v=HfzmrqFKe0Y'], github: ['https://github.com/Nachiket858/Dream-house-architem'] },
  { id: 15, title: 'Pomegranate Fruit Disease Detection', summary: 'Specialized fruit-disease detection model for pomegranate crop quality monitoring.', tags: ['Agriculture', 'Disease Detection', 'Computer Vision'], youtube: ['https://www.youtube.com/watch?v=p_WkziavNqo'], github: ['https://github.com/Nachiket858/pomegranate-fruit-disease-detection'] },
];

const showcaseProjects: ShowcaseProject[] = [
  { title: 'Sentify', summary: 'Real-time emotion detection with activity suggestions using DeepFace + Gemini.', stack: 'Flask, DeepFace, Gemini API, JavaScript', github: 'https://github.com/Nachiket858/Project-Sentify---Emotion-Detection-and-Activity-Suggestion' },
  { title: 'PyCodeML', summary: 'Python package to automate training, tuning, and evaluation for classical ML models.', stack: 'Python, Scikit-learn, Pandas, NumPy', github: 'https://github.com/Nachiket858/PyCodeML', live: 'https://pypi.org/project/pycodeml/' },
  { title: 'Dream House Architecture', summary: 'AI-powered 3D floor planning platform with authentication and design generation.', stack: 'Flask, MongoDB, OpenAI API', github: 'https://github.com/Nachiket858/Dream-house-architecture-' },
];

const additionalProjects = [
  'https://github.com/Nachiket858/Traffic_risk_prediction',
  'https://github.com/Nachiket858/Unified_Sign_Language',
  'https://github.com/Nachiket858/skin-desease-detection',
  'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
  'https://github.com/Nachiket858/Smart-Traffic-Management-System',
];

const skillGroups = [
  { title: 'AI & ML', points: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment'] },
  { title: 'GenAI Stack', points: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'Gemini / LLM APIs'] },
  { title: 'Backend & Data', points: ['Python', 'Flask', 'REST APIs', 'MongoDB', 'SQL'] },
  { title: 'Frontend & Product', points: ['React', 'TypeScript', 'Tailwind CSS', 'UX-first UI', 'SEO basics'] },
];

const timeline = [
  { year: '2026', title: 'B.Tech CSE Graduate', note: 'CSMSS Chh. Shahu College of Engineering (DBATU).' },
  { year: '2025', title: 'GSSoC Contributor', note: 'Contributed to open-source and AI-driven web projects.' },
  { year: '2025', title: 'NPTEL Star', note: 'Recognized by NPTEL / IIT Madras for course performance.' },
  { year: '2024', title: 'SIH Participant', note: 'Built innovative AI ideas for hackathon problem statements.' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['about', 'skills', 'projects', 'contact'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob blob-cyan" />
        <div className="blob blob-violet" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-300">
            <Brain className="h-5 w-5" aria-hidden="true" />
            Nachiket Shinde · AI Developer
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="text-slate-300 transition hover:text-cyan-300">
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <button className="md:hidden social-btn" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-900/95 p-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <a key={item} href={`#${item}`} className="rounded-md px-2 py-1 text-slate-200 hover:bg-slate-800" onClick={() => setMobileOpen(false)}>
                  {item[0].toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative border-b border-slate-800">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <div className="fade-up">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" /> Premium AI Portfolio
              </p>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                I build production-ready AI products with clean UX and measurable impact.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                Re-applied after merge conflict: all mapped projects, existing highlights, premium visuals, and animations are restored.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">Explore All Projects</a>
                <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200">GitHub Profile</a>
              </div>
            </div>

            <div className="fade-up glass-card rounded-xl p-6" style={{ animationDelay: '120ms' }}>
              <h2 className="text-xl font-bold text-white">At a glance</h2>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[{ label: 'AI Projects', value: '20+' }, { label: 'Mapped Demos', value: '15' }, { label: 'Core Domains', value: 'CV + NLP' }, { label: 'Focus', value: 'GenAI Apps' }].map((card) => (
                  <div key={card.label} className="rounded-lg border border-slate-700 bg-slate-900/70 p-4">
                    <p className="text-2xl font-bold text-cyan-300">{card.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="section-title">About</h2>
            <p className="mt-5 max-w-4xl leading-7 text-slate-300">
              I&apos;m Nachiket Shinde, an AI developer focused on practical systems that solve real problems in healthcare, agriculture, education, civic-tech, and finance.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {['GSSoC Contributor (2025)', 'NPTEL Star (IIT Madras recognized)', 'SIH Participant & AI Product Builder'].map((point) => (
                <div key={point} className="glass-card rounded-xl p-4 text-sm text-slate-200">
                  <Star className="mb-2 h-4 w-4 text-cyan-300" />
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-10 border-l border-slate-700 pl-4">
              {timeline.map((item) => (
                <div key={item.year + item.title} className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{item.year}</p>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="section-title">Skills & Technology</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <article key={group.title} className="glass-card rounded-xl p-5 fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                    {group.points.map((skill) => (
                      <li key={skill} className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2">{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="section-title">Project Mapping (YouTube ↔ GitHub)</h2>
            <p className="mt-3 text-slate-300">All mapped projects and old highlights are restored in this redesign.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Project {project.id}</p>
                    <Briefcase className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-slate-700 bg-slate-900/70 px-2 py-1 text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-5 space-y-2 text-sm">
                    {project.youtube?.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noreferrer" className="project-link text-red-200 hover:text-red-300"><Youtube className="h-4 w-4" /> YouTube Demo <ExternalLink className="h-3.5 w-3.5" /></a>
                    ))}
                    {project.github.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noreferrer" className="project-link text-cyan-200 hover:text-cyan-300"><Github className="h-4 w-4" /> GitHub Repository <ExternalLink className="h-3.5 w-3.5" /></a>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white">Legacy / Existing Portfolio Highlights</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {showcaseProjects.map((project) => (
                  <article key={project.title} className="glass-card rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                    <p className="mt-3 text-xs text-slate-400">{project.stack}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-link text-cyan-200 hover:text-cyan-300"><Github className="h-4 w-4" /> GitHub</a>}
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link text-emerald-200 hover:text-emerald-300"><ExternalLink className="h-4 w-4" /> Live</a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Additional GitHub Projects (No YouTube Yet)</h3>
              <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {additionalProjects.map((url) => (
                  <li key={url}><a href={url} target="_blank" rel="noreferrer" className="project-link text-slate-200 hover:text-cyan-300"><Github className="h-4 w-4" /> {url.replace('https://github.com/Nachiket858/', '')}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">Let&apos;s build impactful AI products together.</p>
            <p className="mt-1 text-sm text-slate-300">Email: <a href="mailto:nachiketshinde2004@gmail.com" className="text-cyan-300 hover:text-cyan-200">nachiketshinde2004@gmail.com</a></p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:nachiketshinde2004@gmail.com" className="social-btn" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
