import NoResultsFound from "@/modules/landing/pages/herbalpedia/NoResultsFound.page";
import { useParams } from "react-router-dom";
import { products } from "@/modules/landing/resouces";
import Header from "@/shared/components/customersPanel/header/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const HerbalpediaDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = products.find(
    (product) => product.id.toString() === productId
  );

  if (!selectedProduct) {
    return (
      <div>
        <NoResultsFound />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <section className="max-w-[1200px] mx-auto px-4 screen:px-[0px] mt-[96px] xl:mt-[150px]">
        <div className="flex gap-6">
          <div className="w-full md:w-[588px] h-[499px] overflow-hidden">
            <img
              src={selectedProduct?.image}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-6 relative">
            <div className="h-[237px] w-[282px] invisible screen:visible">
              <img
                src={selectedProduct?.image}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[297px] w-full screen:w-[282px] screen:h-[285px] absolute right-0 top-0">
              <img
                src={selectedProduct?.image}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[237px] w-[282px] invisible screen:visible absolute bottom-0">
              <img
                src={selectedProduct?.image}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[178px] w-full screen:w-[282px] absolute bottom-0 right-0">
              <img
                src={selectedProduct?.image}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-[120px] mt-[60px] grid">
        <div className="flex flex-wrap gap-y-4 items-center mb-2 justify-between">
          <h4 className="text-[#946C3C] text-3xl font-medium ">
            {selectedProduct?.name} ({selectedProduct?.scientificName})
          </h4>
          <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
            <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full"></div>
            <p className="text-[#CF956F] inline-block">Spiritual use</p>
          </div>
        </div>
        <p className="text-[#667085] max-w-[1058px]">
          Our retreats are open to individuals aged 28-60 living in the United
          States. Whether you're a seasoned wellness enthusiast or new to
          holistic living, our retreats cater to a wide range of backgrounds and
          experiences.
        </p>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Medicinal use
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {selectedProduct?.medicinalUse}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Spiritual use
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {selectedProduct?.medicinalUse}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Contradictions
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {selectedProduct?.Contradictions}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Interactions
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#667085]">
                {selectedProduct?.Interactions}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <button className="h-10 w-[219px] uppercase bg-[#946C3C] text-white justify-self-end mt-6 ">
          buy now ${selectedProduct?.Price}
        </button>
      </section>
    </div>
  );
};

export default HerbalpediaDetail;