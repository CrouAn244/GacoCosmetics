import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, Sparkles, Droplets, MapPin, FlaskConical } from 'lucide-react';
import { SEO } from '../utils/seo';
import { ASSETS, ACTIVE_INGREDIENTS } from '../utils/constants';

export const IngredientsPage = () => {
  const { t } = useTranslation();
  const [selectedIngredient, setSelectedIngredient] = useState('all');

  const fullInciList = [
    {
      inci: 'Momordica Cochinchinensis Seed Aril Oil',
      common: 'Dầu màng gấc đỏ tươi ép lạnh',
      origin: 'Đồng Bằng Sông Cửu Long',
      purpose: 'Giàu Lycopene & Beta-Carotene giúp khử thâm môi, chống oxy hóa, tạo sắc hồng cam tự nhiên'
    },
    {
      inci: 'Cocos Nucifera (Coconut) Oil',
      common: 'Dầu dừa già Bến Tre ép lạnh',
      origin: 'Bến Tre, Việt Nam',
      purpose: 'Khóa ẩm sâu 24h, bổ sung Lauric Acid kháng khuẩn tự nhiên, làm mềm các vảy môi khô nứt'
    },
    {
      inci: 'Euphorbia Cerifera (Candelilla) Wax',
      common: 'Sáp thực vật Candelilla',
      origin: 'Chiết xuất từ lá cây bụi sa mạc tự nhiên',
      purpose: 'Định hình thỏi son thuần chay, thay thế sáp ong, giúp son lướt mịn màng không gây bí dính'
    },
    {
      inci: 'Butyrospermum Parkii (Shea) Butter',
      common: 'Bơ hạt mỡ hữu cơ',
      origin: 'Nông nghiệp hữu cơ',
      purpose: 'Bổ sung acid béo thiết yếu, phục hồi hàng rào lipid cho bờ môi nhạy cảm'
    },
    {
      inci: 'Tocopherol (Vitamin E)',
      common: 'Vitamin E thiên nhiên không biến đổi gen',
      origin: 'Mầm thực vật tự nhiên',
      purpose: 'Bảo vệ tế bào biểu bì môi trước gốc tự do, bảo quản son tự nhiên không cần paraben'
    }
  ];

  return (
    <>
      <SEO
        title="Tìm Hiểu Nguyên Liệu Nông Sản Bản Địa – Gaco Vietnam"
        description="Khám phá các hoạt chất vàng trong son dưỡng Gaco: Lycopene từ gấc đỏ miền Tây, Lauric Acid từ dầu dừa Bến Tre và sáp thực vật Candelilla thuần chay 100%."
      />

      <div className="pt-28 pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F]">
            <Link to="/" className="hover:text-[#1F1C17] transition-colors">TRANG CHỦ</Link>
            <ChevronRight size={12} />
            <span className="text-[#1F1C17] font-semibold">TÌM HIỂU NGUYÊN LIỆU</span>
          </div>
        </div>

        {/* Hero Title - Cocoon Style */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-14">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            100% NÔNG SẢN THUẦN CHAY VIỆT NAM
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
            Nguyên Liệu Đặc Hữu Từ Thiên Nhiên Bản Địa
          </h1>
          <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
            Chúng tôi tin rằng đất mẹ Việt Nam ẩn chứa những dược thảo và nông sản tuyệt vời nhất để nuôi dưỡng đôi môi bạn mềm mại, hồng hào và thuần khiết.
          </p>
        </section>

        {/* Ingredient Filter Bar */}
        <div className="border-y border-[#E7E5DF] bg-[#F4EFE6] py-3 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto text-xs font-condensed uppercase tracking-[0.18em] font-bold">
            <button
              type="button"
              onClick={() => setSelectedIngredient('all')}
              className={`py-1.5 px-3.5 whitespace-nowrap transition-colors ${
                selectedIngredient === 'all'
                  ? 'bg-[#1F1C17] text-[#FEFBF4]'
                  : 'text-[#666055] hover:text-[#1F1C17]'
              }`}
            >
              TẤT CẢ NGUYÊN LIỆU
            </button>
            <button
              type="button"
              onClick={() => setSelectedIngredient('gac')}
              className={`py-1.5 px-3.5 whitespace-nowrap transition-colors ${
                selectedIngredient === 'gac'
                  ? 'bg-[#9E2A2B] text-[#FEFBF4]'
                  : 'text-[#666055] hover:text-[#9E2A2B]'
              }`}
            >
              GẤC ĐỎ MIỀN TÂY (SIÊU HOẠT CHẤT)
            </button>
            <button
              type="button"
              onClick={() => setSelectedIngredient('coconut')}
              className={`py-1.5 px-3.5 whitespace-nowrap transition-colors ${
                selectedIngredient === 'coconut'
                  ? 'bg-[#5E7A4A] text-[#FEFBF4]'
                  : 'text-[#666055] hover:text-[#5E7A4A]'
              }`}
            >
              DỪA GIÀ BẾN TRE (KHÓA ẨM 24H)
            </button>
          </div>
        </div>

        {/* Feature 1: Gấc Đỏ Miền Tây */}
        {(selectedIngredient === 'all' || selectedIngredient === 'gac') && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="border border-[#E7E5DF] bg-[#F4EFE6] overflow-hidden">
                  <img
                    src={ASSETS.gac}
                    alt="Cận cảnh màng gấc chín đỏ mọng giàu Lycopene"
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                  />
                  <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] font-heading italic">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#C5A25D]" />
                      Đồng Bằng Sông Cửu Long &amp; Tây Nguyên
                    </span>
                    <span className="font-condensed uppercase tracking-wider text-[#BE2F31] font-bold not-italic">
                      SIÊU HOẠT CHẤT ĐỎ
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 border border-[#C5A25D] text-[#8C6F2E] bg-[#C5A25D]/10 text-xs font-condensed uppercase tracking-[0.2em] font-bold">
                  HOẠT CHẤT CỐT LÕI • 35% CÔNG THỨC
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-snug">
                  Quả Gấc Đỏ – "Thần Dược" Khử Thâm Môi Tự Nhiên
                </h2>
                <div className="w-16 h-[1.5px] bg-[#C5A25D]"></div>
                
                <p className="text-sm sm:text-base text-[#666055] font-light leading-relaxed">
                  Trong màng bao bọc hạt gấc chín đỏ tươi chứa nồng độ carotenoid đậm đặc nhất trong thế giới thực vật. Gaco áp dụng công nghệ ép lạnh cơ học không sinh nhiệt để tách chiết giọt dầu ruby thuần khiết, giữ vẹn nguyên hàm lượng sinh học quý giá.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#BE2F31]">Lycopene Gấp 70 Lần Cà Chua</p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">Chống oxy hóa tế bào cực mạnh, đẩy lùi hắc tố sạm môi do son chứa chì hay ánh nắng.</p>
                  </div>
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#C5A25D]">Beta-Carotene Gấp 10 Lần Cà Rốt</p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">Chuyển hóa thành Vitamin A tự nhiên, thúc đẩy tăng sinh tế bào biểu bì, làm mờ rãnh nhăn môi.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Feature 2: Dừa Già Bến Tre */}
        {(selectedIngredient === 'all' || selectedIngredient === 'coconut') && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 lg:order-2">
                <div className="border border-[#E7E5DF] bg-[#F4EFE6] overflow-hidden">
                  <img
                    src={ASSETS.coconut}
                    alt="Cơm dừa già Bến Tre ép lạnh nguyên chất"
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                  />
                  <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] font-heading italic">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#C5A25D]" />
                      Giồng Trôm, Tỉnh Bến Tre
                    </span>
                    <span className="font-condensed uppercase tracking-wider text-[#7BAD34] font-bold not-italic">
                      ÉP LẠNH LY TÂM
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1 space-y-6">
                <div className="inline-block px-3 py-1 border border-[#C5A25D] text-[#8C6F2E] bg-[#C5A25D]/10 text-xs font-condensed uppercase tracking-[0.2em] font-bold">
                  KHÓA ẨM CHUYÊN SÂU • 30% CÔNG THỨC
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-snug">
                  Dầu Dừa Già Bến Tre – Hàng Rào Bảo Vệ 24 Giờ
                </h2>
                <div className="w-16 h-[1.5px] bg-[#C5A25D]"></div>

                <p className="text-sm sm:text-base text-[#666055] font-light leading-relaxed">
                  Bến Tre là xứ sở của những trái dừa già đọng mật bên dòng phù sa Mekong. Dầu dừa ép lạnh ly tâm của Gaco giữ lại trọn vẹn chuỗi axit béo mạch trung bình MCTs, đặc biệt là Lauric Acid quý giá (chiếm tới gần 50%), giúp nuôi dưỡng môi từ sâu bên trong.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#1F1C17]">Lauric Acid Tự Nhiên</p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">Kháng khuẩn, kháng nấm và làm lành nhanh chóng các vết nứt nẻ chảy máu trên môi khô.</p>
                  </div>
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#7BAD34]">Khóa Ẩm Ngăn Mất Nước</p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">Tái lập lớp màng lipid sinh học ngăn ngừa bốc hơi nước TEWL suốt cả ngày làm việc phòng máy lạnh.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* Transparency INCI Table - Cocoon Style */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="border border-[#E7E5DF] bg-[#FEFBF4]">
            <div className="p-8 sm:p-10 border-b border-[#E7E5DF] text-center space-y-2">
              <span className="text-xs font-condensed uppercase tracking-[0.2em] text-[#C5A25D] font-bold">
                MINH BẠCH 100% BẢNG THÀNH PHẦN
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
                Danh Pháp Khoa Học INCI Đạt Chuẩn Quốc Tế
              </h3>
              <p className="text-xs sm:text-sm text-[#666055] font-light max-w-xl mx-auto">
                Không thành phần ẩn giấu, không hương liệu tổng hợp. Mỗi thành phần đều có vai trò nuôi dưỡng cụ thể và an toàn tuyệt đối khi vô tình nuốt phải.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F4EFE6] border-b border-[#E7E5DF] font-condensed uppercase tracking-wider text-[#1F1C17] font-bold text-xs">
                    <th className="p-4 sm:p-5 border-r border-[#E7E5DF]">Tên Khoa Học (INCI)</th>
                    <th className="p-4 sm:p-5 border-r border-[#E7E5DF]">Tên Gọi Thân Thuộc</th>
                    <th className="p-4 sm:p-5 border-r border-[#E7E5DF]">Nguồn Gốc Xuất Xứ</th>
                    <th className="p-4 sm:p-5">Công Dụng Sinh Học</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DF]">
                  {fullInciList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                      <td className="p-4 sm:p-5 border-r border-[#E7E5DF] font-mono text-xs text-[#1F1C17] font-semibold">
                        {item.inci}
                      </td>
                      <td className="p-4 sm:p-5 border-r border-[#E7E5DF] font-heading font-medium text-[#1F1C17]">
                        {item.common}
                      </td>
                      <td className="p-4 sm:p-5 border-r border-[#E7E5DF] text-[#666055] font-light">
                        {item.origin}
                      </td>
                      <td className="p-4 sm:p-5 text-[#666055] font-light leading-relaxed">
                        {item.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Safety & Quatest Guarantee */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <div className="p-8 sm:p-12 bg-[#F4EFE6] border border-[#E7E5DF] space-y-4">
            <div className="w-14 h-14 border border-[#1F1C17] text-[#1F1C17] mx-auto flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-heading font-medium text-[#1F1C17]">
              Cam Kết 0% Chì &amp; An Toàn Tuyệt Đối Cho Mẹ Bầu
            </h3>
            <p className="text-xs sm:text-sm text-[#666055] font-light max-w-xl mx-auto leading-relaxed">
              Mẫu son dưỡng Gaco được gửi kiểm định định kỳ tại Trung tâm Kỹ thuật Tiêu chuẩn Đo lường Chất lượng 3 (QUATEST 3). Kết quả hàm lượng Chì (Pb), Thủy ngân (Hg) và Asen (As) đều ở mức <strong>Không Phát Hiện (N.D)</strong>.
            </p>
            <div className="pt-4">
              <Link
                to="/product"
                className="inline-flex items-center gap-3 px-8 py-3.5 button-cocoon-gold text-xs tracking-[0.2em]"
              >
                <span>ĐẶT MUA NGAY • 79.000đ</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
