import { Brain, ExternalLink, Github, Linkedin, Mail, Sparkles, Youtube } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  youtube?: string[];
  github: string[];
};

const featuredProjects: Project[] = [
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
    github: [
      'https://github.com/Nachiket858/LangGraph-Chatbot',
      'https://github.com/Nachiket858/SIH-2025-Agnostoic-Chatbot',
    ],
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

const additionalProjects = [
  'https://github.com/Nachiket858/Traffic_risk_prediction',
  'https://github.com/Nachiket858/Unified_Sign_Language',
  'https://github.com/Nachiket858/skin-desease-detection',
  'https://github.com/Nachiket858/Fraud-Detection-in-UPI-Transactions',
  'https://github.com/Nachiket858/Smart-Traffic-Management-System',
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-300">
            <Brain className="h-5 w-5" aria-hidden="true" />
            Nachiket Shinde · AI Developer
          </a>
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a href="#about" className="text-slate-300 hover:text-cyan-300">About</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-300">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-300">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="border-b border-slate-800">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                AI • ML • Generative Systems
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Clean, modern portfolio for an AI developer building useful products.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                I design and ship practical AI applications across computer vision, chatbots, predictive modeling,
                and automation. This redesigned portfolio highlights my work with strong structure, clear navigation,
                and SEO-first content.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
                  Explore Projects
                </a>
                <a href="#contact" className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-300 hover:text-cyan-200">
                  Let&apos;s Collaborate
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-white">What I build</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• AI chatbots and RAG systems for support and advisory workflows</li>
                <li>• Computer vision products for attendance, voting, and disease detection</li>
                <li>• Predictive ML systems for finance, risk, and smart classification</li>
                <li>• End-to-end productization with Python, Flask, and modern front-end UX</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-800">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">About Me</h2>
            <p className="mt-5 max-w-4xl text-slate-300 leading-7">
              I&apos;m Nachiket Shinde, an AI developer focused on building real-world applications instead of demo-only models.
              My work combines machine learning engineering, API integration, and product-minded interface design. I prioritize
              clarity, speed, and measurable utility in every project.
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Project Mapping (YouTube ↔ GitHub)</h2>
            <p className="mt-3 text-slate-300">15 showcased AI projects with direct source links and demo/video references.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Project {project.id}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2 text-sm">
                    {project.youtube?.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-red-300">
                        <Youtube className="h-4 w-4" aria-hidden="true" />
                        YouTube Demo
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ))}
                    {project.github.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300">
                        <Github className="h-4 w-4" aria-hidden="true" />
                        GitHub Repository
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Additional GitHub Projects</h3>
              <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {additionalProjects.map((url) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300">
                      <Github className="h-4 w-4" aria-hidden="true" />
                      {url.replace('https://github.com/Nachiket858/', '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 text-sm text-slate-300 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="text-base font-semibold text-white">Let&apos;s build impactful AI products.</p>
            <p className="mt-1">Email: <a href="mailto:nachiketshinde2004@gmail.com" className="text-cyan-300 hover:text-cyan-200">nachiketshinde2004@gmail.com</a></p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-300" aria-label="GitHub">
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-300" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="mailto:nachiketshinde2004@gmail.com" className="text-slate-300 hover:text-cyan-300" aria-label="Email">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
