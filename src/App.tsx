import { FormEvent, useEffect, useRef, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* ─── Types ─── */
type Category = 'All' | 'Automation' | 'Backend' | 'AI/ML';

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  github?: string;
  demo?: string;
};

/* ─── Data ─── */
const FILTERS: Category[] = ['All', 'Automation', 'Backend', 'AI/ML'];

const PROJECTS: Project[] = [
  {
    title: 'AI Recruiter Automation Suite',
    category: 'Automation',
    problem: 'Manual screening delayed hiring decisions.',
    solution: 'Automation pipelines to filter & rank candidates using semantic methods.',
    tech: ['Python', 'n8n', 'REST APIs', 'Semantic Ranking'],
    impact: 'Reduced manual intervention & improved shortlisting speed.',
  },
  {
    title: 'Arjuna — Context-Aware Chat Assistant',
    category: 'AI/ML',
    problem: 'Generic chatbot responses lacked context relevance.',
    solution: 'RAG with Qdrant vector retrieval and prompt-controlled response flows via LangGraph.',
    tech: ['Flask', 'Qdrant', 'LangGraph', 'RAG', 'Prompt Engineering'],
    impact: 'Improved response precision and contextual understanding.',
    github: 'https://github.com/Nachiket858/LangGraph-Chatbot',
  },
  {
    title: 'AI Interview Coach',
    category: 'AI/ML',
    problem: 'Candidates lacked personalized interview practice mapped to their resume.',
    solution: 'Prompt engineering workflows generating role-specific questions and feedback.',
    tech: ['Flask', 'LLMs', 'Prompt Engineering', 'Resume Parsing'],
    impact: 'Enabled personalized preparation with clearer feedback loops.',
    github: 'https://github.com/Nachiket858/AI-Interview-Platform',
  },
  {
    title: 'API-Driven Client Onboarding',
    category: 'Backend',
    problem: 'Onboarding steps were fragmented with repeated manual follow-ups.',
    solution: 'API-first onboarding logic with status tracking and automated notifications.',
    tech: ['Python', 'Flask', 'API Integrations', 'Postman'],
    impact: '45% faster onboarding handoff and clearer execution visibility.',
  },
  {
    title: 'Face Recognition Attendance System',
    category: 'AI/ML',
    problem: 'Manual attendance was slow and error-prone.',
    solution: 'Face-recognition workflow for secure, rapid contactless check-ins.',
    tech: ['Python', 'OpenCV', 'Flask', 'Face Recognition'],
    impact: 'Contactless attendance logging, eliminated manual entry.',
    github: 'https://github.com/Nachiket858/FaceAttend',
    demo: 'https://www.youtube.com/watch?v=estMi2NEydg',
  },
  {
    title: 'PyCodeML — ML Automation Toolkit',
    category: 'AI/ML',
    problem: 'ML experimentation required repeated training/evaluation boilerplate.',
    solution: 'Packaged reusable automation for model training, tuning, and evaluation.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    impact: 'Accelerated experimentation cycles and improved repeatability.',
    github: 'https://github.com/Nachiket858/PyCodeML',
    demo: 'https://pypi.org/project/pycodeml/',
  },
  {
    title: 'Price Comparison Automation Engine',
    category: 'Automation',
    problem: 'Cross-source price checks were too slow for quick decisions.',
    solution: 'Automated collection and normalization of pricing signals into one workflow.',
    tech: ['Python', 'Flask', 'Data Extraction', 'Automation'],
    impact: 'Improved decision speed and reduced repetitive comparison work.',
    github: 'https://github.com/Nachiket858/PriceCompare',
    demo: 'https://www.youtube.com/watch?v=R6cirNSMMZM',
  },
];

const EXPERIENCE = [
  {
    period: 'June 2025 – Dec 2025',
    role: 'Software Developer',
    company: 'Mountreach Solutions (Remote)',
    points: [
      'Mentored students in AI/ML and full-stack application development.',
      'Guided implementation of ML pipelines: preprocessing, training, and evaluation.',
      'Supported backend API development and ML system integration.',
    ],
  },
  {
    period: '2022 – 2026',
    role: 'B.Tech, Computer Science & Engineering',
    company: 'CSMSS Chh. Shahu College of Engineering (DBATU)',
    points: ['Built strong foundations in AI/ML, backend systems, and problem-solving. CGPA: 7.53 / 10.'],
  },
];

const ACHIEVEMENTS = [
  {
    icon: 'bi-trophy-fill',
    title: 'NPTEL Discipline Star',
    desc: 'IIT-certified academic excellence award for outstanding performance.',
  },
  {
    icon: 'bi-file-earmark-text-fill',
    title: 'NCISET 2025 — Research Paper',
    desc: 'PyCodeML paper accepted at NCISET 2025 international conference.',
  },
];

const SERVICES = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Process Automation Design',
    desc: 'Map manual workflows and implement automation that removes repetitive execution bottlenecks.',
  },
  {
    icon: 'bi-braces-asterisk',
    title: 'Backend & API Integration',
    desc: 'Develop robust backend logic and reliable API workflows for production-oriented systems.',
  },
  {
    icon: 'bi-cpu-fill',
    title: 'LLM / AI Systems',
    desc: 'RAG pipelines, prompt engineering, and context-aware LLM application architectures.',
  },
];

const SKILLS = [
  {
    icon: 'bi-diagram-3-fill',
    title: 'Automation',
    pills: ['n8n', 'Webhook Orchestration', 'CI/CD', 'Process Mapping', 'Task Elimination'],
  },
  {
    icon: 'bi-hdd-network-fill',
    title: 'Backend & APIs',
    pills: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'Business Logic'],
  },
  {
    icon: 'bi-robot',
    title: 'AI & ML',
    pills: ['Machine Learning', 'Scikit-learn', 'TensorFlow', 'NLP', 'Computer Vision', 'RAG', 'LangChain', 'LangGraph'],
  },
  {
    icon: 'bi-tools',
    title: 'Tools',
    pills: ['Git & GitHub', 'Postman', 'OpenAI APIs', 'Gemini APIs', 'SQL', 'MongoDB', 'Qdrant'],
  },
];

const ABOUT_STRENGTHS = [
  {
    icon: 'bi-bullseye',
    title: 'Automation-First Mindset',
    desc: 'Every manual process is an automation opportunity.',
  },
  {
    icon: 'bi-wrench-adjustable',
    title: 'Backend & RAG Pipelines',
    desc: 'API workflows and vector retrieval systems.',
  },
  {
    icon: 'bi-bar-chart-fill',
    title: 'Business-Aligned Execution',
    desc: 'Measurable, outcome-driven delivery.',
  },
];

const CONTACT_ITEMS = [
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    val: 'nachiketshinde2004@gmail.com',
    href: 'mailto:nachiketshinde2004@gmail.com',
  },
  {
    icon: 'bi-telephone-fill',
    label: 'Phone',
    val: '+91 87660 55949',
    href: 'tel:+918766055949',
  },
  {
    icon: 'bi-geo-alt-fill',
    label: 'Location',
    val: 'Chhatrapati Sambhajinagar, Maharashtra',
    href: null,
  },
];

/* ─── Particles ─── */
function useParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186,158,255,${d.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return canvasRef;
}

/* ─── Scroll Reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset['aosDelay'] ? parseInt(el.dataset['aosDelay']) : 0;
            const dir = el.dataset['aos'] ?? 'fade-up';
            setTimeout(() => {
              el.style.opacity = '1';
              el.classList.add(`aos-${dir}`);
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Scroll Progress ─── */
function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      setPct((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pct;
}

/* ─── Nav scroll ─── */
function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return scrolled;
}

/* ─── Counter animation ─── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const step = Math.ceil(to / 30);
        const timer = setInterval(() => {
          start += step;
          if (start >= to) { setVal(to); clearInterval(timer); }
          else setVal(start);
        }, 40);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── App ─── */
export default function App() {
  const [filter, setFilter] = useState<Category>('All');
  const [navOpen, setNavOpen] = useState(false);
  const [contact, setContact] = useState({
    name: '', email: '', projectType: 'Automation project', message: '',
  });
  const [submitMsg, setSubmitMsg] = useState('');

  const canvasRef = useParticles();
  const scrollPct = useScrollProgress();
  const navScrolled = useNavScroll();
  useScrollReveal();

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      setSubmitMsg('Please fill all required fields.');
      return;
    }

    setSubmitMsg('Sending message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: contact.name,
          email: contact.email,
          subject: `[Portfolio] ${contact.projectType}`,
          message: contact.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMsg('Message sent successfully! I will get back to you soon.');
        setContact({ name: '', email: '', projectType: 'Automation project', message: '' });
      } else {
        setSubmitMsg(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitMsg('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      {/* Floating particle background */}
      <canvas ref={canvasRef} id="particle-canvas" />

      {/* ══════════════ NAVBAR ══════════════ */}
      <nav className={`p-nav${navScrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="nav-brand" href="#hero">
            <span className="nav-brand-pill">NS</span>
            <span className="nav-brand-name">Nachiket Shinde</span>
          </a>

          <ul className={`nav-links${navOpen ? ' open' : ''}`}>
            {['about', 'skills', 'projects', 'experience', 'achievements', 'contact'].map(id => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setNavOpen(false)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-resume-btn" href="/Nachiket_Shinde_Resume.pdf" download>
            <i className="bi bi-download" /> Resume
          </a>

          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setNavOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <main>
        {/* ══════════════ HERO ══════════════ */}
        <section id="hero">
          <div className="container">
            <div className="hero-grid">

              {/* Left Column */}
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Available for opportunities
                </div>

                <h1 className="hero-title">
                  I Build <span className="grad-text">AI Systems</span><br />
                  That Actually Work.
                </h1>

                <p className="hero-subtitle">
                  AI/ML pipelines, LLM-powered apps, backend APIs, and intelligent
                  automation systems — converting complex requirements into reliable,
                  scalable execution.
                </p>

                <div className="hero-tags">
                  {['AI/ML Engineer', 'Automation Builder', 'Backend Dev', 'RAG & LLMs'].map(t => (
                    <span key={t} className="hero-tag">{t}</span>
                  ))}
                </div>

                <div className="hero-actions">
                  <a className="btn-primary" href="#projects">
                    <i className="bi bi-grid-3x3-gap-fill" /> View Projects
                  </a>
                  <a className="btn-ghost" href="/Nachiket_Shinde_Resume.pdf" download>
                    <i className="bi bi-download" /> Download Resume
                  </a>
                </div>

                <div className="hero-social">
                  {[
                    { href: 'https://github.com/Nachiket858', icon: 'bi-github', label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/nachiket-shinde2004', icon: 'bi-linkedin', label: 'LinkedIn' },
                    { href: 'mailto:nachiketshinde2004@gmail.com', icon: 'bi-envelope-fill', label: 'Email' },
                  ].map(s => (
                    <a key={s.label} className="social-chip" href={s.href} target="_blank" rel="noreferrer">
                      <i className={`bi ${s.icon}`} /> {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="hero-right">
                <div className="profile-ring-wrap float-1">
                  <img
                    src="/nachiket-shinde-profile.jpg"
                    alt="Nachiket Shinde"
                    className="profile-photo"
                    loading="eager"
                  />
                </div>

                <div className="hero-stats-grid">
                  {[
                    { value: 7, suffix: '+', label: 'Projects Built', icon: 'bi-folder-fill' },
                    { value: 3, suffix: '+', label: 'AI/ML Apps', icon: 'bi-cpu-fill' },
                    { value: 2, suffix: '', label: 'Certifications', icon: 'bi-patch-check-fill' },
                    { value: 1, suffix: '', label: 'Research Paper', icon: 'bi-file-earmark-text-fill' },
                  ].map((s, i) => (
                    <div key={i} className={`stat-card float-${(i % 3) + 1}`}>
                      <i className={`bi ${s.icon} stat-icon`} />
                      <span className="stat-value"><Counter to={s.value} suffix={s.suffix} /></span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════ ABOUT ══════════════ */}
        <section id="about">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">About Me</p>
              <h2 className="sec-title">Automation-First Developer<br />with Real Execution Ownership</h2>
            </div>

            <div className="about-grid">
              <div className="glass-card" data-aos="fade-right" data-aos-delay="100">
                <p className="sec-eyebrow" style={{ marginBottom: '1rem' }}>Who I Am</p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  I'm Nachiket Bhagaji Shinde — an AI/ML-focused developer who builds practical
                  systems around automation, retrieval, and backend intelligence. My work blends
                  Python engineering, n8n workflow design, API integration, and prompt-controlled
                  LLM pipelines.
                </p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 0 }}>
                  One goal: convert business requirements into reliable systems that improve speed,
                  decision quality, and execution consistency.
                </p>
              </div>

              <div className="glass-card" data-aos="fade-left" data-aos-delay="200">
                <p className="sec-eyebrow" style={{ marginBottom: '1rem' }}>Core Strengths</p>
                {ABOUT_STRENGTHS.map(s => (
                  <div key={s.title} className="strength-item">
                    <div className="strength-icon">
                      <i className={`bi ${s.icon}`} />
                    </div>
                    <div>
                      <div className="strength-title">{s.title}</div>
                      <div className="strength-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ SKILLS ══════════════ */}
        <section id="skills">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">Skills</p>
              <h2 className="sec-title">Focused Stack for<br />Automation & Backend Delivery</h2>
            </div>
            <div className="skills-grid">
              {SKILLS.map((cat, i) => (
                <article
                  key={cat.title}
                  className="glass-card"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 80}`}
                >
                  <div className="skill-cat-title">
                    <i className={`bi ${cat.icon} skill-cat-icon`} />
                    {cat.title}
                  </div>
                  <div className="skill-pills">
                    {cat.pills.map(p => (
                      <span key={p} className="skill-pill">{p}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ PROJECTS ══════════════ */}
        <section id="projects">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">Projects</p>
              <h2 className="sec-title">Impact-Oriented Builds</h2>
              <p className="sec-subtitle">Real problems. Real solutions. Measurable results.</p>
            </div>

            <div className="filter-bar" data-aos="fade-up" data-aos-delay="80">
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
                  className="project-card"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 60}`}
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

                  {(p.github || p.demo) && (
                    <div className="project-links">
                      {p.github && (
                        <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
                          <i className="bi bi-github" /> Source Code
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

            <div className="projects-more" data-aos="fade-up">
              <a className="btn-ghost" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
                <i className="bi bi-github" /> All Repositories on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ EXPERIENCE ══════════════ */}
        <section id="experience">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">Experience</p>
              <h2 className="sec-title">Execution with Real Ownership</h2>
            </div>

            <div className="timeline">
              {EXPERIENCE.map((item, i) => (
                <div
                  key={item.role}
                  className="tl-item"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 120}`}
                >
                  <span className="tl-period">
                    <i className="bi bi-calendar3" /> {item.period}
                  </span>
                  <h3 className="tl-role">{item.role}</h3>
                  <p className="tl-company">
                    <i className="bi bi-building" /> {item.company}
                  </p>
                  <ul className="tl-points">
                    {item.points.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ACHIEVEMENTS ══════════════ */}
        <section id="achievements">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">Achievements</p>
              <h2 className="sec-title">Credentials That Matter</h2>
            </div>

            <div className="achievements-grid">
              {ACHIEVEMENTS.map((a, i) => (
                <article
                  key={a.title}
                  className="glass-card ach-card"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 100}`}
                >
                  <div className="ach-icon-wrap">
                    <i className={`bi ${a.icon}`} />
                  </div>
                  <div>
                    <div className="ach-title">{a.title}</div>
                    <div className="ach-desc">{a.desc}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ SERVICES ══════════════ */}
        <section id="services">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">Services</p>
              <h2 className="sec-title">What I Can Deliver</h2>
            </div>
            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  className="glass-card service-card"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 100}`}
                >
                  <div className="svc-icon-wrap">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CONTACT ══════════════ */}
        <section id="contact">
          <div className="container">
            <div data-aos="fade-up">
              <p className="sec-eyebrow">Contact</p>
              <h2 className="sec-title">Let's Build Something<br />That Moves the Needle</h2>
            </div>

            <div className="contact-grid">
              {/* Left — info */}
              <div className="contact-info-block" data-aos="fade-right" data-aos-delay="100">
                {CONTACT_ITEMS.map(item =>
                  item.href ? (
                    <a key={item.label} className="contact-item" href={item.href}>
                      <div className="contact-item-icon">
                        <i className={`bi ${item.icon}`} />
                      </div>
                      <div>
                        <div className="contact-item-label">{item.label}</div>
                        <div className="contact-item-val">{item.val}</div>
                      </div>
                    </a>
                  ) : (
                    <div key={item.label} className="contact-item" style={{ cursor: 'default' }}>
                      <div className="contact-item-icon">
                        <i className={`bi ${item.icon}`} />
                      </div>
                      <div>
                        <div className="contact-item-label">{item.label}</div>
                        <div className="contact-item-val">{item.val}</div>
                      </div>
                    </div>
                  )
                )}

                <div className="contact-socials">
                  {[
                    { href: 'https://github.com/Nachiket858', label: 'GitHub', icon: 'bi-github' },
                    { href: 'https://www.linkedin.com/in/nachiket-shinde2004', label: 'LinkedIn', icon: 'bi-linkedin' },
                    { href: '/Nachiket_Shinde_Resume.pdf', label: 'Resume', icon: 'bi-file-person-fill', download: true },
                  ].map(s => (
                    <a
                      key={s.label}
                      className="contact-social-btn"
                      href={s.href}
                      target={s.download ? undefined : '_blank'}
                      rel="noreferrer"
                      download={s.download}
                    >
                      <i className={`bi ${s.icon}`} /> {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right — form */}
              <div data-aos="fade-left" data-aos-delay="150">
                <form className="glass-card contact-form" onSubmit={onSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-name">
                        <i className="bi bi-person-fill" /> Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        className="form-input"
                        value={contact.name}
                        onChange={e => setContact({ ...contact, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">
                        <i className="bi bi-envelope-fill" /> Email *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        className="form-input"
                        value={contact.email}
                        onChange={e => setContact({ ...contact, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-type">
                      <i className="bi bi-tag-fill" /> Project Type
                    </label>
                    <select
                      id="c-type"
                      className="form-select"
                      value={contact.projectType}
                      onChange={e => setContact({ ...contact, projectType: e.target.value })}
                    >
                      <option>Automation project</option>
                      <option>Backend/API system</option>
                      <option>AI/ML implementation</option>
                      <option>Freelance collaboration</option>
                      <option>Full-time opportunity</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-msg">
                      <i className="bi bi-chat-left-text-fill" /> Message *
                    </label>
                    <textarea
                      id="c-msg"
                      className="form-textarea"
                      value={contact.message}
                      onChange={e => setContact({ ...contact, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>

                  {submitMsg && <div className="submit-msg"><i className="bi bi-check-circle-fill" /> {submitMsg}</div>}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <button type="submit" className="btn-primary">
                      <i className="bi bi-send-fill" /> Send Inquiry
                    </button>
                    <span className="submit-note">
                      <i className="bi bi-shield-lock-fill" /> Securely delivered directly to my inbox via Web3Forms.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer>
        <div className="container footer-inner">
          <p className="footer-copy">
            <i className="bi bi-c-circle" /> {new Date().getFullYear()} Nachiket Shinde
            &nbsp;&middot;&nbsp; AI/ML Engineer &nbsp;&middot;&nbsp; Automation & Backend Systems
          </p>
          <div className="footer-links">
            <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
              <i className="bi bi-github" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin" /> LinkedIn
            </a>
            <a href="mailto:nachiketshinde2004@gmail.com">
              <i className="bi bi-envelope-fill" /> Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
