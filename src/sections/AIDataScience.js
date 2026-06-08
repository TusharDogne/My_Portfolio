import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, TrendingUp, BarChart3, PieChart, Activity, Database, Code, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const mlCapabilities = [
  {
    icon: TrendingUp,
    title: 'Regression Models',
    description: 'Linear & polynomial regression for continuous value prediction like house prices and admission chances.',
    color: 'royal',
  },
  {
    icon: BarChart3,
    title: 'Classification Models',
    description: 'Binary and multi-class classification using logistic regression, decision trees, and SVM.',
    color: 'emerald',
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Interactive charts and dashboards using Power BI, Matplotlib, and Seaborn for insights.',
    color: 'gold',
  },
  {
    icon: Activity,
    title: 'Data Analysis',
    description: 'Exploratory data analysis, statistical testing, and feature engineering with Pandas & NumPy.',
    color: 'gray',
  },
  {
    icon: Database,
    title: 'Data Preprocessing',
    description: 'Cleaning, normalization, encoding, and handling missing values for ML-ready datasets.',
    color: 'royal',
  },
  {
    icon: Code,
    title: 'Model Deployment',
    description: 'Integrating trained models into Django web apps for real-time predictions and user interaction.',
    color: 'emerald',
  },
];

const colorClasses = {
  royal: 'bg-royal-50 text-royal-800 border-royal-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  gold: 'bg-gold-50 text-gold-700 border-gold-200',
  gray: 'bg-gray-50 text-gray-700 border-gray-200',
};

const iconColors = {
  royal: 'text-royal-700',
  emerald: 'text-emerald-600',
  gold: 'text-gold-600',
  gray: 'text-gray-600',
};

export default function AIDataScience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="ai-ds" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-royal-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <SectionHeader
          subtitle="AI & Data Science"
          title="Turning Data Into Intelligence"
          description="I don't just collect data - I extract meaning from it. Here's how I approach machine learning and data science."
        />

        {/* ML Process Visualization */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-bold">My ML Workflow</h3>
                  <p className="text-royal-200 text-sm">From raw data to deployed predictions</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { step: '01', title: 'Data Collection', desc: 'Gather & explore' },
                  { step: '02', title: 'Preprocessing', desc: 'Clean & transform' },
                  { step: '03', title: 'Model Training', desc: 'Train & validate' },
                  { step: '04', title: 'Evaluation', desc: 'Test & optimize' },
                  { step: '05', title: 'Deployment', desc: 'Integrate & monitor' },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                      <span className="text-gold-400 text-sm font-bold">{item.step}</span>
                      <h4 className="font-semibold mt-1">{item.title}</h4>
                      <p className="text-xs text-royal-200 mt-1">{item.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gold-400/50" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mlCapabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`${colorClasses[cap.color]} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <cap.icon className={`w-6 h-6 ${iconColors[cap.color]}`} />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">{cap.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: '5+', label: 'ML Models Built', icon: Brain },
            { value: '3+', label: 'Datasets Analyzed', icon: Database },
            { value: '87%', label: 'Best Model Accuracy', icon: Sparkles },
            { value: '2', label: 'ML Projects Deployed', icon: Activity },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-royal-200 hover:shadow-md transition-all"
            >
              <stat.icon className="w-6 h-6 text-royal-600 mx-auto mb-2" />
              <div className="font-poppins text-2xl font-bold text-royal-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
