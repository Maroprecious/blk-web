import BreadCrumb from "@/components/ui/bread-crumb";
import { Button } from "@/components/ui/button";
import ProductCard from "@/shared/components/cards/retreats/product-card";
import { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
<<<<<<< HEAD
=======
import { PageLayout } from "@/shared/components/layout/page-layout";
>>>>>>> 12ca00bc8fd0d846a722d2655911f8273f36efe2

export default function StoreIdPage() {
  const [count, setCount] = useState<number>(0);

  return (
<<<<<<< HEAD
    <div className="w-full bg-white min-h-[100vh]">
      <BreadCrumb
        items={[
          {
            label: "Store",
            link: "/store",
          },
          {
            label: "Grains of paradise (Aframomum melegueta)",
            link: "/store/1234",
          },
        ]}
      />
      <div className="w-full h-[65vh] gap-4 flex justify-between items-center">
        <div className="w-[200px] flex flex-col gap-4 h-full">
          <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="grow bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat h-full"></div>
        <div className="w-[30%] px-4">
          <div className="p-2 bg-[#FDF7F3] w-fit h-fit flex justify-center items-center gap-2">
            <div className="w-[4px] bg-primary h-[4px] rounded-full" />
            <p className="font-maison text-primary font-light text-[14px]">
              Out of stock
            </p>
          </div>
          <h2 className="font-maison text-black w-[70%] text-[25px] font-regular">
            Lavender (Lavandula angustifolia)
          </h2>
          <h1 className="font-recoleta font-bold text-primary text-[40px]">
            $ 350 USD
          </h1>
          {[
            "Lavender is known for its pleasant fragrance and is often used in aromatherapy.",
            "It is used to promote relaxation, reduce anxiety, and improve sleep quality.",
            "Lavender oil can be applied topically or used in teas and bath products.",
          ].map((element) => (
            <div
              key={element}
              className="flex pb-4 justify-between items-center gap-2"
            >
              <div className="w-[7px] h-[7px] rounded-full bg-primary" />
              <p className="font-maison w-[95%] text-gray-900 text-[14px]">
                {element}
              </p>
            </div>
          ))}
          <div className="w-full pt-6 px-10 py-2 flex justify-between items-center">
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
          <Button className="w-full mt-6 uppercase">
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              className="mx-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8909 17.0143C12.3197 18.6147 11.3699 20.2597 9.76954 20.6885C8.16915 21.1174 6.52414 20.1676 6.09531 18.5672M8.3914 4.74036C8.69561 4.19306 8.79581 3.53156 8.62095 2.87896C8.2636 1.5453 6.89275 0.753842 5.55909 1.1112C4.22542 1.46855 3.43397 2.83939 3.79132 4.17306C3.96619 4.82566 4.38372 5.34843 4.92082 5.6703M13.7358 8.4448C13.3788 7.11267 12.4259 5.9987 11.0866 5.34797C9.74736 4.69724 8.13144 4.56304 6.59437 4.9749C5.05729 5.38676 3.72496 6.31094 2.89048 7.54412C2.056 8.77731 1.78773 10.2185 2.14467 11.5506C2.73524 13.7547 2.62057 15.5131 2.24761 16.8492C1.82255 18.3721 1.61001 19.1335 1.66743 19.2864C1.73312 19.4613 1.78064 19.5093 1.95488 19.5768C2.10717 19.6358 2.74694 19.4644 4.02648 19.1216L15.8915 15.9423C17.1711 15.5995 17.8109 15.428 17.9132 15.3008C18.0304 15.1552 18.0475 15.0899 18.017 14.9055C17.9902 14.7444 17.4255 14.1913 16.2959 13.085C15.3049 12.1143 14.3264 10.6489 13.7358 8.4448Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {"  "}
            Set reminder
          </Button>
        </div>
      </div>
      <p className="font-maison text-gray-900 text-[20px] font-regular py-4">
        Related products
      </p>
      <div className="flex w-full flex-wrap justify-start items-center gap-4">
        {Array(4)
          .fill("_")
          .map((element, idx) => (
            <div className="w-[24%]" key={element + idx}>
              <ProductCard items={["Energy healing", "Out of stock"]} />
            </div>
          ))}
      </div>
    </div>
=======
    <PageLayout>
      <div className="w-full bg-white p-8 mt-4 min-h-[100vh]">
        <BreadCrumb
          items={[
            {
              label: "Store",
              link: "/store",
            },
            {
              label: "Grains of paradise (Aframomum melegueta)",
              link: "/store/1234",
            },
          ]}
        />
        <div className="w-full h-[65vh] gap-4 flex justify-between items-center">
          <div className="w-[200px] flex flex-col gap-4 h-full">
            <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="w-full h-1/4 bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
          </div>
          <div className="grow bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat h-full"></div>
          <div className="w-[30%] px-4">
            <div className="p-2 bg-[#FDF7F3] w-fit h-fit flex justify-center items-center gap-2">
              <div className="w-[4px] bg-primary h-[4px] rounded-full" />
              <p className="font-maison text-primary font-light text-[14px]">
                Out of stock
              </p>
            </div>
            <h2 className="font-maison text-black w-[70%] text-[25px] font-regular">
              Lavender (Lavandula angustifolia)
            </h2>
            <h1 className="font-recoleta font-bold text-primary text-[40px]">
              $ 350 USD
            </h1>
            {[
              "Lavender is known for its pleasant fragrance and is often used in aromatherapy.",
              "It is used to promote relaxation, reduce anxiety, and improve sleep quality.",
              "Lavender oil can be applied topically or used in teas and bath products.",
            ].map((element) => (
              <div
                key={element}
                className="flex pb-4 justify-between items-center gap-2"
              >
                <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                <p className="font-maison w-[95%] text-gray-900 text-[14px]">
                  {element}
                </p>
              </div>
            ))}
            <div className="w-full pt-6 px-10 py-2 flex justify-between items-center">
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
            <Button className="w-full mt-6 uppercase">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8909 17.0143C12.3197 18.6147 11.3699 20.2597 9.76954 20.6885C8.16915 21.1174 6.52414 20.1676 6.09531 18.5672M8.3914 4.74036C8.69561 4.19306 8.79581 3.53156 8.62095 2.87896C8.2636 1.5453 6.89275 0.753842 5.55909 1.1112C4.22542 1.46855 3.43397 2.83939 3.79132 4.17306C3.96619 4.82566 4.38372 5.34843 4.92082 5.6703M13.7358 8.4448C13.3788 7.11267 12.4259 5.9987 11.0866 5.34797C9.74736 4.69724 8.13144 4.56304 6.59437 4.9749C5.05729 5.38676 3.72496 6.31094 2.89048 7.54412C2.056 8.77731 1.78773 10.2185 2.14467 11.5506C2.73524 13.7547 2.62057 15.5131 2.24761 16.8492C1.82255 18.3721 1.61001 19.1335 1.66743 19.2864C1.73312 19.4613 1.78064 19.5093 1.95488 19.5768C2.10717 19.6358 2.74694 19.4644 4.02648 19.1216L15.8915 15.9423C17.1711 15.5995 17.8109 15.428 17.9132 15.3008C18.0304 15.1552 18.0475 15.0899 18.017 14.9055C17.9902 14.7444 17.4255 14.1913 16.2959 13.085C15.3049 12.1143 14.3264 10.6489 13.7358 8.4448Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {"  "}
              Set reminder
            </Button>
          </div>
        </div>
        <p className="font-maison text-gray-900 text-[20px] font-regular py-4">
          Related products
        </p>
        <div className="flex w-full flex-wrap justify-start items-center gap-4">
          {Array(4)
            .fill("_")
            .map((element, idx) => (
              <div className="w-[24%]" key={element + idx}>
                <ProductCard items={["Energy healing", "Out of stock"]} />
              </div>
            ))}
        </div>
      </div>
    </PageLayout>
>>>>>>> 12ca00bc8fd0d846a722d2655911f8273f36efe2
  );
}
