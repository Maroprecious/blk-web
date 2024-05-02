// import mainVideo from "@assets/video/brw-video.mp4";
// import CalendarComponent from "@/components/landing/Calendar";
import mainVideo from "@assets/video/brw-video.mp4";
import BRTHeader from "@/shared/components/header/transparentHeader";
import Footer from "@/components/landing/Footer";
import Calandar from "./calandar/calandar";

const retreatCalendar = () => {
  return (
    <div className="bg-white">
      {/* section */}
      <div className="relative ">
        <BRTHeader />

        <div className="absolute bottom-16 left-36 cursor-pointer z-10 text-white">
          <main className=" flex gap-16 justify-between   items-center">
            <h1 className="font-arapey text- lg:text-[36px] xl:text-[56px] max-w-[792px]">
              Your guided{" "}
              <span className="font-amsterdam text-[#CF956F]">pathway</span> to
              Holistic Health and Wellness
            </h1>
            <p className="lg:text-xl h-[96px] leading-normal text-right max-w-[318px]">
              Whether you're a seasoned wellness enthusiast or just starting on
              your path to a healthier, happier life.
            </p>
          </main>
        </div>
        <video height="558px" className="w-full h-auto" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-black opacity-100"></div>
      </div>
      {/* section */}
      <section className="px-4 lg:px-[120px] mt-[80px] md:mt-[130px] bg-white lg:mt-[175px}">
        <h2 className="text-[64px] mb-24 font-amsterdam font-medium">
          Retreat calendar
        </h2>
        <Calandar />
      </section>
      <Footer />
    </div>
  );
};

export default retreatCalendar;
