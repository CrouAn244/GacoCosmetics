import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const IngredientCard = ({ title, source, role, ratio, color = '#E86A33' }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="p-7 rounded-card bg-gaco-surface dark:bg-gaco-darkSurface border border-gaco-border dark:border-gaco-darkBorder shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative accent color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ backgroundColor: color }}
      />

      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              {source}
            </span>
            <h4 className="text-xl font-bold font-heading text-gaco-text dark:text-gaco-darkText mt-0.5">
              {title}
            </h4>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${color}15`, color }}
          >
            <Sparkles size={16} />
          </div>
        </div>

        <p className="text-sm text-gaco-muted dark:text-gaco-darkMuted leading-relaxed mb-4">
          {role}
        </p>
      </div>

      {ratio && (
        <div className="pt-3 border-t border-gaco-border/50 dark:border-gaco-darkBorder/50 flex items-center gap-2">
          <span className="text-xs font-bold" style={{ color }}>
            ● {ratio}
          </span>
        </div>
      )}
    </motion.div>
  );
};
