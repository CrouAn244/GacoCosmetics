import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { SEO } from '../utils/seo';
import { SOCIAL_LINKS } from '../utils/constants';

export const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: isEn ? 'Gac balm advice' : 'Tư vấn sản phẩm son dưỡng gấc',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      const leads = JSON.parse(localStorage.getItem('gaco_leads')) || [];
      leads.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem('gaco_leads', JSON.stringify(leads));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <SEO
        title={isEn ? "Contact & Customer Care – Gaco Vietnam" : "Liên Hệ & Hỗ Trợ Khách Hàng – Gaco Vietnam"}
        description={isEn
          ? "Contact Gaco Cosmetics team via Messenger, TikTok, Facebook, or submit an inquiry form. Response guaranteed under 2 minutes."
          : "Liên hệ đội ngũ Gaco Cosmetics qua Messenger, TikTok, Facebook hoặc gửi form tư vấn son dưỡng hữu cơ. Cam kết phản hồi dưới 2 phút."}
      />

      <div className="pt-[125px] sm:pt-[135px] pb-24 bg-[#FEFBF4]">
        
        {/* Breadcrumbs - Cocoon Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E7E5DF]">
          <div className="flex items-center gap-2 text-xs font-condensed tracking-wider uppercase text-[#97958F] overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1F1C17] transition-colors shrink-0">{t('breadcrumbs.home')}</Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="text-[#1F1C17] font-semibold shrink-0">{t('breadcrumbs.contact')}</span>
          </div>
        </div>

        {/* Hero Title */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            {t('contactPage.tagline')}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-[#1F1C17] tracking-tight mt-4 mb-6 leading-tight">
            {t('contactPage.title')}
          </h1>
          <p className="text-base sm:text-lg text-[#666055] font-light leading-relaxed max-w-2xl mx-auto">
            {t('contactPage.subtitle')}
          </p>
        </section>

        {/* Contact Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 border border-[#E7E5DF] bg-[#FEFBF4] space-y-6">
                <div className="border-b border-[#E7E5DF] pb-4">
                  <span className="text-xs font-condensed uppercase tracking-[0.18em] text-[#C5A25D] font-bold">
                    {isEn ? 'CUSTOMER CARE CENTER' : 'TRUNG TÂM CHĂM SÓC KHÁCH HÀNG'}
                  </span>
                  <h3 className="text-xl font-heading font-medium text-[#1F1C17] mt-1">
                    {isEn ? 'Direct Contact Information' : 'Thông Tin Trực Tiếp'}
                  </h3>
                </div>

                <ul className="space-y-5 text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
                  <li className="flex items-start gap-3.5">
                    <MapPin size={18} className="text-[#C5A25D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Headquarters & Showroom' : 'Trụ sở chính & Phòng trưng bày'}</p>
                      <p className="text-xs text-[#97958F] mt-0.5">{isEn ? '79, Ho Tung Mau, Cau Giay, Hanoi, Vietnam' : '79, Hồ Tùng Mậu, Cầu Giấy, Hà Nội, Việt Nam'}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Phone size={18} className="text-[#C5A25D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Support Hotline (8:00 - 21:00)' : 'Hotline hỗ trợ (8:00 - 21:00)'}</p>
                      <p className="text-xs text-[#97958F] mt-0.5">{SOCIAL_LINKS.hotline} {isEn ? '(Toll-free call)' : '(Miễn phí cuộc gọi)'}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Mail size={18} className="text-[#C5A25D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Inquiry Email' : 'Email giải đáp thắc mắc'}</p>
                      <p className="text-xs text-[#97958F] mt-0.5">{SOCIAL_LINKS.email}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Clock size={18} className="text-[#C5A25D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-[#1F1C17]">{isEn ? 'Committed Response Time (SOSTAC)' : 'Thời gian phản hồi cam kết (SOSTAC)'}</p>
                      <p className="text-xs text-[#7BAD34] font-medium mt-0.5">{isEn ? 'Response < 2 minutes in business hours' : 'Phản hồi < 2 phút trong giờ hành chính'}</p>
                    </div>
                  </li>
                </ul>

                {/* Social Channels */}
                <div className="pt-4 border-t border-[#E7E5DF] space-y-3">
                  <p className="text-xs font-condensed uppercase tracking-[0.18em] text-[#1F1C17] font-bold">
                    {isEn ? 'ONLINE SOCIAL CHANNELS:' : 'KÊNH MẠNG XÃ HỘI TRỰC TUYẾN:'}
                  </p>

                  <a
                    href={SOCIAL_LINKS.messenger}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 border border-[#1F1C17] bg-[#FEFBF4] text-[#1F1C17] hover:bg-[#1F1C17] hover:text-[#FEFBF4] transition-colors text-xs font-condensed uppercase tracking-wider font-bold"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle size={15} />
                      <span>{isEn ? 'Messenger Instant Advice' : 'Chat Messenger Tư Vấn Tức Thì'}</span>
                    </span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 border border-[#E7E5DF] bg-[#FEFBF4] text-[#1F1C17] hover:border-[#1F1C17] transition-colors text-xs font-condensed uppercase tracking-wider font-bold"
                  >
                    <span>TikTok: @gacocosmetics.official</span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 border border-[#E7E5DF] bg-[#FEFBF4] text-[#1F1C17] hover:border-[#1F1C17] transition-colors text-xs font-condensed uppercase tracking-wider font-bold"
                  >
                    <span>Facebook: Gaco Cosmetics Vietnam</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 border border-[#E7E5DF] bg-[#FEFBF4]">
                
                {formSubmitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-14 h-14 border border-[#7BAD34] text-[#7BAD34] mx-auto flex items-center justify-center">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-2xl font-heading font-medium text-[#1F1C17]">
                      {isEn ? 'Information Sent Successfully!' : 'Gửi Thông Tin Thành Công!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666055] font-light max-w-md mx-auto leading-relaxed">
                      {isEn
                        ? `Thank you ${form.name} for reaching out to Gaco Cosmetics. A care specialist will contact you at ${form.phone} within 2 minutes.`
                        : `Cảm ơn ${form.name} đã liên hệ với Gaco Cosmetics. Chuyên viên chăm sóc sẽ liên lạc với bạn qua số điện thoại ${form.phone} trong vòng 2 phút.`}
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-3 button-cocoon-dark text-xs tracking-wider font-bold"
                      >
                        {isEn ? 'SEND ANOTHER MESSAGE' : 'GỬI TIN NHẮN KHÁC'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-[#E7E5DF] pb-4 mb-4">
                      <span className="text-xs font-condensed uppercase tracking-[0.18em] text-[#C5A25D] font-bold">
                        {isEn ? 'ONLINE SUPPORT' : 'HỖ TRỢ TRỰC TUYẾN'}
                      </span>
                      <h3 className="text-xl font-heading font-medium text-[#1F1C17] mt-1">
                        {t('contactPage.formTitle')}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
                          {t('contactPage.nameLabel')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder={isEn ? "e.g. Jenny Nguyen" : "Ví dụ: Nguyễn Phương Anh"}
                          className="w-full px-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
                          {t('contactPage.phoneLabel')} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="0988 123 456"
                          className="w-full px-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
                        {t('contactPage.emailLabel')}
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="phuonganh@gmail.com"
                        className="w-full px-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
                        {t('contactPage.topicLabel')}
                      </label>
                      <select
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="w-full px-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors cursor-pointer"
                      >
                        <option>{isEn ? 'Advice on choosing the right lip balm' : 'Tư vấn chọn son dưỡng phù hợp'}</option>
                        <option>{isEn ? 'Order Saving Duo Combo 149,000đ' : 'Đặt mua Combo 2 Thỏi Tiết Kiệm 149.000đ'}</option>
                        <option>{isEn ? 'Inquire about 0% lead safety for Expecting Mothers' : 'Hỏi về độ an toàn 0% chì cho Mẹ Bầu'}</option>
                        <option>{isEn ? 'Register as Campus Agent / Retail Partner' : 'Đăng ký Đại lý / Điểm phân phối sinh viên'}</option>
                        <option>{isEn ? 'Other' : 'Khác'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
                        {t('contactPage.messageLabel')}
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={isEn ? "Describe your lip conditions or delivery notes..." : "Mô tả tình trạng môi của bạn hoặc địa chỉ nhận hàng..."}
                        className="w-full px-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 button-cocoon-dark text-xs tracking-[0.2em] font-bold flex items-center justify-center gap-2 mt-2"
                    >
                      <Send size={14} />
                      <span>{isEn ? 'SEND INFORMATION TO GACO (RESPONSE < 2 MINS)' : 'GỬI THÔNG TIN CHO GACO (PHẢN HỒI < 2 PHÚT)'}</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* Showroom & Store Locator Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 border border-[#E7E5DF] bg-[#F4EFE6] text-center space-y-3">
            <span className="text-xs font-condensed uppercase tracking-[0.2em] text-[#C5A25D] font-bold">
              {isEn ? 'PHYSICAL EXPERIENCE' : 'ĐIỂM TRẢI NGHIỆM TRỰC TIẾP'}
            </span>
            <h3 className="text-2xl font-heading font-medium text-[#1F1C17]">
              {isEn ? 'Gaco Lip Balm Experience Space' : 'Không Gian Trải Nghiệm Son Dưỡng Gaco'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666055] font-light max-w-lg mx-auto leading-relaxed">
              {isEn
                ? 'Visit our experience counter at 79, Ho Tung Mau, Cau Giay, Hanoi, Vietnam to sample our natural balm and receive a complimentary tester.'
                : 'Mời bạn ghé thăm quầy trải nghiệm tại số 79, Hồ Tùng Mậu, Cầu Giấy, Hà Nội, Việt Nam để thử chất son tự nhiên và nhận mẫu dùng thử.'}
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#FEFBF4] border border-[#E7E5DF] text-xs font-condensed uppercase tracking-wider text-[#7BAD34] font-bold">
                {isEn ? '● OPEN: MONDAY – SUNDAY (08:00 – 21:00)' : '● MỞ CỬA: THỨ HAI – CHỦ NHẬT (08:00 – 21:00)'}
              </span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
