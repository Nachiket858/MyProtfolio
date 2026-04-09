import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Nachiket Shinde',
  description: 'Professional experience and real execution ownership in software development, backend systems, and AI model implementations.',
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
    points: ['Built strong foundations in AI/ML, backend systems, and problem-solving. CGPA: 7.53 / 10.'],
  },
];

export default function ExperiencePage() {
  return (
    <section id="experience" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="aos-fade-up">
          <p className="sec-eyebrow">Experience</p>
          <h2 className="sec-title">Execution with Real Ownership</h2>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <div
              key={item.role}
              className="tl-item aos-fade-up"
              style={{ transitionDelay: `${i * 120}ms` }}
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
  );
}
