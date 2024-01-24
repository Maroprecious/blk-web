import BRHeader from "@/shared/components/header/header";
import mainVideo from "@assets/video/brw-video.mp4";
import sign from "@assets/images/Back rooted team.svg";
import Footer from "@/components/landing/Footer";

export default function AboutPage() {
  return (
    <div>
      {" "}
      <BRHeader />
      {/* section */}
      <section className="md:pt-[115px]">
        <main className=" flex px-4 lg:px-[120px] mt-4 md:mt-8 lg:mt-12 items-center">
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
      <div className="px-4 w-full lg:px-0 max-w-[792px] mx-auto mt-[130px] flex flex-col gap-12">
        <h2 className="font-recoleta text-[#CF956F] text-2xl lg:text-3xl xl:text-[58px] mb-[16px] xl:leading-[58px]">
          Our Story
        </h2>
        <p className="lg:text-[24px]">
          Welcome to Back Rooted Retreats, your portal to holistic wellness and
          self-discovery. In the rush of daily life, it's easy to overlook your
          well-being. Our mission is to guide you towards balance and connection
          with nature, whether you're a seasoned wellness enthusiast or just
          starting your path to a healthier, happier life. Explore our
          transformative retreats.
        </p>
        <p className="lg:text-[24px]">
          Welcome to Back Rooted Retreats, your portal to holistic wellness and
          self-discovery. In the rush of daily life, it's easy to overlook your
          well-being. Our mission is to guide you towards balance and connection
          with nature, whether you're a seasoned wellness enthusiast or just
          starting your path to a healthier, happier life. Explore our
          transformative retreats.
        </p>
        <p>– The Back rooted team</p>
        <img src={sign} alt="sign" className="w-[200px]" />
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="bg-[#959C7E] text-white px-[30px] pt-8 pb-[84px] max-w-[384px]">
            <h3 className="text-[40px] font-recoleta">Our Mission</h3>
            <p className="font-maison text-[20px]">
              Step into the world of mindfulness and meditation, where stillness
              and self-awareness await. Learn to calm your mind, reduce stress,
              and develop a profound sense of inner peace under the guidance of
              experienced meditation teachers.
            </p>
          </div>
          <div className="bg-[#959C7E] text-white px-[30px] pt-8 pb-[84px] max-w-[384px]">
            <h3 className="text-[40px] font-recoleta">Our Mission</h3>
            <p className="font-maison text-[20px]">
              Step into the world of mindfulness and meditation, where stillness
              and self-awareness await. Learn to calm your mind, reduce stress,
              and develop a profound sense of inner peace under the guidance of
              experienced meditation teachers.
            </p>
          </div>
        </div>
        <div className="mt-[180px]">
          <h3 className="text-[40px] text-[#CF956F] lg:text-[64px] text-center font-medium font-recoleta">
            Contact Us
          </h3>

          <form className="w-full grid items-center mb-[116px]">
            <div className="lg:grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Preferred contact method </label>
                <input
                  type=""
                  placeholder="Your first name"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Your Last name</label>
                <input
                  type="text"
                  placeholder="Your Last name"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  placeholder="+1 000 – 0000 – 000"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div>
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  placeholder="Your subject"
                  className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
            </div>
            <div>
              {" "}
              <label htmlFor="">Message</label>
              <input
                type="text"
                placeholder="Your subject"
                className="border w-full mt-2 border-white bg-transparent block placeholder:text-[#667085] p-3 pb-6"
              />
            </div>
            <button className="bg-[#946C3C] uppercase text-white w-full max-w-[468px] py-4 mx-auto mt-[33px] ">
              Send message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
