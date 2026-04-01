import { motion } from 'framer-motion';
import { Bot, Github, Linkedin, Mail } from 'lucide-react';
import { NavAnchor, usePathname } from './simpleRouter';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Case Studies' },
  { to: '/about', label: 'Brand' },
  { to: '/contact', label: 'Contact' },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.2),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(20,184,166,0.14),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <NavAnchor to="/" className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wide text-slate-900">
            <span className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-1.5 text-white">
              <Bot className="h-4 w-4" />
            </span>
            Nachiket Shinde
          </NavAnchor>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <NavAnchor
                  key={item.to}
                  to={item.to}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </NavAnchor>
              );
            })}
          </div>

          <a
            href="mailto:nachiketshinde2004@gmail.com"
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            Let’s Build
          </a>
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
      >
        {children}
      </motion.main>

      <footer className="border-t border-slate-200/80 bg-white/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-slate-900">AI/ML Engineer • Automation Developer • Startup Builder</p>
            <p>© {new Date().getFullYear()} Nachiket Shinde</p>
          </div>
          <div className="flex items-center gap-3">
            <a className="footer-icon" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a className="footer-icon" href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a className="footer-icon" href="mailto:nachiketshinde2004@gmail.com" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
