import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { User, Award, Gift, Check, Copy, ShoppingBag, Sparkles, ChevronRight } from 'lucide-react';
import { SEO } from '../utils/seo';
import { useAuth } from '../hooks/useAuth';

export const AccountPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');
  const { currentUser, isAuthenticated, openAuthModal, updateProfile } = useAuth();
  
  const [copiedCode, setCopiedCode] = useState('');
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [orders, setOrders] = useState([]);

  const [editForm, setEditForm] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    persona: currentUser?.persona || 'student'
  });

  useEffect(() => {
    if (currentUser) {
      setEditForm({
        name: currentUser.name || '',
        phone: currentUser.phone || '',
        persona: currentUser.persona || 'student'
      });
    }

    try {
      const savedOrders = JSON.parse(localStorage.getItem('gaco_orders')) || [];
      setOrders(savedOrders);
    } catch {
      setOrders([]);
    }
  }, [currentUser]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(editForm);
    setProfileUpdated(true);
    setTimeout(() => setProfileUpdated(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center pt-[125px] sm:pt-[135px] pb-24 bg-[#FEFBF4] px-4">
        <div className="max-w-md w-full p-8 sm:p-10 border border-[#E7E5DF] bg-[#FEFBF4] text-center space-y-4">
          <div className="w-14 h-14 border border-[#1F1C17] text-[#1F1C17] mx-auto flex items-center justify-center">
            <User size={28} />
          </div>
          <span className="text-xs font-condensed uppercase tracking-[0.2em] text-[#C5A25D] font-bold">
            GACO GREEN CIRCLE
          </span>
          <h2 className="text-2xl font-heading font-medium text-[#1F1C17]">
            {isEn ? 'Member Sign In' : 'Đăng Nhập Thành Viên'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
            {t('account.needLogin')}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openAuthModal('login')}
              className="w-full py-3 button-cocoon-gold text-xs tracking-[0.2em] font-bold"
            >
              {t('account.loginBtn')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isStudent = currentUser.persona === 'student';

  return (
    <>
      <SEO
        title={isEn ? "Member Account – Gaco Green Circle" : "Tài Khoản Thành Viên – Gaco Green Circle"}
        description={isEn
          ? "Manage your Gaco Cosmetics membership profile, access exclusive vouchers, and personalized lip care regimens."
          : "Quản lý thông tin tài khoản thành viên Gaco Cosmetics, nhận voucher độc quyền và cẩm nang chăm sóc môi cá nhân hóa."}
      />

      <div className="pt-[125px] sm:pt-[135px] pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs - Cocoon Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F] overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1F1C17] transition-colors shrink-0">{t('breadcrumbs.home')}</Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="text-[#1F1C17] font-semibold shrink-0">{t('breadcrumbs.account')}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          {/* Member Hero Status Bar */}
          <div className="p-8 sm:p-10 bg-[#1F1C17] text-[#FEFBF4] border border-[#38342E] border-l-4 border-l-[#9E2A2B] mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 border-2 border-[#9E2A2B] bg-[#1F1C17] text-[#FEFBF4] font-heading font-medium text-2xl flex items-center justify-center shrink-0">
                {currentUser.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-heading font-medium text-[#FEFBF4]">
                    {currentUser.name}
                  </h1>
                  <span className={`px-2.5 py-0.5 text-[11px] font-condensed uppercase tracking-wider font-bold border ${
                    isStudent
                      ? 'border-[#9E2A2B] text-[#FEFBF4] bg-[#9E2A2B]/40'
                      : 'border-[#5E7A4A] text-[#FEFBF4] bg-[#5E7A4A]/40'
                  }`}>
                    {isStudent
                      ? (isEn ? '🎓 STUDENT / GEN Z' : '🎓 HỌC SINH – SINH VIÊN')
                      : (isEn ? '🌿 MOTHER & CLEAN BEAUTY' : '🌿 MẸ BẦU & CLEAN BEAUTY')}
                  </span>
                </div>
                <p className="text-xs text-[#97958F] font-light mt-1">
                  {currentUser.email} • {currentUser.phone}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs font-condensed uppercase tracking-wider text-[#C5A25D] font-semibold">
                  <Award size={15} />
                  <span>{isEn ? `GACO GREEN CIRCLE MEMBER (${currentUser.points || 200} POINTS)` : `THÀNH VIÊN GACO GREEN CIRCLE (${currentUser.points || 200} ĐIỂM TÍCH LŨY)`}</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-6 py-3.5 button-gaco-ruby text-xs tracking-wider font-bold whitespace-nowrap shadow-xs"
              >
                <ShoppingBag size={15} />
                <span>{isEn ? 'ORDER 79K BALM' : 'ĐẶT SON DƯỠNG 79K'}</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Vouchers & Personalized Regimen (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Vouchers Section */}
              <div id="vouchers" className="p-6 sm:p-8 border border-[#E7E5DF] bg-[#FEFBF4] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DF]">
                  <div className="flex items-center gap-2">
                    <Gift size={18} className="text-[#C5A25D]" />
                    <h3 className="font-heading font-medium text-lg text-[#1F1C17]">
                      {isEn ? 'Your Exclusive Vouchers' : 'Voucher Ưu Đãi Của Bạn'}
                    </h3>
                  </div>
                  <span className="text-xs font-condensed uppercase tracking-wider text-[#7BAD34] font-bold">
                    {isEn ? `${(currentUser.vouchers || []).length} AVAILABLE VOUCHERS` : `${(currentUser.vouchers || []).length} VOUCHER KHẢ DỤNG`}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Voucher 1: Combo 149K */}
                  <div className="p-4 border border-dashed border-[#C5A25D] bg-[#F4EFE6] flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-condensed uppercase tracking-wider px-2 py-0.5 bg-[#C5A25D] text-white font-bold">
                        VOUCHER149K
                      </span>
                      <p className="text-xs sm:text-sm text-[#1F1C17] font-medium mt-1.5">
                        {isEn ? 'Extra 15,000đ off when ordering Gac Lip Balm Duo Combo 149K' : 'Giảm thêm 15.000đ khi đặt Combo 2 Thỏi Son Dưỡng Gấc 149K'}
                      </p>
                      <p className="text-[11px] text-[#97958F] mt-0.5">{isEn ? 'Applicable for all online orders' : 'Áp dụng cho mọi đơn hàng trực tuyến'}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('VOUCHER149K')}
                      className="px-4 py-2 bg-[#1F1C17] hover:bg-[#38342E] text-[#FEFBF4] text-xs font-condensed uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      {copiedCode === 'VOUCHER149K' ? (
                        <>
                          <Check size={13} />
                          <span>{isEn ? 'COPIED' : 'ĐÃ CHÉP'}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>{isEn ? 'COPY' : 'SAO CHÉP'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Voucher 2: Sinh viên hoặc Mẹ bầu */}
                  <div className="p-4 border border-dashed border-[#E7E5DF] bg-[#FAF7F2] flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-condensed uppercase tracking-wider px-2 py-0.5 bg-[#1F1C17] text-white font-bold">
                        {isStudent ? 'SINHVIEN10' : 'MOMSAFE10'}
                      </span>
                      <p className="text-xs sm:text-sm text-[#1F1C17] font-medium mt-1.5">
                        {isStudent
                          ? (isEn ? 'Student Exclusive: 10% OFF + Complimentary Lip Care Guide' : 'Đặc quyền Sinh viên: Giảm 10% + Tặng cẩm nang trị thâm')
                          : (isEn ? 'Pregnancy Exclusive: 10% OFF + Free Formulation Safety Check' : 'Đặc quyền Thai kỳ: Giảm 10% + Miễn phí kiểm tra bảng thành phần')}
                      </p>
                      <p className="text-[11px] text-[#97958F] mt-0.5">{isEn ? 'Exclusively tailored for your persona' : 'Dành riêng cho nhóm đối tượng của bạn'}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(isStudent ? 'SINHVIEN10' : 'MOMSAFE10')}
                      className="px-4 py-2 border border-[#1F1C17] text-[#1F1C17] hover:bg-[#1F1C17] hover:text-[#FEFBF4] text-xs font-condensed uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      {copiedCode === (isStudent ? 'SINHVIEN10' : 'MOMSAFE10') ? (
                        <>
                          <Check size={13} />
                          <span>{isEn ? 'COPIED' : 'ĐÃ CHÉP'}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>{isEn ? 'COPY' : 'SAO CHÉP'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Personalized Skincare Regimen */}
              <div className="p-6 sm:p-8 border border-[#E7E5DF] bg-[#FEFBF4] space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E7E5DF]">
                  <Sparkles size={18} className="text-[#C5A25D]" />
                  <h3 className="font-heading font-medium text-lg text-[#1F1C17]">
                    {isEn
                      ? `Personalized Lip Care Regimen (For ${isStudent ? 'Students' : 'Expecting Mothers'})`
                      : `Lộ Trình Dưỡng Môi Cá Nhân Hóa (Dành Cho ${isStudent ? 'Sinh Viên' : 'Mẹ Bầu'})`}
                  </h3>
                </div>

                {isStudent ? (
                  <div className="space-y-3 text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
                    <div className="p-3.5 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Step 1: Daytime in classroom' : 'Bước 1: Ban ngày đến lớp học'}</p>
                      <p className="text-xs text-[#666055]">
                        {isEn
                          ? 'Apply a sheer layer of Gaco balm prior to colored lipstick to shield lips from lead and campus UV rays.'
                          : 'Thoa một lớp mỏng son Gaco trước khi đánh son màu để ngăn chì và tia UV từ ánh nắng sân trường.'}
                      </p>
                    </div>
                    <div className="p-3.5 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Step 2: Air-conditioned library' : 'Bước 2: Phòng máy lạnh thư viện'}</p>
                      <p className="text-xs text-[#666055]">
                        {isEn
                          ? 'Reapply every 4 hours to replenish cold-pressed coconut oil, preventing cracking caused by AC air.'
                          : 'Thoa dặm sau mỗi 4 tiếng để bổ sung dầu dừa già Bến Tre khóa ẩm, chống nứt nẻ do máy điều hòa.'}
                      </p>
                    </div>
                    <div className="p-3.5 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Step 3: Overnight lip sleeping mask' : 'Bước 3: Mặt nạ ngủ ban đêm'}</p>
                      <p className="text-xs text-[#666055]">
                        {isEn
                          ? 'Apply generously before bed; gac Lycopene actively regenerates natural rosy pigments while you sleep.'
                          : 'Thoa lớp dày trước khi ngủ; Lycopene trong gấc sẽ hoạt hóa tái tạo sắc hồng tự nhiên trong giấc ngủ.'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
                    <div className="p-3.5 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? '0% Lead Commitment & Absolute Safety' : 'Cam kết 0% Chì & An toàn tuyệt đối'}</p>
                      <p className="text-xs text-[#666055]">
                        {isEn
                          ? 'Completely safe even if accidentally ingested, formulated with 100% native plant oils verified by Quatest 3.'
                          : 'Hoàn toàn yên tâm khi ăn uống hoặc vô tình nuốt phải vì 100% là dầu thực vật bản địa kiểm nghiệm Quatest 3.'}
                      </p>
                    </div>
                    <div className="p-3.5 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Relieve dry cracking due to pregnancy hormonal shifts' : 'Xử lý khô nứt do thay đổi nội tiết tố thai kỳ'}</p>
                      <p className="text-xs text-[#666055]">
                        {isEn
                          ? 'Lauric Acid in cold-pressed coconut oil naturally soothes deep cracking and micro-chapping.'
                          : 'Dầu dừa ép lạnh giàu Lauric Acid giúp kháng khuẩn tự nhiên, xoa dịu rãnh môi nứt nẻ và chảy máu nhẹ.'}
                      </p>
                    </div>
                    <div className="p-3.5 bg-[#F4EFE6] border border-[#E7E5DF] space-y-1">
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Subtle natural blush without synthetic colorants' : 'Sắc hồng nhẹ tự nhiên không phẩm màu hóa học'}</p>
                      <p className="text-xs text-[#666055]">
                        {isEn
                          ? 'Delicate peachy-pink tint from beta-carotene in gac gives mothers a vibrant glow without makeup.'
                          : 'Màu cam hồng thanh tao từ beta-carotene của gấc giúp gương mặt mẹ bầu rạng rỡ mà không cần son trang điểm.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Profile Edit & Orders (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Edit Profile Form */}
              <div className="p-6 sm:p-8 border border-[#E7E5DF] bg-[#FEFBF4] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DF]">
                  <h3 className="font-heading font-medium text-lg text-[#1F1C17]">
                    {isEn ? 'Personal Information' : 'Thông Tin Cá Nhân'}
                  </h3>
                  {profileUpdated && (
                    <span className="text-xs text-[#7BAD34] font-bold flex items-center gap-1">
                      <Check size={13} />
                      {isEn ? 'Saved!' : 'Đã lưu!'}
                    </span>
                  )}
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div>
                    <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                      {isEn ? 'Full Name' : 'Họ và tên'}
                    </label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                      {isEn ? 'Phone Number' : 'Số điện thoại'}
                    </label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
                      {isEn ? 'Personal customer persona:' : 'Nhóm đối tượng cá nhân:'}
                    </label>
                    <div className="space-y-2 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="persona_edit"
                          value="student"
                          checked={editForm.persona === 'student'}
                          onChange={() => setEditForm({ ...editForm, persona: 'student' })}
                          className="accent-[#C5A25D]"
                        />
                        <span>{isEn ? 'Student / Gen Z' : 'Học sinh – Sinh viên'}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="persona_edit"
                          value="mom"
                          checked={editForm.persona === 'mom'}
                          onChange={() => setEditForm({ ...editForm, persona: 'mom' })}
                          className="accent-[#7BAD34]"
                        />
                        <span>{isEn ? 'Expectant Mother & Clean Beauty' : 'Mẹ bầu & Clean Beauty'}</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 button-cocoon-dark text-xs tracking-wider font-bold mt-2"
                  >
                    {isEn ? 'SAVE CHANGES' : 'LƯU THAY ĐỔI'}
                  </button>
                </form>
              </div>

              {/* Order History */}
              <div className="p-6 sm:p-8 border border-[#E7E5DF] bg-[#FEFBF4] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DF]">
                  <h3 className="font-heading font-medium text-lg text-[#1F1C17]">
                    {isEn ? 'Order History' : 'Lịch Sử Đơn Hàng'}
                  </h3>
                  <span className="text-xs text-[#97958F]">
                    {orders.length} {isEn ? 'orders' : 'đơn'}
                  </span>
                </div>

                {orders.length === 0 ? (
                  <div className="text-center py-6 text-xs text-[#97958F] font-light space-y-2">
                    <p>{isEn ? 'You have not placed any orders yet.' : 'Bạn chưa có đơn hàng nào tại Gaco.'}</p>
                    <Link
                      to="/product"
                      className="inline-block font-condensed uppercase tracking-wider text-xs font-bold text-[#C5A25D] hover:underline"
                    >
                      {isEn ? 'ORDER FIRST BALM (79,000đ) →' : 'ĐẶT SẢN PHẨM ĐẦU TIÊN (79.000đ) →'}
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {orders.map((ord, idx) => (
                      <div key={idx} className="p-3 border border-[#E7E5DF] bg-[#F4EFE6] text-xs space-y-1">
                        <div className="flex justify-between font-semibold text-[#1F1C17]">
                          <span>{isEn ? `Order #${ord.id || `GC${1000 + idx}`}` : `Đơn #${ord.id || `GC${1000 + idx}`}`}</span>
                          <span className="text-[#7BAD34]">{ord.status || (isEn ? 'Processing' : 'Đang xử lý')}</span>
                        </div>
                        <p className="text-[#97958F] text-[11px]">
                          {ord.date || (isEn ? 'Today' : 'Hôm nay')} • {ord.quantity || 1} {isEn ? 'items' : 'sản phẩm'}
                        </p>
                        <p className="font-bold text-[#1F1C17]">{ord.total || '79.000 đ'}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};
