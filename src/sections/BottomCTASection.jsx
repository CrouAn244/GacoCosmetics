import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

export const BottomCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#1F1C17] text-[#FEFBF4] text-center border-t border-[#38342E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <span className="text-xs font-condensed uppercase tracking-[0.3em] text-[#9E2A2B] font-bold">
          100% THUẦN CHAY • NÔNG SẢN BẢN ĐỊA VIỆT NAM
        </span>

        <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight leading-tight text-[#FEFBF4]">
          Hồi sinh bờ môi hồng tự nhiên cùng tinh hoa Gấc &amp; Dừa Bến Tre
        </h2>

        <p className="text-sm sm:text-base text-[#97958F] font-light max-w-2xl mx-auto leading-relaxed">
          Trải nghiệm dòng son dưỡng hữu cơ không chì được hàng ngàn mẹ bầu và học sinh, sinh viên tin chọn. Nhận ngay cẩm nang chăm sóc môi và voucher tiết kiệm khi đặt combo hôm nay.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <Link
            to="/product"
            className="px-9 py-4 button-gaco-ruby text-xs tracking-[0.2em] shadow-md flex items-center gap-2"
          >
            <span>ĐẶT HÀNG NGAY • 79.000đ</span>
            <ArrowRight size={14} />
          </Link>

          <a
            href={SOCIAL_LINKS.messenger}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-[#FEFBF4]/40 text-[#FEFBF4] hover:bg-[#FEFBF4] hover:text-[#1F1C17] text-xs font-condensed uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>TƯ VẤN TRỰC TIẾP 24/7</span>
          </a>
        </div>

        <p className="text-xs text-[#97958F] font-light pt-2">
          Kiểm tra hàng trước khi thanh toán • Đổi trả trong 7 ngày nếu không hài lòng
        </p>

      </div>
    </section>
  );
};
