import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    /*<List style={{ margin: 5 }}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </List>*/

    <Grid container spacing={5} justifyContent="center">
      {products.map((product) => {
        return (
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
}
