import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import { query, collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const data = [];
  const getDatos = async () => {
    const datos = query(collection(db, "products"));

    const querySnapshot = await getDocs(datos);
    querySnapshot.forEach((datos) => {
      data.push({ ...datos.data, id: datos.id });
    });
    setProducts(data);
  };
  useEffect(() => {
    getDatos();
  }, []);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <CardItem  data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;