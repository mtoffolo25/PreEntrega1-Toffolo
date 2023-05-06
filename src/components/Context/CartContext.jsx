import { Children, createContext, useContext, useState } from "react";

export const CartContex = createContext();

export const useCartContext = () => useContext(CartContex);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarAlCart = (newProduct) => {
    const indexProductos = cartList.findIndex(
      (producto) => producto.id === newProduct.id
    );

    if (indexProductos === -1) {
      setCartList([...cartList, newProduct]);
    } else {
      cartList[indexProductos].cantidad += newProduct.cantidad;
      setCartList([...cartList]);
    }
  };

  const cantidadTotal = () =>
    cartList.reduce(
      (cantidadTotal, productObj) => (cantidadTotal += productObj.cantidad),
      0
    );

  const eliminarProd = (pid) => {
    const indexProduct = cartList.findIndex((product) => product.id === pid);

    if (cartList[indexProduct].cantidad > 1) {
      cartList[indexProduct].cantidad = cartList[indexProduct].cantidad - 1;
      setCartList([...cartList]);
    } else {
      setCartList(cartList.filter((product) => product.id !== pid));
    }
  };

  const precioTotal = () => {
    return cartList.reduce(
      (totalPrice, productObj) =>
        (totalPrice += productObj.price * productObj.quantity),
      0
    );
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContex.Provider
      value={{
        cartList,
        agregarAlCart,
        vaciarCarrito,
        precioTotal,
        eliminarProd,
        cantidadTotal,
      }}
    >
      <>{children}</>
    </CartContex.Provider>
  );
};
