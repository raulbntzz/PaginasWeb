import { useState } from 'react';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export default function AnimatedButton({ href, children, variant = 'primary', size = 'md' }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    primary: { bg: 'linear-gradient(135deg, #0066CC 0%, #0052a3 100%)', shadow: '#0066CC' },
    secondary: { bg: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)', shadow: '#4299e1' },
    success: { bg: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)', shadow: '#48bb78' },
    danger: { bg: 'linear-gradient(135deg, #f56565 0%, #e53e3e 100%)', shadow: '#f56565' }
  };

  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.875rem' },
    md: { padding: '12px 24px', fontSize: '1rem' },
    lg: { padding: '14px 32px', fontSize: '1.125rem' }
  };

  const color = colors[variant];
  const sizeStyle = sizes[size];

  return (
    <a
      href={href}
      className="animated-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: color.bg,
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? `0 8px 24px ${color.shadow}40` 
          : `0 4px 12px ${color.shadow}20`
      }}
    >
      <span style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}>
        {children}
      </span>

      <style>{`
        .animated-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .animated-button span {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .animated-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .animated-button:hover::before {
          opacity: 1;
        }

        .animated-button:active {
          transform: translateY(0) scale(0.98);
        }
      `}</style>
    </a>
  );
}
