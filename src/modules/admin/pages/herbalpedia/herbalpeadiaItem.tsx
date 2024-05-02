import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useParams } from "react-router-dom";
import { products } from "@/modules/landing/resouces";
import NoResultsFound from "@/modules/landing/pages/herbalpedia/NoResultsFound.page";
import Layout from "@/shared/admin/layout/Layout";
import BreadCrumb from "@/components/ui/bread-crumb";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import { Skeleton } from "@/components/ui/skeleton";
const ProductDetails = () => {
  const { herbId } = useParams();

  const selectedProduct = products.find(
    (product) => product.id.toString() === herbId
  );
  const { data, loading } = useFetch(`${URL}/herbalpedia/${herbId}`, "GET");
  console.log(loading, data?.data);
  const HerbsProduct = data?.data;

  if (!selectedProduct) {
    return (
      <div>
        <NoResultsFound />
      </div>
    );
  }

  return (
    <Layout>
      <section className="   screen:px-[0px]  ">
        <BreadCrumb
          items={[
            {
              label: "Herbalpaedia",
              link: "/admin/herbalpaedia",
            },
            {
              label: "Grains of paradise (Aframomum melegueta)",
              link: "/herbalpaedia/1234",
            },
          ]}
        />
        <div className="flex gap-6">
          <div className="w-full md:w-[588px] h-[499px] overflow-hidden">
            <img
              src={HerbsProduct?.images[0]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-6 relative">
            <div className="h-[237px] w-[282px] invisible screen:visible">
              {loading ? (
                // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />
                <Skeleton className="w-full  h-full rounded-xl" />
              ) : (
                <img
                  src={HerbsProduct?.images[0]}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="h-[297px] w-full screen:w-[282px] screen:h-[285px] absolute right-0 top-0">
              {loading ? (
                // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />
                <Skeleton className="w-full  h-full rounded-xl" />
              ) : (
                <img
                  src={HerbsProduct?.images[0]}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="h-[237px] w-[282px] invisible screen:visible absolute bottom-0">
              {loading ? (
                // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />
                <Skeleton className="w-full  h-full rounded-xl" />
              ) : (
                <img
                  src={HerbsProduct?.images[0]}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="h-[178px] w-full screen:w-[282px] absolute bottom-0 right-0">
              {loading ? (
                // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />
                <Skeleton className="w-full  h-full rounded-xl" />
              ) : (
                <img
                  src={HerbsProduct?.images[0]}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* section */}
      <section className=" mt-[60px] grid">
        <div className="flex flex-wrap gap-y-4 items-center mb-2 justify-between">
          <h4 className="text-[#946C3C] font-amsterdam my-5 text-3xl font-medium ">
            {HerbsProduct?.name} ({HerbsProduct?.sciName})
          </h4>
          <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
            <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full"></div>
            <p className="text-[#CF956F] inline-block">Spiritual use</p>
          </div>
        </div>
        <p className="text-[#667085] max-w-[1058px]">{HerbsProduct?.about}</p>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Medicinal use
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {HerbsProduct?.medUse}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Spiritual use
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {HerbsProduct?.spiritUse}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Side Effects
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {HerbsProduct?.sideEffects}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Interactions
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {selectedProduct?.Interactions}
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
        <button className="h-10 w-[219px] uppercase bg-[#946C3C] text-white justify-self-end mt-6 ">
          buy now $120
        </button>
      </section>
      {/* section */}
    </Layout>
  );
};

export default ProductDetails;
