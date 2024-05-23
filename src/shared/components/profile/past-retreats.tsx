import { useGetAllRetreats } from "@/api/queries";
import RetreatCard from "../cards/retreats/retreat-card";
import { EmptyRetreat } from "../cards/retreats/empty-state";

export const PastRetreats = () => {
  const { data } = useGetAllRetreats();
  console.log(data?.data?.data, "retreats");
  return (
    <>
      {data?.data?.data?.some((ele) => ele?.status === 'past') ? (
          <>
            <div className="flex w-[73%] px-6 flex-wrap justify-start items-center gap-4">
              {data?.data?.data
                .filter((elem) => elem.status === "past")
                .map((element, idx: number) => (
                  <div className="w-[32%]" key={idx}>
                    <RetreatCard
                      name={element.name}
                      price={element.price}
                      items={["Past"]}
                    />
                  </div>
                ))}
            </div>
          </>
        ) : (
          <EmptyRetreat text="past" />
        )
      }
    </>
  );
};
