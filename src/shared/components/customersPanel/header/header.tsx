import IMGLogo from "@assets/images/customerPanel/logo.svg";
import Bell from "@assets/icons/bell.svg";
import Cart from "@assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../profileCTA/UserAvatar";
import { NavLink } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const links = [
    {
      title: "Home",
      url: "/customers/Home",
    },
    // {
    //   title: "Retreats",
    //   url: "/herbalpedia",
    // },
    {
      title: "Herbalpaedia",
      url: "/customers/herbalpedia",
    },
    {
      title: "Store",
      url: "/customers/store",
    },
    {
      title: "Orders",
      url: "/customers/orders",
    },
    {
      title: "Gallery",
      url: "/customers/gallery",
    },
  ];
  return (
    <header className="lg:h-[88px] bg-white lg:px-[70px] border-b border-b-border bg-background fixed top-0 left-0 w-full z-50">
      <div className="flex items-end justify-between h-full mx-auto max-w-[1440px]  ">
        <div
          className="cursor-pointer  h-full flex items-center"
          onClick={() => navigate("/customers/Home")}
        >
          <img src={IMGLogo} alt="Logo" className="h-[28px] lg:h-[36px]" />
        </div>
        <nav className="flex-1 justify-center  h-full flex items-center ">
          <ul className="flex gap-8 h-full items-center justify-center ">
            {links.map((link) => {
              return (
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "bg-[#946C3C] px-5 bg-opacity-10 h-full flex items-center border-b border-[#946C3C] text-[#946C3C]"
                        : "text-[#667085] px-5",
                    ].join("")
                  }
                >
                  {link.title}
                  <li className=""></li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center space-x-6 py-1  h-full">
          <div>
            <img src={Bell} alt="Logo" className="h-[24px] " />
          </div>
          <div>
            <img src={Cart} alt="Logo" className="h-[24px] " />
          </div>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
