import Layout from "@/shared/admin/layout/Layout";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { OrderItems } from "@/modules/landing/resouces";
import { FaChevronDown } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const AllOrders = () => {
  return (
    <Layout>
      <section>
        <div className="flex justify-between my-3">
          <div className="flex font-light">
            <h3 className="font-maison  text-[#98A2B3]">Orders</h3>
            <ChevronRight className="text-[#98A2B3]" />
            <h3 className="text-[#946C3C]">All orders</h3>
          </div>
          <div>
            <Popover>
              <PopoverTrigger className="border-[#D0D5DD] gap-2 w-[113px] h-10 border    py-2 flex justify-center items-center">
                {" "}
                <p className="uppercase text-[#475467]">filter</p>
                <FaChevronDown width={28} height={28} />
              </PopoverTrigger>
              <PopoverContent className="max-w-[113px] mt-2">
                <div className="flex gap-1">
                  <p>Weekly</p>
                </div>
                <div className="flex gap-1 mt-4">
                  <p>Weekly</p>
                </div>
                <div className="flex gap-1 mt-4">
                  <p>Weekly</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DataTable columns={columns} data={OrderItems} />
      </section>
    </Layout>
  );
};

export default AllOrders;
