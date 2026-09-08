import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'gold', // 'gold' | 'dark' | 'outline' | 'outline-gold' | 'ghost' | 'primary' | 'secondary'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-condensed uppercase tracking-[0.15em] font-bold rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const variantClasses = {
    ruby: 'bg-[#9E2A2B] hover:bg-[#7C1D1E] text-[#FEFBF4]',
    'outline-ruby': 'border border-[#9E2A2B] text-[#9E2A2B] hover:bg-[#9E2A2B] hover:text-[#FEFBF4]',
    gold: 'bg-[#C5A25D] hover:bg-[#8C6F2E] text-[#FEFBF4]',
    primary: 'bg-[#9E2A2B] hover:bg-[#7C1D1E] text-[#FEFBF4]',
    dark: 'bg-[#1F1C17] hover:bg-[#38342E] text-[#FEFBF4]',
    secondary: 'bg-[#1F1C17] hover:bg-[#38342E] text-[#FEFBF4]',
    outline: 'border border-[#1F1C17] text-[#1F1C17] hover:bg-[#1F1C17] hover:text-[#FEFBF4]',
    'outline-gold': 'border border-[#C5A25D] text-[#C5A25D] hover:bg-[#C5A25D] hover:text-[#FEFBF4]',
    ghost: 'text-[#1F1C17] dark:text-[#FEFBF4] hover:bg-black/5 dark:hover:bg-white/5',
  };

  const currentVariant = variantClasses[variant] || variantClasses.ruby;

  return (
    <motion.button
      type={type}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${currentVariant} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </motion.button>
  );
};
