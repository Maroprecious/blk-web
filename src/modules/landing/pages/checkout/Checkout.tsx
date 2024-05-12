import BRHeader from "@/shared/components/header/header";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import emptyCart from "@/assets/images/emptyCart.png";
import { useCart } from "@/context/cart";
import { useState } from "react";
// import { Successful } from "@/shared/components/modals/successful";
import { loadStripe } from "@stripe/stripe-js";
import { LiaAngleRightSolid } from "react-icons/lia";
import ShippingInfo from "./ShippingInfo";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const stripePromise = loadStripe(
    "pk_live_51PEFql2NydvrzulHIQ7Dwq1qrAILvwfnAQb2yy7sk3UPUeCFrErG99pvrY6HyrQpMxzlKgrpKt6f3o1rT6a5ozEj00N6AjaP7q"
  );

  const options = {
    mode: "payment",
    amount: 210,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  const { cart, increaseQuantity, decreaseQuantity, calculateTotalPrice } =
    useCart();
  const itemPrices = cart.map((item) => item.price);
  const cartTotal = calculateTotalPrice();
  const [tab, setTab] = useState<number | null>(0);
  const handleActiveTab = (id: number) => {
    setTab(id);
  };

  if (cart.length <= 0) {
    return (
      <>
        {" "}
        <div className="flex flex-col justify-center mt-40 items-center">
          <img src={emptyCart} alt="empty Cart" />
          <p className="font-amsterdam text-2xl">Cart is empty</p>
        </div>
        <Link to="/store" className="flex justify-center">
          <button className="bg-[#946C3C] w-full max-w-[300px] mx-auto uppercase text-white   py-4  mt-[63px] ">
            go to shop
          </button>
        </Link>
      </>
    );
  }
  return (
    <div className="w-full items-stretch mt-20  flex pb-12 justify-between items-center">
      <BRHeader />
      <div className="w-[50%] bg-[#E6E5DE] pt-16 pb-12 px-24">
        <div className="flex ">
          {["Information", "Payment"].map((ele, id) =>
            id === 0 ? (
              <div className="flex items-center gap-[.5rem]" key={id}>
                <p
                  className="text-[15px] font-light text-[#000000] cursor-pointer"
                  onClick={() => handleActiveTab(id)}
                >
                  {ele}
                </p>
                <div className="font-bold text-[19px]">
                  <LiaAngleRightSolid />
                </div>
              </div>
            ) : (
              <p
                className="text-[15px] ml-2 font-light text-[#000000] cursor-pointer"
                onClick={() => handleActiveTab(id)}
              >
                {ele}
              </p>
            )
          )}
        </div>

        {tab === 0 ? (
          <>
            <ShippingInfo />
          </>
        ) : (
          <>
            {
              <Elements stripe={stripePromise} options={options}>
                <Payment />
              </Elements>
            }
          </>
        )}
      </div>
      <div className="w-[50%] bg-gray-100 pb-12 pt-12 px-24">
        <div className="pt-20 w-[403px]">
          {cart?.map((cartItem) => {
            return (
              <div key={cartItem.id} className="w-full">
                <div className="w-full h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
                  <div className="w-[147px] h-[138px]">
                    <img src={cartItem.images[0]} alt="" className="h-full" />
                  </div>
                  <div className="w-[65%] flex flex-col justify-center items-center mt-8">
                    <h3 className="font-maison text-[#000000] text-[19px] font-extralight">
                      {cartItem.name}
                    </h3>
                    <div className="flex justify-between items-start w-full mt-4">
                      <div className="w-[35%] flex justify-between items-center">
                        <CgMathMinus
                          className="cursor-pointer"
                          onClick={() => decreaseQuantity(cartItem.id)}
                          size={16}
                          color="#000"
                        />
                        <p className="font-maison text-gray-900 text-[16px]">
                          {cartItem.quantity}
                        </p>
                        <CgMathPlus
                          className="cursor-pointer"
                          onClick={() => increaseQuantity(cartItem.id)}
                          size={16}
                          color="#000"
                        />
                      </div>
                      <h1 className="font-recoleta text-primary text-right font-medium text-[20px]">
                        $ {cartItem.price} USD
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[403px] border-t border-t-gray-400 ">
          <div className="flex justify-between items-center pt-4">
            <p className="font-maison font-light text-[15px]">Subtotal</p>
            <p className="font-maison font-medium text-[15px]">
              $ {itemPrices}
            </p>
          </div>
          <div className="flex justify-between items-center pt-4">
            <p className="font-maison font-light text-[15px]">Shipping fee</p>
            <p className="font-maison font-medium text-[15px]">$ 0.00</p>
          </div>
          <div className=" border-b border-b-gray-400 pb-4" />
          <div className="flex justify-between items-center pt-4">
            <p className="text-[24px] font-normal text-primary">Total</p>
            <p className="text-primary font-medium text-[24px]">
              $ {cartTotal}
            </p>
          </div>
        </div>
      </div>
      {/* {showPaymentModal && <Successful />} */}
    </div>
  );
};
export default CheckoutPage;
