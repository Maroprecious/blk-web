import React from "react";
import { galleryMock } from "../../resouces";
import BRHeader from "@/shared/components/header/header";
import Footer from "@/components/landing/Footer";
import { useParams } from "react-router-dom";
import gallery1 from "@assets/images/gallery-mock/gallery/gallery-1.png";
import gallery2 from "@assets/images/gallery-mock/gallery/gallery-2.png";
import gallery3 from "@assets/images/gallery-mock/gallery/gallery-3.png";
import {
  FiClock,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export const GalleryItemDetail = () => {
  const params = useParams();
  const galleryId = params.galleryId || 0;
  const galleryItem = galleryMock[Number(galleryId) - 1];

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {open && (
        <GalleryViewer
          images={[gallery1, gallery2, gallery3, gallery1, gallery2, gallery3]}
          setOpen={setOpen}
        />
      )}
      <div>
        <BRHeader />
        <section className="w-full mx-auto mt-[96px] xl:mt-[150px]">
          <div className="flex gap-6">
            <div className="cursor-pointer w-full h-[558px] lg:h-[731px] overflow-hidden">
              <img
                src={gallery1}
                onClick={() => setOpen(true)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:flex gap-6 relative min-w-[400px]">
              <div className="cursor-pointer h-[353px] w-full absolute right-0 top-0">
                <img
                  src={gallery2}
                  onClick={() => setOpen(true)}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="cursor-pointer h-[353px] w-full absolute bottom-0 right-0">
                <img
                  src={gallery3}
                  onClick={() => setOpen(true)}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-[120px] mt-[60px] grid">
          <div className="flex flex-col gap-y-4 mb-2">
            <h2 className="text-2xl leading-[48px] lg:text-4xl font-amsterdam">
              {galleryItem.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-12 mt-4">
              <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                <FiClock fontSize={24} className="text-[#CF956F] mr-2" />
                <p className="text-[#CF956F] inline-block">
                  {galleryItem.date}
                </p>
              </div>
              <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                <FiUsers fontSize={24} className="text-[#CF956F] mr-2" />
                <p className="text-[#CF956F] inline-block">
                  {galleryItem.totalNumber} people
                </p>
              </div>
            </div>
            <div className="text-xl lg:text-2xl whitespace-break-spaces lg:mb-12">
              {galleryItem.description}
            </div>
          </div>
        </section>
        {/* section */}

        <Footer />
      </div>
    </div>
  );
};

export default GalleryItemDetail;

const GalleryViewer = ({
  images,
  setOpen,
}: {
  images: any[];
  setOpen: any;
}) => {

  const [index, setIndex] = React.useState<number>(0);
  const imageLength = images.length;

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(imageLength - 1);
    }
  };

  const handleNext = () => {
    if (imageLength === index + 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="overflow-scroll w-screen inset-0 z-[100] bg-[rgba(0,0,0,.75)] h-screen fixed flex items-center justify-center">
      <div className="relative w-full max-w-[877px] m-auto pb-10 max-h-[684px] bg-white mx-4 flex flex-col">
        <div
          onClick={() => setOpen(false)}
          className="absolute text-2xl cursor-pointer top-[36px] right-[24px]"
        >
          &#x2715;
        </div>
        <p className="text-center text-[#CF956F] mt-8 font-amsterdam text-2xl">
          Gallery View
        </p>
        <div className="relative mt-10">
          <div className="absolute h-full flex items-center ml-10 my-auto top-0 left-0 z-20">
            <div
              onClick={handlePrev}
              className="w-12 h-12 bg-black flex items-center justify-center rounded-full cursor-pointer absolute left-0"
            >
              <FiChevronLeft className="text-[#CF956F]" fontSize={24} />
            </div>
          </div>
          <div className="px-6">
            <img
              src={images[index]}
              alt="backrooted gallery"
              className="w-full h-[499px] object-cover"
            />
          </div>
          <div className="absolute h-full flex items-center mr-10 my-auto top-0 right-0 z-20">
            <div
              onClick={handleNext}
              className="w-12 h-12 bg-black flex items-center justify-center rounded-full cursor-pointer"
            >
              <FiChevronRight className="text-[#CF956F]" fontSize={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
