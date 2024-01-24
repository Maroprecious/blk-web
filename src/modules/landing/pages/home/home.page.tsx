import BRHeader from "@/shared/components/header/header";
import mainVideo from "@assets/video/brw-video.mp4";
import demo1 from "@assets/images/demo1.svg";
import demo2 from "@assets/images/demo2.svg";
import demo3 from "@assets/images/demo3.svg";
import perksImg3 from "@assets/images/perksImg3.svg";
import perksImg2 from "@assets/images/perksImg2.svg";
import perksImg1 from "@assets/images/perksImg1.svg";
import articles from "@assets/images/article.svg";
import Footer from "@/components/landing/Footer";
import Carousel from "@/components/ui/carousel/Carousel";
export default function HomePage() {
  return (
    <div>
      {" "}
      <BRHeader />
      {/* section */}
      <section className="md:pt-[115px]">
        <main className="flex px-4 lg:px-[120px] mt-4 md:mt-8 lg:mt-12 items-center">
          <h1 className="font-maison text- lg:text-[36px] xl:text-[56px] ">
            Your guided{" "}
            <span className="font-recoleta text-[#CF956F]">pathway</span> to
            Holistic Health and Wellness
          </h1>
          <p className="lg:text-xl h-[96px] leading-normal text-right max-w-[318px]">
            Whether you're a seasoned wellness enthusiast or just starting on
            your path to a healthier, happier life.
          </p>
        </main>
        <video height="558px" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      {/* section */}
      <section className="mt-[50px] md:mt-[80px] px-4 lg:pl-[120px] gap-[26px] lg:mt-[130px] flex  ">
        <div className="max-w-[408px]">
          <h2 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[58px] mb-[16px] xl:leading-[58px]">
            Back rooted retreats
          </h2>
          <p className="lg:text-md xl:text-2xl font-maison xl:leading-[42px] font-light">
            Welcome to Back Rooted Retreats, your portal to holistic wellness
            and self-discovery. In the rush of daily life, it's easy to overlook
            your well-being. Our mission is to guide you towards balance and
            connection with nature, whether you're a seasoned wellness
            enthusiast or just starting your path to a healthier, happier life.
            Explore our transformative retreats.
          </p>
        </div>
        <div className="hidden lg:block h-[748px] w-[820px] demo-container relative ">
          <img src={demo1} id="demo1" className="absolute left-[108px]" />
          <img src={demo3} id="demo3" className="absolute right-0 bottom-0" />
          <img src={demo2} id="demo2" className="absolute left-0 bottom-0" />
        </div>
      </section>
      {/* section */}
      <section className="mt-[50px] md:mt-[80px] px-4 lg:pl-[120px] gap-[26px] lg:mt-[130px] lg:pr-0 ">
        <h2 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[58px] mb-[16px] xl:leading-[58px]">
          Gallery
        </h2>
        {/* <div className="flex gap-[6px] overflow-y-hidden"> */}
        <Carousel />
        {/* <img src={slideImg1} id="demo1" className="h-[490px] w-[690px]" />
          <img src={slideImg1} id="demo1" className="h-[490px] w-[690px]" />
          <img src={slideImg1} id="demo1" className="h-[490px] w-[690px]" /> */}
        {/* </div> */}
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pl-0 lg:pr-[120px] gap-[24px] lg:mt-[149px] flex items-center flex-col lg:flex-row ">
        <img src={perksImg3} id="demo1" className=" w-[810px]" />

        <div className="max-w-[486px]">
          <h3 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Yoga retreats
          </h3>
          <p className="lg:text-md xl:text-2xl font-maison xl:leading-[42px] font-light">
            Dive deep into the practice of yoga, whether you're a beginner
            looking to explore its benefits or an experienced yogi seeking to
            deepen your practice. Our expert instructors will guide you through
            asanas, meditation, and pranayama techniques to help you find inner
            peace and flexibility.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pr-0 lg:pl-[120px] gap-[24px] lg:mt-[152px] flex items-center flex-col lg:flex-row ">
        <img src={perksImg2} id="demo1" className=" w-[810px] order-2" />

        <div className="max-w-[486px] order-1">
          <h3 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Meditation retreats
          </h3>
          <p className="lg:text-md xl:text-2xl font-maison xl:leading-[42px] font-light">
            Step into the world of mindfulness and meditation, where stillness
            and self-awareness await. Learn to calm your mind, reduce stress,
            and develop a profound sense of inner peace under the guidance of
            experienced meditation teachers.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pl-0 lg:pr-[120px] gap-[24px] lg:mt-[152px] flex items-center flex-col lg:flex-row ">
        <img src={perksImg1} id="demo1" className=" w-[810px]" />

        <div className="max-w-[486px]">
          <h3 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Nature Escapes
          </h3>
          <p className="lg:text-md xl:text-2xl font-maison xl:leading-[42px] font-light">
            Immerse yourself in the healing embrace of nature. Our nature
            retreats take you to breathtaking locations, allowing you to unplug
            from the noise of daily life and reconnect with the natural world.
            Let the beauty of nature inspire and rejuvenate you.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pr-0 lg:pl-[120px] gap-[24px] lg:mt-[152px] flex items-center flex-col lg:flex-row ">
        <img src={perksImg1} id="demo1" className=" w-[810px] order-2" />

        <div className="max-w-[486px] order-1">
          <h3 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Meditation retreats
          </h3>
          <p className="lg:text-md xl:text-2xl font-maison xl:leading-[42px] font-light">
            Step into the world of mindfulness and meditation, where stillness
            and self-awareness await. Learn to calm your mind, reduce stress,
            and develop a profound sense of inner peace under the guidance of
            experienced meditation teachers.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pr-0 lg:pl-[120px] gap-[24px] lg:mt-[178px] flex items-center flex-wrap  ">
        <div className=" w-[282px]">
          <img src={articles} className=" w-full h-[358px] mb-8" />
          <p className="text-[#959C7E] mb-4">JANUARY, 2023</p>
          <h3 className="lg:text-2xl font-recoleta text-[#CF956F] mb-10">
            The Healing Power of Nature: Why You Should Choose a Nature Retreat
          </h3>
          <p className="text-[#959C7E] font-maison mb-4">
            In our fast-paced world, it's easy to forget the therapeutic
            benefits of nature. We often find ourselves consumed by the demands
            of our daily lives, surrounded by technology and concrete jungles.
          </p>
          <hr className="bg-[#959C7E]" />
        </div>
        <div className=" w-[282px]">
          <img src={articles} className=" w-full h-[358px] mb-8" />
          <p className="text-[#959C7E] mb-4">JANUARY, 2023</p>
          <h3 className="lg:text-2xl font-recoleta text-[#CF956F] mb-10">
            The Healing Power of Nature: Why You Should Choose a Nature Retreat
          </h3>
          <p className="text-[#959C7E] font-maison mb-4">
            In our fast-paced world, it's easy to forget the therapeutic
            benefits of nature. We often find ourselves consumed by the demands
            of our daily lives, surrounded by technology and concrete jungles.
          </p>
          <hr className="bg-[#959C7E]" />
        </div>
        <div className=" w-[282px]">
          <img src={articles} className=" w-full h-[358px] mb-8" />
          <p className="text-[#959C7E] mb-4">JANUARY, 2023</p>
          <h3 className="lg:text-2xl font-recoleta text-[#CF956F] mb-10">
            The Healing Power of Nature: Why You Should Choose a Nature Retreat
          </h3>
          <p className="text-[#959C7E] font-maison mb-4">
            In our fast-paced world, it's easy to forget the therapeutic
            benefits of nature. We often find ourselves consumed by the demands
            of our daily lives, surrounded by technology and concrete jungles.
          </p>
          <hr className="bg-[#959C7E]" />
        </div>
        <div className=" w-[282px]">
          <img src={articles} className=" w-full h-[358px] mb-8" />
          <p className="text-[#959C7E] mb-4">JANUARY, 2023</p>
          <h3 className="lg:text-2xl font-recoleta text-[#CF956F] mb-10">
            The Healing Power of Nature: Why You Should Choose a Nature Retreat
          </h3>
          <p className="text-[#959C7E] font-maison mb-4">
            In our fast-paced world, it's easy to forget the therapeutic
            benefits of nature. We often find ourselves consumed by the demands
            of our daily lives, surrounded by technology and concrete jungles.
          </p>
          <hr className="bg-[#959C7E]" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
