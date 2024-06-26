import Layout from "@/shared/admin/layout/Layout";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import progressBar from "@assets/images/progress bars.svg";
import { useCountry, useStates } from "@/api/queries";
import { useEffect } from "react";
import { useFormik } from "formik";
import { useAtom } from "jotai";
import { retreatAtom } from "@/store/store";
import { createRetreatValidationSchema } from "@/schema/profile";


const createaRetreat = () => {
  const { data } = useCountry();
  const [retreatData, setRetreatData] = useAtom(retreatAtom);

  // setRetreatData({
  //   ...retreatData,
  //   ...values
  // })
  console.log(data, "country");
  // const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
  //   {
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: createRetreatValidationSchema,
  //     onSubmit: async (values) => {
  //       try {
  //         mutate(
  //           {
  //             email: values.email,
  //             password: values.password,
  //           },
  //           {
  //             onSuccess: async (user) => {
  //               localStorage.setItem("accessToken", user?.data?.accessToken);
  //               localStorage.setItem("refreshToken", user?.data?.refreshToken);
  //               refetch().then((res) => {
  //                 if (isSuccess) {
  //                   if (!user?.data?.user?.isProfileFilled) {
  //                     console.log("yaya");

  //                     return navigate("/customize-profile");
  //                   }
  //                   setUser(res?.data?.data);
  //                   toast.success("User logged in successfully");
  //                   navigate("/home-tab");
  //                 }
  //               });
  //             },
  //             onError: (data: any) => {
  //               toast.error(
  //                 data?.response?.data?.error.message ??
  //                   "An error occured, please try again"
  //               );
  //             },
  //           }
  //         );
  //       } catch (error: any) {
  //         console.log(error, "ll");
  //       }
  //     },
  //   }
  // );
  // const { refetch, data: states } = useStates(values.country);

  // useEffect(() => {
  //   if (values.country) {
  //     refetch();
  //   }
  // }, [values.country]);
  return (
    <Layout>
      <div>
        {" "}
        <Link
          to="/admin/retreat"
          target=""
          className="flex cursor-pointer gap-2 items-center  mb-10"
        >
          <FaAngleLeft className="text-[#98A2B3]" />
          <h3 className="text-[#98A2B3]">Back</h3>
        </Link>
        <div className="w-full max-w-[733px]  mx-auto">
          <div className="flex justify-center items-center">
            <img src={progressBar} alt="" className="" />
          </div>

          <h3 className="text-[40px] text-[#CF956F] text-2xl my-8  font-medium font-amsterdam">
            Create retreat
          </h3>
          <p className="text-[#667085] my-12 m8">Enter the retreat details</p>
          <form className="w-full grid gap-3 items-center mb-[116px] ">
            <div className="w-full">
              <label htmlFor="">Retreat Name</label>
              <input
                type="text"
                placeholder="Enter name of reatreat"
                className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              />
            </div>
            <div className="flex items-center gap-4  w-full">
              <div className="mt-4 flex-auto">
                <label className="font-light text-[#101828]">
                  Price of product
                </label>
                <div className="relative">
                  <p className="absolute font-arapey px-2 font-light flex items-center  text-[#667085] top-[12px]">
                    USD ($)
                    <div className="bg-[#EAECF0] h-4 w-[1px] ml-2"></div>
                  </p>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border w-full mt-2 bg-transparent block pl-[80px]  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                  />
                </div>
              </div>
              <div className="mt-4 flex-auto">
                <label className="font-light text-[#101828]">
                  Price of product
                </label>
                <div className="relative">
                  <p className="absolute font-arapey px-2 font-light flex items-center  text-[#667085] top-[12px]">
                    USD ($)
                    <div className="bg-[#EAECF0] h-4 w-[1px] ml-2"></div>
                  </p>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border w-full mt-2 bg-transparent block pl-[80px]  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">Country</label>
              <select
                value="–Select country–"
                className="border w-full mt-2 outline-none pr-10 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              >
                {data?.data?.map((elem: { code: string; name: string }) => (
                  <option value={elem.name} className="" key={elem.code}>
                    {elem.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="">City</label>
              <select
                value="–Select City"
                className="border w-full mt-2 outline-none pr-10 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              >
                <option value="" className="">
                  -Select City-
                </option>
              </select>
            </div>
            <div>
              <div className="flex justify-between mt-2">
                <label htmlFor="Start" className="max-w-[397px]  flex-auto">
                  Start date
                </label>{" "}
                <label htmlFor="End" className="max-w-[397px] flex-auto">
                  End date
                </label>
              </div>
              <div className="border flex w-full mt-2 border-[#EAECF0] bg-transparent  placeholder:text-[#667085] p-3">
                <input
                  type="text"
                  name="Start"
                  placeholder="DD/MM/YYYY"
                  className="max-w-[397px] flex-auto"
                />
                <input
                  //   type="date"
                  name="End"
                  placeholder="DD/MM/YYYY"
                  className="max-w-[367px] flex-auto border-l pl-4"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="">Maximum no of slot</label>
              <input
                type="text"
                placeholder="Enter max no of slots"
                className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              />
            </div>
            <button className="bg-[#946C3C] uppercase text-white w-full max-w-[468px] py-4 mx-auto mt-[33px] ">
              continue
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default createaRetreat;
