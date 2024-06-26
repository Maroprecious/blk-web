import Layout from "@/shared/admin/layout/Layout";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab";
import img1 from "@/assets/images/retreat.png";
import img2 from "@/assets/images/hotel.png";
import { FiClock, FiUsers } from "react-icons/fi";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { particpant } from "@/modules/landing/resouces";
import FAQSection from "@/components/dashboard/faqs";
import { useGetOneRetreat } from "@/api/queries";
import { useEffect } from "react";
import moment from "moment";
function RetreatDetails() {
  const { retreatId } = useParams<{ retreatId: string }>();

  const { data, refetch } = useGetOneRetreat(retreatId as any);
  console.log(data?.data, "data?.data?.hotel", retreatId);
  useEffect(() => {
    if (retreatId) {
      refetch();
    }
  }, [retreatId]);
  return (
    <Layout>
      <section className="flex justify-between mb-7">
        <div className="flex  font-light">
          <a href="/admin/retreats" className="font-arapey  text-[#98A2B3]">
            Retreats
          </a>
          <ChevronRight className="text-[#98A2B3]" />
          <h3 className="text-[#946C3C]">{data?.data?.name}</h3>
        </div>
        <Button className="uppercase">cancel retreat</Button>
      </section>
      <section>
        <Tabs defaultValue="details" className="">
          <TabsList className=" w-full border-b    border-[#EAECF0]">
            <div className="flex gap-12">
              <TabsTrigger value="details" className="bg-transparent">
                Retreat details
              </TabsTrigger>
              <TabsTrigger value="Participants">Participants</TabsTrigger>
              <TabsTrigger value="faq">
                Frequently Asked Questions (FAQ)
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="details">
            <div>
              <div
                style={{
                  backgroundImage: `url('${
                    Array.isArray(data?.data?.images)
                      ? data?.data?.images[0]
                      : ""
                  }')`,
                }}
                className="w-full h-[400px] bg-cover bg-no-repeat bg-center"
              />
              <div className="flex justify-between mt-10">
                <p className="font-amsterdam text-2xl">{data?.data?.name}</p>
                <p className="font-arapey text-[#946C3C] text-4xl">
                  $ {data?.data?.price} USD
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 mt-6">
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <FiClock fontSize={24} className="text-[#CF956F] mr-2" />
                  <p className="text-[#CF956F] inline-block">
                    {moment(data?.data?.startDate).format("Do")} -{" "}
                    {moment(data?.data?.endDate).format("Do, YYYY")}
                  </p>
                </div>
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <FiUsers fontSize={24} className="text-[#CF956F] mr-2" />
                  <p className="text-[#CF956F] inline-block">
                    {data?.data?.participants?.length} people
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-4 mt-9 font-arapey">
                  Hotel information
                </h3>
                <div className="flex justify-start items-center gap-6">
                  {data?.data?.hotel?.map((item: any, idx: number) => (
                    <div key={item?.name} className="border p-2 w-[354px]">
                      <img src={item?.image} className="w-full h-auto" alt="" />
                      <p className="font-arapey text-2xl mt-2">{item?.name}</p>
                      <p className="font-arapey my-3">{item?.address}</p>
                      <p className="font-arapey text-[#946C3C] text-4xl">
                        $350 USD
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Participants">
            <DataTable
              columns={columns({
                initial: "HH",
              })}
              data={data?.data?.participants?.map(
                (element: any, idx: number) => ({
                  name: element?.name,
                  id: element?.id,
                  email: element?.email,
                  dob: moment(element?.createdAt).format("MM/DD/YYYY"),
                  price: "$2,460",
                  outstanding: "$960",
                  phoneNum: "+1 (206) 781-1374",
                  status: element?.status,
                  color: "#F6FEF9",
                })
              )}
            />
          </TabsContent>
          <TabsContent value="faq">
            <FAQSection faqs={data?.data?.faq} />
          </TabsContent>
        </Tabs>
      </section>

      <section className=" mt-10">{retreatId}</section>
      <section>
        <div className="flex justify-between my-3"></div>
      </section>
    </Layout>
  );
}

export default RetreatDetails;
