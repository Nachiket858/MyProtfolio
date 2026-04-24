import type { Metadata } from 'next';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'Experience & Education | Nachiket Shinde',
  description:
    'Professional experience of Nachiket Shinde — Associate Developer Intern at Idyllic Services (AI Recruiter Automation) and Software Developer at Mountreach Solutions. B.Tech CSE graduate specialising in AI/ML.',
  keywords: [
    'Nachiket Shinde experience',
    'AI developer internship',
    'Idyllic Services intern',
    'Mountreach Solutions developer',
    'AI recruiter automation',
    'machine learning engineer India',
    'B.Tech CSE AI ML',
  ],
  alternates: {
    canonical: `${BASE_URL}/experience`,
  },
  openGraph: {
    title: 'Experience & Education | Nachiket Shinde',
    description:
      'Associate Developer Intern at Idyllic Services (AI Recruiter Automation Suite). Previously Software Developer at Mountreach Solutions. B.Tech CSE, CGPA 7.53.',
    url: `${BASE_URL}/experience`,
    siteName: 'Nachiket Shinde Portfolio',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Nachiket Shinde — Experience' }],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience & Education | Nachiket Shinde',
    description:
      'Associate Developer Intern at Idyllic Services (AI Recruiter Automation). Previously Software Developer at Mountreach Solutions. B.Tech CSE, CGPA 7.53.',
    images: [OG_IMAGE],
  },
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Experience', item: `${BASE_URL}/experience` },
  ],
};

// JSON-LD: Person with both occupations + education
const experienceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Nachiket Shinde',
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Associate Developer Intern',
      occupationLocation: { '@type': 'Organization', name: 'Idyllic Services' },
      description:
        'Developing an AI-based Recruiter Automation Suite. Built candidate filtering, scoring, and shortlisting pipelines using semantic and rule-based methods.',
      startDate: '2026-01',
    },
    {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: { '@type': 'City', name: 'Remote, India' },
      description:
        'Mentored students in AI/ML and full-stack development. Guided ML pipeline implementation and backend API integration.',
      startDate: '2025-06',
      endDate: '2025-12',
    },
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'CSMSS Chh. Shahu College of Engineering',
      url: 'https://csmss.edu.in',
    },
  ],
};

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  badge?: string;
  points: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jan 2026 – Present',
    role: 'Associate Developer Intern',
    company: 'Idyllic Services',
    badge: 'Current',
    points: [
      'Developing an AI-based Recruiter Automation Suite to streamline end-to-end hiring workflows.',
      'Built pipelines to collect, filter, and rank candidate profiles using rule-based and semantic methods.',
      'Designed candidate scoring and shortlisting logic based on skills and role-fit criteria.',
      'Implemented automation workflows to significantly reduce manual intervention in recruitment processes.',
    ],
  },
  {
    period: 'June 2025 – Dec 2025',
    role: 'Software Developer',
    company: 'Mountreach Solutions (Remote)',
    points: [
      'Mentored students in building AI/ML and full-stack applications.',
      'Guided implementation of machine learning pipelines including preprocessing, training, and evaluation.',
      'Provided support for backend API development and integration of ML systems.',
    ],
  },
  {
    period: '2022 – 2026',
    role: 'B.Tech, Computer Science & Engineering',
    company: 'CSMSS Chh. Shahu College of Engineering (DBATU)',
    points: [
      'Built strong foundations in AI/ML, computer vision, NLP, backend systems, and problem-solving.',
      'CGPA: 7.53 / 10.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section id="experience" style={{ paddingTop: '150px' }}>
      {/* JSON-LD for experience page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />
      {/* JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container">
        <div className="aos-fade-up">
          <p className="sec-eyebrow">Experience</p>
          <h1 className="sec-title">Execution with Real Ownership</h1>
          <p className="sec-subtitle">Building real AI systems — from internships to mentorship to research.</p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <div
              key={item.role}
              className="tl-item aos-fade-up"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="tl-period">
                <i className="bi bi-calendar3" aria-hidden="true" /> {item.period}
                {item.badge && (
                  <span style={{
                    marginLeft: '10px',
                    background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '20px',
                    letterSpacing: '0.05em',
                    verticalAlign: 'middle',
                  }}>
                    {item.badge}
                  </span>
                )}
              </span>
              <h2 className="tl-role">{item.role}</h2>
              <p className="tl-company">
                <i className="bi bi-building" aria-hidden="true" /> {item.company}
              </p>
              <ul className="tl-points">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
