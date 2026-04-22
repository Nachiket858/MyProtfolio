import type { Metadata } from 'next';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'Experience & Education | Nachiket Shinde',
  description:
    'Professional experience and educational background of Nachiket Shinde — Software Developer at Mountreach Solutions and B.Tech CSE graduate specialising in AI/ML and backend systems.',
  alternates: {
    canonical: `${BASE_URL}/experience`,
  },
  openGraph: {
    title: 'Experience & Education | Nachiket Shinde',
    description:
      'Software Developer at Mountreach Solutions. B.Tech CSE (CGPA 7.53). Specialising in AI/ML pipelines and backend API development.',
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
      'Software Developer at Mountreach Solutions. B.Tech CSE (CGPA 7.53). Specialising in AI/ML pipelines and backend API development.',
    images: [OG_IMAGE],
  },
};

// JSON-LD: BreadcrumbList — always shows as rich result in SERP
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nachiket.kodeneurons.in' },
    { '@type': 'ListItem', position: 2, name: 'Experience', item: 'https://nachiket.kodeneurons.in/experience' },
  ],
};

// JSON-LD: Person with occupation + education
const experienceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://nachiket.kodeneurons.in/#person',
  name: 'Nachiket Shinde',
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Remote, India',
      },
      description:
        'Mentored students in AI/ML and full-stack application development. Guided ML pipeline implementation and supported backend API development.',
      estimatedSalary: [],
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
    points: [
      'Built strong foundations in AI/ML, backend systems, and problem-solving. CGPA: 7.53 / 10.',
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
