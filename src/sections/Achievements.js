import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code2, Cloud, Users, Target, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CountUp from 'react-countup';

const achievements = [
  {
    id: 1,
    icon: Code2,
    title: '100+ DSA Problems',
    value: 100,
    suffix: '+',
    description: 'Solved across multiple coding platforms including LeetCode, HackerRank, and GeeksforGeeks. Strong foundation in arrays, trees, graphs, and dynamic programming.',
    color: 'royal',
    highlight: 'Consistent daily practice',
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Google Cloud Arcade',
    value: 1,
    suffix: 'x',
    description: 'Active participant in Google Cloud Arcade program, gaining hands-on experience with cloud infrastructure, serverless computing, and data engineering on GCP.',
    color: 'emerald',
    highlight: 'Cloud fundamentals mastered',
  },
  {
    id: 3,
    icon: Users,
    title: 'Freelance Projects',
    value: 5,
    suffix: '+',
    description: 'Successfully delivered 5+ client projects from requirement gathering to deployment. 100% client satisfaction rate with repeat business.',
    color: 'gold',
    highlight: 'Client-first approach',
  },
  {
    id: 4,
    icon: Target,
    title: 'IBM AI Certified',
    value: 1,
    suffix: '',
    description: 'Earned IBM Artificial Intelligence certification through intensive MOOC program. Hands-on experience with ML workflows and model deployment.',
    color: 'royal',
    highlight: 'Industry recognized',
  },
  {
    id: 5,
    icon: Zap,
    title: 'Tech Stack Diversity',
    value: 8,
    suffix: '+',
    description: 'Proficient across 8+ technologies spanning Python, Java, JavaScript, React, Node.js, Django, MongoDB, and WordPress. Full-stack versatility.',
    color: 'emerald',
    highlight: 'Multi-domain expertise',
  },
  {
    id: 6,
    icon: Trophy,
    title: 'Academic Excellence',
    value: 84,
    suffix: '%',
    description: 'Scored 84% in 10th board and 78% in 12th board. Currently pursuing B.Tech in Computer Science with consistent academic performance.',
    color: 'gold',
    highlight: 'Strong academic foundation',
  },
];

const colorMap = {
  royal: {
    bg: 'bg-royal-50',
    border: 'border-royal-200',
    icon: 'bg-royal-800',
    text: 'text-royal-800',
    highlight: 'bg-royal-100 text-royal-700',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: 'bg-emerald-600',
    text: 'text-emerald-700',
    highlight: 'bg-emerald-100 text-emerald-700',
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-200',
    icon: 'bg-gold-600',
    text: 'text-gold-700',
    highlight: 'bg-gold-100 text-gold-700',
  },
};

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          subtitle="Achievements"
          title="Numbers That Tell My Story"
          description="Milestones that prove consistency, dedication, and the ability to deliver results."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const colors = colorMap[achievement.color];
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center shadow-lg`}>
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.highlight}`}>
                    {achievement.highlight}
                  </span>
                </div>

                <div className="mb-4">
                  <div className={`font-poppins text-4xl lg:text-5xl font-bold ${colors.text} mb-1`}>
                    {inView ? (
                      <CountUp
                        end={achievement.value}
                        duration={2.5}
                        suffix={achievement.suffix}
                      />
                    ) : (
                      `0${achievement.suffix}`
                    )}
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-900">
                    {achievement.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
