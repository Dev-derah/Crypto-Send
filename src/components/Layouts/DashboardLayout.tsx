import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Headers/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  showHeader: boolean;
  showSidebar: boolean;
  headerType: "notification" |"progress";
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  showHeader = true,
  showSidebar = true,
  headerType="notification"

}) => {
  return (
    <div className="flex">
      {showSidebar && <Sidebar />}

      <div
        className={`bg-accent w-full min-h-screen ${
          showSidebar ? " md:ml-[20%] md:w-[80%]" : "md:w-full"
        } md:bg-backgroundGray md:relative`}
      >
        {showHeader && <Header type={headerType} />}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
