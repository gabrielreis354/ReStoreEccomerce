import { List } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <List style={{ margin: 5 }}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </List>
  );
}
