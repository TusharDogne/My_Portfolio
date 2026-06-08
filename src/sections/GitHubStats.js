import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, GitBranch, Star, GitFork, Code2, TrendingUp, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// Note: Replace 'tushardogne' with your actual GitHub username
const GITHUB_USERNAME = 'tushardogne';

const languageColors = {
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  Java: '#B07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#E34F26',
  CSS: '#563D7C',
  TypeScript: '#3178C6',
  'Jupyter Notebook': '#DA5B0B',
  Shell: '#89E051',
};

export default function GitHubStats() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [stats, setStats] = useState({
    repos: 12,
    stars: 8,
    forks: 3,
    contributions: 150,
  });
  const [topLangs] = useState([
    { name: 'Python', percentage: 35, color: languageColors.Python },
    { name: 'JavaScript', percentage: 28, color: languageColors.JavaScript },
    { name: 'Java', percentage: 18, color: languageColors.Java },
    { name: 'HTML/CSS', percentage: 12, color: languageColors.HTML },
    { name: 'C/C++', percentage: 7, color: languageColors['C++'] },
  ]);

  // Simulated contribution data (replace with actual API call)
  const contributionData = [
    { day: 'Mon', count: 4 },
    { day: 'Tue', count: 6 },
    { day: 'Wed', count: 3 },
    { day: 'Thu', count: 8 },
    { day: 'Fri', count: 5 },
    { day: 'Sat', count: 2 },
    { day: 'Sun', count: 1 },
  ];

  return (
    <section id="github" className="relative py-20 lg:py-32 bg-gradient-to-b from-pearl to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          subtitle="GitHub Activity"
          title="Open Source Presence"
          description="My coding journey visualized. Every commit tells a story of learning and building."
        />

        <div ref={ref} className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: GitBranch, label: 'Repositories', value: stats.repos, color: 'royal' },
              { icon: Star, label: 'Total Stars', value: stats.stars, color: 'gold' },
              { icon: GitFork, label: 'Forks', value: stats.forks, color: 'emerald' },
              { icon: TrendingUp, label: 'Contributions', value: stats.contributions, color: 'gray' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg hover:border-royal-200 transition-all"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${
                  stat.color === 'royal' ? 'text-royal-600' :
                  stat.color === 'gold' ? 'text-gold-600' :
                  stat.color === 'emerald' ? 'text-emerald-600' : 'text-gray-600'
                }`} />
                <div className="font-poppins text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-royal-600" />
                <h3 className="font-poppins font-bold text-lg">Weekly Activity</h3>
              </div>

              <div className="flex items-end justify-between gap-2 h-48">
                {contributionData.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${(day.count / 8) * 100}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div className="w-full bg-gradient-to-t from-royal-800 to-royal-500 rounded-t-lg relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {day.count} commits
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{day.day}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>Last 7 days</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-royal-500 rounded-full" />
                  {contributionData.reduce((a, b) => a + b.count, 0)} commits
                </span>
              </div>
            </motion.div>

            {/* Top Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-royal-600" />
                <h3 className="font-poppins font-bold text-lg">Top Languages</h3>
              </div>

              <div className="space-y-4">
                {topLangs.map((lang, index) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="font-medium text-gray-700">{lang.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-royal-800 hover:text-royal-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Full Profile on GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-900/20"
            >
              <Github className="w-5 h-5" />
              Follow me on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
