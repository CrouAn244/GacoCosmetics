import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Gift, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ASSETS } from '../utils/constants';

export const FeaturedProductsSection = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');

  const products = [
    {
      id: 'gaco-single',
      name: t('featured.singleName'),
      subtitle: t('featured.singleSubtitle'),
      price: t('featured.singlePrice'),
      image: ASSETS.hero,
      badge: t('featured.singleBadge'),
      stock: t('featured.singleStock'),
      tag: t('featured.singleTag'),
      link: '/product?plan=single'
    },
    {
      id: 'gaco-combo',
      name: t('featured.comboName'),
      subtitle: t('featured.comboSubtitle'),
      price: t('featured.comboPrice'),
      oldPrice: t('featured.comboOldPrice'),
      image: ASSETS.comboDuo,
      badge: t('featured.comboBadge'),
      stock: t('featured.comboStock'),
      tag: t('featured.comboTag'),
      link: '/product?plan=combo'
    },
    {
      id: 'gaco-maternity',
      name: t('featured.maternityName'),
      subtitle: t('featured.maternitySubtitle'),
      price: t('featured.maternityPrice'),
      oldPrice: t('featured.maternityOldPrice'),
      image: ASSETS.comboMaternity,
      badge: t('featured.maternityBadge'),
      stock: t('featured.maternityStock'),
      tag: t('featured.maternityTag'),
      link: '/product?plan=maternity'
    }
  ];

  return (
    <section className="py-20 bg-[#FEFBF4] border-b border-[#E7E5DF]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#E7E5DF]">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.25em] text-[#9E2A2B] font-bold block">
              {t('featured.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#1F1C17] mt-1">
              {t('featured.title')}
            </h2>
          </div>

          <Link
            to="/product"
            className="font-condensed text-base uppercase tracking-wider text-[#1F1C17] hover:text-[#9E2A2B] font-bold flex items-center gap-1.5"
          >
            <span>{t('featured.viewDetail')}</span>
            <span>→</span>
          </Link>
        </div>

        {/* Product Card Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#FEFBF4] border border-[#E7E5DF] flex flex-col justify-between group hover:border-[#9E2A2B] transition-colors"
            >
              {/* Product Image */}
              <Link to={item.link} className="relative aspect-square overflow-hidden bg-[#F4EFE6] block">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#9E2A2B] text-[#FEFBF4] font-condensed text-[11px] uppercase tracking-wider px-3 py-1 font-bold shadow-xs">
                  {item.badge}
                </div>
              </Link>

              {/* Product Info Bar */}
              <div className="p-5 flex items-end justify-between border-t border-[#E7E5DF]">
                <div className="space-y-1.5 pr-2">
                  <span className="text-[10px] font-condensed uppercase tracking-wider text-[#C5A25D] font-bold block">
                    {item.tag}
                  </span>
                  <h4 className="font-heading font-semibold text-lg text-[#1F1C17] group-hover:text-[#9E2A2B] transition-colors leading-snug">
                    <Link to={item.link}>{item.name}</Link>
                  </h4>
                  <p className="text-xs text-[#97958F] line-clamp-2 leading-relaxed font-light">{item.subtitle}</p>
                  
                  <div className="pt-2 flex items-center gap-2">
                    <span className="font-bold text-xl text-[#9E2A2B] font-heading">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-xs text-[#97958F] line-through">{item.oldPrice}</span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#5E7A4A] font-medium block">{item.stock}</span>
                </div>

                {/* Gaco Ruby Add Button */}
                <Link
                  to={item.link}
                  className="w-12 h-12 bg-[#9E2A2B] hover:bg-[#7C1D1E] text-white flex items-center justify-center transition-colors shrink-0"
                  aria-label="Xem và mua sản phẩm"
                >
                  <ShoppingBag size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Gaco Sustainability Footnote */}
        <div className="mt-10 p-4 border border-[#E7E5DF] bg-[#F4EFE6] max-w-4xl mx-auto flex items-center justify-between gap-4 text-xs text-[#666055] font-light">
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#9E2A2B]" />
            <span>{isEn ? '100% Biodegradable Kraft Paper Packaging • Complimentary Raw Canvas Tote with Combo' : 'Bao bì giấy Kraft phân hủy sinh học 100% • Tặng kèm túi vải thô khi đặt combo'}</span>
          </span>
          <Link to="/about" className="font-condensed uppercase tracking-wider text-xs font-bold text-[#1F1C17] hover:text-[#9E2A2B] underline">
            {isEn ? 'LEARN MORE' : 'Tìm hiểu thêm'}
          </Link>
        </div>

      </div>
    </section>
  );
};
