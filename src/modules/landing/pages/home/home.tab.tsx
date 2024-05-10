import { useGetAllHerbapaedia, useGetFeaturedProducts } from "@/api/queries";
import Calandar from "@/shared/components/calandar/calandar";
import { EmptyRetreat } from "@/shared/components/cards/retreats/empty-state";
import HerbalpaediaCard from "@/shared/components/cards/retreats/herbalpaedia-card";
import ProductCard from "@/shared/components/cards/retreats/product-card";
import { PageLayout } from "@/shared/components/layout/page-layout";
// import { userAtom } from "@/store/store";
// import { useAtom } from "jotai";

export default function HomeTab() {
  const { data } = useGetAllHerbapaedia();
  // const [user] = useAtom(userAtom);

  const { data: featured } = useGetFeaturedProducts();

  return (
    <PageLayout>
      <div className="w-full p-8 bg-white">
        <section className="w-full relative z-20 h-full flex lg:flex-row flex-col justify-between items-start">
          <div className="lg:w-[23%] w-full mt-[38px]">
            <h2 className="font-arapey font-extralight pb-6 text-gray-900 text-[24px]">
              Ongoing retreat
            </h2>
            <div>
              <EmptyRetreat />
            </div>
          </div>
          <div className="lg:w-[75%] w-full scale-y-[0.85] relative">
            <Calandar />
          </div>
        </section>
        <section className="flex lg:flex-row flex-col mt-6 relative z-50 gap-4 py-10">
          <div className="lg:max-w-[90%] w-full">
            <h2 className="font-arapey pb-4 text-gray-900 text-[24px]">
              Herbalpaedia
            </h2>
            {data?.data?.data
              ?.slice(0, 2)
              .map((elem: { name: string; sciName: string; id: number }) => (
                <div className="flex justify-start items-center gap-4">
                  <HerbalpaediaCard
                    name={elem.name}
                    sciName={elem.sciName}
                    id={elem.id}
                  />
                </div>
              ))}
          </div>
          <div className="lg:max-w-[90%] w-full">
            <h2 className="font-arapey pb-4 text-gray-900 text-[24px]">
              Featured products
            </h2>
            <div className="flex justify-start items-center gap-4">
              {featured?.data?.data
                ?.slice(0, 2)
                .map(
                  (elem: {
                    name: string;
                    price: string;
                    id: number;
                    images: Array<string>;
                  }) => (
                    <div className="flex justify-start items-center gap-4">
                      <ProductCard
                        productId={elem.id.toString()}
                        images={elem.images}
                        name={elem.name}
                        price={elem.price}
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
