// import BRHeader from "@/shared/components/header/header";
import Carousel from "@/components/ui/carousel/Carousel";
import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/landing/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Faqs from "@/components/landing/Faqs";
// import Itenary from "@/components/landing/Itenary";
import { useParams } from "react-router-dom";

const SingleRetreatPage = () => {
  const { retreatId } = useParams();
  const { data, loading } = useFetch(`${URL}/retreats/${retreatId}`, "GET");
  const retreat = data?.data;
  console.log(loading, retreat);

  return (
    <div className="bg-[#FAF6F3]">
      <BRTHeader />
      {/* section */}
      <section className="">
        <video height="558px" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      <section className="px-4 lg:pl-[120px] mt-[80px] md:mt-[30px] lg:mt-[56px}">
        <p className="lg:text-2xl font-arapey">
          On the first day of the Serenity Retreat, participants arrive at our
          tranquil location and are greeted with a warm welcome. Check-in and
          registration ease everyone into their temporary haven. The day begins
          with a serene sunset yoga session, allowing everyone to unwind and set
          the tone for the retreat. A delightful welcome dinner brings
          participants together, setting the stage for connections to be forged.{" "}
          <br />
          <br />
          Mindfulness and Self-Discovery As the sun rises, the second day
          unfolds with morning yoga and meditation to center minds and bodies. A
          nutritious breakfast fuels the day ahead. Guided nature walks immerse
          participants in the beauty of the surroundings, while self-reflection
          workshops encourage deep personal insights. The day culminates with
          group meditation and a soothing evening relaxation session, providing
          a serene close to the day.
        </p>
      </section>
      {/* section */}
      <section className="px-4 lg:pl-[120px] mt-[10px] md:mt-[30px] lg:mt-[80px}">
        <Carousel />
      </section>
      {/* section */}
      <section className="px-4 lg:px-[120px] mt-20 lg:mt-[130px]   md:mt-[30px] lg:mt-[80px}">
        <Tabs defaultValue="itenary" className="w-full">
          <TabsList>
            <TabsTrigger value="itenary">Itenary</TabsTrigger>
            <TabsTrigger value="faqs">
              Frequently Asked Questions (FAQ)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="itenary">
            {loading ? (
              <div
                role="status"
                className="flex justify-between w-full h-28 items-center translate-x-1/2"
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
              <>
                <h2 className="font-arapey text-2xl mb-10">{retreat?.name} </h2>
                <div className="flex lg:gap-[76px]  items-center mb-20">
                  <div className="relative w-[527px] h-[304px] inset-0 z-50 bg-black bg-opacity-50">
                    <img
                      src={retreat.images[0]}
                      className="w-full h-full object-cover -z-10 bg-black bg-opacity-50"
                    />{" "}
                    {/* <div className="absolute  bg-black opacity-90"></div> */}
                    <div className="absolute bottom-0 justify-start self-start grid left-0 w-full p-4 text-white text-center">
                      <p className="font-arapey text-white text-2xl text-left mb-1">
                        Day 1
                      </p>
                      <div className="text-[#959C7E] text-2xl py-3 px-5 bg-[#E6E5DE]">
                        Arrival and Welcome
                      </div>
                    </div>
                  </div>

                  <p className={`lg:text-2xl  font-arapey text-2xl`}>
                    {retreat.description}
                  </p>
                </div>{" "}
              </>
            )}
          </TabsContent>
          <TabsContent value="faqs">
            <Faqs />
          </TabsContent>
        </Tabs>
      </section>
      {/* section */}
      <section className="px-4 lg:px-[120px] mt-[30px] md:mt-[80px] lg:mt-[130px}">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default SingleRetreatPage;
