import { Link } from "react-router-dom";
import { FiClock, FiUsers } from "react-icons/fi";

const GalleryItems = ({ gallery }: { gallery?: any }) => {
  return (
    <div className="flex flex-wrap">
      {gallery?.map((item: any, key: any) => {
        return (
          <div
            key={key}
            className="border-[0.5px] w-full sm:w-1/2 lg:w-1/3 border-[#DBDAD1] p-6"
          >
            <img
              src={item.img}
              alt={item.name}
              className="object-cover max-h-[505px] w-full"
            />
            <p className="text-2xl font-arapey mt-4">{item.title}</p>
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                <FiClock fontSize={24} className="text-[#CF956F] mr-2" />
                <p className="text-[#CF956F] inline-block">{item.date}</p>
              </div>
              <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                <FiUsers fontSize={24} className="text-[#CF956F] mr-2" />
                <p className="text-[#CF956F] inline-block">
                  {item.totalNumber} people
                </p>
              </div>
            </div>
            <Link to={`/gallery/${item.id}`}>
              <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                view gallery
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryItems;
