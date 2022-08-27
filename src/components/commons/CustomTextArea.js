import React from "react";
import { Textarea, Label } from "@windmill/react-ui";
export default function CustomTextArea({
  type,
  title,
  placeholder,
  required,
  onChange,
  value,
  width,
  icon,
  name,
  error,
  disabled,
  others,
  rows,
  ...more
}) {
  return (
    <Label className={`${width} my-0`}>
      <span className="block mb-2 text-sm font-small text-gray-900 dark:text-gray-300 outline-none">
        {title}
      </span>
      <div className="flex gap-x-2 items-center">
        <Textarea
          className="mt-1 border border-gray-[#e2e8f0] px-2 py-1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          rows={rows}
        />
      </div>
    </Label>
  );
}
