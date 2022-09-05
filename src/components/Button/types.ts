import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonColors = 'neon' | 'coral' | 'crema' | 'success' | 'gray';
export type ButtonVariants = 'solid' | 'light' | 'outline';
export type ButtonSize = 'small' | 'normal';

export type CustomButtonProps = {
  children: ReactNode;
  color: ButtonColors;
  variant: ButtonVariants;
  disabled?: boolean;
  size?: ButtonSize;
  full?: boolean;
  normal?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = CustomButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CustomButtonProps> 

export type ThemeButton = {
  [key in ButtonVariants]: {
    bg?: string[],
    hover?: string[],
    border?: string[],
    text?: string[]
  }
};
