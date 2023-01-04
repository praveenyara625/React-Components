import React from "react";
import styles from "./Button.module.css";
export const Button = ({
  onClick,
  color = "blue",
  size = "medium",
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      className={`${styles.custom_button} ${styles[color]} ${styles[size]}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
