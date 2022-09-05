import { SelectHTMLAttributes } from "react";

export type Option = {
  label: string
  value: string | number
  disabled?: boolean | undefined
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  options: Option[]
  label: string
  placeholder?: string
  error?: string
}