import Products from "@/components/landing/products/Products";
import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
import Footer from "@/components/landing/Footer";
import { products } from "@/modules/landing/resouces";

const Herbalpedia = () => {
  return (
    <div>
      <BRTHeader />
      {/* section */}
      <section className="relative">
        <p className="absolute px-6 lg:px-[120px] py-[40px] lg:py-[77px] text-3xl lg:text-[58px] font-amsterdam text-white left-0 bottom-0 ">
          Herbalpedia
        </p>
        <video
          className="h-[558px] lg:h-full max-h-[900px] w-full object-cover object-center"
          autoPlay
          loop
        >
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      <section className="max-w-[1200px] mx-auto px-4 lg:px-[120px] mt-[80px] md:my-[30px] lg:my-[56px]">
        <p className="lg:text-2xl">
          On the first day of the Serenity Retreat, participants arrive at our
          tranquil location and are greeted with a warm welcome. Check-in and
          registration ease everyone into their temporary haven. The day begins
          with a serene sunset yoga session, allowing everyone to unwind and set
          the tone for the retreat. A delightful welcome dinner brings
          participants together, setting the stage for connections to be forged.
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
      <section className="px-4 mt-[40px] md:mt-[30px] lg:mt-[80px]">
        <div className="lg:px-[120px] flex justify-between items-center">
          <h2 className="my-[24px] relative text-2xl lg:text-[36px] xl:text-[64px] font-amsterdam">
            Featured items
          </h2>
          <a href="/herbal-product" className="text-2xl text-[#959C7E]">
            View all
          </a>
        </div>
      </section>
      <section className="mb-[130px]">
        <Products products={products} />
      </section>
      <Footer />
    </div>
  );
};

export default Herbalpedia;
