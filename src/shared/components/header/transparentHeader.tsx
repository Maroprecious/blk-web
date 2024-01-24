import IMGLogo from "@assets/images/BrrLogoWhite.svg";
import { FiUser } from "react-icons/fi";
import BRMenu from "../menu/menu";

export default function BRHeader() {
  return (
    <header className="h-[115px] lg:px-[120px] bg-transparent fixed w-full text-white">
      <div className="flex items-end justify-between h-full mx-auto max-w-[1440px] border-b border-b-border px-6 py-6">
        <img src={IMGLogo} alt="Logo" className="h-[35px]" />
        <div className="flex items-center space-x-3 py-1">
          <BRMenu />
          <FiUser size={24} />
        </div>
      </div>
    </header>
  );
}
