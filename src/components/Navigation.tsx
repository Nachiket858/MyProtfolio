

// import React, { useState, useEffect } from 'react';
// import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

// const Navigation: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   const navItems = [
//     { id: 'hero', label: 'Home', icon: Home },
//     { id: 'about', label: 'About', icon: User },
//     { id: 'skills', label: 'Skills', icon: Code },
//     { id: 'projects', label: 'Projects', icon: Briefcase },
//     { id: 'contact', label: 'Contact', icon: Mail },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => document.getElementById(item.id));
//       const scrollPosition = window.scrollY + window.innerHeight / 2;

//       sections.forEach((section, index) => {
//         if (section) {
//           const { offsetTop, offsetHeight } = section;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(navItems[index].id);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Desktop Navigation (TOP NAV) */}
//       <nav className="fixed top-0 left-0 w-full z-40 hidden lg:block">
// <div className="flex justify-center space-x-6 bg-black/30 backdrop-blur-md border-b border-cyan-400/20 py-4 px-6">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
//                 activeSection === item.id
//                   ? 'bg-cyan-400/20 text-cyan-400'
//                   : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10'
//               }`}
//             >
//               <item.icon size={18} />
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Mobile Navigation (same burger menu as before) */}
//       <div className="lg:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="fixed top-6 right-6 z-50 p-3 bg-black/20 backdrop-blur-md rounded-full border border-cyan-400/20 text-cyan-400 interactive"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {isOpen && (
//           <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg">
//             <div className="flex flex-col items-center justify-center h-full space-y-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="flex items-center space-x-4 text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300 interactive"
//                 >
//                   <item.icon size={28} />
//                   <span>{item.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navigation;











import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar backdrop
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-xl border-b border-cyan-400/10 shadow-lg shadow-cyan-400/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-400 shadow-lg shadow-cyan-400/20'
                      : 'text-gray-400 hover:text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-all duration-300 ${
                    activeSection === item.id ? 'rotate-6 scale-110' : 'group-hover:rotate-3'
                  }`} />
                  <span className="font-medium tracking-wide">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-300 -z-10" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full border transition-all duration-300 transform md:hidden ${
          isOpen
            ? 'bg-cyan-400/20 border-cyan-400/40 text-cyan-400 rotate-90 scale-110 shadow-lg shadow-cyan-400/20'
            : 'bg-black/20 backdrop-blur-md border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 hover:scale-105'
        }`}
      >
        <div className="relative w-6 h-6">
          <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          }`} />
          <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`} />
        </div>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isOpen 
          ? 'bg-black/80 backdrop-blur-xl opacity-100 visible' 
          : 'bg-black/0 backdrop-blur-none opacity-0 invisible'
      }`}>
        
        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl border-l border-cyan-400/20 shadow-2xl shadow-cyan-400/10 transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Menu Header */}
          <div className="pt-20 pb-8 px-8 border-b border-cyan-400/20">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto animate-pulse" />
          </div>
          
          {/* Menu Items */}
          <div className="py-8 px-8 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-400 shadow-lg shadow-cyan-400/20 translate-x-2'
                      : 'text-gray-400 hover:text-cyan-300 hover:bg-white/5 hover:translate-x-1'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-cyan-400/20 shadow-md shadow-cyan-400/30' 
                      : 'bg-white/5 group-hover:bg-cyan-400/10'
                  }`}>
                    <Icon className={`w-5 h-5 transition-all duration-300 ${
                      activeSection === item.id ? 'rotate-6 scale-110' : 'group-hover:rotate-3'
                    }`} />
                  </div>
                  <span className="text-lg font-medium tracking-wide">{item.label}</span>
                  
                  {/* Active indicator for mobile */}
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">
              Navigation
            </div>
            <div className="mt-2 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto" />
          </div>
        </div>
      </div>

      {/* Click outside to close mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;