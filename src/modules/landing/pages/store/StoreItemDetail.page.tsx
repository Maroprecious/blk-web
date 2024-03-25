import { Link, useParams } from "react-router-dom";
import { products } from "../../resouces";
import NoResultsFound from "../herbalpedia/NoResultsFound.page";
import BRHeader from "@/shared/components/header/header";
import "./store.css";
import Footer from "@/components/landing/Footer";

const StoreItemDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = products.find(
    (product) => product.id.toString() === productId
  );
  const handleAddToCart = (productId: number) => {
    return selectedProduct?.id === productId
      ? { ...selectedProduct, quantity: selectedProduct.quantity + 1 }
      : selectedProduct;
  };
  const handleReduceQuantity = (productId: number) => {
    return selectedProduct?.id === productId
      ? {
          ...selectedProduct,
          quantity: Math.max(0, selectedProduct.quantity - 1),
        }
      : selectedProduct;
  };
  //   setProductsItems((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === productId
  //         ? { ...product, quantity: product.quantity + 1 }
  //         : product
  //     )
  //   );
  // };
  // const handleReduceQuantity = (productId: number) => {
  //   setProductsItems((prevProduct) =>
  //     prevProduct.map((prd) =>
  //       prd.id === productId
  //         ? { ...prd, quantity: Math.max(0, prd.quantity - 1) }
  //         : prd
  //     )
  //   );
  // };
  if (!selectedProduct) {
    return (
      <div>
        <NoResultsFound />
      </div>
    );
  }
  return (
    <div>
      <div>
        <BRHeader />
        <section className="px-4 lg:px-[120px] mt-[96px] lg:mt-[150px] tablet:flex gap-[42px] ">
          <div className="flex">
            <div className="hidden xl:flex flex-col justify-between">
              <div className="w-[180px] h-[155px]">
                <img
                  src={selectedProduct.image}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-[180px] h-[155px]">
                <img
                  src={selectedProduct.image}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-[180px] h-[155px]">
                <img
                  src={selectedProduct.image}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="w-full tablet:min-w-[486px] object-cover object-center w-[486px] h-[558px]">
              {" "}
              <img
                src={selectedProduct.image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="my-6">
            <h3 className="text-2xl lg:text-3xl mb-2">
              {selectedProduct.name} ({selectedProduct.scientificName})
            </h3>
            <h4 className="font-recoleta text-[#946C3C] font-medium text-2xl lg:text-5xl">
              ${selectedProduct.Price} USD
            </h4>
            <ul className="list-disc text-[20px] mt-5 tablet:mt-10">
              <li className="ml-5">
                Lavender is known for its pleasant fragrance and is often used
                in aromatherapy.
              </li>
              <li className="ml-5">
                Lavender is known for its pleasant fragrance and is often used
                in aromatherapy.
              </li>
              <li className="ml-5">
                Lavender is known for its pleasant fragrance and is often used
                in aromatherapy.
              </li>
            </ul>
            <div className="flex w-full item-baseline justify-around mt-8">
              {" "}
              <p
                className="text-2xl cursor-pointer"
                onClick={() => handleReduceQuantity(selectedProduct.id)}
              >
                -
              </p>
              <p className="text-2xl cursor-pointer">
                {selectedProduct.quantity}
              </p>
              <p
                className="text-2xl cursor-pointer"
                onClick={() => handleAddToCart(selectedProduct.id)}
              >
                +
              </p>
            </div>
            <button className="w-full bg-[#946C3C] h-14 text-white uppercase mt-6">
              Buy herbs
            </button>
          </div>
        </section>
        {/* section */}
        <section className="mt-[75px] lg:mt-[140px]">
          <h2 className="px-4 lg:px-[120px] text-2xl lg:text-[64px] font-amsterdam mb-4 lg:mb-16">
            Related herbs
          </h2>
          <div className="flex flex-wrap">
            {products.slice(0, 3).map((product) => {
              return (
                <div
                  key={product.id}
                  className="border-[0.5px] w-full sm:w-1/2 lg:w-1/3 border-[#DBDAD1] p-6"
                >
                  <img src={product.image} alt={product.name} />
                  <div className="flex flex-wrap xl:flex-nowrap gap-3 xl:gap-6 mb-4 mt-2">
                    <p className="text-2xl mt-4">
                      {product.name}
                      <span className="italic">({product.scientificName})</span>
                    </p>
                    <p className="text-2xl xl:mt-4 whitespace-nowrap text-[#CF956F] font-recoleta font-medium">
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
                    <p className="text-2xl cursor-pointer">
                      {product.quantity}
                    </p>
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
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default StoreItemDetail;
