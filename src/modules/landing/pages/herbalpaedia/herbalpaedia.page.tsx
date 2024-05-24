import Input from "@/components/ui/input";
import HerbalpaediaCard from "@/shared/components/cards/retreats/herbalpaedia-card";
import { CiSearch } from "react-icons/ci";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { useGetAllHerbapaedia } from "@/api/queries";

export default function HerbalpaediaPage() {
  const { data } = useGetAllHerbapaedia();
  return (
    <PageLayout>
      <div className="w-full lg:p-8 px-4 mt-10 bg-white min-h-[100vh]">
        <div className="lg:w-[440px] w-[300px]">
          <Input
            placeholder="Search"
            className="bg-white border border-gray-200"
            inputLeftElement={<CiSearch size={20} color="#98A2B3" />}
          />
        </div>
        <div className="w-auto grid lg:grid-cols-4 grid-cols-2 lg:gap-[1.5rem] gap-[.7rem] pt-6 justify-start items-center">
          {data?.data?.data?.map(
            (
              element: {
                name: string;
                id: number;
                sciName: string;
                image: string;
              },
              idx: number
            ) => (
              <div className="lg:w-[24%] w-auto" key={idx}>
                <HerbalpaediaCard
                  image={element.image[0]}
                  name={element.name}
                  sciName={element.sciName}
                  id={element.id}
                />
              </div>
            )
          )}
        </div>
      </div>
    </PageLayout>
  );
}
