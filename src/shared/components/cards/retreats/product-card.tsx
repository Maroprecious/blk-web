import { Button } from "@/components/ui/button";
import { randomColor } from "@/lib/utils";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useCart } from "@/context/card.context";
import { useNavigate } from "react-router-dom";

type Props = {
  items?: Array<string>;
  name: string;
  price: string;
  productId: string;
  images: string[];
};

export default function ProductCard({
  items,
  name,
  price,
  productId,
  images,
}: Props) {
  const navigate = useNavigate();
  const { addProduct, getProductCount, removeProduct } = useCart();

  return (
    <div className="w-[300px] h-[504px] border border-gray-200 p-2 flex flex-col justify-center items-start">
      <div
        onClick={() => navigate(`/store/${productId}`)}
        style={{
          backgroundImage: `url(${images[0]})`,
        }}
        className="w-full p-2 flex flex-wrap gap-2 h-[300px]  bg-cover bg-center bg-no-repeat"
      >
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
            onClick={() =>
              removeProduct({
                name,
                price,
                image: images[0],
                productId,
              })
            }
            size={20}
            color="#000"
          />
          <p className="font-maison text-gray-900 text-[20px]">
            {getProductCount(productId) as any}
          </p>
          <CgMathPlus
            className="cursor-pointer"
            onClick={() =>
              addProduct({
                name,
                price,
                image: images[0],
                productId,
              })
            }
            size={20}
            color="#000"
          />
        </div>
        <Button
          onClick={() =>
            addProduct({
              name,
              price,
              image: images[0],
              productId,
            })
          }
          className="w-full mt-4"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
