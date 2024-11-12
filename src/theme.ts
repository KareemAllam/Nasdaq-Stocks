import { TextStyle } from 'react-native';

// theme.ts
export const theme = {
  colors: {
    background: {
      primary: '#1f2130',
      secondary: '#23263a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaebd',
      placeholder: '#585c6f',
    },
    border: '#2f3143',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
  },
  fontSize: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
  fontWeight: {
    regular: 400,
    bold: 700,
  } as Record<string, TextStyle['fontWeight']>,
};
