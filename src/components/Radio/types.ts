import { InputHTMLAttributes, ReactNode } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  subtitle?: string
  id: string
  name: string
  titleClassName?: string | undefined;
  subtitleClassName?: string | undefined;
  inverse?: boolean
  error?: string
  renderElementRight?: ReactNode;
}
