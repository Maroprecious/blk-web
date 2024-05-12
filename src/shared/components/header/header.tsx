import IMGLogo from "@assets/images/logo.svg";
import { FiUser } from "react-icons/fi";
import BRMenu from "../menu/menu";
import { useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import DrawerModal from "@/components/landing/drawerModal";
import { useState } from "react";
const BRHeader: React.FC = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <header className="lg:h-[115px] lg:px-[120px] bg-background fixed top-0 left-0 w-full z-50">
        <div className="flex items-end justify-between h-full mx-auto max-w-[1440px] border-b border-b-border p-3 lg:p-6">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={IMGLogo} alt="Logo" className="h-[28px] lg:h-[36px]" />
          </div>
          <div className="flex items-center justify-center space-x-3 ">
            <BRMenu />
            <div>
              <CgShoppingBag
                onClick={toggleDrawer}
                className="cursor-pointer "
                size={24}
              />
            </div>
            <div onClick={() => navigate("/login")}>
              <FiUser className="cursor-pointer" size={24} />
            </div>
          </div>
        </div>
      </header>
      <DrawerModal isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};
export default BRHeader;
