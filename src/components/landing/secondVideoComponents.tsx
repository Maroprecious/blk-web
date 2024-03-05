import mainVideo from "@assets/video/brw-video.mp4";
import BRTHeader from "@/shared/components/header/transparentHeader";

const SecondVideoComponents = () => {
  return (
    <div className="relative ">
      <BRTHeader />

      <div className="absolute bottom-16 left-36 cursor-pointer z-10 text-white">
        <main className=" flex gap-16 justify-between   items-center">
          <h1 className="font-maison text- lg:text-[36px] xl:text-[56px] max-w-[792px]">
            Your guided{" "}
            <span className="font-recoleta text-[#CF956F]">pathway</span> to
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
  );
};

export default SecondVideoComponents;
