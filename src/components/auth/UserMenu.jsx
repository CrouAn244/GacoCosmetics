import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { User, LogOut, Award, Gift, ChevronDown } from 'lucide-react';

export const UserMenu = () => {
  const { t } = useTranslation();
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!currentUser) return null;

  const initials = currentUser.name
    ? currentUser.name.slice(0, 2).toUpperCase()
    : 'GC';

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 border border-[#E7E5DF] bg-[#FEFBF4] hover:border-[#1F1C17] transition-colors text-xs font-condensed uppercase tracking-wider font-bold"
      >
        <span className="w-5 h-5 bg-[#C5A25D] text-[#FEFBF4] font-bold text-[10px] flex items-center justify-center">
          {initials}
        </span>
        <span className="hidden sm:inline-block max-w-[100px] truncate text-[#1F1C17]">
          {currentUser.name}
        </span>
        <ChevronDown size={12} className={`text-[#97958F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-[#FEFBF4] border border-[#E7E5DF] shadow-xl py-2 z-50 text-xs font-condensed uppercase tracking-wider">
          <div className="px-4 py-3 border-b border-[#E7E5DF]">
            <p className="font-heading font-medium text-sm text-[#1F1C17] capitalize tracking-normal truncate">
              {currentUser.name}
            </p>
            <p className="text-[11px] text-[#97958F] truncate lowercase tracking-normal">{currentUser.email}</p>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#C5A25D] font-bold">
              <Award size={13} />
              <span>Gaco Green Circle ({currentUser.points || 200} điểm)</span>
            </div>
          </div>

          <Link
            to="/account"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-[#1F1C17] hover:bg-[#F4EFE6] transition-colors"
          >
            <User size={14} />
            <span>TÀI KHOẢN CỦA TÔI</span>
          </Link>

          <Link
            to="/account#vouchers"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-[#1F1C17] hover:bg-[#F4EFE6] transition-colors"
          >
            <Gift size={14} />
            <span>VOUCHER ƯU ĐÃI ({(currentUser.vouchers || []).length})</span>
          </Link>

          <div className="pt-1 mt-1 border-t border-[#E7E5DF]">
            <button
              type="button"
              onClick={() => {
                logout();
                setIsOpen(false);
                navigate('/');
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[#BE2F31] hover:bg-[#BE2F31]/10 transition-colors text-left font-bold"
            >
              <LogOut size={14} />
              <span>ĐĂNG XUẤT</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
