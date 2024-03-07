import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
import Footer from "@/components/landing/Footer";
import { products } from "../../resouces";
import { Link } from "react-router-dom";
products;
const Gallery = () => {
  return (
    <div className="bg-[#FAF6F3]">
      <BRTHeader />
      {/* section */}
      <section className="">
        <video height="558px" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="border-[0.5px] border-[#DBDAD1]  w-460 p-6"
          >
            <img src={product.image} alt={product.name} />
            <p className="text-2xl font-arapey mt-4">
              {product.name}
              <span className="italic">({product.scientificName})</span>
            </p>
            <div className="flex gap-2 mb-4 mt-2">
              <div className="bg-white p-2 flex items-center gap-1">
                <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                <p className="text-[#CF956F] inline-block">Spiritual use</p>
              </div>
              <div className="bg-white p-2 flex items-center gap-1">
                <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                <p className="text-[#CF956F] inline-block">Medicinal use</p>
              </div>
              <div className="bg-white p-2 flex items-center gap-1">
                <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                <p className="text-[#CF956F] inline-block">Side effects</p>
              </div>
            </div>
            <Link to={`/herbs/${product.id}`}>
              <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                View gallery
              </button>
            </Link>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Gallery;
