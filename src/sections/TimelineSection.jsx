import React from 'react';
import { useTranslation } from 'react-i18next';
import { PRODUCTION_TIMELINE } from '../utils/constants';

export const TimelineSection = () => {
  const { i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');

  return (
    <section className="py-24 bg-[#F5EFE8] dark:bg-[#161413] border-b border-[#E8E2D9] dark:border-[#2E2925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A83B1B] font-bold">
            {isEn ? 'CLOSED-LOOP COLD-PRESS METHOD' : 'Quy Trình Ép Lạnh Khép Kín'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1A1615] dark:text-[#F3EFEA] mt-2">
            {isEn ? 'Preserving Pristine Botanical Nutrients' : 'Giữ Trọn Dưỡng Chất Nguyên Bản'}
          </h2>
          <p className="text-xs sm:text-sm text-[#665E57] dark:text-[#A39A91] mt-3 leading-relaxed">
            {isEn
              ? 'Mechanical heat-free extraction safeguards carotenoids and Vitamin E sensitive to high temperatures.'
              : 'Phương pháp ép cơ học không gia nhiệt giúp bảo toàn cấu trúc Carotenoid và Vitamin E nhạy cảm với nhiệt độ cao.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PRODUCTION_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF7F2] dark:bg-[#1C1918] border border-[#E8E2D9] dark:border-[#2E2925] flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-heading font-normal text-[#A83B1B]">
                  {item.step}
                </span>
                <h4 className="text-base font-heading font-bold text-[#1A1615] dark:text-[#F3EFEA] mt-4 mb-2">
                  {isEn ? (item.titleEn || item.titleVi) : item.titleVi}
                </h4>
                <p className="text-xs text-[#665E57] dark:text-[#A39A91] leading-relaxed">
                  {isEn ? (item.descEn || item.descVi) : item.descVi}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E8E2D9] dark:border-[#2E2925]">
                <span className="text-[10px] uppercase tracking-widest text-[#344C3D] font-semibold">
                  {isEn ? 'cGMP Standards' : 'Tiêu chuẩn cGMP'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
