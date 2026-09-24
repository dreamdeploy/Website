import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showTagline?: boolean;
  theme?: 'dark' | 'light';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  theme = 'dark',
  onClick
}) => {
  // Dimension mappings ensuring exact square / proportional aspect ratio
  const sizeMap = {
    sm: { container: 'h-9', img: 'h-8 w-8', text: 'text-base', tag: 'text-[9px]' },
    md: { container: 'h-11', img: 'h-10 w-10', text: 'text-lg', tag: 'text-[10px]' },
    lg: { container: 'h-14', img: 'h-12 w-12', text: 'text-2xl', tag: 'text-xs' },
    xl: { container: 'h-20', img: 'h-16 w-16', text: 'text-3xl', tag: 'text-sm' },
    hero: { container: 'h-28', img: 'h-24 w-24', text: 'text-4xl', tag: 'text-base' }
  };

  const currentSize = sizeMap[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none transition-transform duration-300 group ${onClick ? 'cursor-pointer' : ''} ${className}`}
      title="DreamDeploy — Ideas to Impact"
    >
      {/* Exact Official Logo Emblem Icon */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <div className="relative rounded-xl overflow-hidden p-0.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(126,87,194,0.4)]">
          <img
            src="/images/dreamdeploy-logo.png"
            alt="DreamDeploy Logo"
            className={`${currentSize.img} object-contain rounded-lg transition-transform duration-500 group-hover:scale-105`}
            loading="eager"
          />
        </div>
      </div>

      {/* Brand Wordmark matching exact typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-0.5 tracking-tight font-semibold leading-none">
          <span className={theme === 'dark' ? 'text-white' : 'text-[#13131A]'}>
            Dream
          </span>
          <span className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7E57C2] bg-clip-text text-transparent">
            Deploy
          </span>
          <span className={`text-[9px] font-normal tracking-widest ml-0.5 opacity-60 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
            ™
          </span>
        </div>

        {showTagline && (
          <span className={`font-code tracking-[0.25em] uppercase font-medium mt-1 ${currentSize.tag} ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
            IDEAS TO IMPACT
          </span>
        )}
      </div>
    </div>
  );
};
