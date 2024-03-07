import BRHeader from "@/shared/components/header/header";
import sign from "@assets/images/Back rooted team.svg";
import Footer from "@/components/landing/Footer";
import FirstVideoComponent from "@/components/landing/firstVideoComponent";

export default function AboutPage() {
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
      <div className="px-4 w-full lg:px-0 max-w-[792px] mx-auto mt-[64px] lg:mt-[130px] flex flex-col gap-12">
        <h2 className="font-amsterdam text-[#CF956F] text-2xl lg:text-3xl xl:text-[58px] mb-[16px] xl:leading-[58px]">
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
        <p className="text-2xl lg:text-3xl">– The Back rooted team</p>
        <img src={sign} alt="sign" className="w-[200px] relative top-[-36px]" />
        <div className="flex flex-col gap-[24px] lg:flex-row justify-between">
          <div className="bg-[#959C7E] text-white px-[30px] pt-8 pb-[84px] max-w-[384px]">
            <h3 className="text-[40px] font-amsterdam">Our Mission</h3>
            <p className="font-arapey text-[20px]">
              Step into the world of mindfulness and meditation, where stillness
              and self-awareness await. Learn to calm your mind, reduce stress,
              and develop a profound sense of inner peace under the guidance of
              experienced meditation teachers.
            </p>
          </div>
          <div className="bg-[#959C7E] text-white px-[30px] pt-8 pb-[84px] max-w-[384px]">
            <h3 className="text-[40px] font-amsterdam">Our Values</h3>
            <p className="font-arapey text-[20px]">
              Step into the world of mindfulness and meditation, where stillness
              and self-awareness await. Learn to calm your mind, reduce stress,
              and develop a profound sense of inner peace under the guidance of
              experienced meditation teachers.
            </p>
          </div>
        </div>
        <div className="mt-[40px] lg:mt-[80px]">
          <h3 className="text-[40px] text-[#CF956F] lg:text-[64px] text-center font-medium font-amsterdam">
            Contact Us
          </h3>

          <form className="w-full grid items-center mt-10 mb-[116px]">
            <div className="lg:grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
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
              <p className="font-arapey opacity-70">Send message</p>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
