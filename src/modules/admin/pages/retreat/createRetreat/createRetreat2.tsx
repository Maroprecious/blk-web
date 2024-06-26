import Layout from "@/shared/admin/layout/Layout";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import progressBar from "@assets/images/progress bars 2.svg";
import ImageUpload from "@/components/ui/UploadThumbnail";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const CreateaRetreat = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Layout>
      <div>
        {" "}
        <Link
          to="admin/retreat"
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
              <label htmlFor="">Overview of retreat</label>
              <input
                type="text"
                placeholder="Enter overview of retreat"
                className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              />
            </div>
            <ImageUpload />
            <div className="mt-5 flex gap-2">
              <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
              <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
              <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
            </div>

            <div className="w-full">
              <label htmlFor="">Hotel</label>
              <input
                type="text"
                placeholder="Enter name of hotel"
                className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Address of hotel</label>
              <input
                type="text"
                placeholder="Enter address of hotel"
                className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
              />
            </div>
            <div className="w-full">
              <label className="mb-2">Hotel rating</label>
              <div className="flex gap-1">
                {[...Array(5)].map((index) => {
                  const curentRating = index + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={curentRating}
                        onClick={() => setRating(curentRating)}
                        className="hidden"
                      />
                      <FaStar
                        className="cursor-pointer"
                        color={
                          curentRating <= (hover || rating)
                            ? "#F79009"
                            : "#D0D5DD"
                        }
                        size={20}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <div>
              <label>Upload pictures of the hotel</label>
              <ImageUpload />
              <div className="w-full p-3 text-[#946C3C] mt-4 flex items-center justify-center border  border-dashed border-[#946C3C]  bg-[#FAF6F3]">
                ADD NEW HOTEL
              </div>
            </div>
            <button className="bg-[#946C3C] uppercase text-white w-full  py-4 mx-auto mt-[33px] ">
              continue
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateaRetreat;
