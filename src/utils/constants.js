// Central content & authentic editorial assets for Gaco Cosmetics
import heroImg from '../assets/images/hero-product.jpg';
import gacImg from '../assets/images/gac-macro.jpg';
import coconutImg from '../assets/images/coconut-macro.jpg';
import farmImg from '../assets/images/farm-harvest.jpg';
import swatchImg from '../assets/images/lip-swatch.jpg';
import comboDuoImg from '../assets/images/combo-duo.jpg';
import comboMaternityImg from '../assets/images/combo-maternity.jpg';

export const ASSETS = {
  hero: heroImg,
  comboDuo: comboDuoImg,
  comboMaternity: comboMaternityImg,
  gac: gacImg,
  coconut: coconutImg,
  farm: farmImg,
  swatch: swatchImg,
  gallery: [heroImg, comboDuoImg, comboMaternityImg, swatchImg, gacImg, coconutImg, farmImg]
};

export const PRODUCT_INFO = {
  nameVi: 'Son Dưỡng Gấc & Dầu Dừa Bến Tre',
  nameEn: 'Gaco Cold-Pressed Gac & Ben Tre Coconut Lip Balm',
  subtitleVi: 'Chiết xuất từ quả gấc chín mọng và dầu dừa Bến Tre ép lạnh nguyên chất',
  subtitleEn: 'Crafted with ripe Vietnamese gac fruit and cold-pressed virgin coconut oil',
  singlePrice: 79000,
  comboPrice: 149000,
  maternityPrice: 149000,
  maternityOldPrice: 189000,
  volume: '5g / 0.17 oz',
  origin: '100% Nông sản Việt Nam (Đồng bằng sông Cửu Long & Bến Tre)',
  shelfLife: '18 tháng kể từ NSX (6 tháng sau khi mở nắp)',
  benefitsVi: [
    'Hồi sinh bờ môi khô nứt, bong tróc chỉ sau một đêm',
    'Để lại sắc ửng hồng cam đào tự nhiên từ màng gấc nguyên bản',
    'Khóa ẩm sâu suốt 8 giờ mà không gây cảm giác bết dính hay bóng nhờn',
    'Cam kết 0% chì – 100% thuần chay, an toàn tuyệt đối cho mẹ bầu và trẻ nhỏ',
    'Bao bì giấy kraft thân thiện với môi trường tự nhiên'
  ],
  benefitsEn: [
    'Soothes dry, chapped lips after just one night',
    'Leaves a natural peach-coral blush from cold-pressed gac aril',
    'Locks in deep moisture for 8 hours without greasiness',
    '0% Lead guaranteed – 100% Vegan, safe for pregnancy and children',
    'Eco-friendly biodegradable kraft paper packaging'
  ]
};

export const ACTIVE_INGREDIENTS = [
  {
    id: 'gac-aril',
    name: 'Dầu Gấc Ép Lạnh',
    nameVi: 'Dầu Gấc Ép Lạnh',
    nameEn: 'Cold-Pressed Gac Oil',
    scientificName: 'Momordica Cochinchinensis Oil',
    sourceVi: 'Thu hoạch từ gấc chín cây tại vùng đồng bằng châu thổ',
    sourceEn: 'Handpicked ripe gac fruit from Vietnamese farms',
    keyCompounds: 'Lycopene & Beta-Carotene',
    keyCompoundsVi: 'Lycopene & Beta-Carotene',
    keyCompoundsEn: 'Lycopene & Beta-Carotene',
    ratio: 'Lycopene cao gấp 70 lần cà chua',
    ratioVi: 'Lycopene cao gấp 70 lần cà chua',
    ratioEn: 'Lycopene 70x higher than tomato',
    roleVi: 'Chất chống oxy hóa tự nhiên mạnh mẽ giúp trung hòa các gốc tự do, kích thích sản sinh collagen, làm mờ sắc tố thâm sạm và hồi phục bờ môi hồng hào tự nhiên.',
    roleEn: 'Exceptional antioxidant that accelerates cellular renewal, diminishes discoloration, and restores natural lip radiance.',
    image: gacImg,
    tag: 'Chống thâm & Phục hồi',
    tagVi: 'Chống thâm & Phục hồi',
    tagEn: 'Discoloration Relief & Restorative'
  },
  {
    id: 'coconut-oil',
    name: 'Dầu Dừa Già Bến Tre',
    nameVi: 'Dầu Dừa Già Bến Tre',
    nameEn: 'Aged Ben Tre Coconut Oil',
    scientificName: 'Cocos Nucifera (Coconut) Oil',
    sourceVi: 'Dừa già tuyển chọn tại thủ phủ dừa Bến Tre',
    sourceEn: 'Aged coconuts from Ben Tre Province',
    keyCompounds: 'Lauric Acid & Vitamin E tự nhiên',
    keyCompoundsVi: 'Lauric Acid & Vitamin E tự nhiên',
    keyCompoundsEn: 'Lauric Acid & Natural Vitamin E',
    ratio: 'Chiếm gần 50% cấu trúc acid béo',
    ratioVi: 'Chiếm gần 50% cấu trúc acid béo',
    ratioEn: 'Accounts for ~50% fatty acid profile',
    roleVi: 'Chuỗi axit béo trung bình thẩm thấu sâu, củng cố màng lipid tự nhiên, kháng khuẩn và bảo vệ môi khỏi nứt nẻ trong thời tiết hanh khô hoặc phòng điều hòa.',
    roleEn: 'Penetrates deeply to nourish delicate lip tissue, forming a protective moisture seal against harsh environmental stressors.',
    image: coconutImg,
    tag: 'Dưỡng ẩm chuyên sâu',
    tagVi: 'Dưỡng ẩm chuyên sâu',
    tagEn: 'Deep Moisture Barrier'
  }
];

export const PRODUCTION_TIMELINE = [
  {
    step: '01',
    titleVi: 'Tuyển chọn gấc chín & dừa già Bến Tre',
    titleEn: 'Selective Harvesting',
    descVi: 'Gấc chín cây thu hoạch thủ công trong ngày tại các nhà vườn liên kết, kết hợp dừa già đạt chuẩn độ dầu tại Bến Tre.',
    descEn: 'Fresh ripe gac harvested daily from verified eco-farms, paired with matured Ben Tre coconuts.'
  },
  {
    step: '02',
    titleVi: 'Tách màng đỏ & Sấy lạnh khép kín',
    titleEn: 'Aril Separation & Dehydration',
    descVi: 'Màng gấc giàu Lycopene được tách nhẹ nhàng và sấy đối lưu nhiệt độ thấp dưới 40°C để bảo toàn cấu trúc Carotenoid nhạy cảm.',
    descEn: 'Delicate hand-separated gac aril dried at temperatures below 40°C to keep carotenoids intact.'
  },
  {
    step: '03',
    titleVi: 'Ép lạnh chậm & Lọc vô trùng',
    titleEn: 'Slow Cold-Press Extraction',
    descVi: 'Công nghệ ép cơ học không gia nhiệt, hòa quyện dầu gấc ruby với dầu dừa nguyên chất không sử dụng dung môi hóa học.',
    descEn: 'Screw-press cold extraction with zero chemical solvents, blending ruby gac oil into virgin coconut oil.'
  },
  {
    step: '04',
    titleVi: 'Đúc thỏi vô trùng & Bao bì sinh học',
    titleEn: 'Sterile Molding & Packaging',
    descVi: 'Bổ sung sáp Candelilla thực vật và rót khuôn tự động trong phòng sạch cGMP, đóng gói bao bì giấy kraft thân thiện môi trường.',
    descEn: 'Enriched with plant-based candelilla wax and automatically poured into tubes in a cGMP cleanroom.'
  }
];

export const CERTIFICATIONS = [
  {
    name: '100% Thuần Chay',
    enName: '100% Vegan',
    desc: 'Không sử dụng mỡ động vật hay dẫn xuất từ động vật',
    stamp: 'VEGAN'
  },
  {
    name: 'Không Thử Nghiệm Động Vật',
    enName: 'Cruelty-Free',
    desc: 'Được bảo chứng nhân đạo theo tiêu chuẩn quốc tế',
    stamp: 'CRUELTY FREE'
  },
  {
    name: 'Cam Kết 0% Chì',
    enName: '0% Lead Tested',
    desc: 'Phiếu kiểm nghiệm trung tâm Quatest: Hàm lượng chì N.D (Không phát hiện)',
    stamp: '0% LEAD'
  },
  {
    name: '100% Nông Sản Việt',
    enName: 'Vietnam Terroir',
    desc: 'Nguồn gốc minh bạch từ các hợp tác xã nông nghiệp bản địa',
    stamp: 'VIETNAMESE'
  }
];

export const CONTENT_BANK_ARTICLES = [
  {
    id: 'seo-review-son-gaco',
    isSeoHero: true,
    titleVi: 'Review Son Dưỡng Hữu Cơ Chiết Xuất Gấc & Dầu Dừa Gaco: Có Trị Thâm Môi Thật Không?',
    titleEn: 'In-Depth Review: Gaco Organic Gac & Coconut Lip Balm – Does It Truly Brighten Dark Lips?',
    categoryVi: 'Đánh giá & Kiểm chứng',
    categoryEn: 'Review & Proof',
    readTime: '6 phút đọc',
    date: '2026-09-05',
    summaryVi: 'Đánh giá chi tiết son dưỡng Gaco từ bảng thành phần 100% thuần chay, test độ ẩm thực tế, khả năng lên màu tự nhiên và cam kết an toàn cho sinh viên, mẹ bầu.',
    summaryEn: 'A detailed breakdown of Gaco Lip Balm, testing hydration longevity, natural blush tint, and 0% lead safety for students and pregnant mothers.',
    keywords: ['son dưỡng gấc dầu dừa', 'son trị thâm môi', 'son dưỡng thiên nhiên', 'son cho bà bầu']
  },
  {
    id: 'art-1-vi-sao-moi-tham',
    phase: 'Awareness',
    titleVi: 'Vì sao môi thâm và khô nứt dù bạn đã uống nhiều nước?',
    titleEn: 'Why are lips still chapped and dark despite drinking water?',
    categoryVi: 'Kiến thức da môi',
    categoryEn: 'Lip Care Science',
    readTime: '4 phút',
    date: '2026-09-02'
  },
  {
    id: 'art-2-gac-co-gi-dac-biet',
    phase: 'Awareness',
    titleVi: 'Gấc có gì đặc biệt mà được mệnh danh là "Loại quả đến từ thiên đường"?',
    titleEn: 'Why is Vietnamese Gac fruit known worldwide as the "Fruit from Heaven"?',
    categoryVi: 'Nông sản Việt',
    categoryEn: 'Native Agriculture',
    readTime: '5 phút',
    date: '2026-08-28'
  },
  {
    id: 'art-3-dau-dua-ben-tre',
    phase: 'Awareness',
    titleVi: 'Dầu dừa ép lạnh Bến Tre – Bí quyết dưỡng ẩm môi truyền thống nghìn năm',
    titleEn: 'Ben Tre cold-pressed coconut oil: Ancient traditional moisture secret',
    categoryVi: 'Nông sản Việt',
    categoryEn: 'Native Agriculture',
    readTime: '4 phút',
    date: '2026-08-25'
  },
  {
    id: 'art-4-son-thuan-chay',
    phase: 'Awareness',
    titleVi: 'Mỹ phẩm thuần chay (Vegan) là gì và vì sao giới trẻ ngày càng ưa chuộng?',
    titleEn: 'What is 100% Vegan Cosmetics and why is Gen Z embracing it?',
    categoryVi: 'Xu hướng sống xanh',
    categoryEn: 'Green Living',
    readTime: '5 phút',
    date: '2026-08-20'
  },
  {
    id: 'art-10-me-bau-dung-duoc-khong',
    phase: 'Consideration',
    titleVi: 'Mẹ bầu có dùng son dưỡng được không? Tiêu chí chọn son an toàn cho thai kỳ',
    titleEn: 'Can pregnant mothers use lip balm? Criteria for pregnancy-safe cosmetics',
    categoryVi: 'Mẹ bầu & Bé',
    categoryEn: 'Mother & Baby',
    readTime: '5 phút',
    date: '2026-08-10'
  },
  {
    id: 'art-13-combo-sinh-vien',
    phase: 'Conversion',
    titleVi: 'Combo Sinh Viên 149K: Đôi bạn cùng xinh, tiết kiệm chi tiêu đầu năm học',
    titleEn: 'Student Combo 149K: Shared beauty and budget-smart savings',
    categoryVi: 'Ưu đãi thành viên',
    categoryEn: 'Promotions',
    readTime: '3 phút',
    date: '2026-08-05'
  }
];

export const SOCIAL_LINKS = {
  tiktok: 'https://tiktok.com/@gacocosmetics.official',
  facebook: 'https://facebook.com/gacocosmetics.vietnam',
  messenger: 'https://m.me/gacocosmetics.vietnam',
  hotline: '0988.123.456',
  email: 'contact@gacocosmetics.vn',
  address: '79, Hồ Tùng Mậu, Cầu Giấy, Hà Nội, Việt Nam'
};
