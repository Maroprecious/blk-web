import { Button } from "@/components/ui/button";
import { randomColor } from "@/lib/utils";
import { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

type Props = {
  items?: Array<string>;
  name: string;
  price: string;
};

export default function ProductCard({ items, name, price }: Props) {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-full h-[504px] border border-gray-200 p-2 flex flex-col justify-center items-start">
      <div className="w-full p-2 flex flex-wrap gap-2 h-[300px] bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat">
        {items?.map((element) => {
          const { colorWithOpacity, colorWithoutOpacity } = randomColor(0.1);
          return (
            <div
              style={{ backgroundColor: colorWithOpacity }}
              className="p-2 w-fit h-fit flex justify-center items-center gap-2"
            >
              <div
                style={{ backgroundColor: colorWithoutOpacity }}
                className="w-[4px] h-[4px] rounded-full"
              />
              <p
                style={{ color: colorWithoutOpacity }}
                className="font-maison font-light text-[14px]"
              >
                {element}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full p-2">
        <h3 className="font-maison text-gray-900 text-[24px] font-medium">
          {/* Lavender <span className="italic">(Lavandula angustifolia)</span> */}
          {name}
        </h3>
        <h1 className="font-recoleta text-primary font-bold text-[24px]">
          $ {price} USD
        </h1>
        <div className="w-full px-10 py-2 flex justify-between items-center">
          <CgMathMinus
            className="cursor-pointer"
            onClick={() => count !== 0 && setCount((prev) => prev - 1)}
            size={20}
            color="#000"
          />
          <p className="font-maison text-gray-900 text-[20px]">{count}</p>
          <CgMathPlus
            className="cursor-pointer"
            onClick={() => setCount((prev) => prev + 1)}
            size={20}
            color="#000"
          />
        </div>
        <Button className="w-full mt-4">ADD TO CART</Button>
      </div>
    </div>
  );
}
