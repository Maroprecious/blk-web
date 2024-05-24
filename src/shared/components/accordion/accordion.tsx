import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../buttons/button";

type props = {
  items: Array<{
    image: string;
    name: string;
    address: string;
    rating: string;
  }>;
  setSelected: (data: {
    name: string;
    image: string;
    address: string;
    rating: string;
  }) => void;

  faq: Array<{
    question: string;
    answer: string;
  }>;
};
export default function Accordions({ items, setSelected, faq }: props) {
  return (
    <div className="w-full mt-6">
      <Accordion>
        <AccordionItem
          style={{
            width: "100%",
            backgroundColor: "#FAF6F3",
            padding: "4px",
            marginTop: "1rem",
            border: "1px solid #EAECF0",
          }}
          header={
            <div className="w-[100%] flex justify-between items-center">
              <p>Hotel Information</p>
              <div className="absolute right-4">
                {" "}
                <IoIosArrowDown />
              </div>
            </div>
          }
        >
          <div className="w-full grid grid-cols-2 gap-[.7rem] mt-4">
            {items.map(
              (ele: {
                name: string;
                image: string;
                address: string;
                rating: string;
              }) => (
                <div className="w-auto h-[420px] border border-gray-200 p-2 flex flex-col justify-center items-start">
                  <div
                    className="w-[99.5%] mx-auto h-[204px] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${ele?.image}')`,
                    }}
                  />
                  <div className="w-full p-2">
                    <h3 className="font-arapey text-gray-900 text-[20px] font-medium">
                      {/* Lavender <span className="italic">(Lavandula angustifolia)</span> */}
                      {ele?.name}
                    </h3>
                    <p className="text-gray-900 font-arapey text-[15px] pt-2">
                      {ele?.address}
                    </p>
                    <div className="w-full py-2 flex justify-start gap-[.7rem] items-start">
                      <Button
                        title="SELECT"
                        onClick={() =>
                          setSelected({
                            name: ele.name,
                            image: ele.image,
                            address: ele.address,
                            rating: ele.rating,
                          })
                        }
                        variant="outline"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </AccordionItem>
        <AccordionItem
          style={{
            width: "100%",
            backgroundColor: "#FAF6F3",
            padding: "4px",
            marginTop: "1rem",
            border: "1px solid #EAECF0",
          }}
          header={
            <div className="w-[100%] border border-gray-200 flex justify-between items-center">
              <p>Itinerary</p>
              <div className="absolute right-4">
                {" "}
                <IoIosArrowDown />
              </div>
            </div>
          }
        ></AccordionItem>
        <AccordionItem
          style={{
            width: "100%",
            backgroundColor: "#FAF6F3",
            padding: "4px",
            marginTop: "1rem",
            border: "1px solid #EAECF0",
          }}
          header={
            <div className="w-[100%] flex justify-between items-center">
              <p>Frequently Asked Questions (FAQ)</p>
              <div className="absolute right-4">
                {" "}
                <IoIosArrowDown />
              </div>
            </div>
          }
        >
          <div className="flex flex-col pt-6 justify-start items-start">
            {faq.map((ele: { question: string; answer: string }) => (
              <div>
                <h3 className="text-gray-900 text-[24px] font-arapey font-normal">
                  {ele.question}
                </h3>
                <p className="text-gray-500 text-[16px] font-arapey font-normal">
                  {ele.answer}
                </p>
              </div>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
