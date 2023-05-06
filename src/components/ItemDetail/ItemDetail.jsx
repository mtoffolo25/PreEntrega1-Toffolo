import { ButtonGroup, Card } from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./ItemDetail.css"
import { useCartContext } from "../Context/CartContext"


const ItemDetail = ({produ}) => {
    
    const {agregarAlCart} = useCartContext ()

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const onAdd = (cantidad) => {
        setCantidadAgregada (cantidad)
        agregarAlCart({...produ, cantidad})
    }
    
    
    return (
        <div className="cardDetalles">
        <Card style={{ width: "18rem" }} className={produ.id}>
          <Card.Img variant="top" src={produ.img} />
          <Card.Body>
            <Card.Title>{produ.nombre}</Card.Title>
            <hr />
            <Card.Text>
            <p>Precio</p><h5>${produ.precio}</h5>
            <hr />
            <p>Categoría</p><h5>{produ.categoria}</h5>
            </Card.Text>
          </Card.Body>
          <>
          {cantidadAgregada > 0 ?
            <ButtonGroup className="botonesFinalizar">
            <Link to='/'><button type="button" className="botonSeguir">Seguir comprando 🔙</button></Link>
            <Link to='/cart'><button type="button" className="botonCompra">Finalizar Compra ✅</button></Link>
            </ButtonGroup>
            :
            (<ItemCount initial={1} stock={5} onAdd={onAdd}/>)
        }
          </>
        </Card>
      </div>
  )
}

export default ItemDetail