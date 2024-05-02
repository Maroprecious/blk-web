import Layout from "@/shared/admin/layout/Layout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronDown } from "react-icons/fa6";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { customers } from "@/modules/landing/resouces";
const Herbalpedia = () => {
  return (
    <Layout>
      <section className="flex justify-end mb-7">
        <Popover>
          <PopoverTrigger className="text-[#475467] gap-2 w-[108px]  border border-[#D0D5DD]  py-2 flex justify-center items-center">
            {" "}
            <p className="uppercase">filter</p>
            <FaChevronDown width={24} height={24} />
          </PopoverTrigger>
          <PopoverContent className="max-w-[128px] mt-2">
            <div className="flex gap-1">
              <p>Scheduled</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Ongoing</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Completed</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Cancelled</p>
            </div>
          </PopoverContent>
        </Popover>
      </section>
      <section className="">
        <DataTable columns={columns} data={customers} />
      </section>
    </Layout>
  );
};

export default Herbalpedia;
