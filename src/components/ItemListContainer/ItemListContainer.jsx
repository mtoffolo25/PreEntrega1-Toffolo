import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../utils/asyncMock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({}) => {
    
    const [productos, setProducto] = useState ([])

    const {cat} = useParams()

    useEffect (() => {
        if (cat) {
            getProductos ()
            .then(res => {
                setProducto(res.filter(prod => prod.categoria === cat ))
            })
        } else {
            getProductos ()
            .then(res => {
                setProducto(res)
            })
        }


        
    }, [cat])


    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer 