import BRHeader from "@/shared/components/header/header";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import axios from "@/api/axios";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const LOGIN_URL = "/auth/signin";
  // const REFRESH_URL = "/auth/refresh";
  const { setAuth } = useAuth();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setSuccess(true);

    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      const { accessToken, refreshToken } = response.data;
      console.log(response.data);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      console.log(JSON.stringify(response?.data.accessToken));
      setAuth({ email, password });
      setUser("");
      setSuccess(false);
      setPwd("");
      navigate("/");
      console.log(email, password);
      setSuccess(false);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No server response");
        console.log(errMsg);
      } else if (err.response?.status === 400) {
        setErrMsg("Wrong username or password");
        console.log(errMsg);
      } else {
        setErrMsg("Login failed");
        console.log(errMsg);
      }
      setSuccess(false);
    }
  };

  return (
    <div>
      <div>
        <BRHeader />
        <section className="px-4 lg:px-[120px] mt-[150px] lg:mt-[211px] ">
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
                <div className="h-10 text-red-700 font-bold">{errMsg}</div>
              </div>
              <div className="relative ">
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
                <div className="h-5 text-red-700">{errMsg}</div>
              </div>
              <Link to="/forgot-password" className="mt-2">
                Forgot Password?
              </Link>
              <button
                className={`${
                  success ? "bg-opacity-50" : ""
                } w-full bg-[#946C3C]  flex justify-center items-center uppercase h-14 text-white mt-6`}
              >
                {success ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8   animate-spin text-[#E6E5DE]  fill-[#946C3C]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "log in"
                )}
              </button>
              <button className="w-full bg-transparent border border-[#946C3C] uppercase h-14 text-[#946C3C] mt-6">
                Log in with google
              </button>
            </form>
            <p className="uppercase text-center mt-4">
              <Link to="/signup">Don’t have an account? Sign UP</Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
