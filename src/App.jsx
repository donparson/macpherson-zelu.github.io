import React, { useState, useEffect } from 'react';
import './App.css';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, BarChart3, Brain, TrendingUp, Users, Cloud, Server, Globe, Cpu, Moon, Sun } from 'lucide-react';
import profileImage from './assets/enhanced_profile_picture_v2.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: 'Python', category: 'Programming', icon: Code },
    { name: 'R', category: 'Programming', icon: Code },
    { name: 'SQL', category: 'Database', icon: Database },
    { name: 'Java/Scala', category: 'Big Data', icon: Code },
    { name: 'Machine Learning', category: 'AI/ML', icon: Brain },
    { name: 'Deep Learning', category: 'AI/ML', icon: Brain },
    { name: 'NLP', category: 'AI/ML', icon: Brain },
    { name: 'Data Visualization', category: 'Analytics', icon: BarChart3 },
    { name: 'Statistical Analysis', category: 'Analytics', icon: TrendingUp },
    { name: 'Tableau', category: 'Tools', icon: BarChart3 },
    { name: 'Power BI', category: 'Tools', icon: BarChart3 },
    { name: 'AWS', category: 'Cloud', icon: Cloud },
    { name: 'Azure', category: 'Cloud', icon: Cloud },
    { name: 'Docker', category: 'DevOps', icon: Server },
    { name: 'Kubernetes', category: 'DevOps', icon: Server },
    { name: 'React', category: 'Web Dev', icon: Globe },
    { name: 'Full Stack', category: 'Web Dev', icon: Globe },
    { name: 'AI Integration', category: 'AI/ML', icon: Cpu }
  ];

  const projects = [
    {
      title: 'Church Administration Analytics Platform',
      description: 'Developed comprehensive statistical analysis system for membership demographics, attendance patterns, and engagement levels to inform strategic planning and ministry development.',
      technologies: ['Python', 'SQL', 'Tableau', 'Statistical Modeling'],
      impact: 'Enhanced efficiency in church administration and informed key decisions for 2000+ members',
      github: '#',
      demo: '#'
    },
    {
      title: 'Financial Forecasting & Resource Optimization',
      description: 'Built predictive models to analyze giving trends and financial patterns, forecasting budgetary needs and optimizing resource allocation across various ministries.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Power BI'],
      impact: 'Improved financial decision-making and resource allocation efficiency by 35%',
      github: '#',
      demo: '#'
    },
    {
      title: 'Interactive KPI Dashboard System',
      description: 'Created and maintained key performance indicators for organizational health including volunteer retention, participation rates, and visitor assimilation metrics.',
      technologies: ['Python', 'SQL', 'Dashboard Design', 'ETL'],
      impact: 'Enabled data-driven leadership decisions with real-time insights and reporting',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI-Powered Web Applications',
      description: 'Leveraging AI to build robust and fast websites and software solutions, integrating machine learning capabilities into web development projects.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AI APIs'],
      impact: 'Delivered cutting-edge web solutions with AI integration for enhanced user experience',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Macpherson Zelu
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>Home</button>
                <button onClick={() => scrollToSection('about')} className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>About</button>
                <button onClick={() => scrollToSection('skills')} className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>Skills</button>
                <button onClick={() => scrollToSection('projects')} className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>Projects</button>
                <button onClick={() => scrollToSection('contact')} className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>Contact</button>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Certified Data Scientist &
                <span className="text-blue-600 block">Web/Full Stack Developer</span>
              </h1>
              <p className={`text-xl mb-6 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Transforming complex data into actionable insights while leveraging AI to build robust and fast websites and software solutions.
              </p>
              <p className={`text-lg mb-8 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Results-oriented professional with a proven track record of applying advanced analytics, statistical modeling, and modern web development to drive strategic insights and optimize operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  View Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className={`w-80 h-80 rounded-full overflow-hidden border-8 shadow-2xl transition-colors duration-300 ${
                  darkMode ? 'border-gray-700' : 'border-white'
                }`}>
                  <img 
                    src={profileImage} 
                    alt="Macpherson Zelu" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                  <BarChart3 size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Passionate About Data-Driven Solutions & Modern Web Development
              </h3>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                As a certified Data Scientist with extensive experience in machine learning, statistical analysis, 
                and data visualization, I specialize in transforming raw data into meaningful insights that drive 
                strategic business decisions. Currently serving as Head of Administration at Seat of Grace Chapel International in Accra, Ghana.
              </p>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My expertise extends beyond data science into web and full stack development, where I leverage AI 
                to build robust and fast websites and software solutions. I successfully apply data-driven methodologies 
                to enhance efficiency and inform key decisions related to membership engagement and resource allocation.
              </p>
              <p className={`leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I believe that the intersection of data science and modern web development creates powerful opportunities 
                to build intelligent, data-driven applications that solve real-world problems and create positive impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}>
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Years Experience</div>
              </div>
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-green-50'
              }`}>
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Projects Completed</div>
              </div>
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-purple-50'
              }`}>
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Clients Served</div>
              </div>
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-orange-50'
              }`}>
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                }`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full mb-4 transition-colors duration-300 ${
                      darkMode ? 'bg-blue-900' : 'bg-blue-100'
                    }`}>
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                    <h3 className={`font-semibold mb-2 text-sm transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{skill.name}</h3>
                    <p className={`text-xs transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{skill.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{project.title}</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                          darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg mb-4 transition-colors duration-300 ${
                    darkMode ? 'bg-green-900' : 'bg-green-50'
                  }`}>
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      darkMode ? 'text-green-200' : 'text-green-800'
                    }`}>Impact: {project.impact}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className={`flex items-center gap-2 transition-colors duration-300 ${
                      darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    }`}>
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.demo} className={`flex items-center gap-2 transition-colors duration-300 ${
                      darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    }`}>
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 text-white transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and challenging projects. 
                Whether you need data analysis, machine learning solutions, AI-powered web applications, 
                or full stack development, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">maczelu@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+233240326761</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Accra, Ghana | Available for Remote Work</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://www.linkedin.com/in/macpherson-zelu" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className={`p-8 rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-800'
            }`}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <div className={`p-3 rounded-lg text-sm ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-900 text-green-200' 
                      : 'bg-red-900 text-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-gray-300'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Macpherson Zelu. All rights reserved.</p>
            <p className="mt-2 text-sm">Certified Data Scientist & Web/Full Stack Developer | Transforming Data into Insights & Building AI-Powered Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

