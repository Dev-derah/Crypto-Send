import React from "react";
import notificationIcon from "../../../assets/Images/Icons/notification.svg"
import DashNav from "../../Nav/DashNav";

interface HeaderProps {
  type:"notification" |"progress"
}
const Header:React.FC <HeaderProps> = ({type}) => {
  return (
    <header className="bg-white md:h-[10vh] md:w-full md:flex md:justify-center md:items-center">
      {type === "notification" && (
        <div className=" ml-auto pr-20 ">
          <div className="bg-white p-3 drop-shadow-lg rounded-full">
            <img src={notificationIcon} alt="notificationIcon" />
          </div>
        </div>
      )}
      {type === "progress" && <DashNav />}
    </header>
  );
}

export default Header