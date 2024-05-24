import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import IMGLogo from "@assets/images/logo.svg";
import { useState } from "react";

export const MobileMenu = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [active, setActive] = useState(0);
  const handleActive = (id: number, link: string) => {
    setActive(id);
    navigate(link);
  };
  return (
    <div className="w-full h-[100vh] top-0 bg-shadow left-0 fixed">
      <div className="w-[65%] px-4 h-[100vh] flex flex-col gap-8 absolute top-0 left-0 bg-white shadow-sm">
        <div className="w-[80%] flex justify-between items-center">
          <IoArrowBackSharp />
          <img src={IMGLogo} alt="Logo" className="h-[35px] mt-4" />
        </div>
        {[
          {
            title: "Home",
            link: "/home-tab",
          },
          {
            title: "Retreats",
            link: "/retreats",
          },
          {
            title: "Herbalpaedia",
            link: "/herbalpaedia",
          },
          {
            title: "Store",
            link: "/store",
          },
          {
            title: "Orders",
            link: "/orders",
          },
          {
            title: "Gallery",
            link: "#",
          },
        ].map((ele, id) => (
          <div
            onClick={() => handleActive(id, ele.link)}
            className={
          location.pathname === ele.link
                ? "w-full h-[56px] bg-cream-300 border-l-2 border-l-[#946C3C]"
                : "w-full h-[56px]"
            }
          >
            <p className="font-arapey text-gray-500 text-[15px] px-4 py-4">
              {ele.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
