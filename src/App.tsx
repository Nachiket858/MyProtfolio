import { FormEvent, useEffect, useMemo, useState } from 'react';
import AOS from 'aos';

type ProjectCategory = 'All' | 'Automation' | 'Backend' | 'AI/ML';

type Project = {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  problem: string;
  solution: string;
  tech: string;
  impact: string;
  github?: string;
  demo?: string;
};

const filters: ProjectCategory[] = ['All', 'Automation', 'Backend', 'AI/ML'];

const projects: Project[] = [
  {
    title: 'AI Recruiter Automation Suite',
    category: 'Automation',
    problem: 'Recruitment screening and shortlisting involved repetitive manual review and delayed hiring decisions.',
    solution: 'Built automation pipelines to collect, filter, and rank candidate profiles using rule-based plus semantic methods.',
    tech: 'Python, n8n, REST APIs, Semantic Ranking, Workflow Automation',
    impact: 'Reduced manual intervention in recruitment workflows and improved shortlisting consistency and speed.',
  },
  {
    title: 'Arjuna - Context-Aware Chat Assistant',
    category: 'AI/ML',
    problem: 'Generic chatbot responses lacked context relevance and produced inaccurate answers.',
    solution: 'Implemented RAG with Qdrant vector retrieval and prompt-controlled response flows using LangGraph.',
    tech: 'Flask, Qdrant, LangGraph, RAG, Prompt Engineering',
    impact: 'Improved response precision and contextual understanding for user queries.',
    github: 'https://github.com/Nachiket858/LangGraph-Chatbot',
  },
  {
    title: 'AI Interview Coach - Intelligent Interview Platform',
    category: 'AI/ML',
    problem: 'Candidates lacked personalized interview practice mapped to their resume and target role.',
    solution: 'Designed prompt engineering workflows to generate role-specific questions and structured feedback.',
    tech: 'Flask, LLMs, Prompt Engineering, Resume Parsing Logic',
    impact: 'Enabled personalized preparation loops with more relevant practice and clearer feedback.',
    github: 'https://github.com/Nachiket858/AI-Interview-Platform',
  },
  {
    title: 'API-Driven Client Onboarding Workflow',
    category: 'Backend',
    problem: 'Onboarding steps were fragmented and required repeated manual follow-ups.',
    solution: 'Created API-first onboarding logic with status tracking and automated stage notifications.',
    tech: 'Python, Flask, API Integrations, Postman',
    impact: 'Estimated 45% faster onboarding handoff and clearer execution visibility.',
  },
  {
    title: 'AI Face Recognition Attendance System',
    category: 'AI/ML',
    problem: 'Manual attendance processes were slow, error-prone, and easy to manipulate.',
    solution: 'Implemented a face-recognition attendance workflow for secure, rapid check-ins.',
    tech: 'Python, OpenCV, Flask, Face Recognition',
    impact: 'Enabled contactless attendance logging and reduced repetitive manual entry.',
    github: 'https://github.com/Nachiket858/FaceAttend',
    demo: 'https://www.youtube.com/watch?v=estMi2NEydg',
  },
  {
    title: 'PyCodeML Automation Toolkit',
    category: 'AI/ML',
    problem: 'ML experimentation required repeated boilerplate for training and evaluation.',
    solution: 'Packaged reusable automation for model training, tuning, and evaluation in one workflow.',
    tech: 'Python, Scikit-learn, Pandas, NumPy',
    impact: 'Accelerated experimentation cycles and improved repeatability for ML projects.',
    github: 'https://github.com/Nachiket858/PyCodeML',
    demo: 'https://pypi.org/project/pycodeml/',
  },
  {
    title: 'Price Comparison Automation Engine',
    category: 'Automation',
    problem: 'Cross-source price checks were manual and too slow for quick decisions.',
    solution: 'Automated collection and normalization of pricing signals into one comparison workflow.',
    tech: 'Python, Flask, Data Extraction, Automation Logic',
    impact: 'Improved decision speed and reduced repetitive comparison work.',
    github: 'https://github.com/Nachiket858/PriceCompare',
    demo: 'https://www.youtube.com/watch?v=R6cirNSMMZM',
  },
];

const experience = [
  {
    period: 'June 2025 - Dec 2025',
    role: 'Software Developer',
    company: 'Mountreach Solutions (Remote)',
    points: [
      'Mentored students in AI/ML and full-stack application development.',
      'Guided implementation of ML pipelines including preprocessing, training, and evaluation.',
      'Supported backend API development and ML system integration.',
    ],
  },
  {
    period: '2022 - 2026',
    role: 'B.Tech, Computer Science and Engineering',
    company: 'CSMSS Chh. Shahu College of Engineering (DBATU)',
    points: ['Built strong foundations in AI/ML, backend systems, and problem-solving. CGPA: 7.53 / 10.'],
  },
];

const achievements = [
  'NPTEL Discipline Star - IIT certified for academic excellence.',
  'Research paper on PyCodeML accepted at NCISET 2025.',
];

type ContactState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const emptyContact: ContactState = {
  name: '',
  email: '',
  projectType: 'Automation project',
  message: '',
};

function App() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');
  const [contact, setContact] = useState<ContactState>(emptyContact);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      easing: 'ease-out-cubic',
      offset: 70,
    });
  }, []);

  const visibleProjects = useMemo(() => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === selectedFilter);
  }, [selectedFilter]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      setSubmitMessage('Please fill all required fields.');
      return;
    }

    const subject = encodeURIComponent(`[Portfolio Inquiry] ${contact.projectType}`);
    const body = encodeURIComponent(
      `Hi Nachiket,\n\nName: ${contact.name}\nEmail: ${contact.email}\nProject Type: ${contact.projectType}\n\nMessage:\n${contact.message}\n`
    );

    window.location.href = `mailto:nachiketshinde2004@gmail.com?subject=${subject}&body=${body}`;
    setSubmitMessage('Opening your email app with a prefilled message.');
    setContact(emptyContact);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top portfolio-nav">
          <div className="container py-2">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
              <span className="brand-pill">NS</span>
              <span className="brand-text">Nachiket Shinde</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="portfolioNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
              <a className="btn btn-accent ms-lg-3" href="/Nachiket_Shinde_Resume.pdf" download>
                <i className="bi bi-file-earmark-arrow-down me-2" aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container hero-shell">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7" data-aos="fade-right">
                <p className="hero-kicker">AI/ML Engineer | Automation Systems Builder</p>
                <h1 className="hero-title">I Automate What Slows Teams Down.</h1>
                <p className="hero-subtitle">
                  I build ML pipelines, LLM-powered applications, backend APIs, and intelligent automation systems that remove repetitive manual work.
                  I convert business requirements into scalable, AI-driven execution with a strong automation-first mindset.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a className="btn btn-accent btn-lg" href="#projects">View Project Wins</a>
                  <a className="btn btn-outline-light btn-lg" href="/Nachiket_Shinde_Resume.pdf" download>Download Resume</a>
                </div>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a className="social-chip" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
                    <i className="bi bi-github" aria-hidden="true" />
                    GitHub
                  </a>
                  <a className="social-chip" href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a className="social-chip" href="mailto:nachiketshinde2004@gmail.com">
                    <i className="bi bi-envelope-fill" aria-hidden="true" />
                    Email
                  </a>
                </div>
              </div>

              <div className="col-lg-5" data-aos="fade-left" data-aos-delay="120">
                <img
                  src="/nachiket-shinde-profile.jpg"
                  alt="Portrait of Nachiket Shinde"
                  className="profile-photo mb-3"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-impact-card">
                  <h2 className="impact-title">Why teams hire me</h2>
                  <ul className="impact-list list-unstyled mb-0">
                    <li><span className="impact-number">RAG + LLM</span><span className="impact-text">Prompt engineering and context-aware assistant architecture</span></li>
                    <li><span className="impact-number">Automation-First</span><span className="impact-text">Python + n8n + API orchestration for operational workflows</span></li>
                    <li><span className="impact-number">NCISET 2025</span><span className="impact-text">PyCodeML research paper accepted</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="portfolio-section">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">About Me</p>
              <h2 className="section-title">Automation-Focused Developer with Real Execution Ownership</h2>
            </div>
            <div className="row g-4 mt-1">
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="50">
                <div className="surface-card h-100">
                  <p>
                    I am Nachiket Bhagaji Shinde, an AI/ML-focused developer who builds practical systems around automation, retrieval, and backend intelligence.
                    My work blends Python engineering, n8n workflow design, API integration, and prompt-controlled LLM pipelines.
                  </p>
                  <p>
                    My recent work includes AI-driven recruiter automation systems with candidate filtering, scoring, and shortlisting logic that reduce manual operational effort.
                  </p>
                  <p className="mb-0">
                    I focus on one goal: convert business requirements into reliable systems that improve speed, decision quality, and execution consistency.
                  </p>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="120">
                <div className="surface-card h-100">
                  <h3 className="small-title">Core Strengths</h3>
                  <ul className="check-list list-unstyled mb-0">
                    <li><i className="bi bi-check2-circle" aria-hidden="true" /><span>Automation-first problem solving</span></li>
                    <li><i className="bi bi-check2-circle" aria-hidden="true" /><span>Backend logic, RAG pipelines, and API workflow design</span></li>
                    <li><i className="bi bi-check2-circle" aria-hidden="true" /><span>Execution aligned to measurable business outcomes</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="portfolio-section section-muted">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">Skills</p>
              <h2 className="section-title">Focused Skill Stack for Automation and Backend Delivery</h2>
            </div>
            <div className="row g-4 mt-1">
              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="40">
                <article className="surface-card h-100">
                  <h3 className="skill-title"><i className="bi bi-diagram-3-fill me-2" aria-hidden="true" />Automation Systems</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="skill-pill">n8n workflow design</span>
                    <span className="skill-pill">Process mapping</span>
                    <span className="skill-pill">Webhook orchestration</span>
                    <span className="skill-pill">CI/CD workflows</span>
                    <span className="skill-pill">Manual task elimination</span>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="80">
                <article className="surface-card h-100">
                  <h3 className="skill-title"><i className="bi bi-hdd-network-fill me-2" aria-hidden="true" />Backend and APIs</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="skill-pill">Python</span>
                    <span className="skill-pill">Flask</span>
                    <span className="skill-pill">FastAPI</span>
                    <span className="skill-pill">REST API integrations</span>
                    <span className="skill-pill">Business logic design</span>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="120">
                <article className="surface-card h-100">
                  <h3 className="skill-title"><i className="bi bi-cpu-fill me-2" aria-hidden="true" />AI and Data Work</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="skill-pill">Machine Learning</span>
                    <span className="skill-pill">Scikit-learn</span>
                    <span className="skill-pill">TensorFlow</span>
                    <span className="skill-pill">NLP workflows</span>
                    <span className="skill-pill">Computer Vision</span>
                    <span className="skill-pill">RAG and semantic retrieval</span>
                    <span className="skill-pill">LangChain and LangGraph</span>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="160">
                <article className="surface-card h-100">
                  <h3 className="skill-title"><i className="bi bi-tools me-2" aria-hidden="true" />Tools and Delivery</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="skill-pill">Git and GitHub</span>
                    <span className="skill-pill">Postman</span>
                    <span className="skill-pill">OpenAI APIs</span>
                    <span className="skill-pill">Gemini APIs</span>
                    <span className="skill-pill">SQL and MongoDB</span>
                    <span className="skill-pill">Qdrant</span>
                    <span className="skill-pill">Rapid prototyping</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="portfolio-section">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">Projects</p>
              <h2 className="section-title">Impact-Oriented Projects and Automation Case Builds</h2>
              <p className="section-note">Each project includes problem, solution, tech used, and impact.</p>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4 mb-4" data-aos="fade-up" data-aos-delay="60">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={`btn filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="row g-4">
              {visibleProjects.map((project, index) => (
                <div className="col-12 col-lg-6" key={project.title} data-aos="fade-up" data-aos-delay={index * 70}>
                  <article className="project-card h-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                      <h3 className="project-title mb-0">{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <div className="project-block"><h4>Problem</h4><p>{project.problem}</p></div>
                    <div className="project-block"><h4>Solution</h4><p>{project.solution}</p></div>
                    <div className="project-block"><h4>Tech Used</h4><p>{project.tech}</p></div>
                    <div className="project-block mb-0"><h4>Impact</h4><p className="mb-0">{project.impact}</p></div>
                    {project.github || project.demo ? (
                      <div className="d-flex flex-wrap gap-3 mt-4">
                        {project.github ? (
                          <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                            <i className="bi bi-github" aria-hidden="true" />
                            Source Code
                          </a>
                        ) : null}
                        {project.demo ? (
                          <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
                            <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                            Demo / Output
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="120">
              <a className="text-link" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
                Explore all repositories on GitHub
                <i className="bi bi-arrow-right-short" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="portfolio-section section-muted">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">Experience</p>
              <h2 className="section-title">Execution Experience with Real Ownership</h2>
            </div>
            <div className="timeline-wrap mt-4">
              {experience.map((item, index) => (
                <article className="timeline-card" key={`${item.role}-${item.company}`} data-aos="fade-up" data-aos-delay={index * 70}>
                  <div className="timeline-meta">
                    <span className="time-pill">{item.period}</span>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <ul className="timeline-points list-unstyled mb-0">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="portfolio-section">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">Achievements</p>
              <h2 className="section-title">Credentials That Strengthen Delivery Credibility</h2>
            </div>
            <div className="row g-4 mt-1">
              {achievements.map((item, index) => (
                <div className="col-12 col-md-6" key={item} data-aos="fade-up" data-aos-delay={index * 80}>
                  <article className="surface-card h-100">
                    <h3 className="skill-title"><i className="bi bi-award-fill me-2" aria-hidden="true" />Verified Milestone</h3>
                    <p className="mb-0">{item}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="portfolio-section">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">Services</p>
              <h2 className="section-title">Automation Services I Can Deliver</h2>
            </div>
            <div className="row g-4 mt-1">
              <div className="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="60">
                <article className="surface-card service-card h-100">
                  <h3 className="skill-title"><i className="bi bi-lightning-charge-fill me-2" aria-hidden="true" />Process Automation Design</h3>
                  <p>Map manual workflows and implement automation that removes repetitive execution bottlenecks.</p>
                </article>
              </div>
              <div className="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="120">
                <article className="surface-card service-card h-100">
                  <h3 className="skill-title"><i className="bi bi-braces-asterisk me-2" aria-hidden="true" />Backend and API Integration</h3>
                  <p>Develop robust backend logic and reliable API workflows for production-oriented systems.</p>
                </article>
              </div>
              <div className="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="180">
                <article className="surface-card service-card h-100">
                  <h3 className="skill-title"><i className="bi bi-grid-1x2-fill me-2" aria-hidden="true" />Internal Ops Tools</h3>
                  <p>Build practical internal tools that improve team speed, consistency, and reporting clarity.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="portfolio-section">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let&apos;s Build Automation That Creates Measurable Results</h2>
            </div>
            <div className="row g-4 mt-1">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="60">
                <div className="surface-card h-100">
                  <h3 className="small-title">Reach Me Directly</h3>
                  <ul className="contact-list list-unstyled mb-4">
                    <li><i className="bi bi-envelope-fill" aria-hidden="true" /><a href="mailto:nachiketshinde2004@gmail.com">nachiketshinde2004@gmail.com</a></li>
                    <li><i className="bi bi-telephone-fill" aria-hidden="true" /><a href="tel:+918766055949">+91 87660 55949</a></li>
                    <li><i className="bi bi-geo-alt-fill" aria-hidden="true" /><span>Chhatrapati Sambhajinagar, Maharashtra</span></li>
                  </ul>
                  <div className="d-flex flex-wrap gap-2">
                    <a className="btn btn-sm btn-outline-light" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="btn btn-sm btn-outline-light" href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="btn btn-sm btn-outline-light" href="/Nachiket_Shinde_Resume.pdf" download>Resume</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="120">
                <form className="surface-card" onSubmit={onSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">Name *</label>
                      <input id="name" type="text" className="form-control custom-input" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">Email *</label>
                      <input id="email" type="email" className="form-control custom-input" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} required />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="projectType">Project Type</label>
                      <select id="projectType" className="form-select custom-input" value={contact.projectType} onChange={(e) => setContact({ ...contact, projectType: e.target.value })}>
                        <option>Automation project</option>
                        <option>Backend/API system</option>
                        <option>AI/ML implementation</option>
                        <option>Freelance collaboration</option>
                        <option>Full-time opportunity</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea id="message" className="form-control custom-input" rows={5} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} required />
                    </div>
                    <div className="col-12 d-flex flex-column flex-sm-row gap-3 align-items-sm-center">
                      <button type="submit" className="btn btn-accent">Send Inquiry</button>
                      <span className="form-note">Form opens your default email app with prefilled details.</span>
                    </div>
                    {submitMessage ? <div className="col-12"><p className="submit-message mb-0">{submitMessage}</p></div> : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <p className="mb-0">Copyright {new Date().getFullYear()} Nachiket Shinde | AI/ML Engineer | Automation and Backend Systems</p>
          <div className="d-flex flex-wrap gap-3">
            <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:nachiketshinde2004@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
