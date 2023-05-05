import { Children, createContext, useContext, useState } from "react";

export const CartContex = createContext();

export const useCartContext = () => useContext(CartContex);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarAlCart = (newProduct) => {
    setCartList([... cartList, newProduct]);
  };

//Cantidad total de productos
//Precio total de productos
//Eliminar por item
//

  const vaciarCarrito = () => {
    setCartList ([])
  }

  return (
    <CartContex.Provider
      value={{
        cartList,
        agregarAlCart,
        vaciarCarrito
      }}
    >
      <>{children}</>
    </CartContex.Provider>
  );
};
