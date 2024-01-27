import Layout from "@/shared/admin/layout/Layout";
import { FaChevronDown } from "react-icons/fa6";
import addProduct from "../../../../assets/icons/addProduct.svg";
import addRetreat from "../../../../assets/icons/addRetreat.svg";
import add from "../../../../assets/icons/add.svg";
import retreatParticipant from "../../../../assets/icons/retreatPartcp.svg";
import ongoingRepeat from "../../../../assets/images/retreat.svg";

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
      <div className="flex gap-6  justify-between">
        <div>
          <section className="font-maison">
            <h2 className="font-medium text-2xl mb-2">Summary</h2>
            <div className="w-full max-w-[733px] flex gap-6">
              <div className="p-6 bg-transparent border border-[#EAECF0] flex-1">
                <img
                  src={retreatParticipant}
                  alt="retreatParticipant Icon"
                  className="mb-2"
                />
                <h3 className="font-recoleta text-[#101828] text-6xl py-3">
                  60
                </h3>
                <p className="text-[#667085] text-[20px]">
                  No of retreat participants
                </p>
              </div>
              <div className="p-6 bg-transparent border border-[#EAECF0] flex-1">
                <img
                  src={retreatParticipant}
                  alt="retreatParticipant Icon"
                  className="mb-2"
                />
                <h3 className="font-recoleta text-[#101828] text-6xl py-3">
                  60
                </h3>
                <p className="text-[#667085] text-[20px]">
                  No of retreat participants
                </p>
              </div>
            </div>
            <div>
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
            <div className="w-full">
              <img src={ongoingRepeat} alt="ongoingRepeat" />
              <p className="font-medium text-2xl mb-2">
                Tranquil Forest Retreat, Pacific Northwest
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default dashboard;
