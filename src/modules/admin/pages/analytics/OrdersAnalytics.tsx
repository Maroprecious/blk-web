import LineCharts from "../orders/LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./../orders/tab";

const OrdersAnalytics = () => {
  return (
    <div className="max-w-[520px] h-[322px]">
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
            <LineCharts />
          </TabsContent>
          <TabsContent value="password">
            {" "}
            <LineCharts />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default OrdersAnalytics;
