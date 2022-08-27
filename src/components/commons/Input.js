import React from "react";

export default function Input({
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
  ...more
}) {
  return (
    <div className={`${width} my-0`}>
      <label className="block mb-2 text-sm font-small text-gray-900 dark:text-gray-300">
        {title}
      </label>
      <div className="flex gap-x-2 items-center">
        <input
          type={type}
          className={`bg-gray-50 border border-gray-[#e2e8f0] py-2 px-3 ${
            disabled && "text-gray-50"
          } text-gray-900 text-sm rounded-md h-10 pl-3 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-blue-500 placeholder-slate-400 ${others}`}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value || ""}
          name={name}
          disabled={disabled}
          {...more}
        />
        {icon && icon}
      </div>
      {error && (
        <p
          className={`${
            error && "mt-2 text-sm text-red-600 dark:text-red-500"
          }`}
        >
          <span className="font-medium">{error}</span>
        </p>
      )}
    </div>
  );
}
