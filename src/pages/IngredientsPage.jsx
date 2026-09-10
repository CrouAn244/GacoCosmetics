import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, Sparkles, Droplets, MapPin, FlaskConical } from 'lucide-react';
import { SEO } from '../utils/seo';
import { ASSETS, ACTIVE_INGREDIENTS } from '../utils/constants';

export const IngredientsPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');
  const [selectedIngredient, setSelectedIngredient] = useState('all');

  const fullInciList = [
    {
      inci: 'Momordica Cochinchinensis (Gac) Seed Aril Oil',
      common: isEn ? 'Cold-pressed ripe Gac seed aril oil' : 'Dầu màng hạt gấc chín ép lạnh',
      origin: isEn ? 'Mekong Delta' : 'Đồng Bằng Sông Cửu Long',
      purpose: isEn ? 'Rich in Lycopene and Beta-Carotene, diminishes lip discoloration and boosts cellular renewal' : 'Hàm lượng Lycopene và Beta-Carotene đậm đặc, mờ sắc tố thâm xỉn, chống oxy hóa và phục hồi tế bào'
    },
    {
      inci: 'Cocos Nucifera (Coconut) Oil',
      common: isEn ? 'Centrifugal cold-pressed aged Ben Tre coconut oil' : 'Dầu dừa già Bến Tre ép lạnh ly tâm',
      origin: isEn ? 'Ben Tre Province' : 'Tỉnh Bến Tre',
      purpose: isEn ? 'High in Lauric Acid and natural Vitamin E, locks in moisture and antibacterial protection' : 'Chứa Lauric Acid và Vitamin E tự nhiên, khóa ẩm màng lipid và kháng khuẩn lành vết nứt nẻ'
    },
    {
      inci: 'Euphorbia Cerifera (Candelilla) Cera',
      common: isEn ? 'Plant-based Candelilla wax' : 'Sáp thực vật Candelilla tự nhiên',
      origin: isEn ? 'Natural botanical extraction' : 'Chiết xuất từ lá cây bụi Candelilla',
      purpose: isEn ? '100% vegan solidifying wax replacing animal beeswax, smooth non-sticky glide' : 'Định hình thỏi son thuần chay thay thế sáp ong, giúp son tan mịn mượt mà không bết dính'
    },
    {
      inci: 'Simmondsia Chinensis (Jojoba) Seed Oil',
      common: isEn ? 'Pure golden Jojoba oil' : 'Dầu hạt Jojoba nguyên chất',
      origin: isEn ? 'Organic agriculture' : 'Nông nghiệp hữu cơ',
      purpose: isEn ? 'Mimics natural sebum to soften lips and fill vertical creases' : 'Cấu trúc tương đồng bã nhờn tự nhiên, làm mềm môi và lấp đầy các rãnh nhăn viền môi'
    },
    {
      inci: 'Butyrospermum Parkii (Shea) Butter',
      common: isEn ? 'Organic Shea Butter' : 'Bơ hạt mỡ hữu cơ',
      origin: isEn ? 'Organic agriculture' : 'Nông nghiệp hữu cơ',
      purpose: isEn ? 'Essential fatty acids restoring delicate lip barrier' : 'Bổ sung acid béo thiết yếu, phục hồi hàng rào lipid cho bờ môi nhạy cảm'
    },
    {
      inci: 'Tocopherol (Vitamin E)',
      common: isEn ? 'Non-GMO natural Vitamin E' : 'Vitamin E thiên nhiên không biến đổi gen',
      origin: isEn ? 'Plant sprouts' : 'Mầm thực vật tự nhiên',
      purpose: isEn ? 'Neutralizes free radicals and preserves balm freshness without parabens' : 'Bảo vệ tế bào biểu bì môi trước gốc tự do, bảo quản son tự nhiên không cần paraben'
    }
  ];

  return (
    <>
      <SEO
        title={isEn ? "Native Vietnamese Botanical Ingredients – Gaco Vietnam" : "Tìm Hiểu Nguyên Liệu Nông Sản Bản Địa – Gaco Vietnam"}
        description={isEn ? "Explore pure active botanicals in Gaco lip balm: Lycopene from Mekong gac, Lauric Acid from Ben Tre coconut oil, and vegan Candelilla wax." : "Khám phá các hoạt chất vàng trong son dưỡng Gaco: Lycopene từ gấc đỏ miền Tây, Lauric Acid từ dầu dừa Bến Tre và sáp thực vật Candelilla thuần chay 100%."}
      />

      <div className="pt-[125px] sm:pt-[135px] pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F] overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1F1C17] shrink-0">{t('breadcrumbs.home')}</Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="text-[#1F1C17] font-semibold shrink-0">{t('breadcrumbs.ingredients')}</span>
          </div>
        </div>

        {/* Hero Title */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-14 pb-12">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#9E2A2B] font-bold">
            {t('ingredientsPage.tagline')}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
            {t('ingredientsPage.title')}
          </h1>
          <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
            {t('ingredientsPage.subtitle')}
          </p>
        </section>

        {/* Ingredient Filter Bar - Clean on mobile with zero clipping and hidden scrollbar */}
        <div className="border-y border-[#E7E5DF] bg-[#F4EFE6] py-3 mb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center gap-2.5 sm:gap-6 overflow-x-auto no-scrollbar text-xs font-condensed uppercase tracking-[0.18em] font-bold">
            <button
              type="button"
              onClick={() => setSelectedIngredient('all')}
              className={`py-2 px-4 whitespace-nowrap shrink-0 transition-colors ${
                selectedIngredient === 'all'
                  ? 'bg-[#1F1C17] text-[#FEFBF4]'
                  : 'text-[#666055] hover:text-[#1F1C17] bg-[#FEFBF4] border border-[#E7E5DF]'
              }`}
            >
              {t('ingredientsPage.allTab')}
            </button>
            <button
              type="button"
              onClick={() => setSelectedIngredient('gac')}
              className={`py-2 px-4 whitespace-nowrap shrink-0 transition-colors ${
                selectedIngredient === 'gac'
                  ? 'bg-[#9E2A2B] text-[#FEFBF4]'
                  : 'text-[#666055] hover:text-[#9E2A2B] bg-[#FEFBF4] border border-[#E7E5DF]'
              }`}
            >
              {t('ingredientsPage.gacTab')}
            </button>
            <button
              type="button"
              onClick={() => setSelectedIngredient('coconut')}
              className={`py-2 px-4 whitespace-nowrap shrink-0 transition-colors ${
                selectedIngredient === 'coconut'
                  ? 'bg-[#5E7A4A] text-[#FEFBF4]'
                  : 'text-[#666055] hover:text-[#5E7A4A] bg-[#FEFBF4] border border-[#E7E5DF]'
              }`}
            >
              {t('ingredientsPage.coconutTab')}
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
                    alt={isEn ? "Macro shot of ripe gac aril rich in Lycopene" : "Cận cảnh màng gấc chín đỏ mọng giàu Lycopene"}
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                  />
                  <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] font-heading italic">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#C5A25D]" />
                      {isEn ? 'Mekong Delta & Central Highlands' : 'Đồng Bằng Sông Cửu Long & Tây Nguyên'}
                    </span>
                    <span className="font-condensed uppercase tracking-wider text-[#BE2F31] font-bold not-italic">
                      {isEn ? 'SUPER RED ACTIVE' : 'SIÊU HOẠT CHẤT ĐỎ'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 border border-[#C5A25D] text-[#8C6F2E] bg-[#C5A25D]/10 text-xs font-condensed uppercase tracking-[0.2em] font-bold">
                  {isEn ? 'CORE ACTIVE INGREDIENT • 35% FORMULA' : 'HOẠT CHẤT CỐT LÕI • 35% CÔNG THỨC'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-snug">
                  {isEn ? 'Red Gac Fruit – Native Botanical Remedy for Dark Lips' : 'Quả Gấc Đỏ – "Thần Dược" Khử Thâm Môi Tự Nhiên'}
                </h2>
                <div className="w-16 h-[1.5px] bg-[#C5A25D]"></div>
                
                <p className="text-sm sm:text-base text-[#666055] font-light leading-relaxed">
                  {isEn
                    ? 'The fresh red aril surrounding gac seeds contains the highest natural concentration of carotenoids in the botanical world. Gaco applies mechanical heat-free cold-pressing to extract pure ruby oil, keeping precious biological nutrients fully intact.'
                    : 'Trong màng bao bọc hạt gấc chín đỏ tươi chứa nồng độ carotenoid đậm đặc nhất trong thế giới thực vật. Gaco áp dụng công nghệ ép lạnh cơ học không sinh nhiệt để tách chiết giọt dầu ruby thuần khiết, giữ vẹn nguyên hàm lượng sinh học quý giá.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#BE2F31]">
                      {isEn ? 'Lycopene 70x Higher Than Tomato' : 'Lycopene Gấp 70 Lần Cà Chua'}
                    </p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">
                      {isEn
                        ? 'Exceptional cellular antioxidant, suppressing dark melanin caused by lead cosmetics or UV rays.'
                        : 'Chống oxy hóa tế bào cực mạnh, đẩy lùi hắc tố sạm môi do son chứa chì hay ánh nắng.'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#C5A25D]">
                      {isEn ? 'Beta-Carotene 10x Higher Than Carrot' : 'Beta-Carotene Gấp 10 Lần Cà Rốt'}
                    </p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">
                      {isEn
                        ? 'Converts into natural Vitamin A, stimulating epidermal cell renewal and smoothing fine lip lines.'
                        : 'Chuyển hóa thành Vitamin A tự nhiên, thúc đẩy tăng sinh tế bào biểu bì, làm mờ rãnh nhăn môi.'}
                    </p>
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
                    alt={isEn ? "Cold-pressed ripe Ben Tre coconut flesh" : "Cơm dừa già Bến Tre ép lạnh nguyên chất"}
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                  />
                  <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] font-heading italic">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#C5A25D]" />
                      {isEn ? 'Giong Trom, Ben Tre Province' : 'Giồng Trôm, Tỉnh Bến Tre'}
                    </span>
                    <span className="font-condensed uppercase tracking-wider text-[#7BAD34] font-bold not-italic">
                      {isEn ? 'CENTRIFUGAL COLD-PRESS' : 'ÉP LẠNH LY TÂM'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1 space-y-6">
                <div className="inline-block px-3 py-1 border border-[#C5A25D] text-[#8C6F2E] bg-[#C5A25D]/10 text-xs font-condensed uppercase tracking-[0.2em] font-bold">
                  {isEn ? 'DEEP MOISTURE BARRIER • 30% FORMULA' : 'KHÓA ẨM CHUYÊN SÂU • 30% CÔNG THỨC'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-snug">
                  {isEn ? 'Aged Ben Tre Coconut Oil – 24-Hour Protective Barrier' : 'Dầu Dừa Già Bến Tre – Hàng Rào Bảo Vệ 24 Giờ'}
                </h2>
                <div className="w-16 h-[1.5px] bg-[#C5A25D]"></div>

                <p className="text-sm sm:text-base text-[#666055] font-light leading-relaxed">
                  {isEn
                    ? "Ben Tre is the land of sun-kissed coconuts thriving along the fertile Mekong alluvium. Gaco's centrifugal cold-pressed virgin coconut oil fully preserves medium-chain fatty acids (MCTs), notably prized Lauric Acid (nearly 50%), deeply nourishing lips from within."
                    : "Bến Tre là xứ sở của những trái dừa già đọng mật bên dòng phù sa Mekong. Dầu dừa ép lạnh ly tâm của Gaco giữ lại trọn vẹn chuỗi axit béo mạch trung bình MCTs, đặc biệt là Lauric Acid quý giá (chiếm tới gần 50%), giúp nuôi dưỡng môi từ sâu bên trong."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#1F1C17]">
                      {isEn ? 'Natural Lauric Acid' : 'Lauric Acid Tự Nhiên'}
                    </p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">
                      {isEn
                        ? 'Antibacterial and antifungal, rapidly soothing dry, cracked, or bleeding lip crevices.'
                        : 'Kháng khuẩn, kháng nấm và làm lành nhanh chóng các vết nứt nẻ chảy máu trên môi khô.'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                    <p className="font-heading font-bold text-lg text-[#7BAD34]">
                      {isEn ? 'Moisture Lock & Anti-TEWL' : 'Khóa Ẩm Ngăn Mất Nước'}
                    </p>
                    <p className="text-xs text-[#666055] font-light leading-relaxed">
                      {isEn
                        ? 'Restores the biological lipid barrier, preventing trans-epidermal water loss throughout the day in air-conditioned spaces.'
                        : 'Tái lập lớp màng lipid sinh học ngăn ngừa bốc hơi nước TEWL suốt cả ngày làm việc phòng máy lạnh.'}
                    </p>
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
                {t('ingredientsPage.tableTag')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
                {t('ingredientsPage.tableTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#666055] font-light max-w-xl mx-auto">
                {t('ingredientsPage.tableSubtitle')}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F4EFE6] border-b border-[#E7E5DF] font-condensed uppercase tracking-wider text-[#1F1C17] font-bold text-xs">
                    <th className="p-4 sm:p-5 border-r border-[#E7E5DF]">{t('ingredientsPage.inciCol')}</th>
                    <th className="p-4 sm:p-5 border-r border-[#E7E5DF]">{t('ingredientsPage.commonCol')}</th>
                    <th className="p-4 sm:p-5 border-r border-[#E7E5DF]">{t('ingredientsPage.originCol')}</th>
                    <th className="p-4 sm:p-5">{t('ingredientsPage.purposeCol')}</th>
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
              {t('ingredientsPage.safetyTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-[#666055] font-light max-w-xl mx-auto leading-relaxed">
              {t('ingredientsPage.safetyDesc')}
            </p>
            <div className="pt-4">
              <Link
                to="/product"
                className="inline-flex items-center gap-3 px-8 py-3.5 button-cocoon-gold text-xs tracking-[0.2em]"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
