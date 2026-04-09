'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const doc = document.documentElement;
      setScrollPct((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <nav className={`p-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <span className="nav-brand-pill">NS</span>
            <span className="nav-brand-name">Nachiket Shinde</span>
          </Link>

          <ul className={`nav-links${navOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} onClick={() => setNavOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a className="nav-resume-btn" href="/Nachiket_Shinde_Resume.pdf" download>
            <i className="bi bi-download" /> Resume
          </a>

          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}