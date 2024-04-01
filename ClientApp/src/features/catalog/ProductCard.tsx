import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        title={product.name}
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        titleTypographyProps={{
          fontWeight: "bold",
          color: "primary.main",
        }}
      />
      <CardMedia
        component="img"
        title={product.name}
        alt={product.name}
        image={product.pictureUrl}
        sx={{ bgcolor: "primary.light" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="text.secondary">
          {((product.price / 100) * 5).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
