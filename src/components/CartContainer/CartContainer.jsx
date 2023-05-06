import { Button, Card, CloseButton } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarProd } =
    useCartContext();

  return cartList.length === 0 ? (
    <>
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
    </>
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
      <Button className="finalizarCompra">Finalizar Compra</Button>
    </div>
  );
};

export default CartContainer;
