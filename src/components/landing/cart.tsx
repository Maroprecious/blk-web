import { CgMathMinus, CgMathPlus, CgClose } from "react-icons/cg";
import { useCart } from "@/context/cart";
import { useState } from "react";
interface ChildProps {
  quantity: number;
}
const Cart: React.FC<ChildProps> = ({ quantity }) => {
  const { cart } = useCart();
  const [qty, setQuantity] = useState(quantity);
  console.log(qty);

  const increaseQuantity = () => {
    return setQuantity((prevQuantity: any) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (qty > 0) {
      return setQuantity((prevQuantity: any) => prevQuantity - 1);
    }
  };
  return (
    <div className=" relative">
      {" "}
      <div className="py-6">
        {cart.length <= 0
          ? ""
          : cart.map((cartItem) => {
              return (
                <div key={cartItem.id} className="w-full">
                  <div className="w-full h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
                    <div className="w-[147px] h-[138px] bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="w-[65%] flex flex-col justify-center items-center mt-8">
                      <h3 className="font-maison text-[#000000] text-[19px] font-extralight">
                        {cartItem.name}{" "}
                        <span className="italic">(Lavandula angustifolia)</span>
                      </h3>
                      <div className="flex justify-between items-start w-full mt-4">
                        <div className="w-[35%] flex justify-between items-center">
                          <CgMathMinus
                            className="cursor-pointer"
                            onClick={() => decreaseQuantity()}
                            size={16}
                            color="#000"
                          />
                          <p className="font-maison text-gray-900 text-[16px]">
                            {quantity}
                          </p>
                          <CgMathPlus
                            className="cursor-pointer"
                            onClick={() => increaseQuantity()}
                            size={16}
                            color="#000"
                          />
                        </div>
                        <h1 className="font-recoleta text-primary text-right font-medium text-[20px]">
                          $ {cartItem.price} USD
                        </h1>
                      </div>
                    </div>
                    <div className="text-[#F04438] font-medium text-[20px] mt-[-8.7rem]">
                      <CgClose />
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="fixed  bottom-0 right-0  w-full flex flex-col gap-[3px] ">
        <p className="text-center text-gray-400 text-[12.4px] font-maison tracking-[.4px] font-light">
          Shipping and taxes calculated at checkout
        </p>
        <div className="bg-[#946C3C]  w-full  h-[56px] p-6 flex justify-center items-center">
          <p className="text-[#FFF] font-maison font-normal">
            CHECKOUT $ 700.00 USD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
