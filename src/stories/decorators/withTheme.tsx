import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
