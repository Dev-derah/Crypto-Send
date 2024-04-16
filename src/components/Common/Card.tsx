import React from "react";

type CardProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  customClassName?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  backgroundColor = "bg-white",
  customClassName,
}) => {
  return (
    <div
      className={`${backgroundColor} rounded-lg py-6 px-8 w-full flex justify-between items-center relative ${customClassName}`}
    >
      {children}
    </div>
  );
};

export default Card;
