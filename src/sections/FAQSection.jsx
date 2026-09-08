import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-[#FEFBF4] border-b border-[#E7E5DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            GIẢI ĐÁP THẮC MẮC
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17] mt-2">
            Câu Hỏi Thường Gặp Về Son Gaco
          </h2>
        </div>

        <div className="divide-y divide-[#E7E5DF] border-y border-[#E7E5DF]">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 font-heading text-lg sm:text-xl font-normal text-[#1F1C17] cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span className="shrink-0 p-1 text-[#C5A25D]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 text-xs sm:text-sm text-[#666055] font-light leading-relaxed max-w-3xl">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
