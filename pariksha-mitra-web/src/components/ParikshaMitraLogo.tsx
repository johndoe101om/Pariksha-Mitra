import React from 'react';

interface LogoProps {
  layout?: 'horizontal' | 'vertical' | 'emblem-only' | 'badge';
  theme?: 'dark' | 'light' | 'auto'; // dark = for light background (navy text), light = for dark background (white text)
  height?: number | string;
  className?: string;
  showSubtitle?: boolean;
}

export const ParikshaMitraLogo: React.FC<LogoProps> = ({
  layout = 'horizontal',
  theme = 'dark',
  height = 44,
  className = '',
  showSubtitle = true
}) => {
  const isLightOnDark = theme === 'light';

  // Primary colors based on theme
  const primaryColor = isLightOnDark ? '#FFFFFF' : '#002B7F';
  const subtitleColor = isLightOnDark ? '#93C5FD' : '#0033A0';
  const chakraColor = isLightOnDark ? '#60A5FA' : '#002B7F';
  const bookColor = '#FE6500'; // Saffron
  const capColor = isLightOnDark ? '#FFFFFF' : '#002B7F';
  const capBorder = isLightOnDark ? '#60A5FA' : '#FE6500';

  // 24 Spokes calculation
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    return (
      <line
        key={i}
        x1="50"
        y1="50"
        x2="50"
        y2="16"
        stroke={chakraColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        transform={`rotate(${angle} 50 50)`}
      />
    );
  });

  // Emblem Vector SVG (100x100 ViewBox)
  const EmblemSvg = (
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Chakra Ring */}
      <circle cx="50" cy="46" r="38" stroke={chakraColor} strokeWidth="5.5" fill="none" />
      <circle cx="50" cy="46" r="32" stroke={chakraColor} strokeWidth="1.5" fill="none" opacity="0.7" />
      
      {/* Chakra Center Hub */}
      <circle cx="50" cy="46" r="7" fill={chakraColor} />
      <circle cx="50" cy="46" r="3" fill={isLightOnDark ? '#00216E' : '#FFFFFF'} />

      {/* 24 Spokes */}
      <g transform="translate(0, -4)">
        {spokes}
      </g>

      {/* Open Book Pages (Saffron) */}
      <path
        d="M12 76 C28 70, 45 72, 50 80 C55 72, 72 70, 88 76 C72 68, 55 70, 50 76 C45 70, 28 68, 12 76 Z"
        fill={bookColor}
      />
      <path
        d="M10 82 C26 75, 44 77, 50 85 C56 77, 74 75, 90 82 C74 74, 56 76, 50 82 C44 76, 26 74, 10 82 Z"
        fill={bookColor}
        opacity="0.85"
      />
      <path
        d="M14 88 C30 81, 46 83, 50 90 C54 83, 70 81, 86 88 C70 81, 54 83, 50 88 C46 83, 30 81, 14 88 Z"
        fill={bookColor}
        opacity="0.6"
      />

      {/* Graduation Cap (Mortarboard) on the bottom right */}
      <g transform="translate(46, 50) scale(0.50)">
        {/* Diamond Cap Top */}
        <polygon points="50,15 90,35 50,55 10,35" fill={capColor} stroke={isLightOnDark ? '#FFFFFF' : '#002B7F'} strokeWidth="3.5" />
        {/* Cap Base / Skullcap */}
        <path d="M25 43 L25 58 C25 72, 75 72, 75 58 L75 43" fill={capColor} stroke={capBorder} strokeWidth="3.5" />
        {/* Tassel */}
        <path d="M50 35 L82 45 L84 65" stroke={capBorder} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <circle cx="84" cy="67" r="4" fill={capBorder} />
      </g>
    </svg>
  );

  if (layout === 'emblem-only') {
    return (
      <div className={`pariksha-logo-emblem ${className}`} style={{ height, width: height, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {EmblemSvg}
      </div>
    );
  }

  if (layout === 'vertical') {
    const numH = typeof height === 'number' ? height : parseInt(height, 10) || 80;
    const emblemH = Math.round(numH * 0.65);
    return (
      <div 
        className={`pariksha-logo-vertical ${className}`} 
        style={{ 
          display: 'inline-flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: '8px',
          userSelect: 'none'
        }}
      >
        <div style={{ width: `${emblemH}px`, height: `${emblemH}px` }}>
          {EmblemSvg}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span 
            style={{ 
              color: primaryColor, 
              fontWeight: 800, 
              fontSize: `${Math.round(emblemH * 0.32)}px`, 
              letterSpacing: '-0.3px',
              lineHeight: 1.2,
              fontFamily: "'Noto Sans', sans-serif"
            }}
          >
            Pariksha Mitra
          </span>
          {showSubtitle && (
            <span 
              style={{ 
                color: subtitleColor, 
                fontWeight: 600, 
                fontSize: `${Math.max(11, Math.round(emblemH * 0.18))}px`, 
                letterSpacing: '0.2px',
                marginTop: '2px',
                fontFamily: "'Noto Sans', sans-serif"
              }}
            >
              Ministry of Education
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Layout
  const numHeight = typeof height === 'number' ? height : parseInt(height, 10) || 44;
  const titleSize = Math.max(16, Math.round(numHeight * 0.44));
  const subSize = Math.max(11, Math.round(numHeight * 0.26));

  return (
    <div 
      className={`pariksha-logo-horizontal ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: `${Math.round(numHeight * 0.28)}px`,
        height: height,
        userSelect: 'none'
      }}
    >
      <div style={{ height: '100%', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {EmblemSvg}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span 
          style={{ 
            color: primaryColor, 
            fontWeight: 800, 
            fontSize: `${titleSize}px`, 
            letterSpacing: '-0.3px',
            lineHeight: 1.15,
            fontFamily: "'Noto Sans', sans-serif",
            whiteSpace: 'nowrap'
          }}
        >
          Pariksha Mitra
        </span>
        {showSubtitle && (
          <span 
            style={{ 
              color: subtitleColor, 
              fontWeight: 600, 
              fontSize: `${subSize}px`, 
              letterSpacing: '0.2px',
              marginTop: '1px',
              fontFamily: "'Noto Sans', sans-serif",
              whiteSpace: 'nowrap'
            }}
          >
            Ministry of Education
          </span>
        )}
      </div>
    </div>
  );
};
export default ParikshaMitraLogo;
