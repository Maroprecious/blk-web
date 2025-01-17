import { ReactNode, useState } from "react";
import bell from "@assets/icons/bell.svg";
import cart from "@assets/icons/cart.svg";
import logo from "@assets/icons/yellow-logo.svg";
import { Notifications } from "../dropdown/notifications-dropdown";
import { LogoutModal } from "../modals/log-out";
import user from "@assets/icons/user.svg";
import logout from "@assets/icons/logout.svg";
import { CartSideBar } from "../dropdown/cart-sidebar";

type props = {
  children: ReactNode;
};
export const PageLayout = ({ children }: props) => {
  const userOptions = [
    {
      image: user,
      title: "My profile",
    },
    {
      image: logout,
      title: "Log out",
    },
  ];
  const [active, setActive] = useState<number | null>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [openCart, setOpenCart] = useState(false);
  const handleActive = (id: number) => {
    setActive(id);
  };
  const handleNotifications = () => {
    setOpen(!open);
    setOpenUser(false);
  };
  const handleUserDropdown = () => {
    setOpenUser(!openUser);
    setOpen(false);
  };

  const handleShowModal = (option: string) => {
    if (option === "Log out") {
      setShowModal(true);
      setSelectedOption(option);
      setOpenUser(false);
    }
  };
  return (
    <div>
      <div
        className="fixed w-full z-[100] px-8 gap-[4%] flex justify-between items-center bg-[#FFF]
       left-0 top-0 h-[88px] border-b border-b-[1px] border-[#EAECF0]"
      >
        <div className="w-[23%]">
          <div className="w-[134px] h-[44px] px-4">
            <img src={logo} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="flex justify-between items-center w-[57%]">
          {[
            "Home",
            "Retreats",
            "Herbalpaedia",
            "Store",
            "Orders",
            "Gallery",
          ].map((ele, id) => (
            <div
              key={id}
              onClick={() => handleActive(id)}
              className={
                active === id
                  ? "bg-[#FAF6F3] flex items-center px-8 h-[88px] text-center border-b border-b-[2px] border-[#946C3C]"
                  : "px-8"
              }
            >
              <p
                className={
                  active === id
                    ? "cursor-pointer text-[#946C3C] font-maison text-[15px] font-extralight"
                    : "cursor-pointer text-[#667085] font-maison text-[15px] font-extralight"
                }
              >
                {ele}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-[20%] justify-end items-center gap-[1rem]">
          <div className="cursor-pointer" onClick={() => handleNotifications()}>
            <img src={bell} style={{ width: "22px", height: "22px" }} />
          </div>
          <div className="cursor-pointer" onClick={() => setOpenCart(true)}>
            <img src={cart} style={{ width: "22px", height: "22px" }} />
          </div>
          <div
            className="bg-[#CF956F] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center"
            onClick={() => handleUserDropdown()}
          >
            <h2 className="font-maison text-[#fff] font-extrabold text-[17px]">
              LC
            </h2>
          </div>
        </div>
        {open && <Notifications />}
        {openUser && (
          <div className="absolute shadow-lg py-2 top-[80px] right-[2%] z-[100] bg-[#FFF] w-[151px] border border-[1px] border-[gray-200]">
            {userOptions.map((ele) => (
              <div
                className="flex py-2 px-4 gap-2"
                onClick={() => handleShowModal(ele.title)}
              >
                <img
                  src={ele.image}
                  style={{ width: "22px", height: "22px" }}
                />
                <p className="text-gray-900 text-[14px] font-normal">
                  {ele.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {showModal && selectedOption && (
        <LogoutModal setShowModal={setShowModal} />
      )}
      {openCart && <CartSideBar setOpenCart={setOpenCart} />}

      <div className="pt-10 bg-[#FFF]">{children}</div>
    </div>
  );
};
