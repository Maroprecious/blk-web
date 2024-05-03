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
      <div className="w-full p-8 mt-10 bg-white min-h-[100vh]">
        <div className="flex justify-start pb-4 items-center gap-[3.3rem] border-b border-b-gray-200">
          {" "}
          {[
            "Retreats",
            "All retreat",
            "Scheduled retreat",
            "Completed retreat",
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
        {active === 0 && (
          <div className="flex pt-6 gap-[1%] w-full items-start justify-start">
            <div className="w-[72%] h-[100vh]">
              {" "}
              <Calandar
                events={data?.data?.data.map((ele) => ({
                  title: ele.name,
                  start: moment(ele.startDate).format("YYYY-MM-DD"),
                  end: moment(ele.endDate).format("YYYY-MM-DD"),
                }))}
              />
            </div>
            <div className="w-[27%]">
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
          <div className="w-full pt-6 flex justify-start flex-wrap items-center gap-[1.5rem]">
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
                <div className="flex w-full pt-8 flex-wrap justify-start items-center gap-6">
                  {data?.data?.data
                    .filter((elem) => elem.status === "scheduled")
                    .map((element, idx: number) => (
                      <div className="w-[32%]" key={idx}>
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
                <div className="flex w-full pt-8 flex-wrap justify-start items-center gap-6">
                  {data?.data?.data
                    .filter((elem) => elem.status === "past")
                    .map((element, idx: number) => (
                      <div className="w-[32%]" key={idx}>
                        <RetreatCard
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
