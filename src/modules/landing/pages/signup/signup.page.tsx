import BRHeader from "@/shared/components/header/header";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
const Signup = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <div>
      <div>
        <BRHeader />
        <section className="px-4 lg:px-[120px] md:mt-[150px]  lg:mt-[211px] ">
          <div className="max-w-[468px] mx-auto ">
            <h2 className="text-[32px] font-recoleta mb-[65px] text-left whitespace-nowrap">
              Create an account
            </h2>
            <form className="w-full grid items-center">
              <div>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border w-full mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                />
              </div>
              <div className="relative mt-4">
                <label htmlFor="">Create password</label>
                <input
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Your password"
                  className="border w-full mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                />
                <div
                  className="absolute top-12 right-2 "
                  onClick={() => {
                    setVisiblePassword(!visiblePassword);
                  }}
                >
                  {visiblePassword ? (
                    <BiHide width={34} height={34} />
                  ) : (
                    <IoEyeOutline width={24} height={24} />
                  )}
                </div>
              </div>

              <button className="w-full bg-[#946C3C] uppercase h-14 text-white mt-6">
                log in
              </button>
              <button className="w-full bg-transparent border border-[#946C3C] uppercase h-14 text-[#946C3C] mt-6">
                Log in with google
              </button>
            </form>
            <p className="uppercase text-center mt-4">
              Already have an account?<Link to="">Log in</Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Signup;
