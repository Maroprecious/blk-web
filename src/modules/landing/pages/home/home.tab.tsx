import Calandar from "@/shared/components/calandar/calandar";
import { EmptyRetreat } from "@/shared/components/cards/retreats/empty-state";
import HerbalpaediaCard from "@/shared/components/cards/retreats/herbalpaedia-card";
import ProductCard from "@/shared/components/cards/retreats/product-card";

export default function () {
  return (
    <div className="w-full p-8 bg-white">
      <section className="w-full relative z-20  flex justify-between items-start">
        <div className="w-[23%] ">
          <h2 className="font-medium pb-12 text-gray-900 text-[24px]">
            Ongoing retreat
          </h2>
          <EmptyRetreat />
        </div>
        <div className="w-[75%] scale-y-[0.8] h-[404px] relative">
          <Calandar />
        </div>
      </section>
      <section className="flex relative z-50 gap-4 py-10">
        <div className="w-1/2">
          <h2 className="font-maison text-gray-900 text-[24px]">
            Herbalpaedia
          </h2>
          <div className="flex justify-start items-center gap-4">
            <HerbalpaediaCard />
            <HerbalpaediaCard />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="font-maison text-gray-900 text-[24px]">
            Featured products
          </h2>
          <div className="flex justify-start items-center gap-4">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
}
