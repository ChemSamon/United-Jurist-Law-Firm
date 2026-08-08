import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'header' | 'footer' | 'mobile';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'header', className = '' }) => {
  const logoUrl = 'https://www.unitedjuristlaw.com/_next/image?url=%2Fujl-logo.png&w=640&q=75';

  return (
    <Link
      to="/"
      className={`inline-flex items-center shrink-0 group transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      <img
        src={logoUrl}
        alt="United Jurist Law Firm | ក្រុមហ៊ុនមេធាវី យូណាយធីត ជូរីស"
        className={`object-contain transition-transform group-hover:scale-[1.02] ${
          variant === 'footer'
            ? 'h-14 sm:h-16 w-auto'
            : variant === 'mobile'
            ? 'h-10 w-auto'
            : 'h-12 sm:h-14 w-auto'
        }`}
        loading="eager"
      />
    </Link>
  );
};
