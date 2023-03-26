import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../utils/asyncMock"

const ItemListContainer = ({}) => {
    
    const [productos, setProducto] = useState ([])

    useEffect (() => {
        getProductos ()
            .then(res => {
                setProducto(res)
            })
    }, [])


    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer 