import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';
import { SEO } from '../utils/seo';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('notFound.title') + ' – 404'} />
      <div className="min-h-[75vh] flex items-center justify-center pt-[125px] sm:pt-[135px] pb-20 bg-[#FEFBF4] px-4">
        <div className="text-center max-w-md mx-auto space-y-6">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            {t('notFound.tagline')}
          </span>
          <div className="text-7xl sm:text-8xl font-heading font-medium text-[#1F1C17]">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
            {t('notFound.title')}
          </h1>
          <p className="text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
            {t('notFound.desc')}
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 button-cocoon-gold text-xs tracking-[0.2em]"
            >
              <Home size={14} />
              <span>{t('notFound.btn')}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
