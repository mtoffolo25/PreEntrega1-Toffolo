import { Button, Card, Form } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const CartContainer = () => {
  const [id, setId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cartList, vaciarCarrito, precioTotal, eliminarProd, alertaCompra } =
    useCartContext();

  const finalizarCompra = (event) => {
    event.preventDefault();

    const order = {
      buyer: formData,
      items: cartList.map(({ id, nombre, precio, cantidad }) => ({
        id,
        nombre,
        precio,
        cantidad,
      })),
      total: precioTotal(),
    };

    const db = getFirestore();
    const queryColecction = collection(db, "orders");

    addDoc(queryColecction, order)
      .then((resp) =>setId (resp.id))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    event.target.name;
    event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {cartList.length === 0 ? (
        <Card className="text-center">
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <h1>¡TU 🛒 ESTA VACÍO!</h1>
            </Card.Text>
            <Link to="/">
              <Button className="irComprar" variant="primary">
                Ir a comprar ↩
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <div>
          {cartList.map((product) => (
            <Card className="text-center" key={product.id}>
              <Button
                onClick={() => eliminarProd(product.id)}
                className="btn-danger .align-self-end"
              >
                X
              </Button>
              <Card.Header className="titulo">
                <h3>{product.nombre}</h3>
              </Card.Header>
              <Card.Body>
                <img className="imgProd" src={product.img} alt="imagenProd" />
                <h2 className="cantidad">Cantidad: {product.cantidad}</h2>
                <h2>Subtotal: ${product.precio * product.cantidad}</h2>
              </Card.Body>
            </Card>
          ))}
          <h1 className="totalCompra">TOTAL DE LA COMPRA: ${precioTotal()}</h1>
          <Link to="/">
            <Button className="irComprar" variant="primary">
              Ir a comprar ↩
            </Button>
          </Link>
          <Button onClick={vaciarCarrito} className="vaciarCarro">
            Vaciar 🛒
          </Button>

          <form className="formSubmit" onSubmit={finalizarCompra}>
            <input
              type="text"
              name="name"
              placeholder="Ingrese el nombre"
              onChange={handleOnChange}
              value={formData.name}
            />
            <input
              type="text"
              name="phone"
              placeholder="Ingrese el teléfono"
              onChange={handleOnChange}
              value={formData.phone}
            />
            <input
              type="text"
              name="email"
              placeholder="Ingrese el Email"
              onChange={handleOnChange}
              value={formData.email}
            />
            <input
              type="text"
              name="repetirMail"
              placeholder="Repetir el Email"
              onChange={() => {}}
              // value={''}
            />
            <Button
              className="finalizarCompra"
              type="submit"
              onClick={alertaCompra}
            >
              Finalizar Compra
            </Button>
          </form>
        </div>
      )}
      {id && <h2>El ID de la compra es: {id}</h2>}
    </div>
  );
};

export default CartContainer;
