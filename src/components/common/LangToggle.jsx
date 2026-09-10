import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangToggle = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'vi').toLowerCase();
  const isEn = currentLang.startsWith('en');

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`inline-flex items-center text-xs font-condensed tracking-wider ${className}`}>
      <button
        type="button"
        onClick={() => setLang('vi')}
        className={`px-1.5 py-0.5 transition-colors cursor-pointer font-bold ${
          !isEn ? 'text-[#9E2A2B] border-b-2 border-[#9E2A2B]' : 'text-[#97958F] hover:text-[#1F1C17]'
        }`}
        aria-label="Tiếng Việt"
      >
        VN
      </button>
      <span className="text-[#97958F] text-[10px] mx-0.5">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-1.5 py-0.5 transition-colors cursor-pointer font-bold ${
          isEn ? 'text-[#9E2A2B] border-b-2 border-[#9E2A2B]' : 'text-[#97958F] hover:text-[#1F1C17]'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};
