// Design tokens for KYC flow
// These map to tailwind.config.js theme extension

export const colors = {
  bg: '#0a0a0a',
  surface: '#1a1a1a',
  surface2: '#2a2a2a',
  border: '#333333',
  text: '#e5e5e5',
  muted: '#a3a3a3',
  primary: '#4a90e2',
  primaryHover: '#5a9ee8',
  focusRing: 'rgba(74, 144, 226, 0.4)',
} as const;

export const typography = {
  fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '24px',
  },
  lineHeight: {
    xs: '16px',
    sm: '20px',
    base: '24px',
    lg: '28px',
    xl: '32px',
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
} as const;

export const radii = {
  sm: '4px',
  md: '8px',
  lg: '12px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
  md: '0 2px 8px rgba(0, 0, 0, 0.3)',
  lg: '0 4px 16px rgba(0, 0, 0, 0.4)',
} as const;
