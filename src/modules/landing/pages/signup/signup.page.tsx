import BRHeader from "@/shared/components/header/header";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const REGISTER_URL = "/auth/signup";
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_URL, { email, password });
      const token = response.data.accessToken;
      localStorage.setItem("authToken", token);
      navigate("/");
      setUser("");
      setPwd("");
      setErrMsg("");
    } catch (err: any) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        console.log("Username Taken");
      } else {
        console.log("Registration Failed");
        console.log(errMsg);
      }
    }
  };

  return (
    <div>
      <div>
        <BRHeader />
        <section className="px-4 lg:px-[120px] md:mt-[150px]  lg:mt-[211px] ">
          <div className="max-w-[468px] mx-auto ">
            <h2 className="text-[32px] font-amsterdam mb-[65px] text-left whitespace-nowrap">
              Create an account
            </h2>
            <form onSubmit={handleSubmit} className="w-full grid items-center">
              <div>
                <label htmlFor="email" className="text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="off"
                  // aria-invalid={validName ? "false" : "true"}
                  placeholder="Your email address"
                  className="border w-full mt-2 border-[#EAECF0] focus:outline-none placeholder:font-light bg-transparent block placeholder:text-[#667085] p-3"
                  onChange={(e) => setUser(e.target.value)}
                  value={email}
                />
                {/* <p>{form.errors.email && "Invalid Email"}</p> */}
              </div>
              <div className="relative mt-4">
                <label htmlFor="" className="text-sm">
                  Create password
                </label>
                <input
                  required
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Your password"
                  className="border w-full mt-2 border-[#EAECF0] focus:outline-none bg-transparent block placeholder:text-[#667085] p-3"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                />
                <div
                  className="absolute top-12 right-2 "
                  onClick={() => {
                    setVisiblePassword(!visiblePassword);
                  }}
                >
                  {visiblePassword ? (
                    <BiHide width={38} height={38} />
                  ) : (
                    <IoEyeOutline width={38} height={38} />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#946C3C] uppercase h-14 text-white mt-6"
              >
                Sign up
              </button>
              <button className="w-full bg-transparent border border-[#946C3C] uppercase h-14 text-[#946C3C] mt-6">
                Sign up with google
              </button>
            </form>
            <p className="uppercase text-center mt-4">
              Already have an account? <Link to="/login">Log in</Link>
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
