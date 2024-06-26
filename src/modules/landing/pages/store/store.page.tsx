import BRHeader from "@/shared/components/header/header";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import { useCart } from "@/context/cart";
import { ToastContainer, toast } from "react-toastify";

const Store = () => {
  const { data, loading } = useFetch(`${URL}/products`, "GET");
  const HerbsProducts = data?.data.data;

  const {
    addItemToCart,
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const quantity = cart.map((item) => item.quantity);

  const handleAddToCart = async (itemId: any, name: any) => {
    try {
      const response = await fetch(`${URL}/products/${itemId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch item details");
      }
      const itemDetails = await response.json();
      addItemToCart(itemDetails.data);
      toast.success(`${name} has been added to the cart`);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };
  const checkIfProductInCart = (productId: number): boolean => {
    return cart.some((product) => product.id === productId);
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
        {loading ? (
          <div
            role="status"
            className="flex justify-between w-full h-28 items-center translate-x-1/2"
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
          HerbsProducts?.map((product: any) => {
            return (
              <div
                key={product.id}
                className="border-[0.5px] w-full sm:w-1/2 lg:w-1/3 border-[#DBDAD1] p-6"
              >
                <Link
                  to={{ pathname: `/store/${product.id} ` }}
                  state={{ quantity, sciFi: product.scientificName }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-cover w-full max-h-[505px]"
                  />
                </Link>
                <div className="flex justify-between   gap-x-6 gap-y-3 mb-4 mt-6">
                  <p className="text-2xl font-arapey">
                    {product.name}
                    <span className="italic">{product.scientificName}</span>
                  </p>
                  <p className="text-xl whitespace-nowrap mt-1 text-[#CF956F] font-medium">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </p>
                </div>
                <div className="flex justify-center items-baseline gap-6 mb-6">
                  <p
                    className="text-2xl cursor-pointer"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </p>
                  <p className="text-xl cursor-pointer">
                    {checkIfProductInCart(product.id)
                      ? cart.map((item) => item.quantity)
                      : "0"}
                  </p>
                  <p
                    className="text-2xl cursor-pointer"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </p>
                </div>
                {checkIfProductInCart(product.id) ? (
                  <button
                    onClick={() => {
                      removeFromCart(product.id);
                      {
                        checkIfProductInCart(product.id) &&
                          toast.success(
                            `${product.name} has been removed to the cart`
                          );
                      }
                    }}
                    className="w-full bg-[#946C3C] uppercase h-10 text-white"
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleAddToCart(product.id, product.name);
                    }}
                    className="w-full bg-[#946C3C] uppercase h-10 text-white"
                  >
                    Add to cart
                  </button>
                )}
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={true}
                  className="w-[1000px]"
                />
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
