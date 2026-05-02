
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MousePointer2, Zap, LayoutGrid, Film, PenTool, Menu, X, ArrowUpRight } from 'lucide-react';
import { Project } from './types';
import { PROJECTS, SKILLS, NAV_ITEMS } from './constants';
import ProjectModal from './components/ProjectModal';
import UXMentor from './components/UXMentor';

const iconMap: Record<string, React.ReactNode> = {
  'User Research': <Search size={20} />,
  'Interaction Design': <MousePointer2 size={20} />,
  'Prototyping': <Zap size={20} />,
  'Design Systems': <LayoutGrid size={20} />,
  'Motion Design': <Film size={20} />,
  'UX Writing': <PenTool size={20} />,
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-blue-200">
      {/* Background Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#" 
            className="text-2xl font-serif font-bold tracking-tighter"
          >
            ALEX <span className="text-blue-600">REED</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item.label} 
                href={item.href} 
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest px-2 py-1"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              href="#contact" 
              className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl p-2 glass rounded-xl"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full glass border-b p-6 flex flex-col gap-4"
            >
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-slate-900 text-white px-6 py-4 rounded-2xl text-center font-bold"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 glass rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-blue-700">
              Product Designer based in San Francisco
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter"
          >
            Designing <span className="italic text-slate-400/50">meaningful</span> <br className="hidden md:block" /> digital experiences.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-16 font-light"
          >
            I help companies build products that users love, combining deep research with clean, functional design. 10+ years of solving complex problems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <a href="#work" className="group bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl">
              View Work <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#about" className="glass px-12 py-5 rounded-2xl font-bold hover:bg-white/60 transition-all flex items-center gap-3">
              My Story
            </a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">Selected Works</h2>
              <p className="text-slate-500 text-lg">A showcase of passion projects and enterprise solutions.</p>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex gap-6 p-2 glass rounded-2xl"
            >
              {['All Work', 'Mobile', 'Web', 'Strategy'].map((tab, i) => (
                <button 
                  key={tab} 
                  className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all ${
                    i === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (index % 3) * 0.1 }}
                className={`group cursor-pointer ${index % 3 === 1 ? 'lg:translate-y-16' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-card overflow-hidden p-3 aspect-[4/5] mb-8">
                  <div className="w-full h-full overflow-hidden rounded-xl bg-slate-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="glass px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                        View Project <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 glass px-2 py-0.5 rounded-lg border-blue-200/30">{project.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-serif group-hover:text-blue-600 transition-colors tracking-tight">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Mentor Section */}
      <UXMentor />

      {/* Skills Section */}
      <section id="about" className="py-40 relative">
        <div id="skills" className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-16 rounded-[40px] shadow-2xl"
            >
              <h2 className="text-5xl font-serif mb-12 tracking-tight">What I bring <br/><span className="italic text-slate-400/40">to the table.</span></h2>
              <div className="space-y-10">
                {SKILLS.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                        <span className="p-2 glass rounded-lg text-blue-600">{iconMap[skill.name] || skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs font-black text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200/50 rounded-full overflow-hidden p-[2px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 1.5, ease: "circOut" }}
                        className="h-full bg-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                viewport={{ once: true }}
                className="relative z-10 glass p-4 rounded-[32px] overflow-hidden shadow-2xl transform hover:rotate-0 transition-all duration-700"
              >
                <img src="https://picsum.photos/600/800?random=11" alt="Alex working" className="w-full h-auto rounded-2xl" />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-400/20 rounded-full -z-0 blur-[120px] animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-purple-400/20 rounded-full -z-0 blur-[120px] animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative mt-20 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto glass p-16 md:p-32 rounded-[60px] text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
          
          <h2 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter leading-[1]">Have an idea? <br/> <span className="text-slate-400/40 italic">Let’s build it.</span></h2>
          <p className="text-slate-500 text-xl mb-16 max-w-xl mx-auto font-light">
            I’m currently available for freelance projects and consulting roles. Use the email below to reach out.
          </p>
          <a href="mailto:hello@alexreed.ux" className="relative text-3xl md:text-5xl font-serif font-bold text-blue-600 hover:text-blue-700 transition-colors group">
            hello@alexreed.ux
            <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-blue-200 origin-right transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
          
          <div className="mt-32 pt-16 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              © 2024 Alex Reed • Crafted with Glass & Code
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {['LinkedIn', 'Dribbble', 'Twitter', 'Instagram'].map(link => (
                <a key={link} href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </motion.div>
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
