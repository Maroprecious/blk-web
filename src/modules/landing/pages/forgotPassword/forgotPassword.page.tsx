import BRHeader from "@/shared/components/header/header";
import Footer from "@/components/landing/Footer";
const Signup = () => {
  return (
    <div>
      <div>
        <BRHeader />
        <section className="px-4 lg:px-[120px] md:mt-[150px]  lg:mt-[211px] ">
          <div className="max-w-[468px] mx-auto ">
            <h2 className="text-[32px] font-amsterdam  text-left whitespace-nowrap">
              Forgot Password
            </h2>
            <p className="mb-[40px] text-[20px]">
              We will send you an email with instructions on how to recover it
            </p>
            <form className="w-full grid items-center">
              <div>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border w-full mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>

              <button className="w-full bg-[#946C3C] uppercase h-14 text-white mt-6">
                continue
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Signup;
