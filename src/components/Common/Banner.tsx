import React from 'react'

type BannerProps = {
    textContent: string;
    type: "error"|"success";
}

const Banner:React.FC <BannerProps> = ({textContent,type}) => {
    const getBannerColor =()=>{
    switch (type) {
      case "error":
        return "bg-[#F8E8E8]";
      case "success":
        return "bg-[#EAFAE7]";
      default:
        return "bg-[#F8E8E8]";
    }
    };
    
  return (
    <div className={`w-full absolute left-0 top-[10vh] py-1 ${getBannerColor()} flex justify-center items-center md:py-3`}>
      <p className='text-sm md:text-base'>
        {textContent}
        <a href="#" className="underline cursor-pointer">
          Here {">"}
        </a>
      </p>
    </div>
  )
}

export default Banner