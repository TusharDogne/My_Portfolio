import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Globe, Wrench, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const skillCategories = [
  {
    id: 'programming',
    icon: Code2,
    title: 'Programming',
    color: 'from-royal-800 to-royal-600',
    bgColor: 'bg-royal-50',
    textColor: 'text-royal-800',
    skills: [
      { name: 'Python', level: 90, desc: 'ML, Data Science, Django' },
      { name: 'Java', level: 85, desc: 'OOP, File Handling, Projects' },
      { name: 'JavaScript', level: 88, desc: 'ES6+, React, Node.js' },
      { name: 'C / C++', level: 80, desc: 'DSA, System Programming' },
    ],
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI & Data Science',
    color: 'from-emerald-600 to-emerald-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    skills: [
      { name: 'Machine Learning', level: 85, desc: 'Regression, Classification' },
      { name: 'Pandas & NumPy', level: 88, desc: 'Data Manipulation' },
      { name: 'Scikit-Learn', level: 82, desc: 'Model Building & Tuning' },
      { name: 'Power BI', level: 75, desc: 'Data Visualization' },
      { name: 'Data Analysis', level: 85, desc: 'Exploratory & Statistical' },
    ],
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    color: 'from-gold-600 to-gold-500',
    bgColor: 'bg-gold-50',
    textColor: 'text-gold-700',
    skills: [
      { name: 'React.js', level: 90, desc: 'Hooks, Context, Router' },
      { name: 'Node.js & Express', level: 85, desc: 'REST APIs, Middleware' },
      { name: 'MongoDB', level: 80, desc: 'CRUD, Aggregation' },
      { name: 'Django', level: 82, desc: 'MTV, ORM, Admin' },
      { name: 'HTML5 & CSS3', level: 92, desc: 'Responsive, Flexbox, Grid' },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools & Platforms',
    color: 'from-gray-700 to-gray-600',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-700',
    skills: [
      { name: 'Git & GitHub', level: 88, desc: 'Version Control, CI/CD' },
      { name: 'Figma', level: 80, desc: 'UI/UX Design, Prototyping' },
      { name: 'WordPress', level: 85, desc: 'Themes, Plugins, Customization' },
      { name: 'Canva', level: 90, desc: 'Graphics, Social Media' },
      { name: 'MS Excel', level: 82, desc: 'Formulas, Pivot Tables' },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const activeSkills = skillCategories.find(c => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-pearl">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          subtitle="Technical Skills"
          title="Tools I Use to Build"
          description="From machine learning models to full-stack applications — my stack is built for shipping."
        />

        <div ref={ref} className="grid lg:grid-cols-12 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                  activeCategory === category.id
                    ? `${category.bgColor} border-2 border-current ${category.textColor} shadow-lg`
                    : 'bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-600'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold">{category.title}</h3>
                  <p className="text-sm opacity-70">{category.skills.length} skills</p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === category.id ? 'rotate-90' : ''}`} />
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeSkills.color} flex items-center justify-center`}>
                  <activeSkills.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-poppins text-xl font-bold text-gray-900">
                  {activeSkills.title}
                </h3>
              </div>

              <div className="space-y-6">
                {activeSkills.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500 ml-2">— {skill.desc}</span>
                      </div>
                      <span className="text-sm font-bold text-royal-700">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${activeSkills.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
