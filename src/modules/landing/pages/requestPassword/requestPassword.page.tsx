import BRHeader from "@/shared/components/header/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setUser] = useState("");
 

  // const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const REGISTER_URL = "/auth/password/request";
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_URL,{email});
      console.log(response?.data);
      // Assuming accessToken exists in the response data
      console.log(response?.data?.accessToken);
      console.log(JSON.stringify(response));
      navigate("/");
      // setSuccess(true);
      console.log(response.status);
      // clear state and controlled inputs
      setUser("");

    } catch (err:Error) {
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
        <section className="px-4 lg:px-[120px] md:mt-[150px]  lg:mt-[211px] ">
          <div className="max-w-[468px] mx-auto ">
            <div className=" mb-[4 5px]">
                <h2 className="text-[32px]  font-amsterdam text-left whitespace-nowrap">
                Forgot Password
                </h2>
                <p className="mb-2">We will send you an email with instructions on how to recover it</p>
            </div>
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
      ;
    </div>
  );
};

export default Signup;
