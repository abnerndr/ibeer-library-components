import React, { forwardRef } from "react";
import classNames from "classnames";
import { SelectProps } from "./types";

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    label,
    options,
    error,
    placeholder,
  } = props;

  const errorClass = error ? 'border-neon-900' : '';
  const style = classNames('form-select h-12 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-neon-500 focus:border-neon-500 sm:text-sm rounded-md', errorClass);

  return (
    <div className="w-full">
      {label && (
        <span className="block mb-2">
          {label}
        </span>
      )}
      <select
        ref={ref}
        className={style}
        {...props}
      >
        <option value="">{placeholder ?? label}</option>
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-sm text-neon-900" id={`${props.id}-error`}>
          * {error}
        </p>
      )}
    </div>
  );
});

export default Select;
