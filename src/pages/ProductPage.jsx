import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronDown, ChevronUp, Check, ShieldCheck, Truck, RefreshCw, Sparkles, Gift } from 'lucide-react';
import { SEO } from '../utils/seo';
import { Modal } from '../components/common/Modal';
import { ASSETS, PRODUCT_INFO, SOCIAL_LINKS } from '../utils/constants';

export const ProductPage = () => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('single'); // 'single' | 'combo'
  const [activeTab, setActiveTab] = useState('benefits');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const images = ASSETS.gallery;

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    try {
      const orders = JSON.parse(localStorage.getItem('gaco_orders')) || [];
      orders.push({
        id: 'ORD_' + Date.now(),
        product: selectedPlan === 'combo' ? `Hộp Quà Gaco Botanical (2 Thỏi) (SL: ${quantity})` : `Thỏi Đơn Gaco 5g (SL: ${quantity})`,
        total: (selectedPlan === 'combo' ? 149000 : 79000) * quantity,
        ...orderForm,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('gaco_orders', JSON.stringify(orders));
    } catch (err) {
      console.error(err);
    }
  };

  const tabs = [
    {
      id: 'benefits',
      title: 'CÔNG DỤNG & SẮC SON TRÊN MÔI',
      content: (
        <div className="space-y-3 text-sm text-[#1F1C17]/85 font-light leading-relaxed">
          <p>• <strong>Cấp ẩm &amp; phục hồi 24 giờ:</strong> Tái lập màng lipid sinh học tự nhiên, chấm dứt tình trạng môi khô rát, bong tróc nứt nẻ sau 1 đêm.</p>
          <p>• <strong>Khử thâm &amp; chống oxy hóa:</strong> Hoạt chất Lycopene từ màng gấc tươi ức chế melanin, làm mờ sắc tố thâm xỉn do son chứa chì hoặc ánh nắng.</p>
          <p>• <strong>Sắc hồng cam tự nhiên:</strong> Màu cam đào nhẹ nhàng, trong trẻo từ Beta-Carotene nguyên bản, không cần phẩm màu hóa học, thoa lên tạo hiệu ứng môi ửng hồng rạng rỡ.</p>
          <p>• <strong>Không bóng nhờn:</strong> Kết cấu sáp Candelilla thực vật tan tiệp vào môi, không bết dính như mỡ khoáng hay mỡ động vật.</p>
        </div>
      )
    },
    {
      id: 'ingredients',
      title: 'THÀNH PHẦN NÔNG SẢN BẢN ĐỊA',
      content: (
        <div className="space-y-3 text-sm text-[#1F1C17]/85 font-light leading-relaxed">
          <p>• <strong>Dầu màng gấc ép lạnh (Momordica Cochinchinensis):</strong> Chiếm 35% công thức, giàu Lycopene gấp 70 lần cà chua và Beta-Carotene gấp 10 lần cà rốt.</p>
          <p>• <strong>Dầu dừa già Bến Tre (Cocos Nucifera):</strong> Chiếm 30% công thức, ép lạnh ly tâm giữ trọn Lauric Acid kháng khuẩn tự nhiên và chuỗi acid béo MCTs khóa ẩm.</p>
          <p>• <strong>Sáp thực vật Candelilla &amp; Bơ hạt mỡ:</strong> Định hình thỏi son thuần chay không sáp ong, giúp son lướt mịn êm ái.</p>
        </div>
      )
    },
    {
      id: 'inci',
      title: 'BẢNG THÀNH PHẦN KHOA HỌC (INCI)',
      content: (
        <div className="space-y-2">
          <p className="text-xs font-mono text-[#97958F] leading-relaxed">
            Momordica Cochinchinensis (Gac) Seed Aril Oil, Cocos Nucifera (Coconut) Oil, Euphorbia Cerifera (Candelilla) Cera, Butyrospermum Parkii (Shea) Butter, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol (Natural Vitamin E).
          </p>
          <p className="text-[11px] text-[#5E7A4A] font-medium">
            ✓ 100% minh bạch • Đạt chuẩn Dược - Mỹ phẩm ASEAN
          </p>
        </div>
      )
    },
    {
      id: 'usage',
      title: 'HƯỚNG DẪN SỬ DỤNG CHO SINH VIÊN & MẸ BẦU',
      content: (
        <div className="space-y-2 text-sm text-[#1F1C17]/85 font-light leading-relaxed">
          <p><strong>• Đi học / Đi làm:</strong> Thoa một lớp mỏng làm son lót bảo vệ môi trước khi dùng son màu, hoặc dùng độc lập để có sắc môi cam hồng tự nhiên.</p>
          <p><strong>• Mặt nạ ngủ ban đêm:</strong> Thoa 2-3 lớp dày trước khi đi ngủ. Sáng hôm sau lau nhẹ bằng khăn ấm, toàn bộ tế bào chết sẽ bong ra dễ dàng.</p>
          <p><strong>• Dành cho Mẹ bầu:</strong> Hoàn toàn an toàn khi ăn uống hoặc vô tình nuốt phải suốt thai kỳ.</p>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'CAM KẾT 0% CHÌ & QUATEST 3 KIỂM NGHIỆM',
      content: (
        <div className="space-y-2 text-sm text-[#1F1C17]/85 font-light leading-relaxed">
          <p>✓ 100% Thuần Chay (The Vegan Society Standard - Không sáp ong, không mỡ cừu).</p>
          <p>✓ Không thử nghiệm trên động vật (Cruelty-Free).</p>
          <p>✓ 0% Chì, 0% Thủy ngân, 0% Asen (QUATEST 3 kiểm nghiệm đạt mức Không Phát Hiện - N.D).</p>
          <p>✓ 0% Paraben, 0% Hương liệu nhân tạo, 0% Dẫn xuất dầu mỏ.</p>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Son Dưỡng Gấc & Dầu Dừa Bến Tre 5g – Gaco Vietnam"
        description="Son dưỡng môi hữu cơ 100% thuần chay chiết xuất gấc và dầu dừa Bến Tre ép lạnh, cam kết không chì, an toàn tuyệt đối cho mẹ bầu và sinh viên."
      />

      <div className="pt-24 sm:pt-28 pb-20 bg-[#FEFBF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">
          
          {/* Breadcrumbs */}
          <nav className="py-4 text-xs font-condensed tracking-wider uppercase text-[#97958F] border-b border-[#E7E5DF] mb-8">
            <Link to="/" className="hover:text-[#1F1C17]">TRANG CHỦ</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1F1C17]">DƯỠNG MÔI THUẦN CHAY</span>
            <span className="mx-2">/</span>
            <span className="text-[#9E2A2B] font-bold">SON DƯỠNG GẤC &amp; DẦU DỪA BẾN TRE</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left: Product Images Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border border-[#E7E5DF] bg-[#F4EFE6] aspect-square overflow-hidden relative">
                <img
                  src={images[activeImgIdx]}
                  alt="Ảnh son dưỡng Gaco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#9E2A2B] text-white font-condensed text-[11px] uppercase tracking-wider font-bold">
                    100% THUẦN CHAY
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-5 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImgIdx(i)}
                    className={`aspect-square border overflow-hidden p-0.5 transition-all ${
                      activeImgIdx === i ? 'border-[#9E2A2B] ring-1 ring-[#9E2A2B]' : 'border-[#E7E5DF] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Gaco Natural Lip Swatch Note */}
              <div className="p-4 border border-[#E7E5DF] bg-[#F4EFE6] flex items-center justify-between text-xs text-[#666055] font-light">
                <span className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#9E2A2B]" />
                  <span>Sắc cam đào trong trẻo tự nhiên từ màng gấc tươi không phẩm màu</span>
                </span>
                <span className="font-condensed uppercase tracking-wider text-[11px] font-bold text-[#9E2A2B]">
                  0% CHÌ
                </span>
              </div>
            </div>

            {/* Right: Product E-commerce Details */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#9E2A2B] font-bold block mb-1">
                  GACO ORIGINAL VIETNAM • HỒN VIỆT TRONG THỎI SON GẤC
                </span>
                <h1 className="text-3xl sm:text-4xl font-heading font-normal text-[#1F1C17]">
                  Son dưỡng dầu dừa Bến Tre &amp; Gấc 5g
                </h1>
                <p className="text-xs text-[#97958F] italic font-heading mt-1">
                  Momordica Cochinchinensis &amp; Cocos Nucifera Lip Balm
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex text-[#C5A25D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-[#97958F]">
                    4.9 / 5 (1.250 đánh giá thực tế)
                  </span>
                </div>
              </div>

              {/* Gaco Signature Quality Seal Stamp */}
              <div className="stamp-gaco-ruby">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                <span>100% ÉP LẠNH CƠ HỌC • KIỂM NGHIỆM 0% CHÌ QUATEST 3</span>
              </div>

              {/* Price */}
              <div className="py-3 border-y border-[#E7E5DF] flex items-baseline gap-4">
                <span className="text-3xl font-bold font-heading text-[#9E2A2B]">
                  {selectedPlan === 'combo' ? '149.000 đ' : '79.000 đ'}
                </span>
                {selectedPlan === 'combo' && (
                  <span className="text-sm text-[#97958F] line-through">158.000 đ</span>
                )}
                <span className="text-xs font-condensed uppercase px-2.5 py-0.5 bg-[#FEFBF4] border border-[#9E2A2B] text-[#9E2A2B] font-bold">
                  {selectedPlan === 'combo' ? 'TẶNG TÚI VẢI MỘC + FREESHIP' : 'GIÁ TRẢI NGHIỆM 79K'}
                </span>
              </div>

              {/* Package selector - Single vs Gaco Botanical Gift Set */}
              <div className="space-y-2">
                <span className="text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] block">
                  CHỌN PHÂN LOẠI SẢN PHẨM:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('single')}
                    className={`p-3.5 border text-left transition-all ${
                      selectedPlan === 'single'
                        ? 'border-[#9E2A2B] bg-[#FDF2F2] text-[#1F1C17]'
                        : 'border-[#E7E5DF] hover:border-[#1F1C17]'
                    }`}
                  >
                    <p className="font-bold text-xs">Thỏi đơn 5g</p>
                    <p className="text-sm font-heading font-bold text-[#1F1C17] mt-1">79.000 đ</p>
                    <p className="text-[10px] text-[#97958F] mt-0.5">Dùng thử 2-3 tháng</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('combo')}
                    className={`p-3.5 border text-left transition-all ${
                      selectedPlan === 'combo'
                        ? 'border-[#9E2A2B] bg-[#FDF2F2] text-[#1F1C17]'
                        : 'border-[#E7E5DF] hover:border-[#1F1C17]'
                    }`}
                  >
                    <p className="font-bold text-xs flex items-center justify-between">
                      <span>Combo 2 Thỏi (Hộp Quà)</span>
                      <span className="text-[10px] text-[#9E2A2B] font-bold">HOT</span>
                    </p>
                    <p className="text-sm font-heading font-bold text-[#9E2A2B] mt-1">149.000 đ</p>
                    <p className="text-[10px] text-[#5E7A4A] font-medium mt-0.5">Tặng túi vải + Freeship</p>
                  </button>
                </div>
              </div>

              {/* Quantity Selector & Big Buy Button in Gaco Ruby */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center border border-[#1F1C17] h-12 px-3 bg-[#FEFBF4]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-base font-bold text-[#1F1C17] px-2 hover:text-[#9E2A2B]"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-[#1F1C17]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-base font-bold text-[#1F1C17] px-2 hover:text-[#9E2A2B]"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => { setOrderSuccess(false); setOrderModalOpen(true); }}
                  className="flex-1 h-12 button-gaco-ruby text-base tracking-[0.18em] flex items-center justify-center gap-2 shadow-xs"
                >
                  <ShoppingBag size={18} />
                  <span>THÊM VÀO GIỎ HÀNG</span>
                </button>
              </div>

              {/* Messenger Link */}
              <div className="pt-2">
                <a
                  href={SOCIAL_LINKS.messenger}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block py-3 border border-[#1F1C17] text-[#1F1C17] text-center font-condensed text-xs uppercase tracking-wider font-bold hover:bg-[#1F1C17] hover:text-[#FEFBF4] transition-colors"
                >
                  TƯ VẤN TRỰC TIẾP QUA MESSENGER (PHẢN HỒI &lt; 2 PHÚT)
                </a>
              </div>

              {/* Commitments Bar */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#E7E5DF] text-xs text-[#666055] font-light">
                <div className="flex items-center gap-2">
                  <Truck size={15} className="text-[#C5A25D]" />
                  <span>Giao hàng toàn quốc 2-3 ngày</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw size={15} className="text-[#5E7A4A]" />
                  <span>Đổi trả nếu kích ứng da</span>
                </div>
              </div>

              {/* 5 Tab Accordions */}
              <div className="space-y-2 pt-2">
                {tabs.map((tab) => {
                  const isOpen = activeTab === tab.id;
                  return (
                    <div key={tab.id} className="border border-[#E7E5DF]">
                      <button
                        type="button"
                        onClick={() => setActiveTab(isOpen ? '' : tab.id)}
                        className="w-full p-4 text-left flex items-center justify-between font-condensed text-base uppercase tracking-wider font-bold text-[#1F1C17] bg-[#FEFBF4] hover:text-[#9E2A2B] transition-colors"
                      >
                        <span>{tab.title}</span>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-1 bg-[#FEFBF4] border-t border-[#E7E5DF]/60">
                          {tab.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Order Modal with Gaco Styling */}
      <Modal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        title="ĐẶT HÀNG TRỰC TIẾP – GACO VIETNAM"
      >
        {orderSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 border border-[#5E7A4A] text-[#5E7A4A] flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>
            <h4 className="text-xl font-heading font-medium text-[#1F1C17]">
              Đặt Hàng Thành Công!
            </h4>
            <p className="text-xs text-[#666055] leading-relaxed max-w-sm mx-auto font-light">
              Cảm ơn bạn! Chuyên viên chăm sóc khách hàng Gaco sẽ liên hệ số <strong>{orderForm.phone}</strong> để xác nhận và đóng gói sản phẩm gửi đi sớm nhất.
            </p>
            <button
              type="button"
              onClick={() => setOrderModalOpen(false)}
              className="w-full py-3 button-cocoon-dark text-xs tracking-wider font-bold mt-4"
            >
              HOÀN TẤT
            </button>
          </div>
        ) : (
          <form onSubmit={handleOrderSubmit} className="space-y-4">
            <div className="p-3 bg-[#F4EFE6] border border-[#E7E5DF] text-xs">
              <p className="font-bold text-[#1F1C17]">
                Gói: {selectedPlan === 'combo' ? `Hộp Quà Gaco Botanical (Combo 2 thỏi 149.000đ)` : `Thỏi đơn 5g (79.000đ)`} × {quantity}
              </p>
              <p className="text-[#9E2A2B] font-bold text-sm mt-1">
                Tổng cộng: {((selectedPlan === 'combo' ? 149000 : 79000) * quantity).toLocaleString('vi-VN')} đ
              </p>
              <p className="text-[11px] text-[#97958F] mt-1">Kiểm tra hàng trước khi thanh toán (COD toàn quốc).</p>
            </div>

            <div>
              <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                Họ và tên của bạn *
              </label>
              <input
                type="text"
                required
                value={orderForm.name}
                onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                placeholder="Nguyễn Thị Mai"
                className="w-full p-2.5 bg-[#FEFBF4] border border-[#E7E5DF] text-xs focus:border-[#9E2A2B] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                Số điện thoại nhận hàng *
              </label>
              <input
                type="tel"
                required
                value={orderForm.phone}
                onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                placeholder="0988 123 456"
                className="w-full p-2.5 bg-[#FEFBF4] border border-[#E7E5DF] text-xs focus:border-[#9E2A2B] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                Địa chỉ giao hàng chi tiết *
              </label>
              <input
                type="text"
                required
                value={orderForm.address}
                onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/TP"
                className="w-full p-2.5 bg-[#FEFBF4] border border-[#E7E5DF] text-xs focus:border-[#9E2A2B] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 button-gaco-ruby text-xs tracking-[0.2em] font-bold transition-colors mt-2"
            >
              XÁC NHẬN ĐẶT HÀNG
            </button>
          </form>
        )}
      </Modal>
    </>
  );
};
