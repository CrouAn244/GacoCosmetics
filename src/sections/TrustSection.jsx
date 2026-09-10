import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Leaf, Heart, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../utils/constants';

export const TrustSection = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');

  return (
    <section className="py-16 bg-[#FAF7F2] dark:bg-[#121110] border-b border-[#E8E2D9] dark:border-[#2E2925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A83B1B] font-bold">
            {t('trust.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#1A1615] dark:text-[#F3EFEA] mt-1">
            {t('trust.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF7F2] dark:bg-[#181615] border border-[#E8E2D9] dark:border-[#2E2925] text-center space-y-3 hover:border-[#A83B1B] transition-colors"
            >
              {/* Authentic Stamp Circle */}
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#A83B1B] text-[#A83B1B] flex flex-col items-center justify-center mx-auto text-[9px] font-bold tracking-tighter">
                <span>GACO</span>
                <span className="text-[7px]">{item.stamp}</span>
              </div>

              <h4 className="text-base font-heading font-bold text-[#1A1615] dark:text-[#F3EFEA]">
                {t(`trust.card${idx + 1}Title`)}
              </h4>

              <p className="text-xs text-[#665E57] dark:text-[#A39A91] leading-relaxed">
                {t(`trust.card${idx + 1}Desc`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
