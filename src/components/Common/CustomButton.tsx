import React from "react";

interface CustomButtonProps {
  isFilled?: boolean;
  color?: string;
  background?: string;
  size?: "big" | "small";
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  textSize?: string;
  onClickFunction?: () => void; // Add type for onClick prop
  type?: "button" | "submit" | "reset"; // Add type for type prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "text-black",
  background,
  size,
  textSize = "text-sm",
  children,
  isFilled,
  className,
  disabled,
  onClickFunction,
  type
  
}) => {
  function getWidth() {
    if (size === "big") return "px-24 py-4";
    return "px-6 py-2";
  }
  const bg = disabled
    ? "bg-neutral-7"
    : isFilled
    ? background
    : "bg-transparent";
  const border = isFilled ? "none" : "border border-black";
  return (
    <button
      onClick={onClickFunction} 
      type={type}
      className={`cursor-pointer ${className} ${color} ${bg} ${getWidth()} ${border} rounded-full font-medium ${textSize} ${color}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
