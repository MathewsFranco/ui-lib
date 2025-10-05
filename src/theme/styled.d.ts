// src/theme/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      surfaceAlt: string;
      border: string;
      shadow: string;
      text: string;
      textSubtle: string;
      invertedText: string;
      accent: string;
      accentHover: string;
      success: string;
      warning: string;
      danger: string;
    };
    blur: {
      glass: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: Record<string, string>;
    font: {
      family: string;
      size: Record<string, string>;
      weight: Record<string, number>;
      lineHeight: Record<string, number>;
    };
    motion: {
      easing: string;
      duration: Record<string, string>;
    };
    shadow: {
      soft: string;
      inset: string;
    };
  }
}
