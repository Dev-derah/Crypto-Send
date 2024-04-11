import React from 'react'

type CardProps = {
    children:React.ReactNode,
    backgroundColor?:string,
}

const Card: React.FC<CardProps> = ({
  children,
  backgroundColor = "bg-white",
}) => {
  return (
    <div
      className={`${backgroundColor} rounded-lg py-6 px-8 w-full flex justify-between items-center`}
    >
      {children}
    </div>
  );
};

export default Card