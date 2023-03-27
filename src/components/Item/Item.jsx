import { Button, Card } from "react-bootstrap";
import "./Item.css"

const Item = ({ producto }) => {
  return (
    <div className="cardProd">
      <Card style={{ width: "18rem" }} className={producto.id}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <h5>Precio</h5>{producto.precio}
            <h5>Categoría</h5>{producto.categoria}
          </Card.Text>
          <Button variant="primary">Ver detalles</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item