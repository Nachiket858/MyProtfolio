import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 87 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        
      ],
    },
    {
      title: 'Backend & ML',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Flask', level: 85 },
        { name: 'Machine Learning ', level: 80 },
        { name: 'Deep Learning ', level: 80 },
       
      ],
    },
    {
      title: 'Databases',
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Vector DB (Qdrant/Pinecone)', level: 82 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: 'Cloud & AI',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Generative AI', level: 95 },
        { name: 'LangChain', level: 85 },
        { name: 'LangGraph', level: 85 },
      ],
    },
    {
      title: 'Tools & DevOps',
      color: 'from-yellow-400 to-amber-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 80 },
        { name: 'N8N', level: 60 },
       
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Skills<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies, tools, and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center">
                <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                  <div className="w-8 h-8 bg-black rounded-full" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
