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
        className={`bg-accent ${
          showSidebar ? "md:w-[78%]" : "md:w-full"
        } md:bg-backgroundGray md:relative`}
      >
        {showHeader && <Header type={headerType} />}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
