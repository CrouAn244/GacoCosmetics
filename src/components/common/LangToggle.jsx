import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LangToggle = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'vi';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Chuyển đổi ngôn ngữ / Switch Language"
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gaco-border dark:border-gaco-darkBorder bg-gaco-surface/80 dark:bg-gaco-darkSurface/80 text-xs font-semibold text-gaco-text dark:text-gaco-darkText hover:border-primary transition-all duration-200 cursor-pointer ${className}`}
    >
      <Globe size={14} className="text-primary" />
      <span className="uppercase">{currentLang}</span>
    </button>
  );
};
