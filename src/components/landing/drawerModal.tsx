import React from "react";
import { IoArrowForward } from "react-icons/io5";
import emptyCart from "@/assets/images/emptyCart.png";
import { Link } from "react-router-dom";
import { useCart } from "@/context/cart";
import Cart from "./cart";
const DrawerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cart } = useCart();
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className={`w-[456px] bg-white h-full shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4">
            <div className="flex w-[60%] pt-8  justify-between items-center relative">
              <div className="text-[20px]" onClick={onClose}>
                <IoArrowForward />
              </div>
              <h5 className="font-amsterdam text-[24px] text-[#946C3C] font-medium">
                My Cart
              </h5>
            </div>
          </div>
          <div className="p-4 h-full">
            {cart.length <= 0 ? (
              <>
                {" "}
                <div className="flex flex-col justify-center mt-40 items-center">
                  <img src={emptyCart} alt="empty Cart" />
                  <p className="font-amsterdam text-2xl">Cart is empty</p>
                </div>
                <Link
                  to="/store"
                  onClick={onClose}
                  className="flex justify-center"
                >
                  <button className="bg-[#946C3C] w-full max-w-[300px] mx-auto uppercase text-white   py-4  mt-[63px] ">
                    go to shop
                  </button>
                </Link>
              </>
            ) : (
              <Cart />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerModal;
