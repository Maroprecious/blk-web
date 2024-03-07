import Layout from "@/shared/admin/layout/Layout";
import { FaChevronDown } from "react-icons/fa6";
import addProduct from "../../../../assets/icons/addProduct.svg";
import addRetreat from "../../../../assets/icons/addRetreat.svg";
import add from "../../../../assets/icons/add.svg";
import ongoingRepeat from "../../../../assets/images/retreat.svg";
import days from "../../../../assets/icons/days.svg";
import Cards from "@/components/dashboard/Cards";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const dashboard = () => {
  return (
    <Layout>
      <section className="flex justify-end">
        <Popover>
          <PopoverTrigger className="bg-[#946C3C] gap-2 w-[169px] text-white   py-2 flex justify-center items-center">
            {" "}
            <p className="uppercase">quick action</p>
            <FaChevronDown width={28} height={28} />
          </PopoverTrigger>
          <PopoverContent className="max-w-[178px] mt-2">
            <div className="flex gap-1">
              <img src={addRetreat} alt="" />
              <p>Add retreat</p>
            </div>
            <div className="flex gap-1 mt-4">
              <img src={addProduct} alt="" />
              <p>Add product</p>
            </div>
            <div className="flex gap-1 mt-4">
              <img src={add} alt="" />
              <p>Add herb</p>
            </div>
          </PopoverContent>
        </Popover>
      </section>
      <div className="flex gap-6 mt-6 ">
        <div className="flex-1">
          <section className="font-arapey">
            <h2 className="font-medium text-2xl mb-2">Summary</h2>
            <div className="w-full max-w-[733px] flex gap-6">
              <Cards />
              <Cards />
            </div>
            <div className="w-full max-w-[733px]">
              <h2 className="font-medium text-2xl mt-6 mb-2">Overview</h2>
              <div className="w-full max-w-[733px] h-96 flex gap-6 ">
                <div className="p-6 bg-transparent border border-[#EAECF0] flex-1"></div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-1 w-full max-w-[339px]">
          <section>
            <h2 className="font-medium text-2xl mb-2">Ongoing retreat</h2>
            <div className="w-full border border-[#EAECF0] p-2">
              <img src={ongoingRepeat} alt="ongoingRepeat" />
              <div className="w-full p-4">
                <p className="font-medium text-2xl mb-2">
                  Tranquil Forest Retreat, Pacific Northwest
                </p>
                <div className="text-[#CF956F] flex bg-[#FAF6F3] py-2 my-2  justify-start items-start w-[95px] gap-2">
                  <img src={days} alt="" />5 days
                </div>
                <button className="w-full uppercase bg-[#946C3C] h-10 text-[#FFFFFF]">
                  see itinerary
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default dashboard;
