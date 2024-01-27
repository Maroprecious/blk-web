import { sidebarLinks } from "@/modules/landing/resouces";
import { Link } from "react-router-dom";
import BrrLogoWhite from "../../../assets/images/BrrLogoWhite.svg";
import { useLocation } from "react-router-dom";
const Sidebar: React.FC = () => {
  const location = useLocation();
  // Check if the current path is '/about'
  const checkActivePage = (page: string) => {
    return location.pathname === page;
  };
  return (
    <div className="bg-[#CF956F] px-6 font-Inter text-white w-[235px] flex-none h-screen">
      <div className=" rounded w-full  lg:block">
        <div className=" mx-auto w-[150px] mb-[31px] translate-y-full">
          <img
            src={BrrLogoWhite}
            alt="logo"
            className="w-24 sm:w-32 md:w-auto"
          />
        </div>
      </div>
      <div className="pt-[31px]">
        {sidebarLinks.map((menu) => (
          <Link
            key={menu.id}
            to={menu.link}
            // onClick={() => setPageTitle(menu.title)}
            className={`${
              checkActivePage(menu.link) &&
              "bg-[#ca8b61] border-l-2 border-white"
            } hover:border-l-2 hover:border-white hover:bg-[#ca8b61] flex items-center gap-2 border-l-2 border-transparent cursor-pointer sideNav py-2 w-full  px-4 mb-5
 `}
          >
            {menu.icon}
            {/* <img
              src={menu.icon}
              alt="Home"
              className="h-[22px] w-[22px]  text-white/60 navlink text-sm font-light"
            /> */}
            <p
              className={`text-[#E9D7C7]  text-base font-light ${
                checkActivePage(menu.link) && "text-white"
              }`}
            >
              {" "}
              {menu.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
