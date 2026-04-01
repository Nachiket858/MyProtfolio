import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import PageMeta from '../components/PageMeta';

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact | Nachiket Shinde"
        description="Contact Nachiket Shinde for AI automation, ML development, and startup product collaborations."
      />

      <section className="space-y-6">
        <p className="section-kicker">Let’s Work Together</p>
        <h1 className="section-title-light">Open to recruiter roles, client projects, and collaborations</h1>
        <p className="max-w-2xl text-slate-600">
          If you need an engineer who can build AI systems, automate operations, and deliver full-stack products quickly,
          I’d love to connect.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <a className="card-hover inline-flex items-center gap-2" href="mailto:nachiketshinde2004@gmail.com">
            <Mail className="h-4 w-4" /> nachiketshinde2004@gmail.com
          </a>
          <a className="card-hover inline-flex items-center gap-2" href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a className="card-hover inline-flex items-center gap-2" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a className="card-hover inline-flex items-center gap-2" href="https://pypi.org/user/nachiket/" target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" /> PyPI Profile
          </a>
        </div>
      </section>
    </>
  );
}
