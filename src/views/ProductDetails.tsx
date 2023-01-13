import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { title } from "process";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../services/products";

const ProductDetailsView = () => {
  const { id } = useParams();
  const { data } = useGetProductsQuery("");
  const product = data?.find(
    (product) => product.id && product.id.toString() === id
  );
  if (!product) {
    return <>No product found</>;
  }
  const { title, price, category, image } = product;
  console.log(product);
  return (
    <Grid item xs={4} padding={2}>
      <Card>
        <CardContent>
          <img
            src={image}
            style={{
              width: 200,
              height: 200,
              objectFit: "scale-down",
              padding: 2,
            }}
          />
          <Typography variant="h5" marginTop={2}>
            {title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              color={(theme) => theme.palette.primary.main}
            >
              {price}€
            </Typography>
          </Box>
          {category}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductDetailsView;
