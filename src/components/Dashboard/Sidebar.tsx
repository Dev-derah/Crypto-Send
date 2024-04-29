import SideMenu from "./SideMenu";
import { logo, logout } from "../../assets";

const Sidebar = () => {
  return (
    <div className="hidden w-[22%] fixed h-screen bg-white lg:block">
      <div className="flex py-[15%] w-[80%] items-center justify-center">
        <img src={logo} alt="logo" className="w-40" />
      </div>

      <div className="flex  justify-center flex-col pl-5">
        <SideMenu />

        <div className="flex gap-3  absolute bottom-[8%] text-base font-medium text-error">
          <span className=" capitalize">Log Out</span>
          <img src={logout} alt={" Log Out"} />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
