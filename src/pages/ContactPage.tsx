import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

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

        <div className="grid gap-6 lg:grid-cols-2">
          <form action="https://api.web3forms.com/submit" method="POST" className="card-hover space-y-4">
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="New portfolio inquiry" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <h2 className="text-lg font-bold text-slate-900">Send a message</h2>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your role, project, or collaboration idea"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400"
            />
            <button type="submit" className="btn-primary">Send via Web3Forms</button>
            <p className="text-xs text-slate-500">Set <code>VITE_WEB3FORMS_ACCESS_KEY</code> in your environment for production form delivery.</p>
          </form>

          <div className="grid gap-4">
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
        </div>
      </section>
    </>
  );
}
