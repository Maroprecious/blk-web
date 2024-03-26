import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  PrimaryAccordion,
} from "@/components/ui/accordion";
import BreadCrumb from "@/components/ui/bread-crumb";
import { GoPlus } from "react-icons/go";

export default function HerbalpaediaID() {
  return (
    <div className="w-full bg-white relative min-h-[100vh]">
      <BreadCrumb
        items={[
          {
            label: "Herbalpaedia",
            link: "/herbalpaedia",
          },
          {
            label: "Grains of paradise (Aframomum melegueta)",
            link: "/herbalpaedia/1234",
          },
        ]}
      />
      <div className="w-full lg:h-[60vh] gap-6 flex justify-between items-start">
        <div className="w-[60%] h-full">
          <div className="w-full h-full bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat" />
        </div>
        <div className="w-[38%] h-full flex justify-between items-start gap-6">
          <div className="grow h-full flex flex-col gap-6">
            <div className=" h-1/2 w-full bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat" />
            <div className=" h-1/2 w-full bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat" />
          </div>
          <div className="w-1/3 h-full flex flex-col gap-6">
            <div className="w-full h-[60%] bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat" />
            <div className="w-full h-[40%] bg-[url('@assets/images/product-bg.png')] bg-cover bg-center bg-no-repeat">
              <div style={{backgroundColor: 'rgba(0,0,0,0.5)'}} className="w-full h-full flex flex-col justify-center items-center gap-2">
                <GoPlus size={17} color='#fff' />
                <p className="font-maison text-white text-[17px]">35 more photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-start">
        <div className="w-[80%]">
          <h2 className="font-recoleta text-primary text-[24px] py-2">
            Grains of paradise (Aframomum melegueta)
          </h2>
          <p className="font-maison font-light text-[16px] text-gray-500">
            Our retreats are open to individuals aged 28-60 living in the United
            States. Whether you're a seasoned wellness enthusiast or new to
            holistic living, our retreats cater to a wide range of backgrounds
            and experiences.
          </p>
        </div>
        <div className="bg-cream-300 flex justify-center items-center gap-2 px-4 py-2 font-maison text-[16px] text-clay-900">
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
                "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or new to holistic living, our retreats cater to a wide range of backgrounds and experiences.",
            },
            {
              title: "Spiritual use",
              value:
                "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or new to holistic living, our retreats cater to a wide range of backgrounds and experiences.",
            },
            {
              title: "Contradictions",
              value:
                "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or new to holistic living, our retreats cater to a wide range of backgrounds and experiences.",
            },
            {
              title: "Interactions",
              value:
                "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or new to holistic living, our retreats cater to a wide range of backgrounds and experiences.",
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
  );
}
