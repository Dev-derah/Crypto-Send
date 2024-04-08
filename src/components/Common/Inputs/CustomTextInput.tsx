import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  name: string;
  autoFocus?:boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
  className,
  value,
  name,
  autoFocus = false,
}) => {
  return (
    <input
      className={`${className} text-center focus:outline-none text-xl font-medium placeholder:text-neutral-6
      `}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
};

export default CustomInput;
