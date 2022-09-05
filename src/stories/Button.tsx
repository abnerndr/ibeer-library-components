import React, { useMemo } from "react";
import "./button.css";
import { ButtonProps } from "./button";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  primary = false,
  size = "medium",
  value,
  type,
  ...props
}: ButtonProps) => {
  const buttonSize = useMemo(
    () =>
      (size === "small" && "w-sm") ||
      (size === "medium" && "w-md") ||
      (size === "large" && "w-lg") ||
      (size === "full" && "w-full"),
    [size]
  );

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type={type}
      className={`bg-red-500 text-white ${buttonSize}`}
      {...props}
    >
      {value}
    </button>
  );
};
