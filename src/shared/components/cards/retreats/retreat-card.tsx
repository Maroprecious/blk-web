import { Button } from "@/components/ui/button";
import { randomColor } from "@/lib/utils";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import people from '../../.././../assets/icons/people.svg'

type Props = {
  items?: Array<string>;
  name: string;
  price: string;
};

export default function RetreatCard({ items, name, price }: Props) {
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
        <div className="w-full py-2 flex justify-start gap-[.7rem] items-start">
          <div className="flex items-center p-2 gap-[.3rem] justify-items-start bg-cream-300">
            <FaRegClock size={20} color='#CF956F'/>
            <p className="text-clay-900 text-[15px]">18th - 22nd, 2023</p>
          </div>
          <div className="flex items-center p-2 gap-[.3rem] justify-items-start bg-cream-300">
            <img src={people} />
            <p className="text-clay-900 text-[15px]">56 people</p>
          </div>
        </div>
        <Button className="w-full mt-4">VIEW DETAILS</Button>
      </div>
    </div>
  );
}
