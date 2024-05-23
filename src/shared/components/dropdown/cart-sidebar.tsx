import { Dispatch, SetStateAction } from "react";
import CartCard from "../cards/retreats/cart-card";
import { IoArrowForward } from "react-icons/io5";
import { useCart } from "@/context/card.context";
import { formatter } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type props = {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};
export const CartSideBar = ({ setOpenCart }: props) => {
  const { products } = useCart();
  const navigate = useNavigate();

  return (
    <div className="fixed z-[100] w-full h-[100vh] bg-[rgba(0,0,0,0.4)] my-auto flex">
      <div className="lg:w-[30%] w-full overflow-scroll pb-20 h-full bg-[#FFF] absolute right-0">
        <div className="flex w-[60%] pt-8 px-4 justify-between items-center relative">
          <div className="text-[20px]" onClick={() => setOpenCart(false)}>
            <IoArrowForward />
          </div>
          <h5 className="font-amsterdam pb-6 text-[24px] text-[#946C3C] font-medium">
            My Cart
          </h5>
        </div>
        <div className="px-6">
          {products.map((ele) => (
            <div key={ele.productId} className="w-full">
              <CartCard {...ele} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute lg:right-0 bottom-4 lg:w-[28%] right-[5%] w-[90%] mx-auto flex flex-col gap-[3px]">
        <p className="text-center text-gray-400 text-[12.4px] font-arapey tracking-[.4px] font-light">
          Shipping and taxes calculated at checkout
        </p>
        <div onClick={() => navigate("/checkout")} className="bg-[#946C3C] cursor-pointer w-full h-[56px] p-6 flex justify-center items-center">
          <p className="text-[#FFF] font-arapey font-normal">
            CHECKOUT ${" "}
            {formatter.format(
              products.length
                ? products
                    .map((ele) => Number(ele?.price) * ele.count)
                    ?.reduce((a, b) => a + b)
                : 0
            )}{" "}
            USD
          </p>
        </div>
      </div>
    </div>
  );
};
