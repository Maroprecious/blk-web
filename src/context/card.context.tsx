import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useEffect,
} from "react";

export type product = {
  name: string;
  price: string;
  count: number;
  image: string;
  productId: string;
};

type CartContextProps = {
  addProduct: (product: Omit<product, "count">) => void;
  removeProduct: (product: Omit<product, "count">) => void;
  getProductCount: (productId: string) => number;
  deleteItemFromcart: (product_name: string) => void;
  products: Array<product>;
};

const CartContext = createContext<CartContextProps>({
  addProduct: () => null,
  removeProduct: () => null,
  getProductCount: () => 0,
  deleteItemFromcart: () => null,
  products: [],
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<product>>(() => {
    const item = localStorage.getItem("store");
    return item ? JSON.parse(item) : [];
  });

  const addProduct = (product: Omit<product, "count">) => {
    const productExists = products.findIndex(
      (element) => element.productId === product.productId
    );

    if (productExists !== -1) {
      const newProducts = products.map((element) => {
        if (element.productId === product.productId) {
          return {
            ...element,
            count: element.count + 1,
          };
        } else {
          return element;
        }
      });
      setProducts(newProducts);
    } else {
      setProducts([...products, { ...product, count: 1 }]);
    }
  };

  const removeProduct = (product: Omit<product, "count">) => {
    const productExists = products.findIndex(
      (element) => element.productId === product.productId
    );

    if (productExists !== -1) {
      const existingProduct = products[productExists];
      if (existingProduct.count === 1) {
        const newProducts = [...products];
        newProducts.splice(productExists, 1);
        setProducts(newProducts);
      } else {
        const newProducts = products.map((element) => {
          if (element.productId === product.productId) {
            return {
              ...element,
              count: element.count - 1,
            };
          } else {
            return element;
          }
        });
        setProducts(newProducts);
      }
    }
  };

  const deleteItemFromcart = (product_name: string) => {
    const productExists = products.findIndex(
      (element) => element.productId === product_name
    );
    if (productExists !== -1) {
      const newProducts = [...products];
      newProducts.splice(productExists, 1);
      setProducts(newProducts);
    }
  };

  const getProductCount = (productId: string): number => {
    return (
      products.find((element) => element.productId === productId)?.count ?? 0
    );
  };

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("store", JSON.stringify(products));
    }
  }, products);

  const value = useMemo(
    () => ({
      removeProduct,
      addProduct,
      getProductCount,
      products,
      deleteItemFromcart,
    }),
    [addProduct, removeProduct, getProductCount, products, deleteItemFromcart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
