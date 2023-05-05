import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext";
import "./CartContainer.css"

const CartContainer = () => {
  const { cartList, vaciarCarrito} = useCartContext();

  return (
    <div>
      {cartList.map((product) => (
        <Card className="text-center" key={product.id}>
        <Card.Header className="titulo"><h3>{product.nombre}</h3></Card.Header>
        <Card.Body>
          <img className="imgProd" src={product.img} alt="imagenProd" />
          <h3>SUBTOTAL: {product.precio}</h3>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button onClick={vaciarCarrito} className="vaciarCarro">Vaciar 🛒</Button></Card.Footer>
      </Card>
      ))}
    </div>
  );
};

export default CartContainer;


