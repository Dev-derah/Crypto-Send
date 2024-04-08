import React from "react"

interface VerificationBannerProps{
    textContent: string;

}
const VerificationBanner:React.FC <VerificationBannerProps> = ({textContent}) => {
  return (
    <div className="w-full bg-error-50 md:flex md:justify-center md:items-center md:py-3">
      <p>
        {textContent}{" "}
        <a href="#" className="underline cursor-pointer">
          Here {">"}
        </a>
      </p>
    </div>
  );
}

export default VerificationBanner