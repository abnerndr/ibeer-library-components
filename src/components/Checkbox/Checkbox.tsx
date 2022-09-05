import classNames from "classnames";
import React, { forwardRef } from "react";
import { CheckboxProps } from "./types";

export default forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => { 
  const {
    label,
    name,
    id,
    disabled,
    error,
    ...rest
  } = props;
  
  return (
    <div className="space-y-5">
      <div className="relative flex items-start justify-between">
        <div className="mr-3 text-sm flex-grow">
          <label
            htmlFor={id}
            className={classNames(
              "font-medium w-full cursor-pointer select-none block",
              disabled ? "text-gray-100 cursor-not-allowed" : "text-black"
            )}
          >
            {label}
          </label>
        </div>
        <div className="flex items-center h-5">
          <input
            {...rest}
            ref={ref}
            id={id}
            aria-describedby={`${id}-description`}
            name={name}
            disabled={disabled}
            type="checkbox"
            className={classNames(
              "form-checkbox h-4 w-4 ",
              disabled
                ? "focus:ring-gray-500 text-gray-100 cursor-not-allowed border-gray-100"
                : "border-gray-500 focus:ring-gray-100 text-neon-600"
            )}
          />
        </div>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-neon-900" id={`${props.id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
});


export type { CheckboxProps };
