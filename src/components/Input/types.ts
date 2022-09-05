import { InputHTMLAttributes } from 'react';
import { NumberFormatProps } from 'react-number-format';

export const MASKS_TYPES = ['CEP', 'CPF', 'DATE', 'CNPJ', 'PHONE', 'CELLPHONE', 'NUMBER_CARD', 'VALIDATE_CARD', 'CODE_CARD', 'MONEY'] as const;

export type MASKS = typeof MASKS_TYPES[number];

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: MASKS | string
  leading?: string
  moneyProps?: NumberFormatProps<any>
  error?: string
  disabled?: boolean | undefined;
  label?: string;
  mode?: 'light' | 'dark';
}

export const defaultMoneyProps = {
  decimalScale: 2,
  decimalSeparator: ",",
  fixedDecimalScale: true,
  placeholder: "$ 0,00",
  prefix: "R$",
  thousandSeparator: ".",
};

export type MoneyProps<T> = NumberFormatProps<T>;