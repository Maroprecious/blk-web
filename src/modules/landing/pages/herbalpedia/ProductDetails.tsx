import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
// import NoResultsFound from "@/modules/landing/pages/herbalpedia/NoResultsFound.page";
import Footer from "../../../../components/landing/Footer";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import BRHeader from "@/shared/components/header/header";
// import { Skeleton } from "@/components/ui/skeleton";
import { GoPlus } from "react-icons/go";

const ProductDetails = () => {
  const { herbId } = useParams();

  const { data, loading } = useFetch(`${URL}/herbalpedia/${herbId}`, "GET");
  console.log(loading, data?.data);
  const HerbsProduct = data?.data;
  console.log(HerbsProduct);

  return (
    <div>
      <BRHeader />
      {loading ? (
        <div
          role="status"
          className="flex justify-between w-full h-28 items-center translate-x-1/2 mt-40"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8   animate-spin text-[#E6E5DE]  fill-[#946C3C]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          <section className="max-w-[1200px] mx-auto px-4 screen:px-[0px] mt-[96px] xl:mt-[150px]">
            <div className="w-full lg:h-[60vh] gap-6 flex justify-between items-start">
              <div className="w-[60%] h-full">
                <div
                  className={`w-full h-full  bg-cover bg-center bg-no-repeat`}
                >
                  {HerbsProduct?.images[0] ? (
                    <img
                      src={HerbsProduct?.images[0]}
                      className=" w-full h-full"
                    />
                  ) : (
                    <div className=" animate-pulse rounded-md object-cover w-full h-full bg-slate-400 opacity-50"></div>
                  )}
                </div>
                {/* {loading ? (
                  // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />
                  <Skeleton className="w-full  h-full rounded-xl" />
                ) : (
                  <img
                    src={HerbsProduct?.images[0]}
                    className="object-cover w-[588px] h-[499px]"
                  />
                )} */}
              </div>
              <div className="w-[38%] h-full flex justify-between items-start gap-6">
                <div className="grow h-full flex flex-col gap-6">
                  <div
                    className={` h-1/2 w-full  bg-cover bg-center bg-no-repeat`}
                  >
                    {HerbsProduct?.images[1] ? (
                      <img
                        src={HerbsProduct?.images[1]}
                        className=" w-full h-full"
                      />
                    ) : (
                      <div className=" animate-pulse rounded-md object-cover w-full h-full bg-slate-400 opacity-50"></div>
                    )}
                  </div>
                  <div className=" h-[220px] w-full  bg-cover bg-center bg-no-repeat">
                    {HerbsProduct?.images[2] ? (
                      <img
                        src={HerbsProduct?.images[2]}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className=" animate-pulse rounded-md object-cover w-full h-full bg-slate-400 opacity-50"></div>
                    )}
                  </div>
                </div>
                <div className="w-1/3 h-full flex flex-col gap-6">
                  <div className="w-full h-[60%]  bg-cover bg-center bg-no-repeat">
                    {HerbsProduct?.images[3] ? (
                      <img
                        src={HerbsProduct?.images[3]}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className=" animate-pulse rounded-md object-cover w-full h-full bg-slate-400 opacity-50"></div>
                    )}
                  </div>
                  {HerbsProduct.length > 5 ? (
                    <div className="w-full relative h-[40%] bg-transparent bg-cover bg-center bg-no-repeat">
                      <div
                        className={`${
                          HerbsProduct?.length > 5
                            ? "rgba(0,0,0,0.5)"
                            : "hidden bg-slate-400"
                        }w-full h-full flex flex-col justify-center items-center gap-2 relative`}
                      >
                        <GoPlus
                          size={17}
                          color="#fff"
                          className={`font-maison `}
                        />
                        <p className={`font-maison  text-white text-[17px]`}>
                          35 more photos
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 -z-10">
                        {HerbsProduct?.images[4] ? (
                          <img
                            src={HerbsProduct?.images[4]}
                            className="w-[272px] h-[185px] "
                          />
                        ) : (
                          <div className="absolute top-0 left-0 animate-pulse rounded-md object-cover w-full h-full bg-slate-400 opacity-50"></div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-[185px]  animate-pulse rounded-md o  bg-slate-400 opacity-50"></div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* section */}
          <section className="px-4 lg:px-[120px] mt-[60px] grid">
            <div className="flex flex-wrap gap-y-4 items-center mb-2 justify-between">
              <h4 className="text-[#946C3C] text-3xl font-medium ">
                {HerbsProduct?.name} ({HerbsProduct?.sciName})
              </h4>
              <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full"></div>
                <p className="text-[#CF956F] inline-block">Spiritual use</p>
              </div>
            </div>
            <p className="text-[#667085] max-w-[1058px]">
              {HerbsProduct?.about}
            </p>
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
              {/* <Accordion type="single" collapsible>
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
            </Accordion> */}
            </div>
            <Link to={`/store`} className="justify-self-end">
              <button className="h-10 w-[219px] uppercase bg-[#946C3C] text-white mt-6 ">
                buy now
              </button>
            </Link>
          </section>
        </div>
      )}
      {/* section */}
      <section className="mt-[60px]">
        <h2 className="px-4 lg:px-[120px] text-2xl lg:text-[64px] font-amsterdam mb-4 lg:mb-16">
          Related herbs
        </h2>
        <div className="flex flex-wrap">
          {loading ? (
            <div
              role="status"
              className="flex justify-between w-full h-28 items-center translate-x-1/2 mt-40"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8   animate-spin text-[#E6E5DE]  fill-[#946C3C]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            HerbsProduct?.relatedProducts?.map((product: any, key: any) => {
              return (
                <div
                  key={key}
                  className="border-[0.5px] w-full sm:w-1/2 lg:w-1/3 border-[#DBDAD1] p-6"
                >
                  {loading ? (
                    // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />

                    <div className="w-[442px] h-[505px]">
                      <Skeleton className=" w-full h-full  object-cover rounded-xl" />
                    </div>
                  ) : (
                    <img
                      src={product?.images[0]}
                      alt={product?.name}
                      className="w-[442px] h-[505px] object-cover max-h-[505px] "
                    />
                  )}
                  <p className="text-2xl font-arapey mt-4">
                    {product.name}
                    <span className="italic">{product?.sciName}</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    <div className="bg-white p-2 flex items-center gap-1">
                      <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full"></div>
                      <p className="text-[#CF956F] inline-block">
                        Spiritual use
                      </p>
                    </div>
                    <div className="bg-white p-2 flex items-center gap-1">
                      <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full"></div>
                      <p className="text-[#CF956F] inline-block">
                        Medicinal use
                      </p>
                    </div>
                    <div className="bg-white p-2 flex items-center gap-1">
                      <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full"></div>
                      <p className="text-[#CF956F] inline-block">
                        Side effects
                      </p>
                    </div>
                  </div>
                  <Link to={`/herbalpedia/${product.id}`}>
                    <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                      read more
                    </button>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
