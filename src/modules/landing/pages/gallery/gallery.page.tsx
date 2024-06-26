import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
import Footer from "@/components/landing/Footer";
import { galleryMock } from "../../resouces";
import GalleryItems from "@/components/landing/gallery/Gallery";

const Gallery = () => {
  return (
    <div className="">
      <BRTHeader />
      {/* section */}
      <section className="relative mb-[62px] lg:mb-[121px]">
        <p className="absolute px-6 lg:px-[120px] py-[40px] lg:py-[77px] text-3xl lg:text-[58px] font-amsterdam text-white left-0 bottom-0 ">Gallery</p>
        <video className="h-[558px] lg:h-full max-h-[900px] w-full object-cover object-center" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      <GalleryItems gallery={galleryMock} />
      <Footer />
    </div>
  );
};

export default Gallery;
