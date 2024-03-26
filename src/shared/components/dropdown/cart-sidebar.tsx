import { Dispatch, SetStateAction } from "react";
import CartCard from "../cards/retreats/cart-card";
import { IoArrowForward } from "react-icons/io5";

type props = {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};
export const CartSideBar = ({ setOpenCart }: props) => {
  return (
    <div className="fixed z-[100] w-full h-[100vh] bg-[rgba(0,0,0,0.4)] my-auto flex">
      <div className="w-[28%] h-[100vh] bg-[#FFF] absolute right-0">
        <div className="flex w-[60%] pt-8 px-4 justify-between items-center relative">
          <div className="text-[20px]" onClick={() => setOpenCart(false)}>
            <IoArrowForward />
          </div>
          <h5 className="font-recoleta text-[24px] text-[#946C3C] font-medium">
            My Cart
          </h5>
        </div>
        <div className="px-6">
          {Array(2)
            .fill("_")
            .map((ele) => (
              <div key={ele} className="w-full">
                <CartCard />
              </div>
            ))}
        </div>
        <div className="absolute bottom-0 w-full flex flex-col gap-[3px]">
          <p className="text-center text-gray-400 text-[12.4px] font-maison tracking-[.4px] font-light">
            Shipping and taxes calculated at checkout
          </p>
          <div className="bg-[#946C3C] w-full h-[56px] p-6 flex justify-center items-center">
            <p className="text-[#FFF] font-maison font-normal">
              CHECKOUT $ 700.00 USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
