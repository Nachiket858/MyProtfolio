import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, MoonStar } from 'lucide-react';
import { NavAnchor, usePathname } from './simpleRouter';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_45%)]" />
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <NavAnchor to="/" className="flex items-center gap-2 text-sm font-bold tracking-wide text-blue-700 dark:text-blue-300">
            <Brain className="h-4 w-4" /> Nachiket Shinde
          </NavAnchor>
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 dark:border-slate-800 dark:bg-slate-900/70">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <NavAnchor
                  key={item.to}
                  to={item.to}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    isActive ? 'bg-blue-600 text-white dark:bg-blue-500' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </NavAnchor>
              );
            })}
          </div>
          <MoonStar className="h-4 w-4 text-slate-400" />
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6"
      >
        {children}
      </motion.main>

      <footer className="border-t border-slate-200/70 bg-white/70 py-8 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center dark:text-slate-300">
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100">AI Developer Portfolio</p>
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
