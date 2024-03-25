import BRHeader from "@/shared/components/header/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { BiHide } from "react-icons/bi";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [password, setPwd] = useState("");
  const [confirmPassword, setConfirmPwd] = useState("");

  // const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const REGISTER_URL = "/auth/password/request";
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_URL, { password });
      console.log(response?.data);
      // Assuming accessToken exists in the response data
      console.log(response?.data?.accessToken);
      console.log(JSON.stringify(response));
      navigate("/");
      // setSuccess(true);
      console.log(response.status);
      // clear state and controlled inputs
      setPwd("");
      setConfirmPwd("");
    } catch (err: any) {
      if (!err?.response) {
        // setErrMsg("No Server Response");
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        // setErrMsg("Username Taken");
        console.log("Username Taken");
      } else {
        // setErrMsg("Registration Failed");
        console.log("Registration Failed");
      }
    }
  };

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setValidName(EMAIL_REGEX.test(email));
  // }, [email]);

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(password));
  // }, [password]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [email, password]);
  return (
    <div>
      <div>
        <BRHeader />
        <section className="px-4 lg:px-[120px] mt-[150px] lg:mt-[211px] ">
          <div className="max-w-[468px] mx-auto ">
            <div className=" mb-[4 5px]">
              <h2 className="text-[32px] font-amsterdam mb-[65px] text-left whitespace-nowrap">
                Reset Password
              </h2>
              <p className="mb-[40px] text-[20px]">
                Wer have sent a reset password link to your email containing
                instructions.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full grid items-center">
              <div className="relative">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <input
                  required
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Enter password"
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
              <div className="relative mt-4">
                <label htmlFor="" className="text-sm">
                  Confirm password
                </label>
                <input
                  required
                  type={visibleConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="border w-full mt-2 border-[#EAECF0] focus:outline-none bg-transparent block placeholder:text-[#667085] p-3"
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  value={confirmPassword}
                />
                <div
                  className="absolute top-12 right-2 "
                  onClick={() => {
                    setVisibleConfirmPassword(!visibleConfirmPassword);
                  }}
                >
                  {visibleConfirmPassword ? (
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
                continue
              </button>
            </form>
            <p className="uppercase text-center mt-4">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ResetPassword;
