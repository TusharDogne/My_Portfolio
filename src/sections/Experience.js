import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Code2, BookOpen } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const experiences = [
  {
    id: 1,
    type: 'work',
    icon: Briefcase,
    title: 'Project Coordinator & Freelance Developer',
    company: 'Self-Employed / Client Projects',
    location: 'Indore, India',
    period: '2021 – 2023',
    color: 'royal',
    achievements: [
      'Managed end-to-end development of 5+ client websites from requirement gathering to deployment',
      'Coordinated with clients to define project scope, timelines, and deliverables',
      'Delivered complete business solutions including B2B platforms and e-commerce sites',
      'Maintained 100% client satisfaction rate through proactive communication',
    ],
  },
  {
    id: 2,
    type: 'internship',
    icon: Code2,
    title: 'AI Intern',
    company: 'IBM MOOC (Massive Open Online Course)',
    location: 'Indore, India',
    period: 'Feb 2026 – Mar 2026',
    color: 'emerald',
    achievements: [
      'Gained hands-on experience in machine learning concepts and model development',
      'Worked on complete ML workflows including data preprocessing and model evaluation',
      'Built predictive models using Python, Pandas, and Scikit-Learn',
      'Earned IBM Artificial Intelligence certification upon completion',
    ],
  },
  {
    id: 3,
    type: 'education',
    icon: GraduationCap,
    title: 'B.Tech in Computer Science & Engineering',
    company: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
    location: 'Indore, India',
    period: '2022 – 2026',
    color: 'gold',
    achievements: [
      'Pursuing Bachelor of Technology with focus on AI/ML and Full Stack Development',
      'Active in coding competitions and technical projects',
      'Strong foundation in DSA, DBMS, OOP, and Software Engineering principles',
      'Consistently applying classroom knowledge to real-world freelance projects',
    ],
  },
  {
    id: 4,
    type: 'work',
    icon: BookOpen,
    title: 'Home Tutor (Self-Employed)',
    company: 'Private Tutoring',
    location: 'Indore, India',
    period: '2021 – Present',
    color: 'gray',
    achievements: [
      'Developed strong presentation and communication skills teaching 20+ students',
      'Built time-management discipline balancing tutoring with coding projects',
      'Learned to break complex concepts into simple explanations — directly applicable to code documentation',
      'Earned while learning, funding my own tech education and certifications',
    ],
  },
];

const colorMap = {
  royal: {
    bg: 'bg-royal-50',
    border: 'border-royal-200',
    icon: 'bg-royal-800',
    text: 'text-royal-800',
    badge: 'bg-royal-100 text-royal-800',
    dot: 'bg-royal-800',
    line: 'bg-royal-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: 'bg-emerald-600',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    line: 'bg-emerald-200',
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-200',
    icon: 'bg-gold-600',
    text: 'text-gold-700',
    badge: 'bg-gold-100 text-gold-700',
    dot: 'bg-gold-500',
    line: 'bg-gold-200',
  },
  gray: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    icon: 'bg-gray-700',
    text: 'text-gray-700',
    badge: 'bg-gray-100 text-gray-700',
    dot: 'bg-gray-500',
    line: 'bg-gray-200',
  },
};

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          subtitle="Experience & Education"
          title="My Professional Journey"
          description="From tutoring students to building AI-powered applications — every step shaped who I am today."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-800 via-emerald-500 to-gold-500" />

          {experiences.map((exp, index) => {
            const colors = colorMap[exp.color];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-royal-800 z-10 mt-6" />

                {/* Content Card */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`${colors.bg} border ${colors.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-lg text-gray-900 leading-tight">
                          {exp.title}
                        </h3>
                        <p className={`text-sm font-semibold ${colors.text} mt-1`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
