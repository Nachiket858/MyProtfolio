'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset AOS classes on elements when pathname changes to let them animate again
    document.querySelectorAll('.aos-fade-up, .aos-fade-right, .aos-fade-left').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      el.classList.remove('aos-animate');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = '1';
            el.classList.add('aos-animate');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Give a tiny timeout for Next.js to render the new route DOM elements
    setTimeout(() => {
      document.querySelectorAll('.aos-fade-up, .aos-fade-right, .aos-fade-left').forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
