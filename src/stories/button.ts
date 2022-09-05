export interface ButtonProps {
    color?: "red" | "green" | "blue" | "primary";
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large" | "full";
    /**
     * Button contents
     */
    value: string;
    type: "button" | "submit";
    /**
     * Optional click handler
     */
    onClick?: () => void;
  }