import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ASSETS } from '../utils/constants';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-[110px] sm:pt-[120px] bg-[#FEFBF4] border-b border-[#E7E5DF]">
      {/* Full-width Editorial Banner Container */}
      <div className="relative w-full overflow-hidden bg-[#F4EFE6] border-b border-[#E7E5DF]">
        <div className="max-w-7xl mx-auto px-5 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Gaco Editorial Storytelling Copy */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Gaco Signature Botanical Tag */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] text-[#9E2A2B] font-bold">
                  {t('hero.tagline')}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal text-[#1F1C17] leading-[1.12]">
                {t('hero.title')}
              </h1>

              <p className="text-base sm:text-lg text-[#1F1C17]/85 font-body leading-relaxed max-w-xl font-light">
                {t('hero.desc')}
              </p>

              {/* Gaco Signature Quality Seal Stamp */}
              <div className="stamp-gaco-ruby">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                <span>{t('hero.stamp')}</span>
              </div>

              {/* Price & Volume Info with Gaco Styling */}
              <div className="pt-2 pb-3 border-y border-[#E7E5DF] flex flex-wrap items-center gap-6 sm:gap-8">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#97958F] font-condensed font-semibold block">
                    {t('hero.experiencePrice')}
                  </span>
                  <span className="text-2xl font-bold font-heading text-[#9E2A2B]">
                    79.000 đ
                  </span>
                </div>
                <div className="h-8 w-[0.5px] bg-[#E7E5DF] hidden sm:block" />
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#97958F] font-condensed font-semibold block">
                    {t('hero.comboPrice')}
                  </span>
                  <span className="text-base font-bold font-heading text-[#1F1C17]">
                    149.000 đ <span className="text-xs font-normal text-[#97958F]">{t('hero.twoTubes')}</span>
                  </span>
                </div>
                <div className="h-8 w-[0.5px] bg-[#E7E5DF] hidden sm:block" />
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#97958F] font-condensed font-semibold block">
                    {t('hero.positioningLabel')}
                  </span>
                  <span className="text-sm font-bold text-[#5E7A4A] flex items-center gap-1">
                    <CheckCircle2 size={14} />
                    {t('hero.positioningVal')}
                  </span>
                </div>
              </div>

              {/* Action Buttons: Gaco Ruby + Cocoon Outline */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/product"
                  className="px-8 py-3.5 button-gaco-ruby text-base tracking-[0.18em] flex items-center gap-2 shadow-xs"
                >
                  <ShoppingBag size={18} />
                  <span>{t('hero.ctaPrimary')}</span>
                </Link>

                <Link
                  to="/about"
                  className="px-8 py-3.5 button-cocoon-outline text-base tracking-[0.18em] flex items-center gap-2"
                >
                  <span>{t('nav.about')}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <p className="text-xs text-[#97958F] pt-1">
                {t('hero.leadFreeGuaranteed')}
              </p>
            </div>

            {/* Right: Real Product Photo in Cocoon Aspect with Gaco Branding */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#E7E5DF] bg-[#FEFBF4] shadow-cocoon-card">
                <img
                  src={ASSETS.hero}
                  alt={t('hero.title')}
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                />
                <div className="px-5 py-3.5 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F]">
                  <span className="font-heading italic text-[#1F1C17]">
                    {t('product.subtitle', 'Quả gấc chín đỏ mọng và dừa già Bến Tre ép lạnh')}
                  </span>
                  <span className="font-condensed uppercase tracking-wider text-[#9E2A2B] font-bold">
                    {t('breadcrumbs.productName')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
