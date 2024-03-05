import Cards from "@/components/dashboard/Cards";
import Layout from "@/shared/admin/layout/Layout";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { OrderItems } from "@/modules/landing/resouces";
import LineChart from "./LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <Layout>
      <section className="flex gap-2 flex-auto bg-transparent">
        <Cards />
        <Cards />
        <Cards />
      </section>
      <section className=" mt-10">
        <Tabs defaultValue="account" className="">
          <TabsList className="flex justify-between">
            <h3 className="font-maison text-2xl ">Order timeline</h3>

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
          <h3 className="font-maison text-2xl ">Recent orders</h3>
          {/* <a href="./AllOrders.tsx">View all</a> */}
          <Link to="admin/orders/all">View all</Link>
        </div>
        <DataTable columns={columns} data={OrderItems} />
      </section>
    </Layout>
  );
};

export default Orders;
