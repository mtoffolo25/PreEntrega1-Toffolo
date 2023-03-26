import { useState } from "react"

const ItemCount = () => {

    const [number, setNumber] = useState(1)

    const sumar = () => {
        setNumber(number + 1)
        
    }

    const restar = () => {
        setNumber(number - 1)
    }

    const agregarCarrito = () => {
        alert(setNumber(number))
        console.log(number)
    }

    return (
        <div class="btn-group" role="group" aria-label="Basic example">
            <button onClick={restar} type="button">-</button>
            <button>{number}</button>
            <button onClick={sumar} type="button">+</button>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
</div>
    )
}

export default ItemCount