import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import PageMeta from '../components/PageMeta';

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact | Nachiket Shinde"
        description="Contact Nachiket Shinde for AI development, machine learning, and generative AI project collaboration."
      />
      <section className="space-y-6">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Contact</h1>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Open to AI product development, freelance collaborations, internships, and full-time opportunities.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <a className="card project-link" href="mailto:nachiketshinde2004@gmail.com">
            <Mail className="h-4 w-4" /> nachiketshinde2004@gmail.com
          </a>
          <a className="card project-link" href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a className="card project-link" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a className="card project-link" href="https://pypi.org/user/nachiket/" target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" /> PyPI Profile
          </a>
        </div>
      </section>
    </>
  );
}
