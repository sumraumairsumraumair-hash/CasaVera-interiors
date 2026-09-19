import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = false,
}) => {
  const isDark = variant === 'dark';

  return (
    <a
      href="#top"
      id="brand-logo-link"
      className={`group flex items-center gap-3 tracking-tight transition-opacity hover:opacity-95 ${className}`}
      aria-label="CasaVera Interiors - Home"
    >
      {/* Original Architectural Monogram Logo Mark */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3A2A20] text-[#EDE8DF] shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {/* Subtle architectural pediment and arch */}
          <path
            d="M8 26V13L18 7L28 13V26"
            stroke="#EDE8DF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Terracotta interior pillar & hearth line */}
          <path
            d="M18 14V26"
            stroke="#E58B4D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Cross threshold foundation */}
          <path
            d="M12 26H24"
            stroke="#EDE8DF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif-heading text-xl font-semibold tracking-[0.04em] leading-none ${
            isDark ? 'text-[#20242A]' : 'text-[#FFFFFF]'
          }`}
        >
          CasaVera
        </span>
        <span
          className={`text-[10.5px] font-medium uppercase tracking-[0.24em] mt-1 ${
            isDark ? 'text-[#6F706F]' : 'text-[#EDE8DF]/75'
          }`}
        >
          Interiors
        </span>
        {showTagline && (
          <span
            className={`text-[9px] tracking-wider mt-0.5 ${
              isDark ? 'text-[#6F706F]/80' : 'text-[#EDE8DF]/60'
            }`}
          >
            Studio & Atelier
          </span>
        )}
      </div>
    </a>
  );
};
