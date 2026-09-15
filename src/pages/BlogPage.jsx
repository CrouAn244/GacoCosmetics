import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import { SEO } from '../utils/seo';
import { BlogCard } from '../components/cards/BlogCard';
import { CONTENT_BANK_ARTICLES, ASSETS } from '../utils/constants';

export const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');
  const [filterCategory, setFilterCategory] = useState('all');

  const otherArticles = CONTENT_BANK_ARTICLES.slice(1);

  const categories = [
    { id: 'all', label: t('blogPage.allTab') },
    { id: 'beauty', label: t('blogPage.beautyTab') },
    { id: 'ingredient', label: t('blogPage.ingredientTab') },
    { id: 'mom', label: t('blogPage.momTab') },
    { id: 'tips', label: t('blogPage.tipsTab') }
  ];

  const filteredArticles = filterCategory === 'all'
    ? otherArticles
    : otherArticles.filter(a => {
        if (filterCategory === 'beauty') return (a.categoryVi || '').includes('Làm đẹp') || a.phase === 'awareness';
        if (filterCategory === 'ingredient') return (a.categoryVi || '').includes('Nguyên liệu') || (a.categoryVi || '').includes('Dưỡng chất');
        if (filterCategory === 'mom') return (a.categoryVi || '').includes('Mẹ bầu') || a.phase === 'action';
        if (filterCategory === 'tips') return (a.categoryVi || '').includes('Review') || a.phase === 'consideration';
        return true;
      });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isEn
      ? 'Review Gaco Organic Gac & Ben Tre Coconut Lip Balm: Does It Truly Lighten Lip Discoloration & Provide Vegan Hydration?'
      : 'Review Son Dưỡng Hữu Cơ Chiết Xuất Gấc & Dầu Dừa Gaco: Đánh Bay Môi Thâm, Cấp Ẩm Thuần Chay Có Thực Sự Hiệu Quả?',
    description: isEn
      ? 'Detailed review of Gaco organic lip balm from cold-pressed gac aril & Ben Tre coconut: discoloration relief, vegan hydration, 0% lead, safe for students & expecting mothers. Only 79,000 VND.'
      : 'Review chi tiết son dưỡng hữu cơ Gaco chiết xuất gấc & dầu dừa Bến Tre: đánh bay môi thâm, cấp ẩm thuần chay, 0% chì, an toàn cho học sinh - sinh viên và mẹ bầu. Giá chỉ 79.000đ.',
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
        title={isEn 
          ? "Review Gaco Gac & Coconut Lip Balm – Vegan Organic Lip Discoloration Care"
          : "Review Son Dưỡng Gấc Dầu Dừa Gaco – Trị Thâm Môi Hữu Cơ Thuần Chay"}
        description={isEn
          ? "Detailed review of Gaco organic lip balm from cold-pressed gac aril & Ben Tre coconut: discoloration relief, vegan hydration, 0% lead, safe for students & expecting mothers. Only 79,000 VND."
          : "Review chi tiết son dưỡng hữu cơ Gaco chiết xuất gấc & dầu dừa Bến Tre: đánh bay môi thâm, cấp ẩm thuần chay, 0% chì, an toàn cho học sinh - sinh viên và mẹ bầu. Giá chỉ 79.000đ."}
        keywords="Son Dưỡng Gấc & Dầu Dừa Bến Tre Gaco, son trị thâm môi hữu cơ, son dưỡng thiên nhiên Gaco, son dưỡng cho bà bầu, son dưỡng thuần chay Việt Nam, son dưỡng gấc dầu dừa"
        schemaData={articleSchema}
      />

      <div className="pt-[125px] sm:pt-[135px] pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs - Cocoon Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F] overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1F1C17] transition-colors shrink-0">{t('breadcrumbs.home')}</Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="text-[#1F1C17] font-semibold shrink-0">{t('breadcrumbs.blog')}</span>
          </div>
        </div>

        {/* Hero Title */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            {t('blogPage.tagline')}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
            {t('blogPage.title')}
          </h1>
          <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
            {t('blogPage.subtitle')}
          </p>
        </section>

        {/* Cocoon Category Filter Tabs */}
        <div className="border-y border-[#E7E5DF] bg-[#F4EFE6] py-3 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center gap-2.5 sm:gap-6 overflow-x-auto no-scrollbar text-xs font-condensed uppercase tracking-[0.18em] font-bold">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`py-2 px-3.5 whitespace-nowrap shrink-0 transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-[#1F1C17] text-[#FEFBF4]'
                    : 'text-[#666055] hover:text-[#1F1C17] bg-[#FEFBF4] border border-[#E7E5DF]'
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
                  {isEn ? 'FEATURED ARTICLE • IN-DEPTH REVIEW' : 'BÀI VIẾT NỔI BẬT • REVIEW CHUYÊN SÂU'}
                </span>
                <span className="text-[#97958F] flex items-center gap-1">
                  <Calendar size={13} />
                  05/09/2026
                </span>
                <span className="text-[#97958F] flex items-center gap-1">
                  <Clock size={13} />
                  {isEn ? '6 MIN READ' : '6 PHÚT ĐỌC'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-heading font-medium text-[#1F1C17] leading-tight mb-4">
                {isEn
                  ? 'Review Gaco Organic Gac & Ben Tre Coconut Lip Balm: Does It Truly Lighten Lip Discoloration & Provide Vegan Hydration?'
                  : 'Review Son Dưỡng Hữu Cơ Chiết Xuất Gấc & Dầu Dừa Gaco: Đánh Bay Môi Thâm, Cấp Ẩm Thuần Chay Có Thực Sự Hiệu Quả?'}
              </h1>

              <p className="text-sm sm:text-base text-[#666055] font-light leading-relaxed italic border-l-2 border-[#C5A25D] pl-4 py-1">
                {isEn
                  ? '"Detailed review of Gaco organic lip balm with gac & Ben Tre coconut: banish dark lips, 100% vegan hydration, strictly 0% lead, safe for students and expectant mothers."'
                  : '"Review chi tiết son dưỡng hữu cơ Gaco chiết xuất gấc & dầu dừa Bến Tre: đánh bay môi thâm, cấp ẩm thuần chay, 0% chì, an toàn cho học sinh - sinh viên và mẹ bầu."'}
              </p>
            </div>

            {/* Editorial Swatch Photo */}
            <div className="border-b border-[#E7E5DF] bg-[#F4EFE6] overflow-hidden">
              <img
                src={ASSETS.swatch}
                alt={isEn ? "Smooth Gaco lip balm texture on lips" : "Chất son dưỡng gấc dầu dừa Gaco mịn màng trên môi"}
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="p-3 bg-[#FEFBF4] text-[11px] text-[#97958F] italic font-heading text-center">
                {isEn
                  ? 'Velvety glide, leaving a subtle gloss and natural peach-coral blush from fresh gac aril'
                  : 'Chất son lướt mịn, để lại lớp bóng nhẹ và sắc cam san hô tự nhiên từ màng gấc tươi'}
              </div>
            </div>

            {/* Article Body Content */}
            <div className="p-6 sm:p-12 space-y-8 text-sm sm:text-base text-[#666055] font-light leading-relaxed">
              
              {/* Lời mở đầu */}
              <p className="text-base sm:text-lg text-[#1F1C17]/90 leading-relaxed">
                {isEn
                  ? 'If you are searching for a gentle, budget-friendly gac and coconut lip balm that actually solves dark pigmentation and chapped lips, this in-depth review is for you. Gaco – a Vietnamese vegan cosmetic brand made from native agricultural crops – has just launched its organic gac & coconut lip balm, guaranteeing 100% natural ingredients and 0% lead. Let’s see whether this product is truly worth your investment.'
                  : 'Nếu bạn đang tìm một son dưỡng gấc dầu dừa lành tính, giá sinh viên nhưng vẫn giải quyết được nỗi ám ảnh môi thâm sạm, nứt nẻ thì bài review này dành cho bạn. Gaco – thương hiệu mỹ phẩm thuần chay từ nông sản Việt – vừa ra mắt dòng son dưỡng môi hữu cơ chiết xuất gấc & dầu dừa, cam kết 100% thành phần thiên nhiên, 0% chì. Cùng mình xem sản phẩm này có thực sự xứng đáng để bạn "xuống tiền" hay không.'}
              </p>

              {/* H2 - 1 */}
              <div className="space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] border-b border-[#E7E5DF] pb-2">
                  {isEn
                    ? 'Dark, Chapped Lips and Key Causes Frequently Overlooked by Youth'
                    : 'Tình trạng môi thâm nứt nẻ và nguyên nhân giới trẻ thường bỏ qua'}
                </h2>
                <p>
                  {isEn
                    ? 'Dark, peeling lips are a major concern for many young people, especially students who wear lipstick frequently or sit in air-conditioned lecture halls all day. There are three primary causes that are often ignored:'
                    : 'Môi thâm sạm, khô nứt là nỗi lo của rất nhiều bạn trẻ, đặc biệt là các bạn học sinh, sinh viên thường xuyên trang điểm hoặc ngồi phòng điều hòa cả ngày. Có ba nguyên nhân chính nhưng lại thường bị bỏ qua:'}
                </p>
                <ul className="space-y-3 pl-2 border-l-2 border-[#9E2A2B]/40 my-3">
                  <li className="pl-3">
                    <strong className="text-[#1F1C17] font-semibold">{isEn ? 'Lead and heavy metals in lipsticks:' : 'Chì và kim loại nặng trong son màu:'}</strong>{' '}
                    {isEn
                      ? 'Low-cost, unregulated lipsticks often contain lead exceeding safety thresholds, accumulating over time to darken lip tissue.'
                      : 'Nhiều loại son môi giá rẻ trôi nổi trên thị trường chứa hàm lượng chì vượt ngưỡng cho phép, tích tụ lâu ngày khiến vùng da môi sạm màu, khó phục hồi.'}
                  </li>
                  <li className="pl-3">
                    <strong className="text-[#1F1C17] font-semibold">{isEn ? 'Dehydration from AC and UV sunlight:' : 'Mất nước do môi trường điều hòa và ánh nắng:'}</strong>{' '}
                    {isEn
                      ? 'Lip tissue lacks sebaceous glands, losing moisture quickly under sun exposure or cold AC air, causing flaking and cracks.'
                      : 'Da môi vốn không có tuyến bã nhờn, rất dễ mất nước khi tiếp xúc ánh nắng hoặc ngồi điều hòa nhiều giờ liền, dẫn đến bong tróc, nứt nẻ.'}
                  </li>
                  <li className="pl-3">
                    <strong className="text-[#1F1C17] font-semibold">{isEn ? 'Preservatives and synthetic fragrances:' : 'Chất bảo quản và hương liệu tổng hợp:'}</strong>{' '}
                    {isEn
                      ? 'Many industrial balms use synthetic scents that cause subtle irritation, rendering delicate lips increasingly vulnerable.'
                      : 'Không ít sản phẩm dùng hương liệu hóa học để tạo mùi hấp dẫn, nhưng đây lại chính là tác nhân gây kích ứng, khiến môi ngày càng nhạy cảm hơn.'}
                  </li>
                </ul>
                <p>
                  {isEn
                    ? 'Understanding these root issues, Gaco developed its formula to tackle root causes directly rather than providing temporary superficial shine.'
                    : 'Hiểu được những nỗi đau này, Gaco đã phát triển dòng son dưỡng với công thức tập trung giải quyết đúng gốc rễ vấn đề, thay vì chỉ che phủ tạm thời.'}
                </p>
              </div>

              {/* H2 - 2 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] border-b border-[#E7E5DF] pb-2">
                  {isEn
                    ? 'Why are Gac Aril and Ben Tre Coconut Oil the "Perfect Botanical Pair" for Lips?'
                    : 'Tại sao màng gấc và dầu dừa Bến Tre lại là "cặp đôi hoàn hảo" cho đôi môi?'}
                </h2>
                <p>
                  {isEn
                    ? 'The distinctive feature of Gaco lies in the harmonious fusion of two signature Vietnamese agricultural ingredients: cold-pressed gac aril and pure virgin Ben Tre coconut oil.'
                    : 'Điểm khác biệt lớn nhất của Gaco nằm ở sự kết hợp giữa hai nguyên liệu nông sản quen thuộc của Việt Nam: màng gấc ép lạnh và dầu dừa Bến Tre nguyên chất.'}
                </p>

                {/* H3 - 1 */}
                <div className="p-4 bg-[#F4EFE6] border-l-4 border-[#9E2A2B] space-y-2 my-4">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#1F1C17]">
                    {isEn
                      ? 'Lycopene & Beta-Carotene in Gac Fruit Regenerate Lip Pigmentation'
                      : 'Hàm lượng Lycopene & Beta-Carotene trong gấc tái tạo sắc tố môi'}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    {isEn
                      ? 'Fresh gac aril is celebrated globally as one of the richest natural sources of Beta-Carotene and Lycopene. These potent antioxidants help lighten hyperpigmentation while imparting a natural coral-peach blush when applied—nourishing deeply while tinted subtly. Thanks to low-temperature cold pressing, Gaco preserves all active carotenoids intact.'
                      : 'Màng đỏ của quả gấc được biết đến là một trong những nguồn Beta-Carotene và Lycopene tự nhiên dồi dào bậc nhất. Đây là hai chất chống oxy hóa mạnh, có khả năng hỗ trợ làm dịu vùng da bị sạm màu, đồng thời tạo nên sắc cam san hô đặc trưng khi thoa lên môi – vừa dưỡng vừa lên màu nhẹ nhàng, tự nhiên. Nhờ công nghệ ép lạnh, Gaco giữ trọn dưỡng chất trong màng gấc mà không làm biến tính bởi nhiệt độ cao.'}
                  </p>
                </div>

                {/* H3 - 2 */}
                <div className="p-4 bg-[#F4EFE6] border-l-4 border-[#7BAD34] space-y-2 my-4">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#1F1C17]">
                    {isEn
                      ? 'Lauric Acid in Ben Tre Coconut Oil Delivers Deep Hydration & Natural Antimicrobial Protection'
                      : 'Axit Lauric trong dầu dừa dưỡng ẩm sâu, kháng khuẩn tự nhiên'}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    {isEn
                      ? 'Ben Tre aged coconut oil is renowned for its high Lauric Acid concentration, penetrating quickly to seal moisture within lip epidermal layers and providing natural antibacterial shield. When combined with gac oil, it softens balm texture so it melts effortlessly upon contact without heaviness.'
                      : 'Dầu dừa Bến Tre nổi tiếng với hàm lượng Axit Lauric cao, có khả năng thẩm thấu nhanh, khóa ẩm sâu trong từng lớp biểu bì môi và hỗ trợ kháng khuẩn tự nhiên. Khi kết hợp cùng dầu gấc, dầu dừa còn đóng vai trò làm mềm kết cấu son, giúp son dưỡng tan chảy mượt mà ngay khi chạm môi mà không để lại cảm giác nặng, bí.'}
                  </p>
                </div>
              </div>

              {/* H2 - 3 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] border-b border-[#E7E5DF] pb-2">
                  {isEn
                    ? 'Real User Experience When Using Gaco Lip Balm'
                    : 'Trải nghiệm thực tế khi sử dụng son dưỡng Gaco'}
                </h2>
                <p>
                  {isEn
                    ? 'From the very first swipe, Gaco delivers an immediate tactile impression. The balm is supple and velvety, melting gently with body heat without the thick, suffocation of petroleum-derived mineral waxes. It carries a faint, delicate natural coconut aroma that is completely allergen-free for sensitive users.'
                    : 'Về mặt cảm quan, thỏi son Gaco gây ấn tượng ngay từ lần chạm đầu tiên. Chất son mềm mịn, tan chảy nhẹ nhàng theo thân nhiệt môi, không hề gây cảm giác nặng hay bí như một số loại son dưỡng gốc sáp dày. Mùi hương dừa thoang thoảng, dịu nhẹ, không nồng, phù hợp cả với những bạn nhạy cảm với mùi hương.'}
                </p>
                <p>
                  {isEn
                    ? 'After application, lips display a subtle healthy sheen with an airy peach-coral tone—never aggressive like heavy makeup, making it ideal for school, lectures, and professional work without feeling overdone.'
                    : 'Sau khi thoa, môi lên một lớp bóng nhẹ tự nhiên, ánh cam san hô thoáng qua chứ không gắt màu như son màu thông thường – rất hợp để đi học, đi làm mà không sợ bị đánh giá "trang điểm quá tay".'}
                </p>
                <p className="font-medium text-[#1F1C17]">
                  {isEn
                    ? 'A huge plus is the sleek twist-up tube in biodegradable kraft paper—compact, eco-friendly, and convenient to slip into any backpack or purse.'
                    : 'Điểm cộng lớn là thiết kế thỏi son dạng vặn nhỏ gọn, vỏ giấy kraft thân thiện môi trường, dễ dàng bỏ túi hoặc balo mà không lo cồng kềnh.'}
                </p>
              </div>

              {/* H2 - 4 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] border-b border-[#E7E5DF] pb-2">
                  {isEn
                    ? 'Ingredient Breakdown & Strict 0% Lead Safety Verification'
                    : 'Bảng phân tích thành phần & Giấy chứng nhận 0% chì độc hại'}
                </h2>
                <p>
                  {isEn
                    ? 'With its core principle of "absolute transparency", Gaco publishes its entire INCI formulation and certified lead-test reports directly on its official website. This transparency resolves the greatest apprehension of consumers: whether a daily lip balm is completely safe during pregnancy or daily use.'
                    : 'Với phương châm "minh bạch tuyệt đối", Gaco công khai toàn bộ bảng thành phần và kết quả kiểm nghiệm hàm lượng chì ngay trên website chính thức. Đây là yếu tố then chốt giúp giải tỏa nỗi lo lớn nhất của người dùng khi chọn son dưỡng: liệu sản phẩm có an toàn để sử dụng hằng ngày, kể cả trong giai đoạn mang thai hay không.'}
                </p>
                <p>
                  {isEn
                    ? 'Core ingredients include: cold-pressed gac aril oil, virgin Ben Tre coconut oil, plant-based candelilla wax, zero animal testing, and strictly no lead or artificial fragrances. This makes it completely safe for both students and expectant mothers.'
                    : 'Thành phần chủ đạo gồm: dầu màng gấc ép lạnh, dầu dừa Bến Tre tinh khiết, không thử nghiệm trên động vật, không chứa chì hay hương liệu tổng hợp. Nhờ vậy, sản phẩm phù hợp cho cả nhóm khách hàng nhạy cảm như học sinh, sinh viên lẫn mẹ bầu.'}
                </p>

                {/* Comparison Table */}
                <div className="my-6 border border-[#E7E5DF] overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#F4EFE6] border-b border-[#E7E5DF] font-condensed uppercase tracking-wider text-[#1F1C17] font-bold">
                        <th className="p-4 border-r border-[#E7E5DF]">{isEn ? 'Comparison Criteria' : 'Tiêu chí so sánh'}</th>
                        <th className="p-4 border-r border-[#E7E5DF] text-[#8C6F2E]">{isEn ? 'Gaco Lip Balm (Gac & Coconut)' : 'Son Dưỡng Gaco (Gấc & Dừa)'}</th>
                        <th className="p-4">{isEn ? 'Conventional Chemical Balm' : 'Son Hóa Học Thông Thường'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E7E5DF]">
                      <tr>
                        <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">{isEn ? 'Ingredient Origin' : 'Nguồn gốc nguyên liệu'}</td>
                        <td className="p-4 border-r border-[#E7E5DF] text-[#7BAD34] font-semibold">{isEn ? '100% Native Vegan Crops' : '100% Nông sản Việt thuần chay'}</td>
                        <td className="p-4 text-[#97958F]">{isEn ? 'Petroleum derivatives (Mineral Oil, Petrolatum)' : 'Dẫn xuất dầu mỏ (Mineral Oil, Petrolatum)'}</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">{isEn ? 'Lead Content' : 'Hàm lượng chì'}</td>
                        <td className="p-4 border-r border-[#E7E5DF] text-[#7BAD34] font-semibold">{isEn ? '0% Lead (Quatest 3 tested N.D)' : '0% Chì (Quatest 3 kiểm định N.D)'}</td>
                        <td className="p-4 text-[#97958F]">{isEn ? 'Risk of heavy metals and lead' : 'Có nguy cơ lẫn chì và kim loại nặng'}</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">{isEn ? 'Discoloration Relief' : 'Khả năng mờ thâm'}</td>
                        <td className="p-4 border-r border-[#E7E5DF] text-[#7BAD34] font-semibold">{isEn ? 'Noticeable improvement in 2–4 weeks via Lycopene' : 'Cải thiện sau 2–4 tuần nhờ Lycopene'}</td>
                        <td className="p-4 text-[#97958F]">{isEn ? 'Only temporary cosmetic shine' : 'Chỉ tạo màng bóng ảo tạm thời'}</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-r border-[#E7E5DF] font-medium text-[#1F1C17]">{isEn ? 'Price Point' : 'Mức giá'}</td>
                        <td className="p-4 border-r border-[#E7E5DF] font-bold text-[#C5A25D]">79.000đ ({isEn ? 'Combo 149.000đ' : 'Combo 149.000đ'})</td>
                        <td className="p-4 text-[#97958F]">150.000đ – 350.000đ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* H2 - 5 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] border-b border-[#E7E5DF] pb-2">
                  {isEn
                    ? '3-Step At-Home Routine for Naturally Rosy, Healthy Lips'
                    : 'Hướng dẫn 3 bước dưỡng môi hồng tự nhiên tại nhà'}
                </h2>
                <p>
                  {isEn
                    ? 'To maximize the discoloration-relief and hydrating efficacy of Gaco lip balm, follow this simple 3-step evening regimen before bedtime:'
                    : 'Để phát huy tối đa hiệu quả trị thâm và cấp ẩm của son dưỡng Gaco, bạn có thể áp dụng quy trình 3 bước đơn giản sau mỗi tối trước khi ngủ:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-2">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#9E2A2B]">BƯỚC 1</span>
                    <h4 className="font-heading font-bold text-sm text-[#1F1C17]">Làm sạch nhẹ nhàng</h4>
                    <p className="text-xs text-[#666055]">Dùng khăn ấm lau sạch lớp son màu hoặc bụi bẩn trên môi, tránh chà xát mạnh làm tổn thương biểu bì mỏng manh.</p>
                  </div>
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-2">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#9E2A2B]">BƯỚC 2</span>
                    <h4 className="font-heading font-bold text-sm text-[#1F1C17]">Tẩy tế bào chết định kỳ</h4>
                    <p className="text-xs text-[#666055]">2–3 lần/tuần, massage nhẹ nhàng để loại bỏ tế bào sừng khô ráp, giúp dưỡng chất thẩm thấu sâu hơn.</p>
                  </div>
                  <div className="p-4 bg-[#F4EFE6] border border-[#E7E5DF] space-y-2">
                    <span className="font-condensed uppercase tracking-wider text-xs font-bold text-[#9E2A2B]">BƯỚC 3</span>
                    <h4 className="font-heading font-bold text-sm text-[#1F1C17]">Thoa son Gaco qua đêm</h4>
                    <p className="text-xs text-[#666055]">Thoa một lớp mỏng son dưỡng gấc dừa, để Beta-Carotene và Lauric Acid nuôi dưỡng xuyên suốt giấc ngủ.</p>
                  </div>
                </div>
              </div>

              {/* H2 - 6 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17] border-b border-[#E7E5DF] pb-2">
                  {isEn
                    ? 'Order Genuine Gaco Lip Balm with Exclusive Student Perks'
                    : 'Đặt mua son dưỡng Gaco chính hãng nhận ưu đãi sinh viên'}
                </h2>
                <p>
                  {isEn
                    ? 'Currently, Gaco Organic Lip Balm is priced at only 79,000 VND per tube—highly competitive compared to the 80,000–120,000 VND market range. Gaco is actively offering two special student & family combos:'
                    : 'Hiện tại, son dưỡng hữu cơ Gaco có giá niêm yết 79.000 VNĐ/thỏi – mức giá rất cạnh tranh so với mặt bằng chung 80.000–120.000 VNĐ của các dòng son dưỡng trên thị trường. Đặc biệt, Gaco đang triển khai:'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-5 border-2 border-[#9E2A2B] bg-[#FDF2F2] space-y-2">
                    <span className="text-[10px] font-condensed uppercase tracking-widest font-bold text-[#9E2A2B] bg-white px-2 py-0.5 border border-[#9E2A2B]">ƯU ĐÃI HOT</span>
                    <h4 className="font-heading font-bold text-base text-[#1F1C17]">COMBO HỌC SINH - SINH VIÊN</h4>
                    <p className="text-2xl font-heading font-bold text-[#9E2A2B]">149.000 đ</p>
                    <p className="text-xs text-[#666055]">Mua 2 thỏi son dưỡng 5g • <strong>TẶNG KÈM 01 MẶT NẠ MÔI MINI</strong> dưỡng ẩm phục hồi ban đêm.</p>
                  </div>

                  <div className="p-5 border-2 border-[#7BAD34] bg-[#F4F9EC] space-y-2">
                    <span className="text-[10px] font-condensed uppercase tracking-widest font-bold text-[#7BAD34] bg-white px-2 py-0.5 border border-[#7BAD34]">LÀNH TÍNH THAI KỲ</span>
                    <h4 className="font-heading font-bold text-base text-[#1F1C17]">COMBO CHO MẸ BẦU AN LÀNH</h4>
                    <p className="text-2xl font-heading font-bold text-[#7BAD34]">149.000 đ</p>
                    <p className="text-xs text-[#666055]">Mua 2 thỏi son 0% chì • <strong>TẶNG KÈM 01 TÚI VẢI CANVAS + CẨM NANG THAI KỲ</strong>.</p>
                  </div>
                </div>

                <p className="text-sm italic text-[#1F1C17]">
                  {isEn
                    ? 'Place your order via the instant website order form or message the Gaco Fanpage directly for personalized consultation and student discount codes.'
                    : 'Đặt hàng ngay qua form trên website chính thức hoặc nhắn tin trực tiếp Fanpage Gaco để được tư vấn tình trạng môi và nhận mã ưu đãi sinh viên.'}
                </p>

                {/* Purchase Callout Inside Article */}
                <div className="p-6 bg-[#F4EFE6] border border-[#E7E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <p className="font-heading font-medium text-base text-[#1F1C17]">
                      {isEn ? 'Gac & Ben Tre Coconut Lip Balm (5g)' : 'Son Dưỡng Gấc & Dầu Dừa Bến Tre (5g)'}
                    </p>
                    <p className="text-xs text-[#666055] font-light mt-1">
                      {isEn ? 'Trial price 79,000 VND • Student Combo 149,000 VND (Free Lip Mask)' : 'Giá trải nghiệm 79.000đ • Combo Sinh viên 149.000đ (Tặng Mặt Nạ Môi)'}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      to="/product"
                      className="px-6 py-3 button-cocoon-gold text-xs tracking-wider font-bold whitespace-nowrap text-center"
                    >
                      {isEn ? 'ORDER NOW • 79K' : 'ĐẶT MUA SẢN PHẨM'}
                    </Link>
                    <a
                      href="https://m.me/gacocosmetics.vietnam"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 border border-[#1F1C17] hover:bg-[#1F1C17] hover:text-[#FEFBF4] transition-colors text-xs font-bold tracking-wider whitespace-nowrap text-center"
                    >
                      CHAT FANPAGE
                    </a>
                  </div>
                </div>

                <div className="pt-4 text-xs text-[#97958F] border-t border-[#E7E5DF]">
                  <strong>{isEn ? 'Related Keywords:' : 'Từ khóa liên quan:'}</strong>{' '}
                  <span className="italic">son dưỡng gấc dầu dừa, son trị thâm môi hữu cơ, son dưỡng thiên nhiên Gaco, son dưỡng cho bà bầu, son dưỡng thuần chay Việt Nam, Son Dưỡng Gấc & Dầu Dừa Bến Tre Gaco.</span>
                </div>

              </div>

            </div>

          </article>
        </section>

        {/* Other Articles Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#E7E5DF] pb-4 mb-8 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#1F1C17]">
              {isEn ? 'Related Topic Articles' : 'Các Bài Viết Cùng Chủ Đề'}
            </h3>
            <span className="text-xs font-condensed uppercase tracking-wider text-[#97958F]">
              {filteredArticles.length} {isEn ? 'ARTICLES' : 'BÀI VIẾT'}
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
