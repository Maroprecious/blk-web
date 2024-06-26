import Header from "@/shared/components/customersPanel/header/header";
import { galleryMock } from "@/modules/landing/resouces";
import GalleryItems from "@/components/landing/gallery/Gallery";
import { CiSearch } from "react-icons/ci";
import "./gallery.css";
const Gallery = () => {
  return (
    <div className="">
      <Header />
      {/* section */}
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
      <section className=" mt-10  mb-[62px] lg:mb-[121px]">
        <GalleryItems gallery={galleryMock} />
      </section>
    </div>
  );
};

export default Gallery;
