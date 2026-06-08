import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const certifications = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    issuer: 'IBM',
    date: 'March 2026',
    badge: 'IBM',
    color: 'from-royal-800 to-royal-600',
    bgColor: 'bg-royal-50',
    borderColor: 'border-royal-200',
    textColor: 'text-royal-800',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Ethics'],
    description: 'Comprehensive IBM certification covering fundamental AI concepts, machine learning algorithms, neural networks, and practical AI applications.',
    credential: 'IBM-AI-2026-XXXX',
    verifyUrl: 'https://www.credly.com/org/ibm',
  },
  {
    id: 2,
    title: 'Python Programming',
    issuer: 'Universal Coding Institute',
    date: 'April 2026',
    badge: 'Python',
    color: 'from-emerald-600 to-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    skills: ['Python Basics', 'OOP', 'File Handling', 'Modules'],
    description: 'Professional Python certification covering core programming concepts, object-oriented programming, and practical application development.',
    credential: 'UCI-PY-2026-XXXX',
    verifyUrl: '#',
  },
  {
    id: 3,
    title: 'MERN Stack Developer',
    issuer: 'Coding Thinker',
    date: '2026',
    badge: 'MERN',
    color: 'from-gold-600 to-gold-500',
    bgColor: 'bg-gold-50',
    borderColor: 'border-gold-200',
    textColor: 'text-gold-700',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    description: 'Full-stack development certification covering the complete MERN stack — from React frontend to Node.js backend with MongoDB database.',
    credential: 'CT-MERN-2026-XXXX',
    verifyUrl: '#',
  },
  {
    id: 4,
    title: 'Java 2.0 Certification',
    issuer: 'Universal Coding Institute',
    date: '2026',
    badge: 'Java',
    color: 'from-orange-600 to-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    skills: ['Java Core', 'OOP', 'Collections', 'Exceptions'],
    description: 'Advanced Java certification covering core Java concepts, object-oriented programming, collections framework, and exception handling.',
    credential: 'UCI-JAVA-2026-XXXX',
    verifyUrl: '#',
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-pearl">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          subtitle="Certifications"
          title="Credentials That Validate Skills"
          description="Industry-recognized certifications that prove my expertise in AI, programming, and full-stack development."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`${cert.bgColor} ${cert.borderColor} border rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-gray-900 group-hover:text-royal-800 transition-colors">
                      {cert.title}
                    </h3>
                    <p className={`text-sm font-semibold ${cert.textColor}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Credential: {cert.credential}
                </div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-royal-800 hover:text-royal-600 transition-colors"
                >
                  Verify
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
