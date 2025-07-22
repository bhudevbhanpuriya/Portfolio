import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/particles-background";
import TypingAnimation from "@/components/typing-animation";
import CounterAnimation from "@/components/counter-animation";
import SkillBar from "@/components/skill-bar";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('backdrop-blur-xl');
        } else {
          navbar.classList.remove('backdrop-blur-xl');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const typingTexts = [
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Code Architect'
  ];

  return (
    <div className="bg-space-darker text-starry-white font-sans overflow-x-hidden">
      <ParticlesBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-space-dark/80 backdrop-blur-lg border-b border-space-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-cyber-cyan">
              <span className="font-mono">&lt;Bhudev/&gt;</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyber-cyan transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-cyber-cyan transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-cyber-cyan transition-colors duration-300">Projects</a>
              <a href="#skills" className="hover:text-cyber-cyan transition-colors duration-300">Skills</a>
              <a href="#contact" className="hover:text-cyber-cyan transition-colors duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-starry-white hover:text-cyber-cyan transition-colors duration-300"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-space-dark/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block hover:text-cyber-cyan transition-colors duration-300">Home</a>
              <a href="#about" className="block hover:text-cyber-cyan transition-colors duration-300">About</a>
              <a href="#projects" className="block hover:text-cyber-cyan transition-colors duration-300">Projects</a>
              <a href="#skills" className="block hover:text-cyber-cyan transition-colors duration-300">Skills</a>
              <a href="#contact" className="block hover:text-cyber-cyan transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">
                Bhudev Bhanpuriya
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-mono mb-8">
              <TypingAnimation texts={typingTexts} />
            </div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer passionate about creating innovative digital experiences with modern technologies and clean, efficient code.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" className="bg-gradient-to-r from-cosmic-purple to-cosmic-light hover:from-cosmic-light hover:to-cyber-cyan px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-cyan/25">
              View My Work
            </a>
            <a href="#contact" className="border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-space-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/bhudevbhanpuriya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/bhudev-bhanpuriya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://leetcode.com/bhudev03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110">
              <i className="fas fa-code text-2xl"></i>
            </a>
            <a href="https://codeforces.com/profile/remiss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300 transform hover:scale-110">
              <i className="fas fa-trophy text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cyber-cyan mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-8 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-cyber-cyan">
                  <i className="fas fa-rocket mr-3"></i>Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Electrical and Electronics Engineering at IIIT Gwalior with a CGPA of 8.27. 
                  My journey in technology started with curiosity about how systems work, leading me to explore full-stack development and problem-solving through code.
                </p>
              </div>

              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-8 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-cyber-cyan">
                  <i className="fas fa-code mr-3"></i>Philosophy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in writing clean, efficient code that solves real-world problems. Every project is an opportunity to learn something new and push the boundaries of what's possible with technology.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Education Card */}
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-8 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-cyber-cyan">
                  <i className="fas fa-graduation-cap mr-3"></i>Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-cosmic-light pl-4">
                    <h4 className="text-lg font-semibold text-starry-white">Bachelor of Technology</h4>
                    <p className="text-cosmic-light font-medium">Electrical and Electronics Engineering</p>
                    <p className="text-gray-400">IIIT Gwalior • 2023-2027 • CGPA: 8.27</p>
                  </div>
                  <div className="border-l-4 border-cyber-cyan pl-4">
                    <h4 className="text-lg font-semibold text-starry-white">High School</h4>
                    <p className="text-cyber-cyan font-medium">CBSE - 94.40%</p>
                    <p className="text-gray-400">Kendriya Vidyalaya, Gail Jhabua • 2022</p>
                  </div>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-8 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-cyber-cyan">
                  <i className="fas fa-trophy mr-3"></i>Achievements
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cosmic-light mb-1">
                      <CounterAnimation target={400} suffix="+" />
                    </div>
                    <p className="text-sm text-gray-400">LeetCode Problems</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-cyan mb-1">Pupil</div>
                    <p className="text-sm text-gray-400">Codeforces</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cosmic-light mb-1">3⭐</div>
                    <p className="text-sm text-gray-400">CodeChef</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-cyan mb-1">
                      <CounterAnimation target={8.27} decimals={2} />
                    </div>
                    <p className="text-sm text-gray-400">CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cyber-cyan mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CRPTED Project */}
            <div className="group bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl overflow-hidden backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-cosmic-purple/40 to-cosmic-light/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fab fa-bitcoin text-6xl text-yellow-400 opacity-80"></i>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Full Stack</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-starry-white group-hover:text-cyber-cyan transition-colors duration-300">
                  CRPTED - Crypto Tracker
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Full-stack cryptocurrency tracking platform with real-time market data, news integration, and comprehensive dashboard for informed investment decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">React.js</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">MongoDB</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">REST API</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-cyan text-sm font-semibold">May 2025</span>
                  <div className="space-x-2">
                    <button className="text-gray-400 hover:text-cosmic-light transition-colors duration-300">
                      <i className="fab fa-github"></i>
                    </button>
                    <button className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather App Project */}
            <div className="group bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl overflow-hidden backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-500/40 to-cyan-400/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-cloud-sun text-6xl text-blue-300 opacity-80"></i>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">Frontend</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-starry-white group-hover:text-cyber-cyan transition-colors duration-300">
                  Weather App
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Responsive weather application with real-time updates, city search functionality, temperature conversion, and visually engaging interface design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">HTML</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">CSS</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">JavaScript</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">RapidAPI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-cyan text-sm font-semibold">Nov 2024</span>
                  <div className="space-x-2">
                    <button className="text-gray-400 hover:text-cosmic-light transition-colors duration-300">
                      <i className="fab fa-github"></i>
                    </button>
                    <button className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Car Showroom Project */}
            <div className="group bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl overflow-hidden backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-red-500/40 to-orange-400/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-car text-6xl text-red-300 opacity-80"></i>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">Backend</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-starry-white group-hover:text-cyber-cyan transition-colors duration-300">
                  Car Showroom DBMS
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  C++ database management system for car showroom operations using OOP principles, featuring modular organization and efficient data handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">C++</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">OOP</span>
                  <span className="bg-cosmic-purple/30 text-cosmic-light px-2 py-1 rounded text-xs">Database</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-cyan text-sm font-semibold">May 2024</span>
                  <div className="space-x-2">
                    <button className="text-gray-400 hover:text-cosmic-light transition-colors duration-300">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a href="https://github.com/bhudevbhanpuriya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-cosmic-purple to-cosmic-light hover:from-cosmic-light hover:to-cyber-cyan px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-cyan/25">
              <i className="fab fa-github mr-2"></i>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cyber-cyan mx-auto mb-8"></div>
          </div>

          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-cyber-cyan">
              <i className="fas fa-code mr-3"></i>Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 text-center backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fab fa-js-square text-4xl text-yellow-400 mb-3"></i>
                <h4 className="font-semibold text-starry-white">JavaScript</h4>
                <SkillBar percentage={90} className="mt-3" color="from-yellow-400 to-yellow-500" />
              </div>
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 text-center backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fab fa-python text-4xl text-blue-400 mb-3"></i>
                <h4 className="font-semibold text-starry-white">Python</h4>
                <SkillBar percentage={85} className="mt-3" color="from-blue-400 to-blue-500" />
              </div>
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 text-center backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fas fa-code text-4xl text-blue-300 mb-3"></i>
                <h4 className="font-semibold text-starry-white">C/C++</h4>
                <SkillBar percentage={88} className="mt-3" color="from-blue-300 to-blue-400" />
              </div>
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 text-center backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fab fa-html5 text-4xl text-orange-500 mb-3"></i>
                <h4 className="font-semibold text-starry-white">HTML/CSS</h4>
                <SkillBar percentage={92} className="mt-3" color="from-orange-500 to-red-500" />
              </div>
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 text-center backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fab fa-node text-4xl text-green-500 mb-3"></i>
                <h4 className="font-semibold text-starry-white">TypeScript</h4>
                <SkillBar percentage={80} className="mt-3" color="from-blue-600 to-blue-700" />
              </div>
            </div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-cyber-cyan">
              <i className="fas fa-cogs mr-3"></i>Frameworks & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <i className="fab fa-react text-3xl text-cyan-400 mr-4"></i>
                  <div>
                    <h4 className="text-lg font-semibold text-starry-white">React.js</h4>
                    <p className="text-sm text-gray-400">Frontend Library</p>
                  </div>
                </div>
                <SkillBar percentage={85} color="from-cyan-400 to-cyan-500" />
              </div>
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <i className="fab fa-node-js text-3xl text-green-500 mr-4"></i>
                  <div>
                    <h4 className="text-lg font-semibold text-starry-white">Node.js</h4>
                    <p className="text-sm text-gray-400">Backend Runtime</p>
                  </div>
                </div>
                <SkillBar percentage={80} color="from-green-500 to-green-600" />
              </div>
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl p-6 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <i className="fas fa-wind text-3xl text-teal-400 mr-4"></i>
                  <div>
                    <h4 className="text-lg font-semibold text-starry-white">Tailwind CSS</h4>
                    <p className="text-sm text-gray-400">CSS Framework</p>
                  </div>
                </div>
                <SkillBar percentage={90} color="from-teal-400 to-teal-500" />
              </div>
            </div>
          </div>

          {/* Tools & Databases */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-cyber-cyan">
              <i className="fas fa-tools mr-3"></i>Tools & Databases
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fab fa-git-alt text-4xl text-orange-500 mb-2"></i>
                <h4 className="font-semibold text-starry-white">Git</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fab fa-github text-4xl text-gray-300 mb-2"></i>
                <h4 className="font-semibold text-starry-white">GitHub</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fas fa-database text-4xl text-green-400 mb-2"></i>
                <h4 className="font-semibold text-starry-white">MongoDB</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-xl backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300 hover:transform hover:scale-105">
                <i className="fas fa-database text-4xl text-blue-500 mb-2"></i>
                <h4 className="font-semibold text-starry-white">MySQL</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cyber-cyan mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? Let's connect and build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-6 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-cyber-cyan/20 p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-cyber-cyan text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-starry-white">Email</h3>
                    <p className="text-gray-400">bhudevbhanp@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-6 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-cosmic-light/20 p-3 rounded-lg mr-4">
                    <i className="fas fa-phone text-cosmic-light text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-starry-white">Phone</h3>
                    <p className="text-gray-400">+91-8823085185</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-6 backdrop-blur-lg border border-space-blue/30 hover:border-cosmic-light/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-cosmic-purple/20 p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-cosmic-purple text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-starry-white">Location</h3>
                    <p className="text-gray-400">Gwalior, Madhya Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-6 backdrop-blur-lg border border-space-blue/30">
                <h3 className="text-lg font-semibold text-starry-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/bhudevbhanpuriya" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors duration-300">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href="https://linkedin.com/in/bhudev-bhanpuriya" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-colors duration-300">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="https://leetcode.com/bhudev03" target="_blank" rel="noopener noreferrer" className="bg-yellow-600 hover:bg-yellow-500 p-3 rounded-lg transition-colors duration-300">
                    <i className="fas fa-code text-xl"></i>
                  </a>
                  <a href="https://codeforces.com/profile/remiss" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 p-3 rounded-lg transition-colors duration-300">
                    <i className="fas fa-trophy text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-space-blue/50 to-cosmic-purple/20 rounded-2xl p-8 backdrop-blur-lg border border-space-blue/30">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-space-dark/80 py-12 px-4 sm:px-6 lg:px-8 border-t border-space-blue/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-cyan mb-4 font-mono">
              &lt;Bhudev/&gt;
            </div>
            <p className="text-gray-400 mb-6">
              Building the future, one line of code at a time.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/bhudevbhanpuriya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/bhudev-bhanpuriya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://leetcode.com/bhudev03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                <i className="fas fa-code text-xl"></i>
              </a>
              <a href="https://codeforces.com/profile/remiss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                <i className="fas fa-trophy text-xl"></i>
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Bhudev Bhanpuriya. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
