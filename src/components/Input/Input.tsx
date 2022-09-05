import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";

import { defaultMoneyProps, InputProps, MASKS, MASKS_TYPES } from "./types";

const defaultClasses: string =
  "form-input bg-white h-12 focus:ring-neon-500 focus:border-neon-500 block w-full sm:text-sm rounded shadow-sm";
const defaultDarkClasses: string =
  "form-input bg-gray-800 h-12 border-transparent text-white focus:ring-gray-800 focus:border-transparent block w-full sm:text-sm rounded shadow-sm";
const defaultWithLeftGroup =
  "bg-white block w-full border-0 p-0 text-gray-900 outline-none focus:ring-0 sm:text-sm";
const leadingContainer =
  "bg-white border rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-neon-600 focus-within:border-neon-600 flex flex-row";

const DEFAULT_MASKS: {
  [mask: string]: string;
} = {
  CEP: "99999-999",
  CPF: "999.999.999-99",
  DATE: "99/99/9999",
  CNPJ: "99.999.999/9999-99",
  PHONE: "(99) 9999-9999",
  CELLPHONE: "(99) 99999-9999",
  NUMBER_CARD: "9999 9999 9999 9999",
  VALIDATE_CARD: "99/99",
  CODE_CARD: "999",
};

type InputComponentProps = {
  inputProps: InputProps;
  mask?: string;
  leading?: string;
  inputRef: ForwardedRef<HTMLInputElement>;
} & Pick<InputProps, "moneyProps">;

type DefaultInputProps = {
  inputProps: InputProps;
  ref: ForwardedRef<HTMLInputElement>;
  style: string;
  placeholder?: string;
};

const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  (props, ref) => {
    const { inputProps, style, ...rest } = props;

    return <input {...inputProps} {...rest} ref={ref} className={style} />;
  }
);

type MoneyValueCompat = number | string | null;

const InputComponent = ({
  inputRef,
  mask,
  leading,
  inputProps,
  moneyProps
}: InputComponentProps) => {
  const errorClass = inputProps.error ? "border-neon-900" : "";
  const disabledClass = inputProps.disabled
    ? "border-gray-100 placeholder-gray-100"
    : "border-gray-500 placeholder-gray-500";
  const defaultStyle = leading ? defaultWithLeftGroup : inputProps.mode === 'dark' ? defaultDarkClasses : defaultClasses;
  const style = classNames(
    defaultStyle,
    errorClass,
    disabledClass,
    inputProps.className
  );
  const maskName = mask as MASKS;

  if (maskName === "MONEY") {
    return (
      <NumberFormat
        {...moneyProps}
        placeholder={inputProps.placeholder || moneyProps?.placeholder}
        className={style}
        getInputRef={inputRef}
        value={(moneyProps?.value ?? inputProps.value) as MoneyValueCompat}
        disabled={inputProps.disabled}
        onFocus={(e: any) => e.target.select()}
      />
    );
  }

  const maskInput = MASKS_TYPES.includes(mask as MASKS)
    ? DEFAULT_MASKS[mask as MASKS]
    : typeof mask === "string"
    ? mask
    : undefined;

  if (!maskInput) {
    return <DefaultInput {...{ inputProps, ref: inputRef, style }} />;
  }

  const value: string = inputProps?.value?.toLocaleString() ?? "";

  return (
    <InputMask
      {...inputProps}
      className={style}
      mask={maskInput}
      value={inputProps.value}
      onChange={inputProps.onChange}
    >
      {(rawInputProps: any) => (
        <DefaultInput
          style={style}
          ref={inputRef}
          placeholder={mask ? DEFAULT_MASKS[mask] : rawInputProps.placeholder}
          disabled={inputProps.disabled}
          {...rawInputProps}
        />
      )}
    </InputMask>
  );
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const containerClass = classNames(
    props.leading ? leadingContainer : "mt-1 relative rounded-md",
    props.disabled && "border-gray-100"
  );

  const leadingClass = classNames(
    "sm:text-sm",
    props.disabled ? "text-gray-100" : "text-gray-500"
  );

  return (
    <div className="w-full">
      {props.label && !props.leading && (
        <span className={`block mb-2 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>{props.label}</span>
      )}
      <label className={containerClass} htmlFor={props.id}>
        {props.leading && (
          <div className="inline-block mr-3 flex-none">
            <span className={leadingClass}>{props.leading}</span>
          </div>
        )}
        <InputComponent
          inputProps={props}
          mask={props.mask}
          leading={props.leading}
          inputRef={ref}
          moneyProps={{ ...defaultMoneyProps, ...props.moneyProps }}
        />
      </label>

      {props.error && (
        <p
          className={`mt-2 text-sm ${props.mode === 'dark' ? 'text-white' : 'text-neon-900'} w-full lowercase`}
          id={`${props.id}-error`}
        >
          * {props.error}
        </p>
      )}
    </div>
  );
});

export type { InputProps };

export default Input;
