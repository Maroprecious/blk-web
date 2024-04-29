import Input from "@/components/ui/input";
import ProductCard from "@/shared/components/cards/retreats/product-card";
import { CiSearch } from "react-icons/ci";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { useGetAllProducts } from "@/api/queries";
import { useNavigate } from "react-router-dom";

export default function StorePage() {
  const { data } = useGetAllProducts();
  const navigate = useNavigate();
  console.log(data, "store");
  return (
    <PageLayout>
      <div className="w-full p-8 mt-12 bg-white min-h-[100vh]">
        <div className="w-full flex justify-between items-center">
          <div className="w-[440px]">
            <Input
              placeholder="Search"
              className="bg-white border border-gray-200"
              inputLeftElement={<CiSearch size={20} color="#98A2B3" />}
            />
          </div>
          <select></select>
        </div>
        <div className="flex w-full flex-wrap justify-start items-center gap-4">
          {data?.data?.data.map(
            (
              element: {
                name: string;
                price: string;
                id: number;
              },
              idx: number
            ) => (
              <div
                className="w-[24%]"
                key={idx}
                onClick={() => navigate(`/store/${element.id}`)}
              >
                <ProductCard name={element.name} price={element.price} />
              </div>
            )
          )}
        </div>
      </div>
    </PageLayout>
  );
}
