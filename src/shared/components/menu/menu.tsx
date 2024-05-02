import IMGMenu from "@assets/icons/menu.svg";
import IMGMenu2 from "@assets/icons/Menu 2.svg";
import IMGArrow from "@assets/icons/arrow.svg";
import IMGMenuBg1 from "@assets/images/menu-bg-1.png";
import IMGMenuBg2 from "@assets/images/menu-bg-2.png";
import IMGMenuBg3 from "@assets/images/menu-bg-3.png";
import IMGMenuBg4 from "@assets/images/menu-bg-4.png";
import IMGMenuBg5 from "@assets/images/menu-bg-5.png";
import IMGClose from "@assets/icons/close.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./menu.css";
import { useWindowSize } from "usehooks-ts";

function useController() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [menuItemIndexHovered, setMenuItemIndexHovered] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setClosing(true);

  const navigate = useNavigate();
  const { width = 0, height = 0 } = useWindowSize();
  const isSmallerScreen = width < 1050 || height < 770;

  const links = [
    {
      title: "Retreats calendar",
      url: "/retreat-calendar",
    },
    {
      title: "Herbalpaedia",
      url: "/herbalpedia",
    },
    {
      title: "Store",
      url: "/store",
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "About us",
      url: "/about",
    },
  ];

  const renderMenuItem = (
    title: string,
    url: string,
    index: number,
    delayIn: number,
    delayOut: number
  ) => {
    const bgs = [IMGMenuBg1, IMGMenuBg2, IMGMenuBg3, IMGMenuBg4, IMGMenuBg5];
    return (
      <div
        className={`relative ${
          isSmallerScreen
            ? "w-1/5"
            : menuItemIndexHovered === index
            ? menuItemIndexHovered === 0
              ? "w-[40%]"
              : "w-2/6"
            : menuItemIndexHovered === 0
            ? "w-[15%]"
            : "w-1/6"
        } transition-all duration-1000 h-full bg-cover bg-center cursor-pointer ${
          closing ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-end ${
          isSmallerScreen ? "" : "py-[151px]"
        }
        `}
        onMouseEnter={() => setMenuItemIndexHovered(index)}
        onClick={() => navigate(url)}
        style={{
          backgroundImage: `url(${bgs[index]})`,
          animation: `${
            closing ? "slideToTop" : "slideFromTop"
          } 1000ms forwards`,
          animationDelay: closing ? `${delayOut}ms` : `${delayIn}ms`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div
          className={`w-full flex flex-col items-stretch justify-center px-[69px] transition-transform duration-1000 ${
            !isSmallerScreen && menuItemIndexHovered === index
              ? "rotate-0"
              : "-rotate-90"
          }`}
        >
          <div
            className={`h-[2px] w-full bg-white ${
              !isSmallerScreen && menuItemIndexHovered === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          ></div>

          <p
            className={`${
              isSmallerScreen ? "text-[32px] mt-8" : "text-[56px]"
            } font-medium text-white whitespace-nowrap font-arapey`}
          >
            {title}
          </p>
          <img
            src={IMGArrow}
            alt="Arrow Icon"
            className={`h-[40px] w-[28px] transition-all duration-1000 ${
              !isSmallerScreen && menuItemIndexHovered === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 1250);
    }
  }, [closing]);

  return {
    open,
    closing,
    links,
    handleOpen,
    handleClose,
    renderMenuItem,
  };
}

export default function BRMenu() {
  const { open, closing, links, handleOpen, handleClose, renderMenuItem } =
    useController();
  const location = useLocation();
  const renderMenuImage = () => {
    const showMenuImage =
      location.pathname.match(/^\/gallery$/) ||
      location.pathname.startsWith("/herbalpedia") ||
      location.pathname.startsWith("/retreat-calendar");

    if (showMenuImage) {
      return (
        <img
          src={IMGMenu2}
          alt="Menu Icon"
          className={`w-8 cursor-pointer`}
          onClick={handleOpen}
        />
      );
    } else {
      return (
        <img
          src={IMGMenu}
          alt="Menu Icon"
          className={`w-8 cursor-pointer`}
          onClick={handleOpen}
        />
      );
    }
    return null; // Return null if IMGMenu should not be rendered
  };
  return (
    <div className="">
      {renderMenuImage()}
      {open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 ">
          <div className="absolute right-0 m-8 lg:m-16 cursor-pointer z-10">
            <img
              src={IMGClose}
              alt="Close Icon"
              className={`h-12 w-12 ${closing ? "opacity-0" : "opacity-100"}`}
              onClick={handleClose}
            />
          </div>
          <div className="flex flex-row w-full h-full">
            {links.map((link, index) =>
              renderMenuItem(
                link.title,
                link.url,
                index,
                50 * (index + 1),
                50 * (index + 1 + (links.length - index * 2))
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
