import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ParticleBackground />
      
      {/* Floating Avatar Effect */}
      <div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 opacity-20 blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      <div className="text-center z-10 px-4">
        {/* Name */}
        <div className="mb-8">
          <GlitchText
            text="NACHIKET SHINDE"
            className="text-6xl md:text-8xl font-bold font-mono bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          />
        </div>

        {/* Tagline */}
        <div className="mb-8 overflow-hidden">
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up font-light tracking-wide">
            Building Intelligent Systems with Code & AI
          </p>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            AI & Full-stack developer passionate about creating innovative solutions with 
            <span className="text-cyan-400"> Python</span>, 
            <span className="text-purple-400"> Machine Learning</span>, and 
            <span className="text-pink-400"> Generative AI</span>.  
          
            experienced with Flask, LangChain, LangGraph, and Machine Learning applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/Nachiket858', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/nachiket-shinde2004', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:nachiketshinde2004@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/20 backdrop-blur-sm rounded-full border border-cyan-400/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 interactive group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={scrollToAbout}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-black font-semibold text-lg overflow-hidden interactive"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Hero;
