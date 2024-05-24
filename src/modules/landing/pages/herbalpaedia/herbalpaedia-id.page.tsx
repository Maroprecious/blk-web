import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  PrimaryAccordion,
} from "@/components/ui/accordion";
import BreadCrumb from "@/components/ui/bread-crumb";
import { GoPlus } from "react-icons/go";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { useGetOneHerbalpaedia } from "@/api/queries";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function HerbalpaediaID() {
  const params = useParams();
  const { refetch, data } = useGetOneHerbalpaedia(params?.id as any);

  useEffect(() => {
    if (params.id) {
      refetch();
    }
  }, [params]);

  console.log(data?.data?.images[0], "dataa");
  return (
    <PageLayout>
      <div className="w-full p-8 bg-white pt-10 relative min-h-[100vh]">
        <BreadCrumb
          items={[
            {
              label: "Herbalpaedia",
              link: "/herbalpaedia",
            },
            {
              label: `${data?.data?.name} (${data?.data?.sciName})`,
              link: `/herbalpaedia/${data?.data?.id}`,
            },
          ]}
        />

        <div className="w-full lg:h-[60vh] gap-6 flex justify-between items-start">
          <div className="w-[60%] h-full">
            <div
              className=" bg-cover bg-center bg-no-repeat w-full h-[499px]"
              style={{ backgroundImage: `url('${data?.data?.images[0]}')` }}
            />
          </div>
          <div className="w-[38%] h-full flex justify-between items-start gap-6">
            <div className="grow h-full flex flex-col gap-6">
              <div
                className=" h-[237px] w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${data?.data?.images[1]}')` }}
              />
              <div
                className=" h-1/2 w-full bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${data?.data?.images[2]}')` }}
              />
            </div>
            <div className="w-1/3 h-full flex flex-col gap-6">
              <div
                className="w-full h-[60%] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${data?.data?.images[3]}')` }}
              />
              <div
                className="w-full h-[40%] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${data?.data?.images[4]}')` }}
              >
                {data?.data?.images >= 5 && (
                  <div
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    className="w-full h-full flex flex-col justify-center items-center gap-2"
                  >
                    <GoPlus size={17} color="#fff" />
                    <p className="font-maison text-white text-[17px]">
                      {data?.data?.images.length} more photos
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-start mt-24">
          <div className="w-[80%]">
            <h2 className="font-amsterdam text-primary text-[24px] py-6">
             {data?.data?.name} ({data?.data?.sciName})
            </h2>
            <p className="font-arapey font-light text-[16px] text-gray-500">
           {data?.data?.about}
            </p>
          </div>
          <div className="bg-cream-300 flex justify-center items-center gap-2 px-4 py-2 font-arapey text-[16px] text-clay-900">
            <div className="w-[5px] h-[5px] bg-clay-900 rounded-full" />
            <p>Spiritual use</p>
          </div>
        </div>
        <div className="py-6 pb-20">
          <PrimaryAccordion>
            {[
              {
                title: "Medicinal use",
                value:
                 data?.data?.medUse,
              },
              {
                title: "Spiritual use",
                value:
                 data?.data?.spiritUse,
              },
              {
                title: "Contradictions",
                value:
                  data?.data?.sideEffects
              },
              {
                title: "Interactions",
                value:
              ""
              },
            ].map((element, idx) => (
              <AccordionItem key={element.title} value={`item-${idx + 1}`}>
                <AccordionTrigger>{element.title}</AccordionTrigger>
                <AccordionContent>{element.value}</AccordionContent>
              </AccordionItem>
            ))}
          </PrimaryAccordion>
        </div>
        <button className="px-[20px] py-[8px] fixed bottom-8 right-8 font-maison text-[13px] text-white bg-primary uppercase">
          buy now $150
        </button>
      </div>
    </PageLayout>
  );
}
