import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className }: BadgeProps) => {
  const variants = {
    primary: 'bg-[#008061]/10 text-[#008061]',
    secondary: 'bg-[#FF6B00]/10 text-[#FF6B00]',
    outline: 'border border-gray-200 text-gray-500',
  };

  return (
    <span className={cn(
      'px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
