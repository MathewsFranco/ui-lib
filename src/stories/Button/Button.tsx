import React from 'react';
import { StyledButton } from './button.styled';
import type { Variant } from './button.types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label = 'Label',
  variant = 'primary',
  fullWidth,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} $fullWidth={fullWidth} {...props}>
      {label}
    </StyledButton>
  );
};
