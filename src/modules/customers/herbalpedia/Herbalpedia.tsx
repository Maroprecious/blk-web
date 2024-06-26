import Header from "@/shared/components/customersPanel/header/header";
import { CiSearch } from "react-icons/ci";
import { products } from "@/modules/landing/resouces";
import { Link } from "react-router-dom";
const Herbalpedia = () => {
  return (
    <div>
      <Header />
      <section className="px-8 mt-36 flex gap-12">
        <form className=" w-full lg:max-w-[470px] ">
          <div className={`relative`}>
            <CiSearch
              className={`text-xl text-[#98A2B3] lg:text-5xl cursor-pointer w-6 absolute left-3 h-full my-auto`}
              width="24"
              height="24"
            />

            <input
              type="text"
              className="w-full border bg-transparent border-[#3DBDAD1] placeholder:text-[#98A2B3] focus:outline-none py-2 lg:py-4 pl-10 font-arapey "
              placeholder="Search store"
            />
          </div>
        </form>
      </section>
      <section className="mx-8 flex flex-wrap items-center mt-12  gap-5">
        {products?.map((product: any, key: any) => {
          return (
            <div
              key={key}
              className="border-[0.5px] max-w-[326px]  border-[#DBDAD1] p-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover max-h-[505px] w-full"
              />
              <p className="text-2xl  font-arapey mt-4">
                {product.name} ({product.scientificName})
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                  <p className="text-[#CF956F] text-base inline-block">
                    Spiritual use
                  </p>
                </div>
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                  <p className="text-[#CF956F] inline-block">Medicinal use</p>
                </div>
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                  <p className="text-[#CF956F] inline-block">Side effects</p>
                </div>
              </div>
              <Link to={`/herbs/${product.id}`}>
                <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                  read
                </button>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Herbalpedia;
