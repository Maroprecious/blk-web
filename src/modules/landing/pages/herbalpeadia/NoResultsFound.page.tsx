import { CiSearch } from "react-icons/ci";
import NoResults from "@assets/images/NoResults.svg";
import Footer from "@/components/landing/Footer";
const NoResultsFound = () => {
  return (
    <div>
      {" "}
      <form className=" w-full  lg:max-w-[470px]  mx-auto">
        <div className={`relative  `}>
          <CiSearch
            className={` text-xl lg:text-5xl text-[#667085] cursor-pointer w-6 h-6 absolute left-3 top-[18px] 
      }`}
            width="24"
            height="24"
          />

          <input
            type="text"
            className="w-full bg-white rounded-[48px] focus:outline-none py-2 lg:py-4 placeholder:text-[#BBB6B0] pl-10 font-maison text-xl lg:text-[20px]"
            placeholder="Search"
          />
        </div>
      </form>
      <section className="mt-[60px] lg:mt-[90px] text-center w-full max-w-[408px] mx-auto flex flex-col justify-center">
        <img src={NoResults} alt="NoResults" />
        <h4 className="font-recoleta text-2xl">No search results</h4>
        <p className="text-[#667085]">
          We couldn’t find a herb with that name.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default NoResultsFound;
