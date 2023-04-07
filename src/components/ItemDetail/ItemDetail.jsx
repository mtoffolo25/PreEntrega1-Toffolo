import { Card } from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({produ}) => {
    
    const onAdd = (cantidad) => {
        console.log (cantidad)
    }
    
    
    return (
        <div className="cardDetalles">
        <Card style={{ width: "18rem" }} className={produ.id}>
          <Card.Img variant="top" src={produ.img} />
          <Card.Body>
            <Card.Title>{produ.nombre}</Card.Title>
            <hr />
            <Card.Text>
            <p>Precio</p><h5>{produ.precio}</h5>
            <hr />
            <p>Categoría</p><h5>{produ.categoria}</h5>
            </Card.Text>
          </Card.Body>
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </Card>
      </div>
  )
}

export default ItemDetail