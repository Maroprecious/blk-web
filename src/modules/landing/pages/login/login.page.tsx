import BRHeader from "@/shared/components/header/header";
import { useState, useContext } from "react";
import AuthContext from "@/context/AuhProvider";
import { IoEyeOutline } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import axios from "@/api/axios";

const Login = () => {
  const LOGIN_URL = "/auth/signin";
  const { SetAuth } = useContext(AuthContext);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      console.log(email, password);

      console.log(JSON.stringify(response?.data));
      SetAuth({ email, password });
      setUser("");
      setPwd("");
      navigate("/");
      console.log(email, password);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No server response");
        console.log(errMsg);
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
        console.log(errMsg);
      } else {
        setErrMsg("Login failed");
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
              Log in to your account
            </h2>
            <form className="w-full grid items-center " onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border w-full mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                  onChange={(e) => setUser(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="relative mt-4">
                <label htmlFor="">Password</label>
                <input
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Your password"
                  className="border w-full mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  required
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
              <Link to="" className="mt-2">
                Forgot Password?
              </Link>
              <button className="w-full bg-[#946C3C] uppercase h-14 text-white mt-6">
                log in
              </button>
              <button className="w-full bg-transparent border border-[#946C3C] uppercase h-14 text-[#946C3C] mt-6">
                Log in with google
              </button>
            </form>
            <p className="uppercase text-center mt-4">
              Don’t have an account? <Link to="/signup">Sign UP</Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Login;
