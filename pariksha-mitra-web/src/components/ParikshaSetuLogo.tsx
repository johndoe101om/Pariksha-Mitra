import React from 'react';

interface LogoProps {
  layout?: 'horizontal' | 'vertical' | 'emblem-only' | 'badge';
  theme?: 'dark' | 'light' | 'auto';
  height?: number | string;
  className?: string;
  showSubtitle?: boolean;
}

export const ParikshaSetuLogo: React.FC<LogoProps> = ({
  layout = 'horizontal',
  theme = 'dark',
  height = 44,
  className = '',
  showSubtitle = true
}) => {
  const isLightOnDark = theme === 'light';

  const primaryColor = isLightOnDark ? '#FFFFFF' : '#002B7F';
  const subtitleColor = isLightOnDark ? '#93C5FD' : '#0033A0';
  const chakraColor = isLightOnDark ? '#60A5FA' : '#002B7F';

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

  const EmblemSvg = (
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="46" r="38" stroke={chakraColor} strokeWidth="5.5" fill="none" />
      <circle cx="50" cy="46" r="32" stroke={chakraColor} strokeWidth="1.5" fill="none" opacity="0.7" />
      
      <circle cx="50" cy="46" r="7" fill={chakraColor} />
      <circle cx="50" cy="46" r="3" fill={isLightOnDark ? '#00216E' : '#FFFFFF'} />

      <g transform="translate(0, -4)">
        {spokes}
      </g>

      <path
        d="M20 72 Q 50 63 80 72 L 77 86 Q 50 78 23 86 Z"
        fill="#FE6500"
      />
      <path
        d="M23 86 Q 50 78 77 86 L 75 92 Q 50 84 25 92 Z"
        fill={isLightOnDark ? '#93C5FD' : '#002B7F'}
        opacity="0.9"
      />
      <path
        d="M50 68 L 50 89"
        stroke="#FFFFFF"
        strokeWidth="2"
      />

      <polygon
        points="50,18 72,28 50,38 28,28"
        fill={isLightOnDark ? '#FFFFFF' : '#002B7F'}
        stroke={isLightOnDark ? '#60A5FA' : '#FE6500'}
        strokeWidth="1.5"
      />
      <path
        d="M36 33 L 36 44 Q 50 50 64 44 L 64 33"
        fill={isLightOnDark ? '#FFFFFF' : '#002B7F'}
      />
      <path
        d="M72 28 L 74 38 L 76 43"
        stroke="#FE6500"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="76" cy="44" r="1.8" fill="#FE6500" />
    </svg>
  );

  if (layout === 'emblem-only') {
    return (
      <div 
        className={`pariksha-logo-emblem ${className}`} 
        style={{ width: height, height: height, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {EmblemSvg}
      </div>
    );
  }

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
          ParikshaSetu
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

export default ParikshaSetuLogo;
