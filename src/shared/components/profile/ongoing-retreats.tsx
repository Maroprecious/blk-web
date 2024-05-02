import { useGetAllRetreats } from "@/api/queries";
import RetreatCard from "../cards/retreats/retreat-card";
import { EmptyRetreat } from "../cards/retreats/empty-state";

export const OngoingRetreats = () => {
  const { data } = useGetAllRetreats();
  console.log(data, "retreats");

  return (
    <>
      {data?.data?.data?.some((ele) => ele?.status === "ongoing") ? (
        <>
          <div className="flex w-[73%] px-6 flex-wrap justify-start items-center gap-4">
            {data?.data?.data
              .filter((elem) => elem.status === "ongoing")
              .map((element, idx: number) => (
                <div className="w-[32%]" key={idx}>
                  <RetreatCard
                    id={element.id}
                    image={element.images[0]}
                    participants={element.participants}
                    start={element.startDate}
                    end={element.endDate}
                    name={element.name}
                    price={element.price}
                  />
                </div>
              ))}
          </div>
        </>
      ) : (
        <EmptyRetreat />
      )}
    </>
  );
};
