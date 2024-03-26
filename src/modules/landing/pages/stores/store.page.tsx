import Input from "@/components/ui/input";
import ProductCard from "@/shared/components/cards/retreats/product-card";
import { CiSearch } from "react-icons/ci";
<<<<<<< HEAD

export default function StorePage() {
  return (
    <div className="w-full p-8 bg-white min-h-[100vh]">
      <div className="w-full flex justify-between items-center">
        <div className="w-[440px]">
          <Input
            placeholder="Search"
            className="bg-white border border-gray-200"
            inputLeftElement={<CiSearch size={20} color="#98A2B3" />}
          />
        </div>
        <select>

        </select>
      </div>
      <div className="flex w-full flex-wrap justify-start items-center gap-4">
        {Array(6)
          .fill("_")
          .map((element, idx) => (
            <div className="w-[24%]" key={element + idx}>
              <ProductCard items={["Energy healing", "Out of stock"]} />
            </div>
          ))}
      </div>
    </div>
=======
import { PageLayout } from "@/shared/components/layout/page-layout";

export default function StorePage() {
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
          {Array(6)
            .fill("_")
            .map((element, idx) => (
              <div className="w-[24%]" key={element + idx}>
                <ProductCard items={["", "Out of stock"]} />
              </div>
            ))}
        </div>
      </div>
    </PageLayout>
>>>>>>> 12ca00bc8fd0d846a722d2655911f8273f36efe2
  );
}
