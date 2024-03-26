import BRHeader from "@/shared/components/header/header";
import demo1 from "@assets/images/demo1.svg";
import demo2 from "@assets/images/demo2.svg";
import demo3 from "@assets/images/demo3.svg";
import perksImg3 from "@assets/images/perksImg3.svg";
import perksImg2 from "@assets/images/perksImg2.svg";
import perksImg1 from "@assets/images/perksImg1.svg";
import articles from "@assets/images/article.svg";
import Footer from "@/components/landing/Footer";
import FirstVideoComponent from "@/components/landing/firstVideoComponent";
import Carousel from "@/components/ui/carousel/Carousel";
import "../../../../main.css";
import { useWindowSize } from "usehooks-ts";

export default function HomePage() {
  const { width = 0 } = useWindowSize();
  return (
    <div>
      {" "}
      <BRHeader />
      {/* section */}
      <section className="mt-[115px]">
        <main className="flex flex-col gap-y-4 lg:flex-row px-4 lg:px-[120px] lg:mt-40 items-center justify-between">
          <h1 className="font-arapey max-w-[792px] mr-auto text-[28px] md:text-[36px] xl:text-[56px] ">
            Your guided{" "}
            <span className="font-amsterdam text-[#CF956F]">pathway</span> to
            Holistic Health and Wellness
          </h1>
          <p className="lg:text-xl leading-normal ml-auto text-right max-w-[318px]">
            Whether you're a seasoned wellness enthusiast or just starting on
            your path to a healthier, happier life.
          </p>
        </main>
        <FirstVideoComponent />
      </section>
      {/* section */}
      <section className="mt-[50px] md:mt-[80px] px-4 lg:px-[120px] gap-[26px] lg:mt-[130px] flex 2xl:justify-center">
        <div className="max-w-[600px] lg:max-w-[408px]">
          <h2 className="font-amsterdam text-[#CF956F] text-2xl lg:text-[58px] mb-[16px] lg:leading-[58px]">
            Back rooted retreats
          </h2>
          <p className="lg:text-2xl font-arapey lg:leading-[42px] font-light">
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
          <img
            src={demo3}
            id="demo3"
            className="absolute right-[-54px] screen:right-[0] bottom-0"
          />
          <img src={demo2} id="demo2" className="absolute left-0 bottom-0" />
        </div>
      </section>
      {/* section */}
      <section className="mt-[50px] md:mt-[80px] px-4 lg:pl-[240px] gap-[26px] lg:mt-[130px] lg:pr-0 ">
        <h2 className="font-amsterdam lg:pb-12 text-[#CF956F] text-2xl lg:text-3xl xl:text-[58px] mb-[16px] xl:leading-[58px]">
          Gallery
        </h2>
        <Carousel />
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pl-0 lg:pr-[120px] gap-[24px] lg:mt-[149px] flex items-center flex-col lg:flex-row 2xl:justify-center">
        <img src={perksImg3} id="demo1" className="w-[810px]" />

        <div className="max-w-[486px]">
          <h3 className="font-amsterdam text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Yoga retreats
          </h3>
          <p className="lg:text-md xl:text-2xl font-arapey xl:leading-[42px] font-light">
            Dive deep into the practice of yoga, whether you're a beginner
            looking to explore its benefits or an experienced yogi seeking to
            deepen your practice. Our expert instructors will guide you through
            asanas, meditation, and pranayama techniques to help you find inner
            peace and flexibility.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pr-0 lg:pl-[120px] gap-[24px] lg:mt-[152px] flex items-center flex-col lg:flex-row 2xl:justify-center">
        <img src={perksImg2} id="demo1" className=" w-[810px] lg:order-2" />

        <div className="max-w-[486px] lg:order-1">
          <h3 className="font-amsterdam text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Meditation retreats
          </h3>
          <p className="lg:text-md xl:text-2xl font-arapey xl:leading-[42px] font-light">
            Step into the world of mindfulness and meditation, where stillness
            and self-awareness await. Learn to calm your mind, reduce stress,
            and develop a profound sense of inner peace under the guidance of
            experienced meditation teachers.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pl-0 lg:pr-[120px] gap-[24px] lg:mt-[152px] flex items-center flex-col lg:flex-row 2xl:justify-center">
        <img src={perksImg1} id="demo1" className=" w-[810px]" />

        <div className="max-w-[486px]">
          <h3 className="font-amsterdam text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Nature Escapes
          </h3>
          <p className="lg:text-md xl:text-2xl font-arapey xl:leading-[42px] font-light">
            Immerse yourself in the healing embrace of nature. Our nature
            retreats take you to breathtaking locations, allowing you to unplug
            from the noise of daily life and reconnect with the natural world.
            Let the beauty of nature inspire and rejuvenate you.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[40px] md:mt-[80px] px-4 lg:pr-0 lg:pl-[120px] gap-[24px] lg:mt-[152px] flex items-center flex-col lg:flex-row 2xl:justify-center">
        <img src={perksImg1} id="demo1" className=" w-[810px] lg:order-2" />

        <div className="max-w-[486px] lg:order-1">
          <h3 className="font-amsterdam text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px] mb-[16px] xl:leading-[58px]">
            Meditation retreats
          </h3>
          <p className="lg:text-md xl:text-2xl font-arapey xl:leading-[42px] font-light">
            Step into the world of mindfulness and meditation, where stillness
            and self-awareness await. Learn to calm your mind, reduce stress,
            and develop a profound sense of inner peace under the guidance of
            experienced meditation teachers.
          </p>
        </div>
      </section>
      {/* section */}
      <section className="mt-[80px] md:mt-[80px] lg:mt-[178px] px-4">
        <h3
          className="font-amsterdam text-[#CF956F] text-2xl lg:text-3xl xl:text-[56px]
         mb-[32px] lg:mb-[64px] xl:leading-[58px] md:text-center lg:text-left max-w-[1200px] mx-auto"
        >
          Blog
        </h3>
        <div className="gap-[24px] flex items-center flex-wrap justify-center">
          {articlesMock
            .map((art, key) => (
              <div
                key={key}
                className={`lg:max-w-[300px] ${
                  width < 640
                    ? "w-full"
                    : width < 1000
                    ? "w-2/5"
                    : width < 1350
                    ? "w-1/4"
                    : "w-1/5"
                }`}
              >
                <img
                  src={art.img}
                  className=" w-full h-[241px] lg:h-[358px] mb-8 object-cover"
                />
                <p className="text-[#959C7E] mb-4">{art.date}</p>
                <h3 className="lg:text-2xl text-[#CF956F] mb-5">{art.title}</h3>
                <p className="text-[#959C7E] font-arapey mb-4">
                  {art.description}
                </p>
                <hr className="bg-[#959C7E]" />
              </div>
            ))
            .splice(0, width < 950 ? 2 : width < 1350 ? 3 : 4)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

const articlesMock = [
  {
    img: articles,
    date: "JANUARY, 2023",
    title:
      "The Healing Power of Nature: Why You Should Choose a Nature Retreat",
    description:
      "In our fast-paced world, it's easy to forget the therapeutic benefits of nature. We often find ourselves consumed by the demands of our daily lives, surrounded by technology and concrete jungles.",
  },
  {
    img: articles,
    date: "JANUARY, 2023",
    title:
      "The Healing Power of Nature: Why You Should Choose a Nature Retreat",
    description:
      "In our fast-paced world, it's easy to forget the therapeutic benefits of nature. We often find ourselves consumed by the demands of our daily lives, surrounded by technology and concrete jungles.",
  },
  {
    img: articles,
    date: "JANUARY, 2023",
    title:
      "The Healing Power of Nature: Why You Should Choose a Nature Retreat",
    description:
      "In our fast-paced world, it's easy to forget the therapeutic benefits of nature. We often find ourselves consumed by the demands of our daily lives, surrounded by technology and concrete jungles.",
  },
  {
    img: articles,
    date: "JANUARY, 2023",
    title:
      "The Healing Power of Nature: Why You Should Choose a Nature Retreat",
    description:
      "In our fast-paced world, it's easy to forget the therapeutic benefits of nature. We often find ourselves consumed by the demands of our daily lives, surrounded by technology and concrete jungles.",
  },
];
