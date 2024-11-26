import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const currency = "₹";
  const deliveryFee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState({});

  // Add item to cart
  const addToCart = (itemID) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemID]) {
        // Increment quantity if item already exists
        newCart[itemID].quantity += 1;
      } else {
        // Add new item to cart
        const product = products.find((product) => product._id === itemID);
        if (product) {
          newCart[itemID] = { ...product, quantity: 1 };
        }
      }
      return newCart;
    });
  };

  // Get total item count in the cart
  const getCartCount = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemID in cart) {
      const item = cart[itemID];
      if (item.quantity > 0) {
        totalAmount += item.price * item.quantity;
      }
    }
    return totalAmount + deliveryFee; 
  };
  
  


  const updateQuantity = (itemId, quantity) => {
    const updatedCart = { ...cart };
    if (quantity > 0) {
      updatedCart[itemId].quantity = quantity;
    } else {
      delete updatedCart[itemId]; // Remove item if quantity is 0
    }
    setCart(updatedCart);
  };

  const deleteFromCart = (itemId) => {
    const updatedCart = { ...cart };
    delete updatedCart[itemId];
    setCart(updatedCart);
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cart,
    addToCart,
    getCartCount,
    updateQuantity,
    deleteFromCart,
    getCartAmount
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopProvider;
