// import BRHeader from "@/shared/components/header/header";
import Carousel from "@/components/ui/carousel/Carousel";
import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";

import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/landing/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Faqs from "@/components/landing/Faqs";
import Itenary from "@/components/landing/Itenary";

const SingleRetreatPage = () => {
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
        <p className="lg:text-2xl font-maison">
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
            <Itenary />
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
