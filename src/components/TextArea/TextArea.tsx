import classNames from "classnames";
import React, { forwardRef } from "react";

import { TextareaProps } from "./types";

const defaultStyle = 'form-textarea shadow-sm focus:ring-neon-500 focus:border-neon-500 block w-full sm:text-sm rounded-md';

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const errorClass = props.error ? "border-neon-900" : "border-gray-500";
  const style = classNames(defaultStyle, errorClass, props.className);

  return (
    <>
      <textarea
        className={style}
        {...props}
        ref={ref}
      />

      
      {props.error && (
        <p className="mt-2 text-sm text-neon-900" id="email-error">
          * {props.error}
        </p>
      )}
    </>
  );
});

export type { TextareaProps };

export default TextArea;
