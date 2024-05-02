import { useGetAllHerbapaedia, useGetFeaturedProducts } from "@/api/queries";
import Calandar from "@/shared/components/calandar/calandar";
import { EmptyRetreat } from "@/shared/components/cards/retreats/empty-state";
import HerbalpaediaCard from "@/shared/components/cards/retreats/herbalpaedia-card";
import ProductCard from "@/shared/components/cards/retreats/product-card";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { userAtom } from "@/store/store";
import { useAtom } from "jotai";

export default function HomeTab() {
  const { data } = useGetAllHerbapaedia();
  const [user] = useAtom(userAtom);

  const {data: featured} = useGetFeaturedProducts()

  return (
    <PageLayout>
      <div className="w-full p-8 bg-white">
        <section className="w-full relative z-20  flex justify-between items-start">
          <div className="w-[23%] mt-[38px]">
            <h2 className="font-medium pb-6 text-gray-900 text-[24px]">
              Ongoing retreat
            </h2>
            <div>
              <EmptyRetreat />
            </div>
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
            {data?.data?.data?.slice(0, 2)
            .map(
              (elem: { name: string; sciName: string; id: number }) => (
                <div className="flex justify-start items-center gap-4">
                  <HerbalpaediaCard
                    name={elem.name}
                    sciName={elem.sciName}
                    id={elem.id}
                  />
                </div>
              )
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-maison text-gray-900 text-[24px]">
              Featured products
            </h2>
            <div className="flex justify-start items-center gap-4">
            {/* {featured?.data?.data?.slice(0, 2)
            .map(
              (elem: { name: string; price: string}) => (
                <div className="flex justify-start items-center gap-4">
                  <ProductCard name={elem.name} price={elem.price} />
                </div>
              )
            )} */}
             
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
