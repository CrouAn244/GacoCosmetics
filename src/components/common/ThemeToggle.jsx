import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      className={`p-2 rounded-full border border-gaco-border dark:border-gaco-darkBorder bg-gaco-surface/80 dark:bg-gaco-darkSurface/80 text-gaco-text dark:text-gaco-darkText hover:border-primary transition-all duration-200 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun size={18} className="text-amber-400 hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon size={18} className="text-stone-700 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};
