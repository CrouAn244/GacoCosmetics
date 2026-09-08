import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SEO } from '../utils/seo';
import { BlogCard } from '../components/cards/BlogCard';
import { CONTENT_BANK_ARTICLES, ASSETS } from '../utils/constants';

export const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const [filterCategory, setFilterCategory] = useState('all');

  const seoArticle = CONTENT_BANK_ARTICLES[0];
  const otherArticles = CONTENT_BANK_ARTICLES.slice(1);

  const categories = [
    { id: 'all', label: 'TẤT CẢ BÀI VIẾT' },
    { id: 'beauty', label: 'GÓC LÀM ĐẸP' },
    { id: 'ingredient', label: 'CÂU CHUYỆN NGUYÊN LIỆU' },
    { id: 'mom', label: 'MẸ BẦU & CLEAN BEAUTY' },
    { id: 'tips', label: 'BÍ QUYẾT TRỊ THÂM' }
  ];

  const filteredArticles = filterCategory === 'all'
    ? otherArticles
    : otherArticles.filter(a => {
        if (filterCategory === 'beauty') return a.categoryVi.includes('Làm đẹp') || a.phase === 'awareness';
        if (filterCategory === 'ingredient') return a.categoryVi.includes('Nguyên liệu') || a.categoryVi.includes('Dưỡng chất');
        if (filterCategory === 'mom') return a.categoryVi.includes('Mẹ bầu') || a.phase === 'action';
        if (filterCategory === 'tips') return a.categoryVi.includes('Review') || a.phase === 'consideration';
        return true;
      });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Review Son Dưỡng Hữu Cơ Chiết Xuất Gấc & Dầu Dừa Gaco: Có Trị Thâm Môi Thật Không?',
    description: 'Đánh giá chi tiết son dưỡng Gaco: bảng thành phần 100% thuần chay, kiểm nghiệm 0% chì, hiệu quả trị thâm môi cho mẹ bầu và sinh viên.',
    author: {
      '@type': 'Organization',
      name: 'Gaco Cosmetics Vietnam'
    },
    datePublished: '2026-09-05',
    image: 'https://gacocosmetics.vn/assets/images/lip-swatch.jpg'
  };

  return (
    <>
      <SEO
        title="Bài Viết & Cẩm Nang Chăm Sóc Môi – Gaco Vietnam"
        description="Tổng hợp cẩm nang chăm sóc môi, mẹo dưỡng môi không chì, và review chi tiết son dưỡng hữu cơ chiết xuất gấc & dầu dừa Bến Tre."
        keywords="son dưỡng gấc dầu dừa, son trị thâm môi, son dưỡng thiên nhiên, son cho bà bầu"
        schemaData={articleSchema}
      />

      <div className="pt-28 pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs - Cocoon Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F]">
            <Link to="/" className="hover:text-[#1F1C17] transition-colors">TRANG CHỦ</Link>
            <ChevronRight size={12} />
            <span className="text-[#1F1C17] font-semibold">BÀI VIẾT &amp; CẨM NANG</span>
          </div>
        </div>

        {/* Hero Title */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            KIẾN THỨC &amp; LÀM ĐẸP THUẦN CHAY
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
            Góc Làm Đẹp Gaco
          </h1>
          <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
            Khám phá những bài viết chuyên sâu về khoa học thực vật, cẩm nang chăm sóc môi không chì và những câu chuyện nông nghiệp xanh từ dải đất hình chữ S.
          </p>
        </section>

        {/* Cocoon Category Filter Tabs */}
        <div className="border-y border-[#E7E5DF] bg-[#F4EFE6] py-3 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto text-xs font-condensed uppercase tracking-[0.18em] font-bold">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`py-1.5 px-3.5 whitespace-nowrap transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-[#1F1C17] text-[#FEFBF4]'
                    : 'text-[#666055] hover:text-[#1F1C17]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Editorial Article */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <article className="border border-[#E7E5DF] bg-[#FEFBF4]">
            
            {/* Editorial Article Header */}
            <div className="p-6 sm:p-12 pb-6 border-b border-[#E7E5DF]">
              <div className="flex flex-wrap items-center gap-3 text-xs font-condensed uppercase tracking-wider mb-4">
                <span className="px-2.5 py-1 bg-[#C5A25D] text-white font-bold">
                  BÀI VIẾT NỔI BẬT • REVIEW CHUYÊN SÂU
                </span>
                <span className="text-[#97958F] flex items-center gap-1">
                  <Calendar size={13} />
                  05/09/2026
                </span>
                <span className="text-[#97958F] flex items-center gap-1">
                  <Clock size={13} />
                  6 PHÚT ĐỌC
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#1F1C17] leading-tight mb-4">
                Review Son Dưỡng Hữu Cơ Chiết Xuất Gấc &amp; Dầu Dừa Gaco: Có Trị Thâm Môi Thật Không?
              </h2>

              <p className="text-sm sm:text-base text-[#666055] font-light leading-relaxed italic border-l-2 border-[#C5A25D] pl-4 py-1">
                "Đánh giá chi tiết son dưỡng Gaco: bảng thành phần 100% thuần chay, kiểm nghiệm 0% chì từ Quatest 3, hiệu quả trị thâm môi cho mẹ bầu và học sinh – sinh viên."
              </p>
            </div>

            {/* Editorial Swatch Photo */}
            <div className="border-b border-[#E7E5DF] bg-[#F4EFE6] overflow-hidden">
              <img
                src={ASSETS.swatch}
                alt="Chất son dưỡng gấc dầu dừa Gaco mịn màng trên môi"
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="p-3 bg-[#FEFBF4] text-[11px] text-[#97958F] italic font-heading text-center">
                Chất son lướt mịn, để lại lớp bóng nhẹ và sắc cam hồng tự nhiên từ màng gấc tươi
              </div>
            </div>

            {/* Article Body Content */}
            <div className="p-6 sm:p-12 space-y-6 text-sm sm:text-base text-[#666055] font-light leading-relaxed">
              <p>
                Nếu bạn đang tìm kiếm một dòng <strong>son dưỡng gấc dầu dừa</strong> vừa lành tính, vừa có khả năng dưỡng ẩm vượt trội mà mức giá lại cực kỳ dễ tiếp cận, chắc chắn cái tên <strong>Gaco Cosmetics</strong> đang là tâm điểm chú ý trên các hội nhóm làm đẹp thuần chay và cộng đồng mạng gần đây.
              </p>

              <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] pt-4">
                1. Bảng thành phần: 100% Nông sản Việt, tuyệt đối 0% chì
              </h3>
              <p>
                Điểm cộng lớn nhất của son dưỡng Gaco là việc sử dụng 100% nguyên liệu bản địa: dầu màng gấc chín ép lạnh giàu <em>Lycopene</em> và <em>Beta-Carotene</em>, hòa quyện cùng dầu dừa già Bến Tre giàu <em>Lauric Acid</em>. Sản phẩm đạt kiểm định Quatest 3 không chì, không paraben, hoàn toàn xứng đáng là lựa chọn hàng đầu cho dòng <strong>son cho bà bầu</strong> và các bạn học sinh, sinh viên.
              </p>

              <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] pt-4">
                2. Trải nghiệm thực tế: Khả năng làm mềm &amp; khử thâm môi
              </h3>
              <p>
                Chất son ở dạng sáp thực vật mịn như nhung (từ sáp Candelilla tự nhiên), khi lướt trên môi tan nhẹ mà không để lại lớp màng bóng nhẫy như mỡ động vật. Sau 1 đêm thoa dày làm mặt nạ ngủ môi, sáng hôm sau lớp vảy khô bong ra nhẹ nhàng, bờ môi mềm ẩm suốt ngày dài ngay cả khi ngồi phòng máy lạnh 8 tiếng.
              </p>

              {/* Comparison Table */}
              <div className="my-8 border border-[#E7E5DF] overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#F4EFE6] border-b border-[#E7E5DF] font-condensed uppercase tracking-wider text-[#1F1C17] font-bold">
                      <th className="p-4 border-r border-[#E7E5DF]">Tiêu chí so sánh</th>
                      <th className="p-4 border-r border-[#E7E5DF] text-[#8C6F2E]">Son Dưỡng Gaco (Gấc &amp; Dừa)</th>
                      <th className="p-4">Son Hóa Học Thông Thường</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E5DF]">
                    <tr>
                      <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">Nguồn gốc nguyên liệu</td>
                      <td className="p-4 border-r border-[#E7E5DF] text-[#7BAD34] font-semibold">100% Nông sản Việt thuần chay</td>
                      <td className="p-4 text-[#97958F]">Dẫn xuất dầu mỏ (Mineral Oil, Petrolatum)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">Hàm lượng chì</td>
                      <td className="p-4 border-r border-[#E7E5DF] text-[#7BAD34] font-semibold">0% Chì (Quatest 3 kiểm định N.D)</td>
                      <td className="p-4 text-[#97958F]">Có nguy cơ lẫn chì và kim loại nặng</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">Khả năng mờ thâm</td>
                      <td className="p-4 border-r border-[#E7E5DF] text-[#7BAD34] font-semibold">Cải thiện sau 2–4 tuần nhờ Lycopene</td>
                      <td className="p-4 text-[#97958F]">Chỉ tạo màng bóng ảo tạm thời</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">Mức giá</td>
                      <td className="p-4 border-r border-[#E7E5DF] font-bold text-[#C5A25D]">79.000đ (Combo 149.000đ)</td>
                      <td className="p-4 text-[#97958F]">150.000đ – 350.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] pt-4">
                3. Kết luận: Có nên mua không?
              </h3>
              <p>
                Với mức giá trải nghiệm chỉ <strong>79.000 VNĐ</strong> và combo tiết kiệm <strong>149.000 VNĐ</strong>, son dưỡng Gaco là minh chứng rõ ràng rằng <strong>son dưỡng thiên nhiên</strong> bản địa hoàn toàn có thể vừa an toàn, vừa bảo vệ môi bền vững mà lại rất phù hợp với túi tiền người Việt.
              </p>

              {/* Purchase Callout Inside Article */}
              <div className="p-6 bg-[#F4EFE6] border border-[#E7E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
                <div>
                  <p className="font-heading font-medium text-base text-[#1F1C17]">
                    Son Dưỡng Gấc &amp; Dầu Dừa Bến Tre (5g)
                  </p>
                  <p className="text-xs text-[#666055] font-light mt-1">
                    Giá trải nghiệm 79.000 đ • Freeship khi mua combo 2 thỏi 149.000 đ
                  </p>
                </div>
                <Link
                  to="/product"
                  className="px-6 py-3 button-cocoon-gold text-xs tracking-wider font-bold whitespace-nowrap text-center"
                >
                  ĐẶT MUA SẢN PHẨM
                </Link>
              </div>

            </div>

          </article>
        </section>

        {/* Other Articles Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#E7E5DF] pb-4 mb-8 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17]">
              Các Bài Viết Cùng Chủ Đề
            </h3>
            <span className="text-xs font-condensed uppercase tracking-wider text-[#97958F]">
              {filteredArticles.length} BÀI VIẾT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </section>

      </div>
    </>
  );
};
