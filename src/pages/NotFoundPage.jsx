import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { SEO } from '../utils/seo';

export const NotFoundPage = () => {
  return (
    <>
      <SEO title="404 – Không Tìm Thấy Trang – Gaco Vietnam" />
      <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 bg-[#FEFBF4] px-4">
        <div className="text-center max-w-md mx-auto space-y-6">
          <span className="text-xs font-condensed uppercase tracking-[0.25em] text-[#C5A25D] font-bold">
            THÔNG BÁO LỖI
          </span>
          <div className="text-7xl sm:text-8xl font-heading font-medium text-[#1F1C17]">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-medium text-[#1F1C17]">
            Không Tìm Thấy Trang Này
          </h1>
          <p className="text-xs sm:text-sm text-[#666055] font-light leading-relaxed">
            Đường dẫn có thể đã thay đổi hoặc trang web đang được cập nhật. Mời bạn trở về trang chủ để khám phá các sản phẩm son dưỡng thuần chay từ gấc.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 button-cocoon-gold text-xs tracking-[0.2em]"
            >
              <Home size={14} />
              <span>VỀ TRANG CHỦ GACO</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
