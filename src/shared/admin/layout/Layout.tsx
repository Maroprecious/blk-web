import React, { ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <div className="pt-[32px] min-h-full pl-[24px] bg-[#FAF6F3] pr-[70px] font-maison h-[2000px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
