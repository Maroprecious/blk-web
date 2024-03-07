import IMGLogo from "@assets/images/logo.svg";
import { FiUser } from "react-icons/fi";
import BRMenu from "../menu/menu";
import { useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";

export default function BRTHeader() {
  const navigate = useNavigate();
  const navigateHome = () => navigate("/");

  return (
    <header className="lg:h-[115px] lg:px-[120px] bg-background fixed top-0 left-0 w-full z-50">
      <div className="flex items-end justify-between h-full mx-auto max-w-[1440px] border-b border-b-border p-3 lg:p-6">
        <div className="cursor-pointer" onClick={navigateHome}>
          <img src={IMGLogo} alt="Logo" className="h-[28px] lg:h-[36px]" />
        </div>
        <div className="flex items-center space-x-3 py-1">
          <BRMenu />
          <CgShoppingBag size={24} />
          <FiUser size={24} />
        </div>
      </div>
    </header>
  );
}
