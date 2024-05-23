// import { randomColor } from "@/lib/utils";
import { product } from "@/context/card.context";
import { CgMathMinus, CgMathPlus, CgClose } from "react-icons/cg";
import { useCart } from "@/context/card.context";

export default function CartCard(props: product) {
  const { addProduct, removeProduct, deleteItemFromcart } = useCart();

  return (
    <div className="w-full h-[180px] border-b border-gray-200 gap-[.8rem] flex justify-start items-center">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className="w-[147px] h-[138px]  bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="w-[65%] flex flex-col justify-center items-center mt-8">
        <h3 className="font-arapey text-[#000000] text-[19px] font-extralight">
          {props.name.split("(")[0]}
          <span className="italic">
            {props.name.split("(").length > 1
              ? "(" + props.name.split("(")[1]
              : ""}
          </span>
        </h3>
        <div className="flex justify-start items-start w-full mt-4">
          <div className="w-[40%] flex justify-between items-center">
            <CgMathMinus
              className="cursor-pointer"
              onClick={() => removeProduct(props)}
              size={16}
              color="#000"
            />
            <p className="font-arapey text-gray-900 text-[16px]">
              {props.count}
            </p>
            <CgMathPlus
              className="cursor-pointer"
              onClick={() => addProduct(props)}
              size={16}
              color="#000"
            />
          </div>
          <h1 className="font-arapey w-[60%] text-primary text-right font-medium text-[18px]">
            ${props.price} USD
          </h1>
        </div>
      </div>
      <div
        onClick={() => {
          deleteItemFromcart(props.name);
        }}
        className="text-[#F04438] cursor-pointer font-medium text-[20px] mt-[-8.7rem]"
      >
        <CgClose />
      </div>
    </div>
  );
}
