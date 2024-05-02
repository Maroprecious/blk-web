import Header from "@/shared/components/customersPanel/header/header";
import CalendarComponent from "./calendar";
import "./home.css";
import { Link } from "react-router-dom";
import { products } from "@/modules/landing/resouces";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useState } from "react";
import Map from "@/components/customers/Map";
import RetreatEmptyState from "@/components/customers/retreatEmptyState";
// import OngoingRetreat from "@/components/customers/OngoingRetreat";
const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Header />
      <section className="px-8 mt-36 flex gap-12">
        <div>
          <h2 className="text-2xl">Ongoing retreat</h2>
          <RetreatEmptyState />
        </div>
        <div className="flex-1">
          <CalendarComponent />
        </div>
      </section>
      <section className="px-8 mt-36 flex gap-4  w-full">
        <div className="">
          <h2 className="text-2xl mb-6">Herbalpaedia</h2>
          <div className="flex gap-3  ">
            {products?.slice(0, 2).map((product: any, key: any) => {
              return (
                <div key={key} className="border-[0.5px]  border-[#DBDAD1] p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover max-h-[505px] w-full"
                  />
                  <p className="text-2xl  font-arapey mt-4">
                    {product.name} ({product.scientificName})
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                      <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                      <p className="text-[#CF956F] text-base inline-block">
                        Spiritual use
                      </p>
                    </div>
                    <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                      <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                      <p className="text-[#CF956F] inline-block">
                        Medicinal use
                      </p>
                    </div>
                    <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                      <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                      <p className="text-[#CF956F] inline-block">
                        Side effects
                      </p>
                    </div>
                  </div>
                  <Link to={`/herbs/${product.id}`}>
                    <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                      read
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl mb-6">Featured products</h2>
          <div className="flex gap-3">
            {products?.slice(0, 2).map((product: any, key: any) => {
              return (
                <div
                  key={key}
                  className="border-[0.5px]   border-[#DBDAD1] p-3"
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
                      onClick={() =>
                        count !== 0 && setCount((prev) => prev - 1)
                      }
                      size={20}
                      color="#000"
                    />
                    <p className="font-maison text-gray-900 text-[20px]">
                      {count}
                    </p>
                    <CgMathPlus
                      className="cursor-pointer"
                      onClick={() => setCount((prev) => prev + 1)}
                      size={20}
                      color="#000"
                    />
                  </div>
                  <Link to={`/herbs/${product.id}`}>
                    <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                      add to cart
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-8 mt-8 mb-24 gap-4  w-full ">
        <h2 className="text-2xl mb-6">World overview</h2>
        <Map />
      </section>
    </div>
  );
};

export default Home;
