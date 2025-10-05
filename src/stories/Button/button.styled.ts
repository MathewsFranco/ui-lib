import styled, { css } from 'styled-components';

import type { Variant } from './button.types';

export const StyledButton = styled.button<{
  $variant: Variant;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineHeight.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: all ${({ theme }) => theme.motion.duration.normal};
  transition-timing-function: ${({ theme }) => theme.motion.easing};
  ${({ theme }) => theme.blur.glass};
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  ${({ theme, $variant }) =>
    ({
      primary: css`
        background: ${theme.colors.accent};
        color: ${theme.colors.invertedText};
        &:hover {
          background: ${theme.colors.accentHover};
        }
      `,
      secondary: css`
        background: ${theme.colors.surface};
        color: ${theme.colors.text};
        &:hover {
          background: ${theme.colors.surfaceAlt};
        }
      `,
      danger: css`
        background: ${theme.colors.danger};
        color: ${theme.colors.invertedText};
        &:hover {
          opacity: 0.9;
        }
      `,
    }[$variant])};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.98);
  }
`;
