import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Target, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { SEO } from '../utils/seo';
import { ASSETS } from '../utils/constants';

export const AboutPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('story'); // 'story' | 'philosophy' | 'sostac'

  const values = [
    {
      num: '01',
      title: '100% Thuần Chay Tự Nhiên',
      desc: 'Chúng tôi không sử dụng sáp ong, không mỡ cừu (Lanolin) hay bất kỳ dẫn xuất nào từ động vật. Son dưỡng Gaco được kết tinh từ sáp thực vật Candelilla tự nhiên kết hợp cùng tinh dầu gấc và dầu dừa.'
    },
    {
      num: '02',
      title: 'Tôn Vinh Nông Sản Bản Địa',
      desc: 'Mỗi trái gấc chín đỏ và từng giọt dầu dừa già Bến Tre đều được thu mua trực tiếp từ các hợp tác xã nông nghiệp Việt Nam, thúc đẩy chuỗi cung ứng xanh và nâng tầm giá trị nông sản nước nhà.'
    },
    {
      num: '03',
      title: 'Minh Bạch & Tuyệt Đối Không Chì',
      desc: 'Công khai 100% bảng thành phần khoa học đạt chuẩn INCI. Sản phẩm vượt qua các đợt kiểm nghiệm nghiêm ngặt của Quatest 3 với kết quả 0% chì và kim loại nặng, an toàn cho cả mẹ bầu và trẻ nhỏ.'
    }
  ];

  return (
    <>
      <SEO
        title="Câu Chuyện Thương Hiệu & Triết Lý Nông Sản – Gaco Vietnam"
        description="Khám phá hành trình của Gaco Vietnam: sứ mệnh tôn vinh nông sản bản địa, son dưỡng thuần chay từ gấc và dầu dừa Bến Tre ép lạnh an toàn cho mẹ bầu."
      />

      <div className="pt-28 pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs - Cocoon Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F]">
            <Link to="/" className="hover:text-[#1F1C17] transition-colors">TRANG CHỦ</Link>
            <ChevronRight size={12} />
            <span className="text-[#1F1C17] font-semibold">CÂU CHUYỆN THƯƠNG HIỆU</span>
          </div>
        </div>

        {/* Cocoon Sub-Navigation Bar */}
        <div className="bg-[#FEFBF4] border-b border-[#E7E5DF] sticky top-[68px] z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center sm:justify-start gap-8 overflow-x-auto py-4 text-xs font-condensed uppercase tracking-[0.2em] font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('story')}
                className={`pb-1 transition-colors whitespace-nowrap ${
                  activeTab === 'story'
                    ? 'text-[#9E2A2B] border-b-2 border-[#9E2A2B]'
                    : 'text-[#97958F] hover:text-[#1F1C17]'
                }`}
              >
                CÂU CHUYỆN THƯƠNG HIỆU
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
                TRIẾT LÝ THƯƠNG HIỆU
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
                CHIẾN LƯỢC SOSTAC
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
                GACO ORIGINAL VIETNAM • CÂU CHUYỆN KHỞI NGUỒN
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
                Đánh Thức Năng Lượng Đỏ Từ Đất Mẹ
              </h1>
              <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
                Hành trình đưa từng trái gấc chín đỏ mọng và giọt dầu dừa già Bến Tre trở thành giải pháp dưỡng môi thuần chay an toàn, thuần khiết nhất cho người Việt.
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
                      alt="Nông dân thu hoạch gấc chín tại nhà vườn miền Tây"
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700"
                    />
                    <div className="p-4 bg-[#FEFBF4] border-t border-[#E7E5DF] flex items-center justify-between text-xs text-[#97958F] font-heading italic">
                      <span>Vùng nguyên liệu canh tác nông hộ • Đồng Bằng Sông Cửu Long</span>
                      <span className="font-condensed uppercase tracking-wider text-[#C5A25D] font-bold not-italic">100% TỰ NHIÊN</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Text */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
                    KHỞI PHÁT TỪ TÌNH YÊU NÔNG SẢN VIỆT
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-heading font-normal text-[#1F1C17] leading-snug">
                    Tại sao phải tìm kiếm giải pháp xa xôi khi đất mẹ ban tặng điều kỳ diệu?
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-[#666055] font-light leading-relaxed">
                    <p>
                      Việt Nam được thiên nhiên ưu đãi với thảm thực vật nhiệt đới vô cùng trù phú. Quả gấc từ ngàn đời nay vốn chỉ gắn liền với những mâm xôi lễ Tết ấm cúng của làng quê Bắc Bộ và Nam Bộ. Thế nhưng, trong phòng thí nghiệm khoa học hiện đại, màng hạt gấc tươi lại là một báu vật thực vật đáng kinh ngạc.
                    </p>
                    <p>
                      Nồng độ <strong>Lycopene</strong> trong gấc cao gấp 70 lần cà chua, và <strong>Beta-Carotene</strong> cao gấp 10 lần cà rốt. Đây là hai chất chống oxy hóa tự nhiên mạnh mẽ nhất, có khả năng kích hoạt tái sinh sắc tố môi thâm sạm và bảo vệ bờ môi trước tác hại của tia cực tím.
                    </p>
                    <p>
                      Hòa quyện cùng nguồn <strong>Lauric Acid</strong> dồi dào từ dầu dừa già Bến Tre ép lạnh ly tâm, Gaco kiến tạo nên một thỏi son dưỡng 100% thuần chay, không sáp ong, không chì – mềm mượt như nhung và an toàn trọn vẹn cho cả phụ nữ mang thai.
                    </p>
                  </div>

                  {/* Cocoon Signature Gold Quote Callout */}
                  <div className="p-6 border-l-2 border-[#C5A25D] bg-[#F4EFE6] text-sm text-[#1F1C17] font-heading italic leading-relaxed">
                    "Chúng tôi không đơn thuần sản xuất một thỏi son dưỡng môi. Chúng tôi đang gửi gắm hồn quê Việt Nam, công sức của người nông dân và niềm tự hào nông sản bản địa vào từng chạm chạm dịu lành trên môi bạn."
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
                    <p className="text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#1F1C17]">Nông Sản Bản Địa Việt Nam</p>
                    <p className="text-xs text-[#666055] font-light max-w-xs mx-auto">Gấc tươi miền Tây &amp; Dừa già Bến Tre ép lạnh</p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-4xl sm:text-5xl font-heading font-bold text-[#7BAD34]">0%</p>
                    <p className="text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#1F1C17]">Chì, Paraben &amp; Mỡ Động Vật</p>
                    <p className="text-xs text-[#666055] font-light max-w-xs mx-auto">Kiểm nghiệm Quatest 3 an toàn cho mẹ bầu</p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-4xl sm:text-5xl font-heading font-bold text-[#1F1C17]">79.000đ</p>
                    <p className="text-xs font-condensed uppercase tracking-[0.2em] font-bold text-[#1F1C17]">Mức Giá Dễ Tiếp Cận</p>
                    <p className="text-xs text-[#666055] font-light max-w-xs mx-auto">Mọi người tiêu dùng đều xứng đáng dùng mỹ phẩm sạch</p>
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
                CAM KẾT BẤT DI BẤT DỊCH
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6">
                3 Giá Trị Cốt Lõi Của Gaco
              </h2>
              <p className="text-base text-[#666055] font-light max-w-2xl mx-auto">
                Từng công đoạn chọn lọc nguyên liệu, quy trình điều chế và bao bì thân thiện môi trường đều được soi chiếu bởi 3 kim chỉ nam này.
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
                  CHỨNG NHẬN &amp; CAM KẾT QUỐC TẾ
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
                  An Tâm Tuyệt Đối Trong Từng Lần Thoa Son
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 text-xs font-condensed uppercase tracking-wider text-[#1F1C17] font-bold">
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#7BAD34] mx-auto mb-1" />
                    <p>100% VEGAN</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">Thuần chay không sáp ong</p>
                  </div>
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#C5A25D] mx-auto mb-1" />
                    <p>CRUELTY-FREE</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">Không thử trên động vật</p>
                  </div>
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#1F1C17] mx-auto mb-1" />
                    <p>QUATEST 3</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">Kiểm nghiệm 0% chì</p>
                  </div>
                  <div className="p-4 bg-[#FEFBF4] border border-[#E7E5DF] space-y-1">
                    <CheckCircle2 size={20} className="text-[#7BAD34] mx-auto mb-1" />
                    <p>MOM-SAFE</p>
                    <p className="text-[10px] text-[#97958F] font-normal font-sans">An toàn cho mẹ bầu</p>
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
                HỌC THUẬT &amp; THỰC TIỄN • DIGITAL MARKETING
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6">
                Khung Chiến Lược SOSTAC – Gaco Cosmetics
              </h2>
              <p className="text-base text-[#666055] font-light max-w-2xl mx-auto">
                Dự án học phần Marketing Số ứng dụng mô hình SOSTAC của PR Smith để hoạch định chiến lược tiếp thị đa kênh cho dòng son dưỡng hữu cơ Việt Nam.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* S */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">BƯỚC 1</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">S - Situation</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">Phân Tích Bối Cảnh Thực Tế</h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    Nhu cầu Clean Beauty tăng 22%/năm. Thị trường son dưỡng Việt bị phân cực: son hóa học giá rẻ nguy cơ chì cao; mỹ phẩm ngoại nhập giá từ 250k–500k. Gaco khỏa lấp khoảng trống này với son bản địa chuẩn khoa học giá chỉ 79K.
                  </p>
                </div>

                {/* O */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">BƯỚC 2</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">O - Objectives</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">Mục Tiêu 5S Của PR Smith</h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    <strong>Sell:</strong> Tiếp cận 5.000 đơn hàng năm đầu. <strong>Serve:</strong> Tốc độ phản hồi &lt; 2 phút qua chatbot và live-chat. <strong>Speak:</strong> Giáo dục người dùng về gấc. <strong>Save:</strong> Tối ưu chi phí bao bì. <strong>Sizzle:</strong> Tặng voucher dùng thử 149k combo.
                  </p>
                </div>

                {/* S */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">BƯỚC 3</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">S - Strategy</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">Chiến Lược Định Vị &amp; Persona</h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    Định vị "Son dưỡng thuần chay giàu năng lượng đỏ từ gấc". Nhắm mục tiêu 2 phân khúc cốt lõi: Gen Z / Sinh viên (thâm môi học đường, ngân sách vừa phải) và Phụ nữ mang thai (yêu cầu 0% chì tuyệt đối).
                  </p>
                </div>

                {/* T */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">BƯỚC 4</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">T - Tactics</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">Chiến Thuật Tiếp Thị Đa Kênh</h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    Xây dựng website chuẩn SEO Cocoon aesthetic; chiến dịch TikTok ngắn #HonVietTrongThoiSonGac; bài PR cẩm nang trị thâm môi; phễu chat Messenger tư vấn tự động; sampling tại trường đại học.
                  </p>
                </div>

                {/* A */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">BƯỚC 5</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">A - Action</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">Kế Hoạch Triển Khai Thực Thi</h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    Gaco Green Circle Membership Club lưu trữ hồ sơ cá nhân hóa; form đặt hàng tức thì kết nối Google Sheets; hệ thống voucher số hóa; đồng bộ giao diện responsive mượt mà trên mọi thiết bị.
                  </p>
                </div>

                {/* C */}
                <div className="p-6 bg-[#FEFBF4] border border-[#E7E5DF] space-y-3 hover:border-[#C5A25D] transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D]">BƯỚC 6</span>
                    <span className="text-xl font-heading font-bold text-[#1F1C17]">C - Control</span>
                  </div>
                  <h4 className="font-heading text-base font-medium text-[#1F1C17]">Kiểm Soát &amp; Đo Lường KPIs</h4>
                  <p className="text-xs text-[#666055] font-light leading-relaxed">
                    Theo dõi tỷ lệ bounce rate, thời gian lưu trang (session duration), tỷ lệ chuyển đổi form lead (CR &gt; 3.5%), chỉ số CSAT phản hồi của khách hàng và chỉ số đo lường ROI chiến dịch.
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
              TRẢI NGHIỆM THỰC TẾ
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
              Sẵn Sàng Cùng Gaco Chăm Sóc Đôi Môi Khỏe Đẹp?
            </h3>
            <p className="text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
              Khám phá sản phẩm son dưỡng gấc dầu dừa với ưu đãi 79.000 đ và combo tiết kiệm 149.000 đ.
            </p>
            <div className="pt-4">
              <Link
                to="/product"
                className="inline-flex items-center gap-3 px-8 py-3.5 button-cocoon-gold text-xs tracking-[0.2em]"
              >
                <span>XEM CHI TIẾT SẢN PHẨM</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
