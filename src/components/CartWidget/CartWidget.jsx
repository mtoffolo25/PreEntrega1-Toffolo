import { Button } from "react-bootstrap"
import { useCartContext } from "../Context/CartContext";



const CartWidget = () => {

    const { cantidadTotal } = useCartContext();

    return (
        <>
        <Button variant="outline-secondary">{cantidadTotal() > 0 && cantidadTotal()}🛒</Button>
        </>
    )
}

export default CartWidget 