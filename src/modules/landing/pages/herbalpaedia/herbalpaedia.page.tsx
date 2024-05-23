import Input from "@/components/ui/input";
import HerbalpaediaCard from "@/shared/components/cards/retreats/herbalpaedia-card";
import { CiSearch } from "react-icons/ci";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { useGetAllHerbapaedia } from "@/api/queries";

export default function HerbalpaediaPage() {
  const { data } = useGetAllHerbapaedia();
  return (
    <PageLayout>
      <div className="w-full p-8 mt-10 bg-white min-h-[100vh]">
        <div className="w-[440px]">
          <Input
            placeholder="Search"
            className="bg-white border border-gray-200"
            inputLeftElement={<CiSearch size={20} color="#98A2B3" />}
          />
        </div>
        <div className="flex w-full flex-wrap justify-start items-center gap-4">
          {data?.data?.data?.map(
            (
              element: {
                name: string;
                id: number;
                sciName: string;
              },
              idx: number
            ) => (
              <div className="w-[24%]" key={idx}>
                <HerbalpaediaCard
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
