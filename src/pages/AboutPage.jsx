import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../utils/seo';
import { ASSETS } from '../utils/constants';

export const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');
  const [activeTab, setActiveTab] = useState('story'); // 'story' | 'philosophy' | 'sostac'

  const values = [
    {
      num: '01',
      title: isEn ? '100% Natural Vegan' : '100% Thuần Chay Tự Nhiên',
      desc: isEn
        ? 'We do not use beeswax, lanolin, or any animal derivatives. Gaco lip balm is crystalized from natural Candelilla plant wax combined with pure gac oil and coconut oil.'
        : 'Chúng tôi không sử dụng sáp ong, không mỡ cừu (Lanolin) hay bất kỳ dẫn xuất nào từ động vật. Son dưỡng Gaco được kết tinh từ sáp thực vật Candelilla tự nhiên kết hợp cùng tinh dầu gấc và dầu dừa.'
    },
    {
      num: '02',
      title: isEn ? 'Honoring Native Crops' : 'Tôn Vinh Nông Sản Bản Địa',
      desc: isEn
        ? 'Every ripe red gac and drop of aged Ben Tre coconut oil is directly procured from Vietnamese agricultural cooperatives, fostering a green supply chain.'
        : 'Mỗi trái gấc chín đỏ và từng giọt dầu dừa già Bến Tre đều được thu mua trực tiếp từ các hợp tác xã nông nghiệp Việt Nam, thúc đẩy chuỗi cung ứng xanh và nâng tầm giá trị nông sản nước nhà.'
    },
    {
      num: '03',
      title: isEn ? 'Transparent & Absolutely Lead-Free' : 'Minh Bạch & Tuyệt Đối Không Chì',
      desc: isEn
        ? '100% transparent scientific INCI formulation. Products rigorously pass Quatest 3 inspection with 0% lead and heavy metals, completely safe for mothers and children.'
        : 'Công khai 100% bảng thành phần khoa học đạt chuẩn INCI. Sản phẩm vượt qua các đợt kiểm nghiệm nghiêm ngặt của Quatest 3 với kết quả 0% chì và kim loại nặng, an toàn cho cả mẹ bầu và trẻ nhỏ.'
    }
  ];

  return (
    <>
      <SEO
        title={isEn ? "Brand Story & Native Botanical Philosophy – Gaco Vietnam" : "Câu Chuyện Thương Hiệu & Triết Lý Nông Sản – Gaco Vietnam"}
        description={isEn
          ? "Discover Gaco Vietnam's journey: honoring native agriculture, 100% vegan lip balm from red gac and cold-pressed Ben Tre coconut oil."
          : "Khám phá hành trình của Gaco Vietnam: sứ mệnh tôn vinh nông sản bản địa, son dưỡng thuần chay từ gấc và dầu dừa Bến Tre ép lạnh an toàn cho mẹ bầu."}
      />

      <div className="pt-[125px] sm:pt-[135px] pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F] overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1F1C17] shrink-0">{t('breadcrumbs.home')}</Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="text-[#1F1C17] font-semibold shrink-0">{t('breadcrumbs.about')}</span>
          </div>
        </div>

        {/* Sub-Navigation Bar */}
        <div className="bg-[#FEFBF4] border-b border-[#E7E5DF] sticky top-[80px] sm:top-[85px] z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-3.5 text-xs font-condensed uppercase tracking-[0.18em] font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('story')}
                className={`pb-1 transition-colors whitespace-nowrap ${
                  activeTab === 'story'
                    ? 'text-[#9E2A2B] border-b-2 border-[#9E2A2B]'
                    : 'text-[#97958F] hover:text-[#1F1C17]'
                }`}
              >
                {t('aboutPage.storyTab')}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('philosophy')}
                className={`pb-1 transition-colors whitespace-nowrap ${
                  activeTab === 'philosophy'
                    ? 'text-[#9E2A2B] border-b-2 border-[#9E2A2B]'
                    : 'text-[#97958F] hover:text-[#1F1C17]'
                }`}
              >
                {t('aboutPage.philosophyTab')}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sostac')}
                className={`pb-1 transition-colors whitespace-nowrap ${
                  activeTab === 'sostac'
                    ? 'text-[#9E2A2B] border-b-2 border-[#9E2A2B]'
                    : 'text-[#97958F] hover:text-[#1F1C17]'
                }`}
              >
                {t('aboutPage.sostacTab')}
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: CÂU CHUYỆN THƯƠNG HIỆU */}
        {activeTab === 'story' && (
          <div>
            {/* Editorial Hero Manifesto */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-14">
              <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
                {isEn ? 'GACO ORIGINAL VIETNAM • ORIGIN STORY' : 'GACO ORIGINAL VIETNAM • CÂU CHUYỆN KHỞI NGUỒN'}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
                {isEn ? 'Awakening Red Energy From Mother Earth' : 'Đánh Thức Năng Lượng Đỏ Từ Đất Mẹ'}
              </h1>
              <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
                {isEn
                  ? 'The journey of transforming ripe red gac fruit and cold-pressed aged Ben Tre coconut into the purest, safest vegan lip care for Vietnamese lips.'
                  : 'Hành trình đưa từng trái gấc chín đỏ mọng và giọt dầu dừa già Bến Tre trở thành giải pháp dưỡng môi thuần chay an toàn, thuần khiết nhất cho người Việt.'}
              </p>
            </section>

            {/* Cocoon Split Editorial Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Real Harvest Documentary Image */}
                <div className="lg:col-span-6">
                  <div className="overflow-hidden border border-[#E7E5DF] bg-[#F4EFE6]">
                    <img
                      src={ASSETS.farm}
                      alt={isEn ? "Farmers harvesting ripe gac in Mekong orchards" : "Nông dân thu hoạch gấc chín tại nhà vườn miền Tây"}
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                    />
                    <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] font-heading italic">
                      <span>{isEn ? 'Farming cooperatives & raw material zone • Mekong River Delta' : 'Vùng nguyên liệu canh tác nông hộ • Đồng Bằng Sông Cửu Long'}</span>
                      <span className="font-condensed uppercase tracking-wider text-[#C5A25D] font-bold not-italic">
                        {isEn ? '100% NATURAL' : '100% TỰ NHIÊN'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Text */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
                    {isEn ? 'SPARKED BY LOVE FOR VIETNAMESE CROPS' : 'KHỞI PHÁT TỪ TÌNH YÊU NÔNG SẢN VIỆT'}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-snug">
                    {isEn
                      ? 'Why search far away when mother earth provides miracles right here?'
                      : 'Tại sao phải tìm kiếm giải pháp xa xôi khi đất mẹ ban tặng điều kỳ diệu?'}
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-[#666055] font-light leading-relaxed">
                    <p>
                      {isEn
                        ? 'Vietnam is blessed by nature with extraordinarily lush tropical flora. For centuries, ripe gac fruit was only known for ceremonial sticky rice during celebratory feasts. Yet inside modern scientific laboratories, fresh gac aril membrane reveals itself as an astonishing botanical treasure.'
                        : 'Việt Nam được thiên nhiên ưu đãi với thảm thực vật nhiệt đới vô cùng trù phú. Quả gấc từ ngàn đời nay vốn chỉ gắn liền với những mâm xôi lễ Tết ấm cúng của làng quê Bắc Bộ và Nam Bộ. Thế nhưng, trong phòng thí nghiệm khoa học hiện đại, màng hạt gấc tươi lại là một báu vật thực vật đáng kinh ngạc.'}
                    </p>
                    <p>
                      {isEn
                        ? 'The concentration of Lycopene in gac is 70 times higher than in tomatoes, and Beta-Carotene is 10 times higher than in carrots. These are two of the most potent natural antioxidants known, activating the restoration of natural lip blush and shielding delicate lips from UV radiation.'
                        : 'Nồng độ Lycopene trong gấc cao gấp 70 lần cà chua, và Beta-Carotene cao gấp 10 lần cà rốt. Đây là hai chất chống oxy hóa tự nhiên mạnh mẽ nhất, có khả năng kích hoạt tái sinh sắc tố môi thâm sạm và bảo vệ bờ môi trước tác hại của tia cực tím.'}
                    </p>
                    <p>
                      {isEn
                        ? 'Infused with rich Lauric Acid from cold-pressed aged Ben Tre coconuts, Gaco creates a 100% vegan lip balm, free from beeswax and lead – smooth as velvet and completely safe for expectant mothers.'
                        : 'Hòa quyện cùng nguồn Lauric Acid dồi dào từ dầu dừa già Bến Tre ép lạnh ly tâm, Gaco kiến tạo nên một thỏi son dưỡng 100% thuần chay, không sáp ong, không chì – mềm mượt như nhung và an toàn trọn vẹn cho cả phụ nữ mang thai.'}
                    </p>
                  </div>

                  {/* Cocoon Signature Gold Quote Callout */}
                  <div className="p-6 border-l-2 border-[#C5A25D] bg-[#F4EFE6] text-sm text-[#1F1C17] font-heading italic leading-relaxed">
                    {isEn
                      ? '"We do not merely craft a lip balm. We infuse the soul of Vietnamese countryside, the diligence of local farmers, and native agricultural pride into every gentle stroke on your lips."'
                      : '"Chúng tôi không đơn thuần sản xuất một thỏi son dưỡng môi. Chúng tôi đang gửi gắm hồn quê Việt Nam, công sức của người nông dân và niềm tự hào nông sản bản địa vào từng chạm chạm dịu lành trên môi bạn."'}
                  </div>
                </div>

              </div>
            </section>

            {/* 3 Metric Counter Bar - Cocoon Style */}
            <section className="bg-[#F4EFE6] py-16 border-y border-[#E7E5DF] mb-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#E7E5DF]">
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-4xl sm:text-5xl font-heading font-bold text-[#C5A25D]">100%</p>
                    <p className="text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#1F1C17]">
                      {isEn ? 'Native Vietnamese Crops' : 'Nông Sản Bản Địa Việt Nam'}
                    </p>
                    <p className="text-xs text-[#666055] font-light max-w-xs mx-auto">
                      {isEn ? 'Fresh Mekong gac & Cold-pressed aged Ben Tre coconut' : 'Gấc tươi miền Tây & Dừa già Bến Tre ép lạnh'}
                    </p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-4xl sm:text-5xl font-heading font-bold text-[#7BAD34]">0%</p>
                    <p className="text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#1F1C17]">
                      {isEn ? 'Lead, Paraben & Animal Fat' : 'Chì, Paraben & Mỡ Động Vật'}
                    </p>
                    <p className="text-xs text-[#666055] font-light max-w-xs mx-auto">
                      {isEn ? 'Quatest 3 certified safe for pregnancy' : 'Kiểm nghiệm Quatest 3 an toàn cho mẹ bầu'}
                    </p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-4xl sm:text-5xl font-heading font-bold text-[#1F1C17]">79.000đ</p>
                    <p className="text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#1F1C17]">
                      {isEn ? 'Accessible Honest Price' : 'Mức Giá Dễ Tiếp Cận'}
                    </p>
                    <p className="text-xs text-[#666055] font-light max-w-xs mx-auto">
                      {isEn ? 'Everyone deserves clean, healthy cosmetics' : 'Mọi người tiêu dùng đều xứng đáng dùng mỹ phẩm sạch'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: TRIẾT LÝ THƯƠNG HIỆU */}
        {activeTab === 'philosophy' && (
          <div className="pt-16 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
              <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
                {isEn ? 'UNWAVERING COMMITMENT' : 'CAM KẾT BẤT DI BẤT DỊCH'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6">
                {isEn ? "Gaco's 3 Core Values" : '3 Giá Trị Cốt Lõi Của Gaco'}
              </h2>
              <p className="text-base text-[#666055] font-light max-w-2xl mx-auto">
                {isEn
                  ? 'Every step of raw material selection, cold-formulation, and eco-friendly packaging is guided by these three compasses.'
                  : 'Từng công đoạn chọn lọc nguyên liệu, quy trình điều chế và bao bì thân thiện môi trường đều được soi chiếu bởi 3 kim chỉ nam này.'}
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="p-8 sm:p-10 bg-[#FEFBF4] border border-[#E7E5DF] space-y-4 hover:border-[#C5A25D] transition-colors"
                  >
                    <span className="text-3xl font-heading font-bold text-[#C5A25D] block">
                      {v.num}
                    </span>
                    <h3 className="text-xl font-heading font-medium text-[#1F1C17]">
                      {v.title}
                    </h3>
                    <div className="w-12 h-[1.5px] bg-[#C5A25D]"></div>
                    <p className="text-sm text-[#666055] font-light leading-relaxed pt-2">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* International Certifications Banner */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 sm:p-12 bg-[#F4EFE6] border border-[#E7E5DF] text-center space-y-6">
                <span className="text-xs font-condensed uppercase tracking-[0.2em] text-[#C5A25D] font-bold">
                  {isEn ? 'INTERNATIONAL CERTIFICATIONS & PLEDGES' : 'CHỨNG NHẬN & CAM KẾT QUỐC TẾ'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
                  {isEn ? 'Absolute Peace of Mind in Every Application' : 'An Tâm Tuyệt Đối Trong Từng Lần Thoa Son'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 text-xs font-condensed uppercase tracking-wider text-[#1F1C17] font-bold">
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#7BAD34] mx-auto mb-1" />
                    <p>100% VEGAN</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">
                      {isEn ? 'Beeswax-free vegan' : 'Thuần chay không sáp ong'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#C5A25D] mx-auto mb-1" />
                    <p>CRUELTY-FREE</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">
                      {isEn ? 'No animal testing' : 'Không thử trên động vật'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#1F1C17] mx-auto mb-1" />
                    <p>QUATEST 3</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">
                      {isEn ? '0% Lead tested' : 'Kiểm nghiệm 0% chì'}
                    </p>
                  </div>
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#7BAD34] mx-auto mb-1" />
                    <p>MOM-SAFE</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">
                      {isEn ? 'Safe for pregnancy' : 'An toàn cho mẹ bầu'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CHIẾN LƯỢC SOSTAC */}
        {activeTab === 'sostac' && (
          <div className="pt-16 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
              <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
                {isEn ? 'ACADEMIC & PRACTICAL • DIGITAL MARKETING' : 'HỌC THUẬT & THỰC TIỄN • DIGITAL MARKETING'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6">
                {isEn ? 'SOSTAC Strategic Framework – Gaco Cosmetics' : 'Khung Chiến Lược SOSTAC – Gaco Cosmetics'}
              </h2>
              <p className="text-base text-[#666055] font-light max-w-2xl mx-auto">
                {isEn
                  ? "Digital Marketing coursework project applying PR Smith's SOSTAC model to build an omnichannel strategy for Vietnamese organic lip care."
                  : 'Dự án học phần Marketing Số ứng dụng mô hình SOSTAC của PR Smith để hoạch định chiến lược tiếp thị đa kênh cho dòng son dưỡng hữu cơ Việt Nam.'}
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* S */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">{isEn ? 'STEP 1' : 'BƯỚC 1'}</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">S - Situation</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">
                    {isEn ? 'Realistic Situation Analysis' : 'Phân Tích Bối Cảnh Thực Tế'}
                  </h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    {isEn
                      ? 'Clean Beauty demand grows 22%/yr. The Vietnamese lip balm market is polarized between cheap synthetic balms with heavy metal risks and imported cosmetics priced 250k-500k. Gaco bridges this gap with native botanical science at only 79K.'
                      : 'Nhu cầu Clean Beauty tăng 22%/năm. Thị trường son dưỡng Việt bị phân cực: son hóa học giá rẻ nguy cơ chì cao; mỹ phẩm ngoại nhập giá từ 250k–500k. Gaco khỏa lấp khoảng trống này với son bản địa chuẩn khoa học giá chỉ 79K.'}
                  </p>
                </div>

                {/* O */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">{isEn ? 'STEP 2' : 'BƯỚC 2'}</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">O - Objectives</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">
                    {isEn ? "PR Smith's 5S Objectives" : 'Mục Tiêu 5S Của PR Smith'}
                  </h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    {isEn
                      ? 'Sell: Reach 5,000 orders in Year 1. Serve: < 2 min response via chatbot and live-chat. Speak: Educate users on gac benefits. Save: Optimize eco packaging. Sizzle: Exclusive 149k combo trial voucher.'
                      : 'Sell: Tiếp cận 5.000 đơn hàng năm đầu. Serve: Tốc độ phản hồi < 2 phút qua chatbot và live-chat. Speak: Giáo dục người dùng về gấc. Save: Tối ưu chi phí bao bì. Sizzle: Tặng voucher dùng thử 149k combo.'}
                  </p>
                </div>

                {/* S */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">{isEn ? 'STEP 3' : 'BƯỚC 3'}</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">S - Strategy</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">
                    {isEn ? 'Positioning & Persona Strategy' : 'Chiến Lược Định Vị & Persona'}
                  </h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    {isEn
                      ? 'Positioned as "Vegan lip balm powered by red gac energy". Targeting 2 core segments: Gen Z / Students (campus lip discoloration, budget conscious) and Expectant Mothers (strictly 0% lead).'
                      : 'Định vị "Son dưỡng thuần chay giàu năng lượng đỏ từ gấc". Nhắm mục tiêu 2 phân khúc cốt lõi: Gen Z / Sinh viên (thâm môi học đường, ngân sách vừa phải) và Phụ nữ mang thai (yêu cầu 0% chì tuyệt đối).'}
                  </p>
                </div>

                {/* T */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">{isEn ? 'STEP 4' : 'BƯỚC 4'}</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">T - Tactics</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">
                    {isEn ? 'Omnichannel Marketing Tactics' : 'Chiến Thuật Tiếp Thị Đa Kênh'}
                  </h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    {isEn
                      ? 'Cocoon-aesthetic SEO website; TikTok #VietnameseSoulInGacBalm; PR editorial on lip darkening remedies; automated Messenger consultation funnel; campus sampling.'
                      : 'Xây dựng website chuẩn SEO Cocoon aesthetic; chiến dịch TikTok ngắn #HonVietTrongThoiSonGac; bài PR cẩm nang trị thâm môi; phễu chat Messenger tư vấn tự động; sampling tại trường đại học.'}
                  </p>
                </div>

                {/* A */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">{isEn ? 'STEP 5' : 'BƯỚC 5'}</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">A - Action</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">
                    {isEn ? 'Implementation & Execution Plan' : 'Kế Hoạch Triển Khai Thực Thi'}
                  </h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    {isEn
                      ? 'Gaco Green Circle Membership Club with personalized regimens; instant order form sync with Google Sheets; digital voucher system; responsive UI across all devices.'
                      : 'Gaco Green Circle Membership Club lưu trữ hồ sơ cá nhân hóa; form đặt hàng tức thì kết nối Google Sheets; hệ thống voucher số hóa; đồng bộ giao diện responsive mượt mà trên mọi thiết bị.'}
                  </p>
                </div>

                {/* C */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">{isEn ? 'STEP 6' : 'BƯỚC 6'}</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">C - Control</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">
                    {isEn ? 'Control & KPI Measurement' : 'Kiểm Soát & Đo Lường KPIs'}
                  </h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    {isEn
                      ? 'Track bounce rate, session duration, lead conversion rate (CR > 3.5%), customer CSAT score, and marketing campaign ROI.'
                      : 'Theo dõi tỷ lệ bounce rate, thời gian lưu trang (session duration), tỷ lệ chuyển đổi form lead (CR > 3.5%), chỉ số CSAT phản hồi của khách hàng và chỉ số đo lường ROI chiến dịch.'}
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Cocoon Signature Bottom Call to Action */}
        <section className="border-t border-[#E7E5DF] pt-16 text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-4">
            <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
              {isEn ? 'REAL EXPERIENCE' : 'TRẢI NGHIỆM THỰC TẾ'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
              {isEn ? 'Ready to Care for Healthy, Radiant Lips with Gaco?' : 'Sẵn Sàng Cùng Gaco Chăm Sóc Đôi Môi Khỏe Đẹp?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
              {isEn
                ? 'Discover our gac & coconut lip balm at special trial price of 79,000 đ and save with the 149,000 đ duo combo.'
                : 'Khám phá sản phẩm son dưỡng gấc dầu dừa với ưu đãi 79.000 đ và combo tiết kiệm 149.000 đ.'}
            </p>
            <div className="pt-4">
              <Link
                to="/product"
                className="inline-flex items-center gap-3 px-8 py-3.5 button-cocoon-gold text-xs tracking-[0.2em]"
              >
                <span>{isEn ? 'VIEW PRODUCT DETAILS' : 'XEM CHI TIẾT SẢN PHẨM'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
