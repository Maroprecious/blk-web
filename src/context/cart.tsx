import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import "react-toastify/dist/ReactToastify.css";

// Define type for the item in the cart
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: [""];
}

// Define type for the cart context value
interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  calculateTotalPrice: () => number;
}

//Create a context for the cart
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];
    setCart(storedCart);
  }, []);

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addItemToCart = (itemDetails: any) => {
    const existingItem = cart.find((item) => item.id === itemDetails.id);
    if (existingItem) {
      setCart(
        cart.map((item) => {
          if (item.id === itemDetails.id) {
            return { ...item, quantity: item.quantity };
          }
          return item;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          id: itemDetails.id,
          name: itemDetails.name,
          price: itemDetails.price,
          images: itemDetails.images,
          quantity: 1,
        },
      ]);
    }
  };
  const increaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  // Function to clear cart
  const clearCart = () => {
    setCart([]);
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const contextValue: CartContextType = {
    cart,
    addItemToCart,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
