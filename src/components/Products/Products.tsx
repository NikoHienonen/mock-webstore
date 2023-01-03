import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Product } from "../../models";

interface ProductProps {
  product: Product;
}

const ProductComponent = ({ product }: ProductProps) => {
  const { title, description, price, category } = product;
  return (
    <Grid item xs={4} padding={2}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textOverflow: "ellipsis" }}
            gutterBottom
          >
            {description}
          </Typography>
          <Typography
            variant="subtitle1"
            color={(theme) => theme.palette.primary.main}
          >
            {price}€
          </Typography>
          {category}
        </CardContent>
      </Card>
    </Grid>
  );
};

interface Props {
  products: Product[];
}

const Products = ({ products }: Props) => {
  return (
    <Grid container spacing={0}>
      {products.map((product) => (
        <ProductComponent product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default Products;
