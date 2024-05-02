import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define type for the item in the cart
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define type for the cart context value
interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  clearCart: () => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

// Create a context for the cart
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
  const [quantity, setQuantity] = useState(0);
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

  const addItemToCart = (item: CartItem) => {
    // setCart((prevCart) => [...prevCart, item]);
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  // Function to clear cart
  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const contextValue: CartContextType = {
    cart,
    addItemToCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
