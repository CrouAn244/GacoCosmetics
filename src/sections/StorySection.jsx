import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../utils/constants';

export const StorySection = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');

  const steps = [
    { num: '01', title: t('story.step1Title', 'Thu Hái Thủ Công'), desc: t('story.step1Desc', 'Chọn từng trái gấc chín đỏ mọng và dừa già tại các nông hộ liên kết miền Tây.') },
    { num: '02', title: t('story.step2Title', 'Sấy Gió Lạnh'), desc: t('story.step2Desc', 'Tách màng hạt gấc và sấy đối lưu nhiệt độ thấp để giữ nguyên 99.8% Lycopene.') },
    { num: '03', title: t('story.step3Title', 'Ép Lạnh Ly Tâm'), desc: t('story.step3Desc', 'Ép chậm cơ học không sinh nhiệt, chắt lọc từng giọt dầu ruby sóng sánh tinh khiết.') },
    { num: '04', title: t('story.step4Title', 'Đúc Thỏi Mộc'), desc: t('story.step4Desc', 'Hòa quyện cùng sáp thực vật Candelilla và đóng trong vỏ giấy kraft phân hủy sinh học.') }
  ];

  return (
    <section className="py-24 bg-[#FEFBF4] border-b border-[#E7E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Authentic Harvest Documentary Photo */}
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden border border-[#E7E5DF] bg-[#F4EFE6]">
              <img
                src={ASSETS.farm}
                alt={isEn ? "Harvesting ripe natural gac fruits on Vietnamese partner farms" : "Thu hoạch gấc chín cây tự nhiên tại nông trại Việt Nam"}
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
              />
              <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] italic font-heading">
                <span>{t('story.caption')}</span>
                <span className="font-condensed uppercase tracking-wider text-[#9E2A2B] font-bold not-italic">
                  {t('story.captionBadge')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Story Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-condensed text-xs uppercase tracking-[0.25em] text-[#9E2A2B] font-bold block">
              {t('story.badge')}
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-tight">
              {t('story.title')}
            </h2>

            <blockquote className="border-l-2 border-[#9E2A2B] pl-4 italic text-base sm:text-lg font-heading text-[#1F1C17] leading-relaxed">
              {t('story.quote')}
            </blockquote>

            <div className="space-y-4 text-sm text-[#666055] font-light leading-relaxed">
              <p>
                {t('story.p1')}
              </p>
              <p>
                {t('story.p2')}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#9E2A2B] hover:text-[#7C1D1E] transition-colors border-b border-[#9E2A2B] pb-1"
              >
                <span>{t('story.learnMore')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Gaco's Unique 4-Step Artisanal Cold-Pressed Diagram */}
        <div className="pt-12 border-t border-[#E7E5DF]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-condensed text-xs uppercase tracking-[0.2em] text-[#C5A25D] font-bold">
              {t('timeline.badge', 'QUY TRÌNH ÉP LẠNH NGUYÊN BẢN')}
            </span>
            <h3 className="text-2xl font-heading font-medium text-[#1F1C17] mt-1">
              {t('timeline.title', '4 Bước Chiết Xuất Năng Lượng Đỏ Gaco')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-2 hover:border-[#9E2A2B] transition-colors"
              >
                <span className="font-heading font-bold text-2xl text-[#9E2A2B] block">
                  {s.num}
                </span>
                <h4 className="font-heading font-medium text-base text-[#1F1C17]">
                  {s.title}
                </h4>
                <p className="text-xs text-[#666055] font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
