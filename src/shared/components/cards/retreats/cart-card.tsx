// import { randomColor } from "@/lib/utils";
import { useState } from "react";
import { CgMathMinus, CgMathPlus, CgClose } from "react-icons/cg";

export default function CartCard() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-full h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
      <div className="w-[147px] h-[138px] bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="w-[65%] flex flex-col justify-center items-center mt-8">
        <h3 className="font-maison text-[#000000] text-[19px] font-extralight">
          Lavender <span className="italic">(Lavandula angustifolia)</span>
        </h3>
        <div className="flex justify-between items-start w-full mt-4">
          <div className="w-[35%] flex justify-between items-center">
            <CgMathMinus
              className="cursor-pointer"
              onClick={() => count !== 0 && setCount((prev) => prev - 1)}
              size={16}
              color="#000"
            />
            <p className="font-maison text-gray-900 text-[16px]">{count}</p>
            <CgMathPlus
              className="cursor-pointer"
              onClick={() => setCount((prev) => prev + 1)}
              size={16}
              color="#000"
            />
          </div>
          <h1 className="font-recoleta text-primary text-right font-medium text-[20px]">
            $ 350 USD
          </h1>
        </div>
      </div>
      <div className="text-[#F04438] font-medium text-[20px] mt-[-8.7rem]">
        <CgClose />
      </div>
    </div>
  );
}
