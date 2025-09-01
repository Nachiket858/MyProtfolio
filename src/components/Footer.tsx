import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <p className="text-gray-100 text-sm">
              Transforming ideas into reality through code, design, and innovation.
            </p>
          </div>
        </div>

        {/* Fixed Section */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-center space-x-2 text-gray-400 text-sm">
          <span>Made with</span>
          <Heart className="text-red-500" size={16} />
          <span>and</span>
          <Code className="text-cyan-400" size={16} />
          <span className="text-white">by Nachiket Shinde</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
