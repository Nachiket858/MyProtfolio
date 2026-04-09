'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const step = Math.ceil(to / 30);
        const timer = setInterval(() => {
          start += step;
          if (start >= to) {
            setVal(to);
            clearInterval(timer);
          } else {
            setVal(start);
          }
        }, 40);
        obs.disconnect();
      }
    });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
