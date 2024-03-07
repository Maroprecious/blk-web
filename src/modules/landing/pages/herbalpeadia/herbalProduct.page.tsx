import Products from "@/components/landing/products/Products";
import Footer from "@/components/landing/Footer";
import BRHeader from "@/shared/components/header/header";
import { useState, ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { products } from "@/modules/landing/resouces";
import NoResultsFound from "@/modules/landing/pages/herbalpeadia/NoResultsFound.page";

const HerbalProduct = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  if (products === undefined || products?.length === 0) {
    return <NoResultsFound />;
  }

  return (
    <div>
      <BRHeader />
      <section className="px-4 lg:pl-[120px] mt-[96px] xl:mt-[150px]">
        <form className=" w-full  lg:max-w-[470px]  mx-auto">
          <div className={`relative  `}>
            <CiSearch
              className={`text-xl lg:text-5xl cursor-pointer w-6 absolute left-3 h-full my-auto`}
              width="24"
              height="24"
            />

            <input
              type="text"
              className="w-full bg-white rounded-[48px] focus:outline-none py-2 lg:py-4 placeholder:text-[#BBB6B0] pl-10 text-xl lg:text-[20px]"
              placeholder="Search"
              onChange={handleInputChange}
              value={inputValue}
            />
          </div>
        </form>
        <div className="mt-14 text-[20px]">
          Search results: <span>{inputValue}</span>
        </div>
      </section>
      <section>
        <Products products={products} />
      </section>
      <Footer />
    </div>
  );
};

export default HerbalProduct;
