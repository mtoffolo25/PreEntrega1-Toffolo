import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductos } from "../utils/asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    
    const [produ, setProdu] = useState ([])

    const {id} = useParams()

    useEffect (()=> {
        getProductos (id)
        .then (resp => setProdu (resp))
        .catch ()
    }, [])

  return (
    <div><ItemDetail produ = {produ}/></div>
  )
}

export default ItemDetailContainer