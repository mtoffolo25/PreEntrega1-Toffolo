import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Loading } from "../Loading/Loading"


const ItemDetailContainer = () => {

    const [produ, setProdu] = useState ({})
    const {pid} = useParams()

    useEffect (()=> {
       const dbFirestore = getFirestore ()
       const queryDoc = doc (dbFirestore, "productos", pid)
       getDoc(queryDoc)
       .then (resp => setProdu({id: resp.id, ...resp.data()}))
       .catch(error => console.log (error))
    }, [])


  return (
    <> 
    <ItemDetail produ = {produ}/>
  </>
  )
}

export default ItemDetailContainer