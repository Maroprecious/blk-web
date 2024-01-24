import { products } from "@/modules/landing/resouces";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="grid grid-cols-3 ">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="border-[0.5px] border-[#DBDAD1]  w-460 p-6"
          >
            <img src={product.image} alt={product.name} />
            <p className="text-2xl font-maison mt-4">
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
                read more
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
