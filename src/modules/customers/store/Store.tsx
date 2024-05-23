import Header from "@/shared/components/customersPanel/header/header";
import { CiSearch } from "react-icons/ci";
import { products } from "@/modules/landing/resouces";
import { Link } from "react-router-dom";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useState } from "react";
const Store = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Header />
      <section className="px-8 mt-36 flex gap-12">
        <form className=" w-full lg:max-w-[470px] ">
          <div className={`relative`}>
            <CiSearch
              className={`text-xl text-[#98A2B3] lg:text-5xl cursor-pointer w-6 absolute left-3 h-full my-auto`}
              width="24"
              height="24"
            />

            <input
              type="text"
              className="w-full border bg-transparent border-[#3DBDAD1] placeholder:text-[#98A2B3] focus:outline-none py-2 lg:py-4 pl-10 font-arapey "
              placeholder="Search store"
            />
          </div>
        </form>
      </section>
      <section className="mx-8 flex flex-wrap items-center mt-12  ">
        {products?.map((product: any, key: any) => {
          return (
            <div
              key={key}
              className="border-[0.5px] max-w-[326px]   border-[#DBDAD1] p-3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover max-h-[505px] w-full"
              />
              <p className="text-2xl  font-arapey mt-4">
                {product.name} ({product.scientificName})
              </p>
              <h1 className="font-recoleta text-primary font-bold text-[24px]">
                $ 350 USD
              </h1>
              <div className="w-full px-4 py-[22px] flex justify-between items-center">
                <CgMathMinus
                  className="cursor-pointer"
                  onClick={() => count !== 0 && setCount((prev) => prev - 1)}
                  size={20}
                  color="#000"
                />
                <p className=" text-gray-900 text-[20px]">{count}</p>
                <CgMathPlus
                  className="cursor-pointer"
                  onClick={() => setCount((prev) => prev + 1)}
                  size={20}
                  color="#000"
                />
              </div>
              <Link to={`/store/${product.id}`}>
                <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                  add to cart
                </button>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Store;
