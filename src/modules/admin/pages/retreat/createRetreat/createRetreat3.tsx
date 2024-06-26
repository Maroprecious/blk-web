import Layout from "@/shared/admin/layout/Layout";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import progressBar from "@assets/images/progress bars3.svg";
import edit from "@assets/icons/brownEdit.svg";
import demo from "@assets/images/day1.png";
import ImageUpload from "@/components/ui/UploadThumbnail";
const CreateaRetreat = () => {
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
        <div className="w-full">
          <div className="flex justify-center items-center">
            <img src={progressBar} alt="" className="" />
          </div>
          <section className="flex h-auto gap-8 mt-6">
            <div className=" max-w-[638px] flex gap-5">
              <div className="w-[307px] h-[440px] border  border-[#EAECF0] p-2">
                <div className="relative mb-3">
                  <img src={demo} alt="" />
                  <img
                    src={edit}
                    alt=""
                    className="absolute bottom-2 right-2"
                  />
                </div>
                <h2 className="text-2xl">Day 1</h2>
                <div className="bg-[#E6E5DE] text-[#959C7E] py-2 my-3  px-3">
                  Arrival and Welcome
                </div>
                <p className="text-[#667085]">
                  The day begins with a warm welcome as participants arrive and
                  check in. A serene sunset yoga session sets the tone, followed
                  by a delightful welcome dinner to foster connections.
                </p>
              </div>
              <div className="w-[307px] h-[440px] border  border-[#EAECF0] p-2">
                <div className="relative mb-3">
                  <img src={demo} alt="" />
                  <img
                    src={edit}
                    alt=""
                    className="absolute bottom-2 right-2"
                  />
                </div>
                <h2 className="text-2xl">Day 1</h2>
                <div className="bg-[#E6E5DE] text-[#959C7E] py-2 my-3  px-3">
                  Arrival and Welcome
                </div>
                <p className="text-[#667085]">
                  The day begins with a warm welcome as participants arrive and
                  check in. A serene sunset yoga session sets the tone, followed
                  by a delightful welcome dinner to foster connections.
                </p>
              </div>
            </div>
            <div className=" border-l border-[#EAECF0] px-8 h-fit w-full">
              <h2 className="text-3xl text-[#946C3C] mb-3">Itinerary editor</h2>

              <form className="w-full grid gap-3 items-center mb-[116px] ">
                <div className="w-full">
                  <label htmlFor="">Overview of retreat</label>
                  <input
                    type="text"
                    placeholder="Enter overview of retreat"
                    className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Activity title</label>
                  <input
                    type="text"
                    placeholder="Enter a question"
                    className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Description of activities</label>
                  <input
                    type="text"
                    placeholder="Enter description"
                    className="border w-full  mt-2 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                  />
                </div>
                <ImageUpload />
                <div className="mt-5 flex gap-2">
                  <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
                  <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
                  <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
                </div>
                <div>
                  <button className="border-[#946C3C] text-[#946C3C] border bg-transparent uppercase mb-3 w-full  py-4 mx-auto mt-[33px] ">
                    Save Activity
                  </button>
                  <button className="bg-[#946C3C] uppercase text-white w-full  py-4 mx-auto  ">
                    continue
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CreateaRetreat;
