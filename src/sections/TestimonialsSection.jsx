import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../utils/constants';

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      name: 'Nguyễn Minh Thư',
      role: 'Sinh viên ĐH Kinh Tế TP.HCM (Mua lần 2)',
      review: 'Mình ngồi phòng máy lạnh cả ngày nên môi thường khô ráp và viền môi thâm nhẹ. Thoa một lớp mỏng son Gaco buổi tối, sáng dậy môi mềm mượt và ửng hồng cam đào cực kỳ tự nhiên. Mức giá 79k rất vừa túi tiền sinh viên.',
      rating: 5,
      date: 'Đã mua hàng - 24/08/2026'
    },
    {
      name: 'Chị Hoàng Lan Anh',
      role: 'Mẹ bầu tháng thứ 6, Hà Nội',
      review: 'Thời gian mang thai mình kiêng tuyệt đối son màu chứa chì. Son dưỡng Gaco 100% thuần chay kiểm nghiệm Quatest không chì giúp mình yên tâm tuyệt đối, dùng xong môi lên màu đào tươi tắn mà không sợ ảnh hưởng đến em bé.',
      rating: 5,
      date: 'Đã mua hàng - 01/09/2026'
    },
    {
      name: 'Lê Quỳnh Vy',
      role: 'Nhân viên văn phòng, Đà Nẵng',
      review: 'Chất son dạng sáp mịn mượt, thoa lên môi tan nhẹ và không hề bị bóng dính như mỡ động vật. Mùi thơm béo nhẹ rất dễ chịu của dầu dừa già Bến Tre ép lạnh.',
      rating: 5,
      date: 'Đã mua hàng - 18/08/2026'
    }
  ];

  const current = reviews[activeIdx];

  return (
    <section className="py-24 bg-[#FEFBF4] border-b border-[#E7E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Lip Swatch Photography */}
          <div className="lg:col-span-5">
            <div className="border border-[#E7E5DF] bg-[#F4EFE6] overflow-hidden">
              <img
                src={ASSETS.swatch}
                alt="Bờ môi ửng hồng tự nhiên sau khi dùng son dưỡng Gaco"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
              />
              <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs">
                <span className="font-heading italic text-[#1F1C17]">
                  Sắc hồng cam đào từ màng gấc tươi tự nhiên
                </span>
                <span className="font-condensed uppercase tracking-wider text-[#7BAD34] font-bold">
                  100% THUẦN CHAY
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Voices */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
                TRẢI NGHIỆM THỰC TẾ TỪ KHÁCH HÀNG
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17]">
                Hơn 5.000+ bờ môi tìm lại sắc hồng nguyên bản
              </h2>
            </div>

            {/* Current Review Card */}
            <div className="p-8 bg-[#F4EFE6] border border-[#E7E5DF] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#C5A25D]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs text-[#7BAD34] font-bold flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  <span>{current.date}</span>
                </span>
              </div>

              <p className="text-base sm:text-lg font-heading italic text-[#1F1C17] leading-relaxed">
                "{current.review}"
              </p>

              <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-heading font-bold text-[#1F1C17]">
                    {current.name}
                  </h4>
                  <p className="text-xs text-[#666055] font-light">{current.role}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                    aria-label="Đánh giá trước"
                    className="p-2 border border-[#E7E5DF] hover:border-[#1F1C17] text-[#1F1C17] bg-[#FEFBF4] transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
                    aria-label="Đánh giá tiếp theo"
                    className="p-2 border border-[#E7E5DF] hover:border-[#1F1C17] text-[#1F1C17] bg-[#FEFBF4] transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
