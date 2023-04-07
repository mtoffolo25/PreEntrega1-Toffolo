import { Button, Card } from "react-bootstrap";
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="cardProd">
      <Card style={{ width: "18rem" }} className={producto.id}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Link to={`/detail/${producto.id}`}><Button variant="primary" className="detalles">Ver detalles</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item