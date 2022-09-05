import classNames from "classnames";
import React, { forwardRef } from "react";
import { RadioProps } from "./types";

export default forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    label,
    subtitle,
    name,
    id,
    disabled,
    titleClassName,
    subtitleClassName,
    inverse = false,
    error,
    renderElementRight,
    ...rest
  } = props;

  return (
    <fieldset>
      <div className="space-y-5">
        <div
          className={classNames(
            "relative flex items-center justify-between w-full",
            {
              "flex-row-reverse": inverse,
            }
          )}
        >
          <div className="flex items-center">
            <div className="flex items-center h-5">
              <input
                {...rest}
                id={id}
                aria-describedby={`${id}-description`}
                name={name}
                disabled={disabled}
                type="radio"
                ref={ref}
                className={classNames(
                  "form-radio h-4 w-4 ",
                  disabled
                    ? "focus:ring-gray-500 text-gray-500 cursor-not-allowed border-gray-100"
                    : "border-gray-500 focus:ring-gray-100 text-neon-600"
                )}
              />
            </div>
            <div
              className={classNames("text-sm", {
                "ml-3": !inverse,
                "mr-3": inverse,
              })}
            >
              <label
                htmlFor={id}
                className={classNames(
                  "font-medium cursor-pointer select-none",
                  !disabled && (subtitle ? "text-gray-200" : "text-black"),
                  disabled && "text-gray-100 cursor-not-allowed",
                  titleClassName
                )}
              >
                {label}
              </label>
              <p
                id={`${id}-description`}
                className={classNames(
                  disabled ? "text-gray-100 cursor-not-allowed" : "text-black",
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            </div>
          </div>
          {renderElementRight && <section>{renderElementRight}</section>}
        </div>

        {error && (
          <p className="mt-2 text-sm text-neon-900" id={`${props.id}-error`}>
            {error}
          </p>
        )}
      </div>
    </fieldset>
  );
});

export type { RadioProps };
