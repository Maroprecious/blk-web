import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useParams } from "react-router-dom";
import { products } from "@/modules/landing/resouces";
import NoResultsFound from "@/modules/landing/pages/herbalpeadia/NoResultsFound.page";
import BRHeader from "@/shared/components/header/header";
import Footer from "../Footer";
const ProductDetails = () => {
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
      <BRHeader />
      <section className="px-4 lg:px-[120px] mt-[150px]">
        <div className="flex gap-6">
          <div className=" w-[588px]  h-[499px] overflow-hidden">
            <img
              src={selectedProduct.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2  gap-6  relative">
            <div className="h-[237px] w-[282px]">
              <img
                src={selectedProduct.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" h-[297px] w-[282px] absolute right-0 top-0">
              <img
                src={selectedProduct.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[237px] w-[282px] absolute bottom-0">
              <img
                src={selectedProduct.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[178px] w-[282px] absolute bottom-0 right-0">
              <img
                src={selectedProduct.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section */}
      <section className="px-4 lg:px-[120px] mt-[60px] grid">
        <div className="flex items-center justify-between">
          <h4 className="text-[#946C3C] font-recoleta text-2xl font-medium ">
            {selectedProduct.name}({selectedProduct.scientificName})
          </h4>
          <div className="bg-white p-2 flex items-center gap-1">
            <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
            <p className="text-[#CF956F] inline-block">Spiritual use</p>
          </div>
        </div>
        <p className="text-[#667085]">
          Our retreats are open to individuals aged 28-60 living in the United
          States. Whether you're a seasoned wellness enthusiast or new to
          holistic living, our retreats cater to a wide range of backgrounds and
          experiences.
        </p>
        <div className="mt-8">
          <Accordion type="single" collapsible key={selectedProduct.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Medicinal use
              </AccordionTrigger>
              <AccordionContent className="text-[#667085]">
                {selectedProduct.medicinalUse}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible key={selectedProduct.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Spiritual use
              </AccordionTrigger>
              <AccordionContent className="text-[#667085]">
                {selectedProduct.medicinalUse}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible key={selectedProduct.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Contradictions
              </AccordionTrigger>
              <AccordionContent className="text-[#667085]">
                {selectedProduct.Contradictions}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible key={selectedProduct.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-3xl">
                Interactions
              </AccordionTrigger>
              <AccordionContent className="text-[#667085]">
                {selectedProduct.Interactions}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <button className="h-10 w-[219px] uppercase bg-[#946C3C] text-white justify-self-end mt-6 ">
          buy now {selectedProduct.Price}
        </button>
      </section>
      {/* section */}
      <section className=" mt-[60px]">
        <h2 className="px-4 lg:px-[120px] lg:text-[64px] font-recoleta ">
          Related herbs
        </h2>
        <div className="flex">
          {products.slice(0, 3).map((product) => {
            return (
              <div
                key={product.id}
                className="border-[0.5px] border-[#DBDAD1]  w-460 p-6"
              >
                <img src={product.image} alt={product.name} />
                <p className="text-2xl font-maison mt-4">
                  {product.name}
                  <span className="italic">({product.scientificName})</span>
                </p>
                <div className="flex gap-2 mb-4 mt-2">
                  <div className="bg-white p-2 flex items-center gap-1">
                    <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                    <p className="text-[#CF956F] inline-block">Spiritual use</p>
                  </div>
                  <div className="bg-white p-2 flex items-center gap-1">
                    <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                    <p className="text-[#CF956F] inline-block">Medicinal use</p>
                  </div>
                  <div className="bg-white p-2 flex items-center gap-1">
                    <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                    <p className="text-[#CF956F] inline-block">Side effects</p>
                  </div>
                </div>
                <Link to={`/herbs/${product.id}`}>
                  <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                    read more
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
