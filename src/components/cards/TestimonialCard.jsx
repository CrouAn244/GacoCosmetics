import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialCard = ({ name, role, review, rating = 5 }) => {
  return (
    <div className="p-7 rounded-card bg-gaco-surface dark:bg-gaco-darkSurface border border-gaco-border dark:border-gaco-darkBorder shadow-soft flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <Quote size={24} className="text-primary/20" />
        </div>

        <p className="text-sm text-gaco-text dark:text-gaco-darkText leading-relaxed italic mb-6">
          "{review}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-gaco-border/50 dark:border-gaco-darkBorder/50">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
          {name.charAt(0)}
        </div>
        <div>
          <h5 className="text-sm font-bold text-gaco-text dark:text-gaco-darkText">
            {name}
          </h5>
          <p className="text-xs text-stone-500 dark:text-stone-400">{role}</p>
        </div>
      </div>
    </div>
  );
};
