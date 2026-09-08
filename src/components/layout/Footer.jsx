import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#121110] text-[#F3EFEA] border-t border-[#2E2925] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup (Cocoon style) */}
        <div className="pb-16 mb-16 border-b border-[#2E2925] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A83B1B] font-bold">
              Bản Tin Nông Sản Thuần Chay
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-medium mt-1">
              Đồng hành cùng hành trình mỹ phẩm thuần chay Việt
            </h3>
            <p className="text-xs text-[#A39A91] mt-2">
              Nhận voucher 149k chào mừng và cẩm nang chăm sóc môi định kỳ từ chuyên gia.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã đăng ký nhận bản tin Gaco!'); }} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Nhập địa chỉ email của bạn..."
              className="flex-1 px-4 py-3 bg-[#1C1918] border border-[#2E2925] text-xs text-[#F3EFEA] placeholder-[#665E57] focus:border-[#A83B1B] outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#A83B1B] hover:bg-[#8C2E13] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-colors shrink-0"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>

        {/* 4 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand Philosophy */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl tracking-[0.25em] text-[#F3EFEA]">
                GACO
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-[#A83B1B] font-semibold">
                VIETNAM
              </span>
            </div>

            <p className="text-xs text-[#A39A91] leading-relaxed">
              Mỹ phẩm 100% thuần chay từ nông sản bản địa Việt Nam. Sứ mệnh nâng tầm giá trị trái gấc và dừa Bến Tre thành những giải pháp chăm sóc sắc đẹp lành tính, tôn vinh thiên nhiên và con người đất Việt.
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
              DANH MỤC
            </h4>
            <ul className="space-y-3 text-xs text-[#A39A91]">
              <li>
                <Link to="/" className="hover:text-[#F3EFEA] transition-colors">Trang Chủ</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F3EFEA] transition-colors">Câu Chuyện Thương Hiệu (SOSTAC)</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-[#F3EFEA] transition-colors">Son Dưỡng Gấc &amp; Dừa Bến Tre (79.000đ)</Link>
              </li>
              <li>
                <Link to="/ingredients" className="hover:text-[#F3EFEA] transition-colors">Bản Đồ Nguyên Liệu Bản Địa</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#F3EFEA] transition-colors">Bài Viết &amp; Cẩm Nang Chăm Sóc Môi</Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-[#F3EFEA] transition-colors">Tài Khoản Gaco Member Club</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF7F2] mb-5">
              THÔNG TIN LIÊN HỆ
            </h4>
            <ul className="space-y-3 text-xs text-[#A39A91]">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#A83B1B] mt-0.5 shrink-0" />
                <span>123 Đường Nông Nghiệp Xanh, Q.1, TP. Hồ Chí Minh</span>
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
                <span>Hỗ trợ trực tuyến: Phản hồi &lt; 2 phút</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Certifications & Quatest */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF7F2] mb-5">
              CHỨNG NHẬN QUỐC TẾ
            </h4>
            <div className="space-y-3 text-xs text-[#A39A91]">
              <div className="p-3 bg-[#1C1918] border border-[#2E2925] space-y-1">
                <p className="font-bold text-[#FAF7F2]">Leaping Bunny &amp; The Vegan Society</p>
                <p className="text-[11px] text-[#A39A91]">Không thử nghiệm trên động vật và 100% thuần thực vật</p>
              </div>
              <div className="p-3 bg-[#1C1918] border border-[#2E2925] space-y-1">
                <p className="font-bold text-[#FAF7F2]">Kiểm Định Trung Tâm Quatest</p>
                <p className="text-[11px] text-[#A39A91]">0% Chì • An toàn tuyệt đối cho mẹ bầu suốt thai kỳ</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 border-t border-[#2E2925] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#665E57]">
          <p>© 2026 GACO VIETNAM. Bản quyền thuộc về đồ án Marketing Số (SOSTAC Framework).</p>
          <div className="flex items-center gap-6 uppercase tracking-widest text-[#A39A91]">
            <span>100% Thuần Chay</span>
            <span>•</span>
            <span>Nông Sản Bản Địa</span>
            <span>•</span>
            <span>0% Chì</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
