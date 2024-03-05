import LineCharts from "../orders/LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./../orders/tab";

const RetreatAnalytics = () => {
  return (
    <div className="max-w-[550px] h-[322px] w-full">
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

export default RetreatAnalytics;
