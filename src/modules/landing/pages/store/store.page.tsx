import BRHeader from "@/shared/components/header/header";
import { CiSearch } from "react-icons/ci";
import { products } from "../../resouces";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/landing/Footer";

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
      <section className="px-4 lg:pl-[120px] mt-[96px] xl:mt-[150px] mb-12">
        <form className=" w-full lg:max-w-[470px] mx-auto">
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
      <div className="flex flex-wrap">
        {productsItems.map((product) => {
          return (
            <div
              key={product.id}
              className="border-[0.5px] w-full sm:w-1/2 lg:w-1/3 border-[#DBDAD1] p-6"
            >
              <img src={product.image} alt={product.name} className="object-cover w-full max-h-[505px]" />

              <div className="flex flex-wrap lg:flex-nowrap gap-x-6 gap-y-3 mb-4 mt-6">
                <p className="text-2xl font-arapey">
                  {product.name}
                  <span className="italic">({product.scientificName})</span>
                </p>
                <p className="text-xl whitespace-nowrap mt-1 text-[#CF956F] font-medium">
                  $ {product.Price} USD
                </p>
              </div>
              <div className="flex justify-center items-baseline gap-6 mb-6">
                <p
                  className="text-2xl cursor-pointer"
                  onClick={() => handleReduceQuantity(product.id)}
                >
                  -
                </p>
                <p className="text-xl cursor-pointer">{product.quantity}</p>
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
      <Footer />
    </div>
  );
};

export default Store;
