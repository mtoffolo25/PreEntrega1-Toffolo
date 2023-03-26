import Item from "../Item/Item"


const ItemList = ({productos}) => {
    return (<div>
            {   productos.length > 0 &&
                productos.map((prod) => {
                return (
                        <Item key={prod.id} producto={prod}/>
                )
            } 
        )}
        </div>
    )
}

export default ItemList