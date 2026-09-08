import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BlogCard = ({ article }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const title = isEn ? (article.titleEn || article.titleVi) : article.titleVi;
  const category = isEn ? (article.categoryEn || article.categoryVi) : article.categoryVi;
  const summary = isEn ? (article.summaryEn || article.summaryVi) : article.summaryVi;

  return (
    <article className="border border-[#E7E5DF] bg-[#FEFBF4] hover:border-[#C5A25D] transition-all flex flex-col justify-between group">
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-condensed uppercase tracking-[0.18em] text-[#C5A25D] font-bold">
            {category}
          </span>
          <div className="flex items-center gap-1 text-[#97958F] text-[11px] font-light">
            <Clock size={12} />
            <span>{article.readTime || '4 phút đọc'}</span>
          </div>
        </div>

        <Link to={`/blog#${article.id}`}>
          <h3 className="text-base font-heading font-medium text-[#1F1C17] group-hover:text-[#8C6F2E] transition-colors leading-snug line-clamp-2">
            {title}
          </h3>
        </Link>

        {summary && (
          <p className="text-xs text-[#666055] font-light leading-relaxed line-clamp-3">
            {summary}
          </p>
        )}
      </div>

      <div className="px-6 py-3 border-t border-[#E7E5DF] bg-[#F4EFE6] flex items-center justify-between text-xs font-condensed uppercase tracking-[0.15em] font-bold text-[#1F1C17]">
        <span>ĐỌC CHI TIẾT</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  );
};
