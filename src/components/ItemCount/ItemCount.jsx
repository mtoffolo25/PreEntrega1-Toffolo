import { useCount } from "../hooks/useCount"
import "./ItemCount.css"

export const ItemCount = ({initial=1, stock=5, min=1, onAdd}) => {

    const {contador, increment, decrement} = useCount (1, stock, initial)

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={decrement} type="button">-</button>
            <button>{contador}</button>
            <button onClick={increment} type="button">+</button>
            <div>
            <button onClick={() => onAdd(contador)} className="agregarAlCarrito"><p>🛒</p></button>
            </div>
</div>
    )
}

   
