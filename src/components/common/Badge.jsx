import React from 'react';

export const Badge = ({
  children,
  variant = 'gold', // 'gold' | 'dark' | 'vegan' | 'sale' | 'neutral' | 'primary' | 'secondary'
  className = ''
}) => {
  const variantStyles = {
    ruby: 'border border-[#9E2A2B] text-[#9E2A2B] bg-[#9E2A2B]/10',
    gold: 'border border-[#C5A25D] text-[#8C6F2E] bg-[#C5A25D]/10',
    primary: 'border border-[#9E2A2B] text-[#9E2A2B] bg-[#9E2A2B]/10',
    dark: 'bg-[#1F1C17] text-[#FEFBF4]',
    secondary: 'bg-[#1F1C17] text-[#FEFBF4]',
    vegan: 'bg-[#7BAD34] text-white',
    sale: 'bg-[#9E2A2B] text-white',
    neutral: 'border border-[#E7E5DF] text-[#666055] bg-[#F4EFE6]'
  };

  const currentStyle = variantStyles[variant] || variantStyles.gold;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-condensed uppercase tracking-[0.18em] font-bold rounded-none ${currentStyle} ${className}`}>
      {children}
    </span>
  );
};
