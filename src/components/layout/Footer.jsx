import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS, ASSETS } from '../../utils/constants';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#121110] text-[#F3EFEA] border-t border-[#2E2925] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup (Cocoon style) */}
        <div className="pb-16 mb-16 border-b border-[#2E2925] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A83B1B] font-bold">
              {t('footer.newsletterTag')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-medium mt-1">
              {t('footer.newsletterTitle')}
            </h3>
            <p className="text-xs text-[#A39A91] mt-2">
              {t('footer.newsletterDesc')}
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert(t('footer.newsletterSuccess')); }} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              placeholder={t('footer.newsletterPlaceholder')}
              className="flex-1 px-4 py-3 bg-[#1C1918] border border-[#2E2925] text-xs text-[#F3EFEA] placeholder-[#665E57] focus:border-[#A83B1B] outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#A83B1B] hover:bg-[#8C2E13] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-colors shrink-0"
            >
              {t('footer.newsletterBtn')}
            </button>
          </form>
        </div>

        {/* 4 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand Philosophy */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={ASSETS.logo}
                alt="Gaco Original Vietnam"
                className="h-12 w-auto object-contain rounded-full shadow-xs transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-[0.25em] text-[#F3EFEA] group-hover:text-[#A83B1B] transition-colors">
                  GACO
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-[#A83B1B] font-semibold">
                  ORIGINAL VIETNAM
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A39A91] leading-relaxed">
              {t('footer.desc')}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="hover:text-[#A83B1B] transition-colors">FACEBOOK</a>
              <span>•</span>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="hover:text-[#A83B1B] transition-colors">TIKTOK</a>
              <span>•</span>
              <a href={SOCIAL_LINKS.messenger} target="_blank" rel="noreferrer" className="hover:text-[#A83B1B] transition-colors">MESSENGER</a>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF7F2] mb-5">
              {t('nav.menu')}
            </h4>
            <ul className="space-y-3 text-xs text-[#A39A91]">
              <li>
                <Link to="/" className="hover:text-[#F3EFEA] transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F3EFEA] transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-[#F3EFEA] transition-colors">{t('nav.product')}</Link>
              </li>
              <li>
                <Link to="/ingredients" className="hover:text-[#F3EFEA] transition-colors">{t('nav.ingredients')}</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#F3EFEA] transition-colors">{t('nav.blog')}</Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-[#F3EFEA] transition-colors">{t('nav.account')}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF7F2] mb-5">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-3 text-xs text-[#A39A91]">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#A83B1B] mt-0.5 shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#A83B1B] shrink-0" />
                <span>Hotline: {SOCIAL_LINKS.hotline}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#A83B1B] shrink-0" />
                <span>Email: {SOCIAL_LINKS.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="text-[#A83B1B] shrink-0" />
                <span>{t('footer.hours')}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Certifications & Quatest */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF7F2] mb-5">
              {t('trust.badge')}
            </h4>
            <div className="space-y-3 text-xs text-[#A39A91]">
              <div className="p-3 bg-[#1C1918] border border-[#2E2925] space-y-1">
                <p className="font-bold text-[#FAF7F2]">The Vegan Society &amp; Cruelty-Free</p>
                <p className="text-[11px] text-[#A39A91]">{t('trust.card1Desc')}</p>
              </div>
              <div className="p-3 bg-[#1C1918] border border-[#2E2925] space-y-1">
                <p className="font-bold text-[#FAF7F2]">QUATEST 3 Certification</p>
                <p className="text-[11px] text-[#A39A91]">{t('trust.card3Desc')}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 border-t border-[#2E2925] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#665E57]">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6 uppercase tracking-widest text-[#A39A91]">
            <span>{t('footer.veganPledge')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
