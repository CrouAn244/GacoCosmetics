import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, FlaskConical, Check } from 'lucide-react';
import { ACTIVE_INGREDIENTS } from '../utils/constants';

export const IngredientsSection = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');
  const [activeTab, setActiveTab] = useState(0);

  const selectedIng = ACTIVE_INGREDIENTS[activeTab];
  const ingName = isEn ? (selectedIng.nameEn || selectedIng.name) : selectedIng.name;
  const ingSource = isEn ? selectedIng.sourceEn : selectedIng.sourceVi;
  const ingRole = isEn ? selectedIng.roleEn : selectedIng.roleVi;

  return (
    <section className="py-24 bg-[#F5EFE8] dark:bg-[#161413] border-b border-[#E8E2D9] dark:border-[#2E2925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E8E2D9] dark:border-[#2E2925]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A83B1B] font-bold">
              {t('ingredientsSection.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1A1615] dark:text-[#F3EFEA] mt-2">
              {t('ingredientsSection.title')}
            </h2>
          </div>

          {/* Ingredient Switcher Tabs */}
          <div className="flex items-center gap-2 border border-[#E8E2D9] dark:border-[#2E2925] p-1 bg-[#FAF7F2] dark:bg-[#121110]">
            {ACTIVE_INGREDIENTS.map((ing, idx) => (
              <button
                key={ing.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-[#1A1615] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#121110]'
                    : 'text-[#665E57] dark:text-[#A39A91] hover:text-[#1A1615]'
                }`}
              >
                {isEn ? (ing.nameEn || ing.name) : ing.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Ingredient Showcase (Cocoon Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Macro Photograph */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden shadow-editorial border border-[#E8E2D9] dark:border-[#2E2925] bg-[#FAF7F2] aspect-square">
              <img
                src={selectedIng.image}
                alt={ingName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#1A1615]/80 text-[#FAF7F2] px-3.5 py-1.5 text-[11px] uppercase tracking-widest font-semibold backdrop-blur-xs">
                {isEn ? (selectedIng.tagEn || selectedIng.tag) : (selectedIng.tagVi || selectedIng.tag)}
              </div>
            </div>
          </div>

          {/* Botanical Science Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-mono italic text-[#665E57] dark:text-[#A39A91]">
                INCI: {selectedIng.scientificName}
              </p>
              <h3 className="text-3xl font-heading font-medium text-[#1A1615] dark:text-[#F3EFEA] mt-1">
                {ingName}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#A83B1B]">
              <MapPin size={15} />
              <span>{ingSource}</span>
            </div>

            <p className="text-sm sm:text-base text-[#665E57] dark:text-[#A39A91] leading-relaxed">
              {ingRole}
            </p>

            <div className="p-4 bg-[#FAF7F2] dark:bg-[#1C1918] border border-[#E8E2D9] dark:border-[#2E2925] space-y-2">
              <div className="flex items-center justify-between text-xs border-b border-[#E8E2D9] dark:border-[#2E2925] pb-2">
                <span className="text-[#665E57] dark:text-[#A39A91]">{t('ingredientsSection.coreCompound')}</span>
                <span className="font-bold text-[#1A1615] dark:text-[#F3EFEA]">{isEn ? (selectedIng.keyCompoundsEn || selectedIng.keyCompounds) : (selectedIng.keyCompoundsVi || selectedIng.keyCompounds)}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#665E57] dark:text-[#A39A91]">{t('ingredientsSection.potencyRatio')}</span>
                <span className="font-bold text-[#A83B1B]">{isEn ? (selectedIng.ratioEn || selectedIng.ratio) : (selectedIng.ratioVi || selectedIng.ratio)}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/ingredients"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#1A1615] dark:text-[#F3EFEA] hover:text-[#A83B1B] transition-colors border-b border-[#1A1615] dark:border-[#F3EFEA] pb-1"
              >
                <span>{t('ingredientsSection.viewInci')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
