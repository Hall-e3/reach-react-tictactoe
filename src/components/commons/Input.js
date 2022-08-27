import React from "react";
import { Label, Input as TextField } from "@windmill/react-ui";
export default function Input({
  type,
  placeholder,
  onChange,
  value,
  name,
  label,
}) {
  return (
    <Label className="my-4">
      <span>{label}</span>
      <div className="flex items-center">
        <TextField
          className="mt-1 p-4"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
    </Label>
  );
}
