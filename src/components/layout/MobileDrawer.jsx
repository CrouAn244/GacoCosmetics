import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronRight, User, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';

export const MobileDrawer = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, currentUser, openAuthModal, logout } = useAuth();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(nextLang);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Cocoon Sliding Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-full max-w-sm bg-[#FEFBF4] p-6 flex flex-col justify-between shadow-2xl border-r border-[#E7E5DF] overflow-y-auto"
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E5DF]">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Đóng menu"
                  className="p-1 text-[#1F1C17] hover:text-[#C5A25D]"
                >
                  <X size={24} />
                </button>

                <div className="font-heading font-bold text-xl tracking-[0.2em] text-[#1F1C17]">
                  GACO
                </div>

                {isAuthenticated ? (
                  <NavLink to="/account" onClick={onClose} className="p-1 text-[#C5A25D]">
                    <User size={20} />
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    onClick={() => { onClose(); openAuthModal('login'); }}
                    className="p-1 text-[#1F1C17]"
                  >
                    <User size={20} />
                  </button>
                )}
              </div>

              {/* Cocoon Search Input Bar */}
              <div className="mt-5 pb-2 border-b border-[#E7E5DF] flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm, bài viết..."
                  className="w-full bg-transparent text-sm placeholder-[#97958F] text-[#1F1C17] focus:outline-none"
                />
                <Search size={16} className="text-[#97958F]" />
              </div>

              {/* Navigation Links (Cocoon exact list) */}
              <nav className="mt-6 space-y-4">
                <div>
                  <NavLink
                    to="/product"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-xl font-heading font-bold text-[#1F1C17] hover:text-[#C5A25D]"
                  >
                    <span>Sản phẩm</span>
                    <ChevronRight size={18} className="text-[#97958F]" />
                  </NavLink>
                  <div className="pl-3 py-1 space-y-2 text-sm text-[#97958F]">
                    <NavLink to="/product" onClick={onClose} className="block hover:text-[#1F1C17]">
                      • Son Dưỡng Gấc &amp; Dừa (79.000đ)
                    </NavLink>
                    <NavLink to="/product" onClick={onClose} className="block hover:text-[#1F1C17]">
                      • Combo Sinh Viên &amp; Mẹ Bầu (149.000đ)
                    </NavLink>
                  </div>
                </div>

                <div className="border-t border-[#E7E5DF]/60 pt-2">
                  <NavLink
                    to="/ingredients"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-xl font-heading font-bold text-[#1F1C17] hover:text-[#C5A25D]"
                  >
                    <span>Tìm hiểu nguyên liệu</span>
                    <ChevronRight size={18} className="text-[#97958F]" />
                  </NavLink>
                </div>

                <div className="border-t border-[#E7E5DF]/60 pt-2">
                  <NavLink
                    to="/about"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-xl font-heading font-bold text-[#1F1C17] hover:text-[#C5A25D]"
                  >
                    <span>Câu chuyện thương hiệu</span>
                    <ChevronRight size={18} className="text-[#97958F]" />
                  </NavLink>
                </div>

                <div className="border-t border-[#E7E5DF]/60 pt-2">
                  <NavLink
                    to="/blog"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-xl font-heading font-bold text-[#1F1C17] hover:text-[#C5A25D]"
                  >
                    <span>Bài viết</span>
                    <ChevronRight size={18} className="text-[#97958F]" />
                  </NavLink>
                </div>

                <div className="border-t border-[#E7E5DF]/60 pt-2">
                  <NavLink
                    to="/contact"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-xl font-heading font-bold text-[#1F1C17] hover:text-[#C5A25D]"
                  >
                    <span>Liên hệ</span>
                    <ChevronRight size={18} className="text-[#97958F]" />
                  </NavLink>
                </div>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#E7E5DF] space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#97958F]">Ngôn ngữ / Language:</span>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="font-bold uppercase text-[#1F1C17] hover:text-[#C5A25D] px-2 py-1 border border-[#E7E5DF]"
                >
                  {i18n.language === 'vi' ? 'EN' : 'VI'}
                </button>
              </div>

              {isAuthenticated ? (
                <div className="space-y-2">
                  <NavLink
                    to="/account"
                    onClick={onClose}
                    className="w-full block text-center py-2.5 bg-[#1F1C17] text-[#FEFBF4] text-xs font-condensed uppercase tracking-wider font-bold"
                  >
                    Tài khoản: {currentUser.name}
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => { logout(); onClose(); }}
                    className="w-full text-center text-xs text-red-700 underline"
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => { onClose(); openAuthModal('login'); }}
                  className="w-full py-2.5 border border-[#1F1C17] text-[#1F1C17] text-xs font-condensed uppercase tracking-wider font-bold hover:bg-[#1F1C17] hover:text-[#FEFBF4] transition-colors"
                >
                  ĐĂNG NHẬP / ĐĂNG KÝ
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
