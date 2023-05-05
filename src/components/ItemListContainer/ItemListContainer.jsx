import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getDocs,
  getFirestore,
  collection,
  where,
  query,
} from "firebase/firestore";
import { Loading } from "../Loading/Loading";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    if (cat) {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");

      const queryFilter = query(queryCollection, where("categoria", "==", cat));

      getDocs(queryFilter)
        .then((resp) =>
          setProductos(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");

      getDocs(queryCollection)
        .then((resp) =>
          setProductos(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [cat]);

  return <>{isLoading ? <Loading /> : <ItemList productos={productos} />}</>;
};

export default ItemListContainer;
