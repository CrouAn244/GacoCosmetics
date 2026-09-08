import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '../common/Modal';
import { useAuth } from '../../hooks/useAuth';
import { Mail, Lock, User, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export const AuthModal = () => {
  const { t } = useTranslation();
  const { isAuthModalOpen, authModalTab, setAuthModalTab, closeAuthModal, login, register } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    persona: 'student'
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMsg('Vui lòng nhập đầy đủ Email và Mật khẩu.');
      return;
    }
    setLoading(true);
    const res = await login(formData.email, formData.password);
    setLoading(false);
    if (res.success) {
      setSuccessMsg(t('auth.loginSuccess'));
      setTimeout(() => {
        setSuccessMsg('');
      }, 1500);
    } else {
      setErrorMsg(res.message || 'Đăng nhập không thành công.');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      setErrorMsg('Vui lòng điền đầy đủ các thông tin bắt buộc.');
      return;
    }
    setLoading(true);
    const res = await register(formData);
    setLoading(false);
    if (res.success) {
      setSuccessMsg(t('auth.registerSuccess'));
      setTimeout(() => {
        setSuccessMsg('');
      }, 1800);
    } else {
      setErrorMsg(res.message || 'Đăng ký thất bại.');
    }
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={closeAuthModal}
      title={authModalTab === 'login' ? 'ĐĂNG NHẬP THÀNH VIÊN' : 'ĐĂNG KÝ GACO GREEN CIRCLE'}
      maxWidth="max-w-md"
    >
      {/* Cocoon Style Sub Tabs */}
      <div className="flex border-b border-[#E7E5DF] mb-6 text-xs font-condensed uppercase tracking-[0.18em] font-bold">
        <button
          type="button"
          onClick={() => { setAuthModalTab('login'); setErrorMsg(''); }}
          className={`flex-1 pb-3 text-center transition-colors relative ${
            authModalTab === 'login'
              ? 'text-[#1F1C17] border-b-2 border-[#C5A25D]'
              : 'text-[#97958F] hover:text-[#1F1C17]'
          }`}
        >
          ĐĂNG NHẬP
        </button>
        <button
          type="button"
          onClick={() => { setAuthModalTab('register'); setErrorMsg(''); }}
          className={`flex-1 pb-3 text-center transition-colors relative ${
            authModalTab === 'register'
              ? 'text-[#1F1C17] border-b-2 border-[#C5A25D]'
              : 'text-[#97958F] hover:text-[#1F1C17]'
          }`}
        >
          TẠO TÀI KHOẢN MỚI
        </button>
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 border border-[#BE2F31] bg-[#BE2F31]/10 text-[#BE2F31] text-xs flex items-center gap-2">
          <AlertCircle size={15} />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="mb-4 p-3 border border-[#7BAD34] bg-[#7BAD34]/10 text-[#7BAD34] text-xs flex items-center gap-2 font-medium">
          <CheckCircle2 size={15} />
          <span>{successMsg}</span>
        </div>
      )}

      {authModalTab === 'login' ? (
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
              Địa chỉ Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#97958F]" size={15} />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="vidu@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
              Mật khẩu *
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#97958F]" size={15} />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#666055]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#C5A25D]" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <span className="hover:text-[#1F1C17] cursor-pointer">Quên mật khẩu?</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 button-cocoon-dark text-xs tracking-[0.2em] font-bold mt-2"
          >
            {loading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG NHẬP VÀO GACO'}
          </button>

          <p className="text-center text-xs text-[#666055] mt-4">
            Chưa có tài khoản?{' '}
            <button
              type="button"
              onClick={() => setAuthModalTab('register')}
              className="font-bold text-[#1F1C17] hover:text-[#C5A25D] underline"
            >
              Đăng ký ngay nhận Voucher 149K
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
              Họ và tên thành viên *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#97958F]" size={15} />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Nguyễn Phương Thảo"
                className="w-full pl-10 pr-4 py-2 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="thao@gmail.com"
                className="w-full px-3 py-2 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
                Số điện thoại *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="0988..."
                className="w-full px-3 py-2 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1">
              Mật khẩu đăng nhập *
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Tối thiểu 6 ký tự"
              className="w-full px-3 py-2 border border-[#E7E5DF] bg-[#FEFBF4] text-xs sm:text-sm text-[#1F1C17] focus:border-[#C5A25D] outline-none transition-colors"
            />
          </div>

          {/* Persona Selection (SOSTAC Tailored Audience) */}
          <div className="pt-1">
            <label className="block text-xs font-condensed uppercase tracking-wider font-bold text-[#1F1C17] mb-1.5">
              Nhóm nhu cầu của bạn (để nhận voucher cá nhân):
            </label>
            <div className="space-y-2">
              <label className={`flex items-center gap-3 p-2.5 border text-xs cursor-pointer transition-colors ${
                formData.persona === 'student'
                  ? 'border-[#C5A25D] bg-[#C5A25D]/10 font-semibold text-[#1F1C17]'
                  : 'border-[#E7E5DF] bg-[#FEFBF4] hover:bg-[#F4EFE6] text-[#666055]'
              }`}>
                <input
                  type="radio"
                  name="persona"
                  value="student"
                  checked={formData.persona === 'student'}
                  onChange={handleChange}
                  className="accent-[#C5A25D]"
                />
                <span>Học sinh – Sinh viên (Trị thâm môi học đường, giá ưu đãi)</span>
              </label>

              <label className={`flex items-center gap-3 p-2.5 border text-xs cursor-pointer transition-colors ${
                formData.persona === 'mom'
                  ? 'border-[#7BAD34] bg-[#7BAD34]/10 font-semibold text-[#1F1C17]'
                  : 'border-[#E7E5DF] bg-[#FEFBF4] hover:bg-[#F4EFE6] text-[#666055]'
              }`}>
                <input
                  type="radio"
                  name="persona"
                  value="mom"
                  checked={formData.persona === 'mom'}
                  onChange={handleChange}
                  className="accent-[#7BAD34]"
                />
                <span>Mẹ bầu &amp; Clean Beauty (Yêu cầu 0% chì, 100% an toàn)</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 button-cocoon-gold text-xs tracking-[0.2em] font-bold mt-3"
          >
            {loading ? 'ĐANG TẠO HỒ SƠ...' : 'HOÀN TẤT ĐĂNG KÝ & NHẬN VOUCHER'}
          </button>

          <p className="text-center text-xs text-[#666055] mt-2">
            Đã có tài khoản?{' '}
            <button
              type="button"
              onClick={() => setAuthModalTab('login')}
              className="font-bold text-[#1F1C17] hover:text-[#C5A25D] underline"
            >
              Đăng nhập ngay
            </button>
          </p>
        </form>
      )}
    </Modal>
  );
};
