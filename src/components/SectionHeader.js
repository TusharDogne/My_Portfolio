import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionHeader({ subtitle, title, description, align = 'center' }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${alignClass}`}
    >
      <span className="inline-block px-4 py-1.5 bg-royal-50 text-royal-800 text-sm font-semibold rounded-full mb-4 border border-royal-100">
        {subtitle}
      </span>
      <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-4 flex ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className="w-20 h-1 bg-gradient-to-r from-royal-800 to-gold-500 rounded-full" />
      </div>
    </motion.div>
  );
}
