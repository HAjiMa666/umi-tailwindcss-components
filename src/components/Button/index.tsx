import React, { DOMAttributes, FC, ReactEventHandler, ReactNode, memo } from "react";
import c from "classnames";

interface IButtonProps{
  size?: "small" | "normal" | "large";
  type?: "primary" | "ghost" | "link";
}

const Button: FC<IButtonProps> = memo((props) => {
  const { size, type } = props;
  return (
    <div
      
      className="select-none transition-colors duration-200 hover:bg-violet-500 cursor-pointer px-4 py-2 rounded-lg bg-violet-600  border-violet-700"
      {...props}>
      {props.}
    </div>
  );
});

export default Button;
