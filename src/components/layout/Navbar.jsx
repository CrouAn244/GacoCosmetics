import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { LangToggle } from '../common/LangToggle';
import { UserMenu } from '../auth/UserMenu';
import { MobileDrawer } from './MobileDrawer';

export const Navbar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, openAuthModal } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Gaco & Cocoon Announcement Bar with Persona Switcher */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1F1C17] text-[#FEFBF4] text-[11px] sm:text-xs tracking-wider py-1.5 px-4 font-body border-b border-[#38342E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 truncate">
            <span className="font-medium truncate">
              Freeship toàn quốc từ 149.000 đ • 100% Thuần chay từ nông sản Việt
            </span>
            <span className="hidden lg:inline text-[#C5A25D]">•</span>
            <span className="hidden lg:inline text-[#FEFBF4]/85">
              Kiểm nghiệm Quatest 3 không chì
            </span>
          </div>

          {/* Gaco Persona Quick Switcher - Unique Gaco Feature */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-condensed uppercase tracking-wider shrink-0">
            <span className="text-[#97958F]">Đặc quyền:</span>
            <Link
              to="/account"
              className="px-2 py-0.5 border border-[#C5A25D] text-[#C5A25D] hover:bg-[#C5A25D] hover:text-[#1F1C17] transition-colors font-bold"
            >
              🎓 Sinh Viên (79K)
            </Link>
            <Link
              to="/account"
              className="px-2 py-0.5 border border-[#7BAD34] text-[#7BAD34] hover:bg-[#7BAD34] hover:text-white transition-colors font-bold"
            >
              🌿 Mẹ Bầu (0% Chì)
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-[28px] sm:top-[31px] left-0 right-0 z-40 bg-[#FEFBF4] transition-all duration-300 border-b border-[#E7E5DF] ${
          scrolled ? 'py-2.5 shadow-xs' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 flex items-center justify-between">
          
          {/* Desktop Left Menu (Cocoon Style) */}
          <div className="hidden lg:flex items-center gap-7 flex-1">
            <Link to="/search" className="text-[#1F1C17] hover:text-[#9E2A2B] transition-colors p-1" aria-label="Tìm kiếm">
              <Search size={18} strokeWidth={2} />
            </Link>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                `font-condensed text-lg uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#9E2A2B] font-bold' : 'text-[#1F1C17] hover:text-[#9E2A2B] font-semibold'
                }`
              }
            >
              Sản phẩm
            </NavLink>

            <NavLink
              to="/ingredients"
              className={({ isActive }) =>
                `font-condensed text-lg uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#9E2A2B] font-bold' : 'text-[#1F1C17] hover:text-[#9E2A2B] font-semibold'
                }`
              }
            >
              Tìm hiểu nguyên liệu
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-condensed text-lg uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#9E2A2B] font-bold' : 'text-[#1F1C17] hover:text-[#9E2A2B] font-semibold'
                }`
              }
            >
              Câu chuyện thương hiệu
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-condensed text-lg uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#9E2A2B] font-bold' : 'text-[#1F1C17] hover:text-[#9E2A2B] font-semibold'
                }`
              }
            >
              Bài viết
            </NavLink>
          </div>

          {/* Mobile Left Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Mở menu"
              className="p-1.5 text-[#1F1C17] hover:text-[#9E2A2B]"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Center Brand Logo - Gaco Bespoke Botanical Emblem */}
          <div className="flex justify-center items-center">
            <Link to="/" className="flex flex-col items-center group">
              <div className="flex items-center gap-1 mb-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9E2A2B] group-hover:scale-110 transition-transform">
                  <path d="M12 2C12 2 5 9.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 9.5 12 2 12 2Z" fill="#9E2A2B" stroke="#C5A25D" strokeWidth="1.2" />
                  <circle cx="12" cy="15" r="3.5" fill="#FEFBF4" />
                  <circle cx="12" cy="15" r="1.8" fill="#9E2A2B" />
                </svg>
              </div>
              <span className="font-heading text-3xl sm:text-4xl font-bold tracking-[0.22em] text-[#1F1C17] group-hover:text-[#9E2A2B] transition-colors leading-none">
                GACO
              </span>
              <span className="font-condensed text-[9px] uppercase tracking-[0.35em] text-[#9E2A2B] font-bold mt-1">
                ORIGINAL VIETNAM
              </span>
            </Link>
          </div>

          {/* Desktop Right Controls */}
          <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-condensed text-lg uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#9E2A2B] font-bold' : 'text-[#1F1C17] hover:text-[#9E2A2B] font-semibold'
                }`
              }
            >
              Liên hệ
            </NavLink>

            <LangToggle />

            {/* Auth / Account */}
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <button
                type="button"
                onClick={() => openAuthModal('login')}
                className="text-[#1F1C17] hover:text-[#9E2A2B] transition-colors p-1"
                aria-label="Tài khoản"
              >
                <User size={19} strokeWidth={2} />
              </button>
            )}

            {/* Cart Icon with Gaco Ruby badge */}
            <Link
              to="/product"
              className="relative text-[#1F1C17] hover:text-[#9E2A2B] transition-colors p-1"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag size={20} strokeWidth={2} />
              <span className="absolute -top-1 -right-1.5 bg-[#9E2A2B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="lg:hidden flex items-center gap-3">
            <Link to="/product" className="relative text-[#1F1C17] p-1">
              <ShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-[#C5A25D] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </Link>
          </div>

        </div>
      </header>

      {/* Mobile Side Drawer */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};
