import { Link, useParams, useLocation } from "react-router-dom";
import { products } from "../../resouces";
import BRHeader from "@/shared/components/header/header";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import DrawerModal from "@/components/landing/drawerModal";
import "./store.css";
import Footer from "@/components/landing/Footer";
import { useState } from "react";
import { useCart } from "@/context/cart";
const StoreItem = () => {
  const location = useLocation();
  const { quantity, sciFi } = location.state;
  const { productId } = useParams<{ productId: string }>();
  const { data, loading } = useFetch(`${URL}/products/${productId}`, "GET");

  const HerbsProduct = data?.data;
  const [qty, setQuantity] = useState(quantity);
  const increaseQuantity = () => {
    setQuantity((prevQuantity: any) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (qty > 0) {
      setQuantity((prevQuantity: any) => prevQuantity - 1);
    }
  };
  const { addItemToCart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div>
        <BRHeader />
        {loading ? (
          <div
            role="status"
            className="flex justify-between w-full h-48 mt-48 items-center translate-x-1/2"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8   animate-spin text-[#E6E5DE]  fill-[#946C3C]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <section className="px-4 lg:px-[120px] mt-[96px] lg:mt-[150px] tablet:flex gap-[42px] ">
            <div className="flex gap-12 justify-center items-center h-[610px]">
              <div className="hidden xl:flex flex-col h-full  justify-between">
                <div className="w-[180px] h-[155px]">
                  <img
                    src={HerbsProduct.images[0]}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="w-[180px] h-[155px]">
                  <img
                    src={HerbsProduct.images[0]}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="w-[180px] h-[155px]">
                  <img
                    src={HerbsProduct.images[0]}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="w-[180px] h-[155px]">
                  <img
                    src={HerbsProduct.images[0]}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full tablet:min-w-[486px] object-cover object-center max-w-[486px] h-[600px]">
                {" "}
                <img
                  src={HerbsProduct.images[0]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="my-6">
              <h3 className="text-2xl lg:text-3xl mb-2">
                {HerbsProduct?.name} {sciFi}
              </h3>
              <h4 className="font-recoleta text-[#946C3C] font-medium text-2xl lg:text-5xl">
                ${HerbsProduct?.price} USD
              </h4>
              <ul className="list-disc text-[20px] mt-5 tablet:mt-10">
                <li className="ml-5">{HerbsProduct?.desc}</li>
              </ul>
              <div className="flex w-full item-baseline justify-around mt-8">
                {" "}
                <p
                  className="text-2xl cursor-pointer"
                  onClick={() => decreaseQuantity()}
                >
                  -
                </p>
                <p className="text-2xl cursor-pointer">{qty}</p>
                <p
                  className="text-2xl cursor-pointer"
                  onClick={() => increaseQuantity()}
                >
                  +
                </p>
              </div>
              <button
                onClick={() => {
                  addItemToCart(HerbsProduct);
                  toggleDrawer();
                }}
                className="uppercase w-full bg-[#946C3C] h-14 text-white  mt-6"
              >
                Buy herbs
              </button>
            </div>
          </section>
        )}
        {/* section */}
        <section className="mt-[75px] lg:mt-[140px]">
          <h2 className="px-4 lg:px-[120px] text-2xl lg:text-[64px] font-amsterdam mb-4 lg:mb-16">
            Related herbs
          </h2>
          <div className="flex flex-wrap">
            {products.slice(0, 3).map((product: any) => {
              return (
                <div
                  key={product.id}
                  className="border-[0.5px] w-full sm:w-1/2 lg:w-1/3 border-[#DBDAD1] p-6"
                >
                  <img src={product.image} alt={product.name} />
                  <div className="flex flex-wrap xl:flex-nowrap gap-3 xl:gap-6 mb-4 mt-2">
                    <p className="text-2xl mt-4">
                      {product.name}
                      <span className="italic">{product.scientificName}</span>
                    </p>
                    <p className="text-2xl xl:mt-4 whitespace-nowrap text-[#CF956F] font-recoleta font-medium">
                      $ {product.Price} USD
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-6 mb-6">
                    <p
                      className="text-2xl cursor-pointer"
                      // onClick={() => handleReduceQuantity(product.id)}
                    >
                      -
                    </p>
                    <p className="text-2xl cursor-pointer">
                      {product.quantity}
                    </p>
                    <p
                      className="text-2xl cursor-pointer"
                      // onClick={() => handleAddToCart(product.id)}
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
      <DrawerModal isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default StoreItem;
