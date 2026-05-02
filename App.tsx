
import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { PROJECTS, SKILLS, NAV_ITEMS } from './constants';
import ProjectModal from './components/ProjectModal';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-serif font-bold tracking-tight">
            ALEX <span className="text-blue-600">REED</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all"
            >
              Hire Me
            </a>
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-60 md:pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase">
            Product Designer based in San Francisco
          </div>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            Designing <span className="italic text-gray-400">meaningful</span> digital experiences.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-12">
            I help companies build products that users love, combining deep research with clean, functional design. 10+ years of solving complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-gray-900 text-white px-10 py-4 rounded-full font-medium hover:bg-black transition-all">
              View Work
            </a>
            <a href="#about" className="px-10 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all">
              My Story
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 bg-[#F1F3F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-serif mb-4">Selected Works</h2>
              <p className="text-gray-500">A showcase of passion projects and enterprise solutions.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-bold border-b-2 border-black pb-1">All Work</span>
              <span className="text-sm font-medium text-gray-400 hover:text-black cursor-pointer pb-1 transition-colors">Mobile</span>
              <span className="text-sm font-medium text-gray-400 hover:text-black cursor-pointer pb-1 transition-colors">Web</span>
              <span className="text-sm font-medium text-gray-400 hover:text-black cursor-pointer pb-1 transition-colors">Strategy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div 
                key={project.id} 
                className={`group cursor-pointer ${index % 3 === 1 ? 'lg:translate-y-12' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 mb-6 shadow-sm transition-transform duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Project
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{project.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div id="skills" className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">What I bring <br/><span className="italic text-gray-400">to the table.</span></h2>
              <div className="space-y-8">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-900 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/600/800?random=11" alt="Alex working" className="w-full h-auto" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full -z-0 blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-200 rounded-full -z-0 blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Have an idea? <br/> <span className="text-gray-400">Let’s build it.</span></h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            I’m currently available for freelance projects and consulting roles.
          </p>
          <a href="mailto:hello@alexreed.ux" className="text-2xl md:text-4xl font-medium border-b-2 border-blue-500 pb-2 hover:text-blue-400 transition-colors">
            hello@alexreed.ux
          </a>
          
          <div className="mt-24 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-gray-500">
              © 2024 Alex Reed. Built with Passion & Caffeine.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Dribbble</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
