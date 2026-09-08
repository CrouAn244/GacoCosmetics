import React from 'react';
import { motion } from 'framer-motion';

export const TrustCard = ({ icon: Icon, title, description, badge }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="p-7 rounded-card bg-gaco-surface dark:bg-gaco-darkSurface border border-gaco-border dark:border-gaco-darkBorder shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-primary-light dark:bg-primary/20 text-primary flex items-center justify-center mb-5 shadow-sm">
          {Icon && <Icon size={24} />}
        </div>
        <h4 className="text-lg font-bold font-heading text-gaco-text dark:text-gaco-darkText mb-2.5">
          {title}
        </h4>
        <p className="text-sm text-gaco-muted dark:text-gaco-darkMuted leading-relaxed">
          {description}
        </p>
      </div>

      {badge && (
        <div className="mt-5 pt-4 border-t border-gaco-border/50 dark:border-gaco-darkBorder/50">
          <span className="text-xs font-semibold text-secondary dark:text-emerald-400">
            ✓ {badge}
          </span>
        </div>
      )}
    </motion.div>
  );
};
