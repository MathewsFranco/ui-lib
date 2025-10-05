import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    // Layered surfaces
    background: 'linear-gradient(135deg, #f5f6f8 0%, #e6e8ec 100%)',
    surface: 'rgba(255, 255, 255, 0.65)',
    surfaceAlt: 'rgba(255, 255, 255, 0.4)',
    border: 'rgba(255, 255, 255, 0.25)',
    shadow: 'rgba(0, 0, 0, 0.08)',

    // Text
    text: '#1c1c1e',
    textSubtle: 'rgba(28, 28, 30, 0.6)',
    invertedText: '#ffffff',

    // Accent and states
    accent: '#007aff',
    accentHover: '#0060df',
    success: '#34c759',
    warning: '#ffcc00',
    danger: '#ff3b30',
  },

  blur: {
    glass: 'backdrop-filter: blur(20px) saturate(180%)',
  },

  radius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '32px',
  },

  font: {
    family: `'SF Pro Text', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    size: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '22px',
      display: '32px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      base: 1.4,
      relaxed: 1.6,
    },
  },

  motion: {
    easing: 'cubic-bezier(0.32, 0.72, 0, 1)',
    duration: {
      fast: '120ms',
      normal: '200ms',
      slow: '300ms',
    },
  },

  shadow: {
    soft: '0 2px 12px rgba(0, 0, 0, 0.08)',
    inset: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  },
};
