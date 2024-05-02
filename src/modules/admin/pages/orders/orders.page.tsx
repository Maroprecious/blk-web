import Cards from "@/components/dashboard/Cards";
import Layout from "@/shared/admin/layout/Layout";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { OrderItems } from "@/modules/landing/resouces";
import LineChart from "./LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import download from "@assets/icons/download2.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import addProduct from "../../../../assets/icons/addProduct.svg";
import addRetreat from "../../../../assets/icons/addRetreat.svg";
import add from "../../../../assets/icons/add.svg";
const Orders = () => {
  return (
    <Layout>
      <section className="flex justify-between mb-7">
        <Popover>
          <PopoverTrigger className="text-[#475467] gap-2 w-[108px]  border border-[#D0D5DD]  py-2 flex justify-center items-center">
            {" "}
            <p className="uppercase">filter</p>
            <FaChevronDown width={24} height={24} />
          </PopoverTrigger>
          <PopoverContent className="max-w-[128px] mt-2">
            <div className="flex gap-1">
              <p>Daily</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Weekly</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Monthly</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Yearly</p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="bg-[#946C3C] gap-2 px-2 w-[px] text-white   py-2 flex justify-center items-center">
            <img src={download} alt="" />
            <p className="uppercase">Export sales data</p>
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
      <section className="flex gap-2 flex-auto bg-transparent">
        <Cards />
        <Cards />
        <Cards />
      </section>
      <section className=" mt-10">
        <Tabs defaultValue="account" className="">
          <TabsList className="flex justify-between">
            <h3 className="font-arapey text-2xl ">Order timeline</h3>

            <div>
              <TabsTrigger value="account">Weekly</TabsTrigger>
              <TabsTrigger value="password">Monthly</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="account">
            {" "}
            <LineChart />
          </TabsContent>
          <TabsContent value="password">
            {" "}
            <LineChart />
          </TabsContent>
        </Tabs>
      </section>
      <section>
        <div className="flex justify-between my-3">
          <h3 className="font-arapey text-2xl ">Recent orders</h3>
          {/* <a href="./AllOrders.tsx">View all</a> */}
          <Link to="/admin/orders/all">View all</Link>
        </div>
        <DataTable columns={columns} data={OrderItems} />
      </section>
    </Layout>
  );
};

export default Orders;
