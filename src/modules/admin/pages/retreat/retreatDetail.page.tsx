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
function RetreatDetails() {
  // const params = useParams();
  const { productId } = useParams<{ productId: string }>();
  return (
    <Layout>
      <section className="flex justify-between mb-7">
        <div className="flex  font-light">
          <a href="/admin/retreats" className="font-arapey  text-[#98A2B3]">
            Retreats
          </a>
          <ChevronRight className="text-[#98A2B3]" />
          <h3 className="text-[#946C3C]">Tranquil Forest Retreat</h3>
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
              <img src={img1} alt="" />
              <div className="flex justify-between mt-10">
                <p className="font-amsterdam text-2xl">
                  Tranquil Forest Retreat, Pacific Northwest
                </p>
                <p className="font-arapey text-[#946C3C] text-4xl">$ 350 USD</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 mt-6">
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <FiClock fontSize={24} className="text-[#CF956F] mr-2" />
                  <p className="text-[#CF956F] inline-block">
                    18th - 22nd, 2023
                  </p>
                </div>
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <FiUsers fontSize={24} className="text-[#CF956F] mr-2" />
                  <p className="text-[#CF956F] inline-block">56 people</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-4 mt-9 font-arapey">
                  Hotel information
                </h3>
                <div className="border p-2 w-[354px]">
                  <img src={img2} alt="" />
                  <p className="font-arapey text-2xl mt-2">
                    The Allison Inn & Spa
                  </p>
                  <p className="font-arapey my-3">
                    2547 Honeysuckle Lane, Ashford, Washington
                  </p>
                  <p className="font-arapey text-[#946C3C] text-4xl">
                    $ 350 USD
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Participants">
            {" "}
            <DataTable columns={columns} data={particpant} />
          </TabsContent>
          <TabsContent value="faq">
            <FAQSection />
          </TabsContent>
        </Tabs>
      </section>

      <section className=" mt-10">{productId}</section>
      <section>
        <div className="flex justify-between my-3"></div>
      </section>
    </Layout>
  );
}

export default RetreatDetails;
