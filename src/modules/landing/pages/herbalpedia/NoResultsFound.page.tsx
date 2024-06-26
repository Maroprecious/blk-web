import { CiSearch } from "react-icons/ci";
import NoResults from "@assets/images/NoResults.svg";
import Footer from "@/components/landing/Footer";
import BRHeader from "@/shared/components/header/header";

const NoResultsFound = () => {
  return (
    <div>
      <BRHeader />
      <form className="px-4 lg:mt-40 items-center justify-between w-full lg:max-w-[470px] mx-auto">
        <div className="relative flex items-center">
          <CiSearch className={`text-xl lg:text-5xl text-[#667085] cursor-pointer w-6 h-full my-auto absolute left-3`}
            width="24"
            height="24"
          />

          <input
            type="text"
            className="w-full bg-white rounded-[48px] focus:outline-none py-2 lg:py-4 placeholder:text-[#BBB6B0] pl-12 font-arapey text-xl lg:text-[20px]"
            placeholder="Search"
          />
        </div>
      </form>
      <section className="my-[60px] lg:my-[90px] text-center w-full max-w-[408px] mx-auto flex flex-col justify-center">
        <img src={NoResults} alt="NoResults" />
        <h4 className="font-amsterdam text-2xl mb-4">No search results</h4>
        <p className="text-[#667085]">
          We couldn't find a herb with that name or id
        </p>
      </section>
        <Footer />
    </div>
  );
};

export default NoResultsFound;
