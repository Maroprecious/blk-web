"use client";

import { useGetOneRetreat } from "@/api/queries";
import BreadCrumb from "@/components/ui/bread-crumb";
import { Button } from "@/shared/components/buttons/button";
import { PageLayout } from "@/shared/components/layout/page-layout";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import people from "../../../../assets/icons/people.svg";
import { SidebarCard } from "@/shared/components/cards/sidebar-card";
import Input from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Select } from "@/components/ui/select";
import { FaStar } from "react-icons/fa";

export default function RetreatID() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({
    name: "",
    image: "",
    address: "",
    rating: 0,
  });
  const handleActive = (id: number) => {
    setActive(id);
  };
  const params = useParams();
  const { data, refetch } = useGetOneRetreat(params?.id as any);

  useEffect(() => {
    if (params.id) {
      refetch();
    }
  }, [params]);
  return (
    <PageLayout>
      {open && (
        <SidebarCard title=" Make Enquiry" onClick={() => setOpen(false)}>
          <div className="flex relative flex-col justify-between">
            <div className="pt-4">
              <Input
                name=""
                className="bg-transparent"
                label="Full name"
                placeholder=""
              />
              <Input
                name=""
                className="bg-transparent"
                label="Email address"
                placeholder=""
              />
              <Input
                name=""
                className="bg-transparent"
                style={{ height: "100px" }}
                label="Enquiry"
                placeholder="Enter Message"
              />
            </div>
            <div className="flex items-center justify-start gap-4 absolute top-[140%] w-full ">
              <Button
                title="Cancel"
                variant="outline"
                onClick={() => setOpen(false)}
              />
              <Button
                title="Make Enquiry"
                variant="solid"
                onClick={() => null}
              />
            </div>
          </div>
        </SidebarCard>
      )}
      {show && (
        <SidebarCard title=" Book Retreat" onClick={() => setShow(false)}>
          <div className="flex relative flex-col justify-between">
            <div className="pt-4">
              <Input
                name=""
                className="bg-transparent"
                label="Full name"
                placeholder=""
              />
              <Input
                name=""
                className="bg-transparent"
                label="Email address"
                placeholder=""
              />
              <Select
                name=""
                label="Payment type"
                className="bg-transparent"
                options={[
                  {
                    label: "Part Payment",
                    value: "1",
                  },
                  {
                    label: "Full Payment",
                    value: "2",
                  },
                ]}
              />
              <div className="flex gap-4">
                <div
                  className="w-[50%] relative h-[204px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${selected.image}')`,
                  }}
                >
                  <div className="flex items-center justify-start gap-2 absolute top-[86%] left-[5%]">
                    <div className="flex items-start gap-[.3rem] justify-end">
                      {Array(5)
                        .fill("_")
                        .map((ele, idx) =>
                          idx + 1 <= selected.rating ? (
                            <FaStar color="#F79009" />
                          ) : (
                            <FaStar color="#fff" />
                          )
                        )}
                    </div>
                    <p className="text-[15px] text-white">{selected.rating}</p>
                  </div>
                </div>
                <div>
                  {" "}
                  <p className="text-[20px] text-gray-900 font-normal">
                    {selected.name}
                  </p>
                  <p className="text-[16px] text-gray-900 font-normal">
                    {selected.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 absolute top-[75vh] w-full ">
              <Button
                title="Cancel"
                variant="outline"
                onClick={() => setShow(false)}
              />
              <Button
                title="Book Retreat"
                variant="solid"
                onClick={() => null}
              />
            </div>
          </div>
        </SidebarCard>
      )}
      <div className="w-full p-8 bg-white pt-10 min-h-[100vh] relative">
        <div className="flex justify-between items-center">
          <BreadCrumb
            items={[
              {
                label: "Retreats",
                link: "/retreats",
              },
              {
                label: `retreat`,
                link: `/retreat/`,
              },
            ]}
          />
          <div className="flex gap-4 w-[30%]">
            <Button
              title="MAKE ENQUIRY"
              variant="outline"
              onClick={() => setOpen(true)}
            />
            <Button
              title="BOOK RETREAT"
              variant="solid"
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <div className="flex justify-start pb-4 items-center gap-[3.3rem] border-b border-b-gray-200">
          {" "}
          {[
            "Retreats details",
            "Itenary",
            "Frequently Asked Questions (FAQ)",
          ].map((elem, id) => (
            <div onClick={() => handleActive(id)}>
              <p
                className={
                  active === id
                    ? "text-[#946C3C] font-light text-[16px]"
                    : "text-gray-500 font-light text-[16px]"
                }
              >
                {elem}
              </p>
            </div>
          ))}
        </div>
        <div>
          {active === 0 && (
            <div className="pt-6">
              <div>
                {data?.data.images[1] ? (
                  <div className="flex justify-between gap-4">
                    <div className="w-[65%] h-[329px]">
                      <div
                        className="w-full h-full bg-[#000] bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${data?.data?.images[0]}')`,
                        }}
                      />
                    </div>
                    <div className="w-[17%] h-[329px]">
                      <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${data?.data?.images[1]}')`,
                        }}
                      />
                    </div>
                    <div className="w-[17%] h-[329px]">
                      <div
                        className="w-full bg-[#000] h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${data?.data?.images[2]}')`,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="w-[100%] h-[329px]">
                      <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${data?.data?.images[0]}')`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[22px] text-gray-900">{data?.data?.name}</p>
                <h1 className="font-recoleta text-primary font-bold text-[24px]">
                  $ {data?.data?.price} USD
                </h1>
              </div>
              <div className="flex w-[40%] gap-4 mt-4">
                <div className="flex items-center p-2 gap-[.3rem] justify-items-start bg-cream-300">
                  <FaRegClock size={20} color="#CF956F" />
                  <p className="text-clay-900 text-[15px]">
                    {moment(data?.data?.startDate).format("Do")} -{" "}
                    {moment(data?.data?.endDate).format("Do")},{" "}
                    {moment(data?.data?.endDate).year()}
                  </p>
                </div>
                <div className="flex items-center p-2 gap-[.3rem] justify-items-start bg-cream-300">
                  <img src={people} />
                  <p className="text-clay-900 text-[15px]">
                    {data?.data.participants.length}{" "}
                    {`${
                      data?.data.participants.length < 2 ? "person" : "people"
                    }`}
                  </p>
                </div>
              </div>
              <p className="mt-6">Hotel Information</p>
              <div>
                {data?.data?.hotel.map((ele:any) => (
                  <div className="w-[24%] h-[420px] border border-gray-200 p-2 flex flex-col justify-center items-start">
                    <div
                      className="w-[99.5%] mx-auto h-[264px] bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${ele.image}')`,
                      }}
                    />
                    <div className="w-full p-2">
                      <h3 className="font-maison text-gray-900 text-[24px] font-medium">
                        {/* Lavender <span className="italic">(Lavandula angustifolia)</span> */}
                        {ele.name}
                      </h3>
                      <p className="text-gray-900 text-[15px] pt-2">
                        {ele.address}
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
                ))}
              </div>
            </div>
          )}
          {active === 2 && (
            <div className="flex flex-col pt-6 justify-center items-center">
              {data?.data.faq.map((ele: any) => (
                <div>
                  <h3 className="text-gray-900 text-[29px] font-normal">
                    {ele.question}
                  </h3>
                  <p className="text-gray-500 text-[16px] fon-normal">
                    {ele.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
