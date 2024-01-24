import Products from "@/components/landing/products/Products";
import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
const Herbalpeadia = () => {
  return (
    <div className="bg-[#FAF6F3]">
      <BRTHeader />
      {/* section */}
      <section className="">
        <video height="558px" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      <section className="px-4 lg:px-[120px] mt-[80px] md:mt-[30px] lg:mt-[56px}">
        <p className="lg:text-2xl font-maison">
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
      <section className="px-4  mt-[80px] md:mt-[30px] lg:mt-[80px}">
        <div className="lg:px-[120px] flex justify-between items-center">
          <h2 className=" lg:text-[64px] font-recoleta ">Featured items</h2>
          <a href="/herbalProduct" className="text-[#959C7E]">
            View all
          </a>
        </div>
      </section>
      <section className="mb-[130px]">
        <Products />
      </section>
    </div>
  );
};

export default Herbalpeadia;
