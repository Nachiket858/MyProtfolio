import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';
import dhaImg from "../images/dhaImg.png"
import senti from "../images/SentifyImg.jpg"
import pycode from "../images/pycodml.png"
import sum from "../images/yt_summarizer.png"
import loan from "../images/loan_elgi.png"

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<null | any>(null);
const projects = [
  {
    id: 1,
    title: 'Sentify',
    description: 'AI-powered emotion detection web application that analyzes facial expressions to identify emotions in real-time and suggest personalized activities.',
    image: senti,
    tech: ['Flask', 'DeepFace', 'Haar Cascade', 'Google Gemini API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Nachiket858/Project-Sentify---Emotion-Detection-and-Activity-Suggestion',
    featured: false,
  },
   {
    id: 2,
    title: 'PyCodeML',
    description: 'Python package that automates regression, classification, and clustering model training, evaluation, hyperparameter tuning, and selection.',
    image: pycode,
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    github: 'https://github.com/Nachiket858/PyCodeML',
    live: 'https://pypi.org/project/pycodeml/',
     featured: false,
  },
  {
    id: 3,
    title: 'Dream House Architecture',
    description: 'AI-powered platform to generate photorealistic 3D floor plans from user inputs with authentication, design gallery, and OpenAI integration.',
    image: dhaImg,
    tech: ['Flask', 'MongoDB', 'OpenAI API', 'Jinja2', 'Flask-Login'],
    github: 'https://github.com/Nachiket858/Dream-house-architecture-',
    live: '#',
     featured: false,
  },
  {
    id: 4,
    title: 'Podcast Summarizer',
    description: 'NLP-based project that transcribes and summarizes podcasts, providing key takeaways for quick understanding.',
    image: sum,
    tech: ['Python', 'Speech-to-Text', 'NLP', 'Transformers'],
    github: 'https://github.com/Nachiket858/Podcast_Summarizer',
    live: '#',
    featured: false,
  },
 
  {
    id: 5,
    title: 'Face Voting System',
    description: '',
    // image: faceVoteImg,
    tech: ['Flask', 'python', 'MongoDB','js','OpenCv' ],
    github: 'https://github.com/Nachiket858/face_voting_system',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Loan Eligibility',
    description: 'A machine learning project that predicts loan eligibility based on applicant details like income, credit history, and employment status.',
    image: loan,
    tech: ['Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'HTML', 'CSS', 'gemini'],
    github: 'https://github.com/Nachiket858/Loan_Eligibility_flask',
    live: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'Chatbot Assistant',
    description: '',
    // image: chatbotImg,
    tech: ['Langchain', ' Flask','python','Gemini', 'vector database'],
    github: '',
    live: '#',
    featured: false,
  },
 
  
];


  

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Projects<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing innovative solutions and cutting-edge implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'} interactive`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-400/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-cyan-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
              


              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Links</h4>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={20} />
                        <span>View Source Code</span>
                      </a>
                      <a
                        href={selectedProject.live}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;