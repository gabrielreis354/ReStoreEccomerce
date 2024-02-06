import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product " + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some famous brand",
        description: "the best description that you ever ever imagined",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="app">
        <Typography variant={"h1"} gutterBottom>Re-Store</Typography>
        <Catalog products={products} addProduct={addProduct} />        


      </div>
    </>
  );
}

export default App;
