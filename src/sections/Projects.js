import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Layers, X, ChevronRight, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    id: 1,
    title: 'ML Prediction Hub',
    category: 'Machine Learning',
    image: 'ml-hub',
    color: 'from-emerald-600 to-emerald-500',
    bgColor: 'bg-emerald-50',
    tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Scikit-Learn'],
    description: 'A comprehensive machine learning platform that integrates predictive models with a Django web interface. Users can input data and get real-time predictions for house prices and college admissions.',
    features: [
      'Linear Regression model for house price prediction with 87% accuracy',
      'Admission chance predictor using multiple regression analysis',
      'Interactive Django frontend with form validation',
      'Real-time prediction results with confidence intervals',
      'Responsive design for mobile and desktop users',
    ],
    github: 'https://github.com/tushardogne/ml-prediction-hub',
    live: 'https://ml-prediction-hub.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Trip Planner',
    category: 'Full Stack',
    image: 'trip-planner',
    color: 'from-royal-800 to-royal-600',
    bgColor: 'bg-royal-50',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    description: 'A collaborative trip planning platform where users can create shared itineraries, track budgets, and plan trips together in real-time.',
    features: [
      'Real-time collaborative itinerary editing',
      'Budget tracking with expense categorization',
      'User authentication and trip sharing',
      'Interactive map integration for route planning',
      'Mobile-responsive design with offline support',
    ],
    github: 'https://github.com/tushardogne/trip-planner',
    live: 'https://trip-planner-demo.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Car Rental Management',
    category: 'Java',
    image: 'car-rental',
    color: 'from-gold-600 to-gold-500',
    bgColor: 'bg-gold-50',
    tech: ['Java', 'OOP', 'File Handling', 'Swing GUI'],
    description: 'A console-based vehicle rental system built with Java OOP principles. Features complete booking management, availability tracking, and customer data handling.',
    features: [
      'Object-oriented design with inheritance and polymorphism',
      'File-based persistent data storage',
      'Booking management with date validation',
      'Vehicle availability tracking in real-time',
      'Customer profile management and rental history',
    ],
    github: 'https://github.com/tushardogne/car-rental-java',
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: 'QuickDropp.shop',
    category: 'E-Commerce',
    image: 'quickdropp',
    color: 'from-purple-600 to-purple-500',
    bgColor: 'bg-purple-50',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'Elementor'],
    description: 'A fully functional e-commerce website built on WordPress with WooCommerce integration. Custom theme development and plugin customization for a unique shopping experience.',
    features: [
      'Custom WordPress theme with responsive design',
      'WooCommerce integration with payment gateways',
      'Product catalog with filtering and search',
      'User account management and order tracking',
      'SEO optimization and performance tuning',
    ],
    github: null,
    live: 'https://quickdropp.shop',
    featured: false,
  },
  {
    id: 5,
    title: 'B2B Client Platform',
    category: 'Freelance',
    image: 'b2b-platform',
    color: 'from-rose-600 to-rose-500',
    bgColor: 'bg-rose-50',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
    description: 'End-to-end B2B platform developed for a client. Managed requirements, created timelines, and delivered a complete business solution with authentication and payment integration.',
    features: [
      'Client requirement gathering and project scoping',
      'Agile development with weekly sprint deliverables',
      'JWT-based authentication and role management',
      'Stripe payment integration for subscriptions',
      'Admin dashboard with analytics and reporting',
    ],
    github: 'https://github.com/tushardogne/b2b-client-platform',
    live: 'https://b2b-platform-demo.vercel.app',
    featured: true,
  },
  {
    id: 6,
    title: 'Family Budget Handler',
    category: 'Web App',
    image: 'budget-handler',
    color: 'from-teal-600 to-teal-500',
    bgColor: 'bg-teal-50',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    description: 'A lightweight web application for managing family budgets. Tracks expenses, sets savings goals, and provides visual spending breakdowns - all without a backend.',
    features: [
      'LocalStorage-based data persistence',
      'Interactive expense categorization charts',
      'Monthly budget planning with alerts',
      'Savings goal tracker with progress visualization',
      'Export data to CSV for spreadsheet analysis',
    ],
    github: 'https://github.com/tushardogne/family-budget-handler',
    live: 'https://family-budget-handler.vercel.app',
    featured: false,
  },
];

const categories = ['All', 'Machine Learning', 'Full Stack', 'Java', 'E-Commerce', 'Freelance', 'Web App'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-gradient-to-b from-pearl to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          subtitle="Featured Projects"
          title="What I've Built"
          description="Real projects. Real clients. Real impact. Every line of code solves a real problem."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-royal-800 text-white shadow-lg shadow-royal-800/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-royal-300 hover:text-royal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-royal-900/5 transition-all duration-500"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Layers className="w-12 h-12 text-white/40 mx-auto mb-2" />
                      <p className="text-white/60 text-sm font-medium">{project.image}</p>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-white fill-white" />
                      <span className="text-white text-xs font-semibold">Featured</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.bgColor} text-gray-700`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2 group-hover:text-royal-800 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-royal-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-royal-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto flex items-center gap-1 text-sm font-semibold text-royal-800 hover:text-royal-600 transition-colors"
                    >
                      Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-32 bg-gradient-to-br ${selectedProject.color} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-16 h-16 text-white/30" />
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${selectedProject.bgColor} text-gray-700 mb-3`}>
                  {selectedProject.category}
                </span>

                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-3">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-royal-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2 flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
