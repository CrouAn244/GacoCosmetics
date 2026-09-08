import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTranslation from './locales/vi/translation.json';
import enTranslation from './locales/en/translation.json';

const savedLang = localStorage.getItem('gaco_lang') || 'vi';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: viTranslation },
      en: { translation: enTranslation }
    },
    lng: savedLang,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('gaco_lang', lng);
  document.documentElement.lang = lng;
});

export default i18n;
