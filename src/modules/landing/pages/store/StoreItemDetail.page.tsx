import { Link, useParams } from "react-router-dom";
import { products } from "../../resouces";
import NoResultsFound from "../herbalpeadia/NoResultsFound.page";
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
        <section className="px-4 lg:px-[120px] mt-[150px] flex gap-[42px] ">
          <div className="flex">
            <div className="grid gap-6">
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
              <div className="w-[180px] h-[155px]">
                <img
                  src={selectedProduct.image}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="w-[486px] h-[694px] ">
              {" "}
              <img
                src={selectedProduct.image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-maison text-3xl mb-2">
              {selectedProduct.name}({selectedProduct.scientificName})
            </h3>
            <h4 className="font-recoleta text-[#946C3C] font-medium text-5xl">
              ${selectedProduct.Price} USD
            </h4>
            <ul className="list-disc  text-[20px] mt-10">
              <li className=" mb-4">
                Lavender is known for its pleasant fragrance and is often used
                in aromatherapy.
              </li>
              <li>
                Lavender is known for its pleasant fragrance and is often used
                in aromatherapy.
              </li>
              <li>
                Lavender is known for its pleasant fragrance and is often used
                in aromatherapy.
              </li>
            </ul>
            <div className="flex w-full justify-around mt-8">
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
        <section className=" mt-[60px]">
          <h2 className="px-4 lg:px-[120px] lg:text-[64px] font-recoleta ">
            Related herbs
          </h2>
          <div className="flex">
            {products.slice(0, 3).map((product) => {
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
