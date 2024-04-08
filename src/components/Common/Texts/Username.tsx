import React from 'react'

type UsernameProps = {
    username: string
    size:"small"|"medium"|"large"
};

const Username: React.FC<UsernameProps> = ({ username,size }) => {
    const getUsernameSize = ()=>{
        switch (size.toLocaleLowerCase()) {
            case "small":
                return "text-[14px]";
            case"medium":
                return "text-base";
                case "large":
                    return "text-lg";
            default:
                return "text-base";
        }

    }
  return <p className={`text-neutral-7 inline-flex ${getUsernameSize()}`}>${username}</p>;
};

export default Username