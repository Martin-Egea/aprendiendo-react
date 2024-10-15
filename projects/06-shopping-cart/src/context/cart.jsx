/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//1. Crear primero el contexto
export const CartContext = createContext();

//2. crear segundo el provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    //If the product is already in the cart, increase the quantity
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //If the product is not in the cart, add it
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
