"use client";

import { useGetAllRetreats } from "@/api/queries";
import Calandar from "@/shared/components/calandar/calandar";
import RetreatCard from "@/shared/components/cards/retreats/retreat-card";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { useState } from "react";
import moment from "moment";
import { EmptyRetreat } from "@/shared/components/cards/retreats/empty-state";

export default function RetreatPage() {
  const [active, setActive] = useState(0);
  const handleActive = (id: number) => {
    setActive(id);
  };
  const { data } = useGetAllRetreats();
  console.log(data, "data");
  return (
    <PageLayout>
      <div className="w-full lg:p-8 p-4 mt-10 bg-white min-h-[100vh]">
        <div className="flex justify-start pb-4 items-center lg:gap-[3.3rem] gap-[1rem] border-b border-b-gray-200">
          {" "}
          {[
            "Retreats",
            "All retreat",
            "Scheduled retreat",
            "Completed retreat",
          ].map((elem, id) => (
            <div onClick={() => handleActive(id)} className="">
              <p
                className={
                  active === id
                    ? "text-[#946C3C] font-arapey font-light lg:text-[16px] text-[14px]"
                    : "text-gray-500 font-arapey font-light lg:text-[16px] text-[14px]"
                }
              >
                {elem}
              </p>
            </div>
          ))}
        </div>
        {active === 0 && (
          <div className="flex lg:flex-row flex-col pt-6 gap-[1%] w-full items-start justify-start">
            <div className="lg:w-[72%] w-[100%] lg:h-[100vh] h-full">
              {" "}
              <Calandar
                events={data?.data?.data.map((ele) => ({
                  title: ele.name,
                  start: moment(ele.startDate).format("YYYY-MM-DD"),
                  end: moment(ele.endDate).format("YYYY-MM-DD"),
                }))}
              />
            </div>
            <div className="lg:w-[27%] w-full pt-6 lg:pt-0">
              {data?.data?.data.map((elem) => (
                <RetreatCard
                  id={elem.id}
                  image={elem.images[0]}
                  participants={elem.participants}
                  start={elem.startDate}
                  end={elem.endDate}
                  name={elem.name}
                  price={elem.price}
                />
              ))}
            </div>
          </div>
        )}
        {active === 1 && (
          <div className="w-auto grid lg:grid-cols-4 grid-cols-2 lg:gap-[1.5rem] gap-[.7rem] pt-6 justify-start items-center">
            {data?.data?.data.map((elem) => (
              <RetreatCard
                id={elem.id}
                items={data?.data?.data?.slice(0, 1).map((ele) => ele.status)}
                image={elem.images[0]}
                participants={elem.participants}
                start={elem.startDate}
                end={elem.endDate}
                name={elem.name}
                price={elem.price}
              />
            ))}
          </div>
        )}
        {active === 2 && (
          <>
            {data?.data?.data?.some((ele) => ele?.status === "scheduled") ? (
              <>
                <div className="w-auto grid lg:grid-cols-4 grid-cols-2 lg:gap-[1.5rem] gap-[.7rem] pt-6 justify-start items-center">
                  {data?.data?.data
                    .filter((elem) => elem.status === "scheduled")
                    .map((element, idx: number) => (
                      <div className="lg:w-[32%] w-auto" key={idx}>
                        <RetreatCard
                          id={element.id}
                          items={["Scheduled"]}
                          name={element.name}
                          price={element.price}
                          start={element.startDate}
                          end={element.endDate}
                          participants={element.participants}
                          image={element.images[0]}
                        />
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <EmptyRetreat text="scheduled" />
            )}
          </>
        )}
        {active === 3 && (
          <>
            {data?.data?.data?.some((ele) => ele?.status === "past") ? (
              <>
                <div className="w-auto grid lg:grid-cols-4 grid-cols-2 lg:gap-[1.5rem] gap-[.7rem] pt-6 justify-start items-center">
                  {data?.data?.data
                    .filter((elem) => elem.status === "past")
                    .map((element, idx: number) => (
                      <div className="lg:w-[32%] w-auto" key={idx}>
                        <RetreatCard
                          id={element.id}
                          name={element.name}
                          price={element.price}
                          start={element.startDate}
                          end={element.endDate}
                          participants={element.participants}
                          image={element.images[0]}
                        />
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <EmptyRetreat text="completed" />
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
}
