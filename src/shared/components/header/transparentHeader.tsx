import IMGLogo from "@assets/images/BrrLogoWhite.svg";
import { FiUser } from "react-icons/fi";
import BRMenu from "../menu/menu";
import { useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";

export default function BRHeader() {
  const navigate = useNavigate();

  return (
    <header className="lg:h-[115px] lg:px-[120px] bg-transparent top-0 absolute w-full z-50 text-white">
      <div className="flex items-end justify-between h-full mx-auto max-w-[1440px] border-b border-b-border p-3 lg:p-6">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={IMGLogo} alt="Logo" className="h-[28px] lg:h-[36px]" />
        </div>
        <div className="flex items-center space-x-3 py-1">
          <BRMenu />
          <div>
            <CgShoppingBag className="cursor-pointer" size={24} />
          </div>
          <div onClick={() => navigate("/login")}>
            <FiUser className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
