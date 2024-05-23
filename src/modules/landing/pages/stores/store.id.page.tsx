import BreadCrumb from "@/components/ui/bread-crumb";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { useGetOneProduct } from "@/api/queries";
import { useParams } from "react-router-dom";
import { useCart } from "@/context/card.context";

export default function StoreIdPage() {
  const params = useParams();
  const { data, refetch } = useGetOneProduct(params.id as any);
  const { addProduct, removeProduct, getProductCount } = useCart();

  useEffect(() => {
    if (params.id) {
      refetch();
    }
  }, [params]);
  return (
    <PageLayout>
      <div className="w-full bg-white p-8 mt-4 min-h-[100vh]">
        <BreadCrumb
          items={[
            {
              label: "Store",
              link: "/store",
            },
            {
              label: data?.data?.name,
              link: ``,
            },
          ]}
        />
        <div className="w-full h-[65vh] gap-4 flex justify-between items-center">
          {data?.data?.images[1] ? (
            <>
              <div className="w-[200px] flex flex-col gap-4 h-full">
                <div
                  className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${data?.data?.images[1]}')` }}
                ></div>
                <div
                  className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${data?.data?.images[2]}')` }}
                ></div>
                <div
                  className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${data?.data?.images[3]}')` }}
                ></div>
                <div
                  className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${data?.data?.images[4]}')` }}
                ></div>
              </div>
              <div
                className="grow bg-cover bg-center bg-no-repeat h-full"
                style={{ backgroundImage: `url('${data?.data?.images[0]}')` }}
              ></div>
            </>
          ) : (
            <div
              className="grow bg-cover bg-center bg-no-repeat h-full"
              style={{ backgroundImage: `url('${data?.data?.images[0]}')` }}
            ></div>
          )}
          <div className="w-[30%] px-4">
            {/* <div className="p-2 bg-[#FDF7F3] w-fit h-fit flex justify-center items-center gap-2">
              <div className="w-[4px] bg-primary h-[4px] rounded-full" />
              <p className="font-maison text-primary font-light text-[14px]">
                Out of stock
              </p>
            </div> */}
            <h2 className="font-arapey text-black w-[80%] text-[25px] font-regular">
              {data?.data?.name}
            </h2>
            <h1 className="font-arapey font-bold text-primary text-[40px]">
              ${data?.data?.price} USD
            </h1>

            <div className="flex pb-4 justify-between items-center gap-2">
              <div className="w-[7px] h-[7px] rounded-full bg-primary" />
              <p className="font-arapey w-[95%] text-gray-900 text-[14px]">
                {data?.data?.desc}
              </p>
            </div>

            <div className="w-full pt-6 px-10 py-2 flex justify-between items-center">
              <CgMathMinus
                className="cursor-pointer"
                onClick={() =>
                  removeProduct({
                    name: data?.data?.name,
                    price: data?.data?.price,
                    image: data?.data?.images[0],
                    productId: data?.data?.id,
                  })
                }
                size={20}
                color="#000"
              />
              <p className="font-maison text-gray-900 text-[20px]">
                {getProductCount(data?.data?.id)}
              </p>
              <CgMathPlus
                className="cursor-pointer"
                onClick={() =>
                  addProduct({
                    name: data?.data?.name,
                    price: data?.data?.price,
                    image: data?.data?.images[0],
                    productId: data?.data?.id,
                  })
                }
                size={20}
                color="#000"
              />
            </div>
            <Button
              onClick={() =>
                addProduct({
                  name: data?.data?.name,
                  price: data?.data?.price,
                  image: data?.data?.images[0],
                  productId: data?.data?.id,
                })
              }
              className="w-full mt-6 uppercase"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
        {/* <p className="font-maison text-gray-900 text-[20px] font-regular py-4">
          Related products
        </p> */}
        <div className="flex w-full flex-wrap justify-start items-center gap-4">
          {/* {Array(4)
            .fill("_")
            .map((element, idx) => (
              <div className="w-[24%]" key={element + idx}>
                <ProductCard items={["Energy healing", "Out of stock"]} />
              </div>
            ))} */}
        </div>
      </div>
    </PageLayout>
  );
}
