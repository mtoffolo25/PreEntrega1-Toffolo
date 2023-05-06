import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

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
      (totalPrecio, objProducto) =>
        (totalPrecio += objProducto.precio * objProducto.cantidad),
      0
    );
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const alertaCompra = () => {
    return (Swal.fire({
      title: "¿Estás seguro que quieres finalizar tu compra?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Tu compra esta siendo realizada...",
          html: "¡Espere unos segundos!",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          Swal.fire(
            "Realizada con éxito",
            "¡Muchas gracias por su compra!",
            "success"
          );
          vaciarCarrito();
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        });
      }
    })
    )
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
        alertaCompra,
      }}
    >
      <>{children}</>
    </CartContex.Provider>
  );
};
