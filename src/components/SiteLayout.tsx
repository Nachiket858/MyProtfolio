import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { NavAnchor, usePathname } from './simpleRouter';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Case Studies' },
  { to: '/about', label: 'Brand' },
  { to: '/contact', label: 'Contact' },
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.16),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(20,184,166,0.12),transparent_35%)]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <NavAnchor
            to="/"
            className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wide text-slate-900 transition hover:opacity-80"
            aria-label="Nachiket Shinde — Home"
          >
            <span className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-1.5 text-white shadow-md shadow-blue-200/60">
              <Bot className="h-4 w-4" aria-hidden="true" />
            </span>
            Nachiket Shinde
          </NavAnchor>

          {/* Desktop nav pills */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <NavAnchor
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-200/60'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </NavAnchor>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:nachiketshinde2004@gmail.com"
              className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-sm sm:inline-flex"
            >
              Let's Build
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-700 md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <NavAnchor
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </NavAnchor>
                  );
                })}
                <a
                  href="mailto:nachiketshinde2004@gmail.com"
                  className="mt-1 rounded-xl border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700"
                >
                  Let's Build
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-slate-900">
              AI/ML Engineer · Automation Developer · Startup Builder
            </p>
            <p className="mt-0.5">© {new Date().getFullYear()} Nachiket Shinde · All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="footer-icon"
              href="https://github.com/Nachiket858"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              className="footer-icon"
              href="https://www.linkedin.com/in/nachiket-shinde2004"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              className="footer-icon"
              href="mailto:nachiketshinde2004@gmail.com"
              aria-label="Send email"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
