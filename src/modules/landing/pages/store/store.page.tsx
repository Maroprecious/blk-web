import BRHeader from "@/shared/components/header/header";
import { CiSearch } from "react-icons/ci";
import { products } from "../../resouces";
import { Link } from "react-router-dom";
import { useState } from "react";

const Store = () => {
  const [productsItems, setProductsItems] = useState(products);
  const handleAddToCart = (productId: number) => {
    setProductsItems((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const handleReduceQuantity = (productId: number) => {
    setProductsItems((prevProduct) =>
      prevProduct.map((prd) =>
        prd.id === productId
          ? { ...prd, quantity: Math.max(0, prd.quantity - 1) }
          : prd
      )
    );
  };

  return (
    <div>
      <BRHeader />
      <section className="px-4 lg:pl-[120px] mt-[30px] lg:pt-[150px]">
        <form className=" w-full  lg:max-w-[470px]  mx-auto">
          <div className={`relative  `}>
            <CiSearch
              className={` text-xl text-[#98A2B3] lg:text-5xl cursor-pointer w-6 h-6 absolute left-3 top-[18px] 
              }`}
              width="24"
              height="24"
            />

            <input
              type="text"
              className="w-full border bg-transparent border-[#3DBDAD1] placeholder:text-[#98A2B3] focus:outline-none py-2 lg:py-4 pl-10 font-maison "
              placeholder="Search"
            />
          </div>
        </form>
      </section>
      <div className="grid grid-cols-3 ">
        {productsItems.map((product) => {
          return (
            <div
              key={product.id}
              className="border-[0.5px] border-[#DBDAD1]  w-460 p-6"
            >
              <img src={product.image} alt={product.name} />

              <div className="flex gap-6 mb-4 mt-2">
                <p className="text-2xl font-maison mt-4">
                  {product.name}
                  <span className="italic">({product.scientificName})</span>
                </p>
                <p className="text-2xl mt-4 whitespace-nowrap text-[#CF956F] font-recoleta font-medium">
                  $ {product.Price} USD
                </p>
              </div>
              <div className="flex justify-center items-center gap-6 mb-6">
                <p
                  className="text-2xl cursor-pointer"
                  onClick={() => handleReduceQuantity(product.id)}
                >
                  -
                </p>
                <p className="text-2xl cursor-pointer">{product.quantity}</p>
                <p
                  className="text-2xl cursor-pointer"
                  onClick={() => handleAddToCart(product.id)}
                >
                  +
                </p>
              </div>
              <Link to={`/store/${product.id}`}>
                <button className="w-full bg-[#946C3C] uppercase h-10 text-white">
                  Add to cart
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
