import React from "react";
import { Button } from "@windmill/react-ui";
export default function CustomButton({
  onClick,
  text,
  size,
  layout,
  iconLeft,
  iconRight,
  type,
  icon,
  ...others
}) {
  return (
    <Button
      size={size || "large"}
      layout={layout}
      iconRight={iconRight}
      iconLeft={iconLeft}
      onClick={onClick}
      type={type}
      icon={icon}
      {...others}
    >
      {text}
    </Button>
  );
}
