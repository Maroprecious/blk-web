import IMGLogo from "@assets/images/logo.svg";
import { FiUser } from "react-icons/fi";
import BRMenu from "../menu/menu";
import { useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
interface ChildProps {
  quantity: number;
}
import { IoArrowForward } from "react-icons/io5";
import Cart from "@/components/landing/cart";
const BRHeader: React.FC<ChildProps> = ({ quantity }) => {
  const navigate = useNavigate();
  console.log(quantity);

  return (
    <header className="lg:h-[115px] lg:px-[120px] bg-background fixed top-0 left-0 w-full z-50">
      <div className="flex items-end justify-between h-full mx-auto max-w-[1440px] border-b border-b-border p-3 lg:p-6">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={IMGLogo} alt="Logo" className="h-[28px] lg:h-[36px]" />
        </div>
        <div className="flex items-center justify-center space-x-3 ">
          <BRMenu />
          <div>
            <Sheet>
              <SheetTrigger>
                <CgShoppingBag className="cursor-pointer mt-1.5" size={24} />
              </SheetTrigger>
              <SheetContent className="w-[1500px] bg-white ">
                <SheetTitle className="font-amsterdam flex gap-20 mb-5 text-2xl font-medium">
                  <SheetClose>
                    <IoArrowForward />
                  </SheetClose>
                  <h3 className="text-center text-[#946C3C]">My Cart</h3>
                </SheetTitle>

                <SheetDescription>
                  <Cart quantity={quantity} />
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
          <div onClick={() => navigate("/login")}>
            <FiUser className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default BRHeader;
