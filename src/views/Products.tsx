import { CircularProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Products from "../components/Products/Products";
import { useGetProductsQuery } from "../services/products";

const ProductsView = () => {
  const { isLoading, data } = useGetProductsQuery("");
  return (
    <Container>
      <Typography variant="h5">Check out our latest fake products!</Typography>
      {isLoading ? <CircularProgress /> : <Products products={data} />}
    </Container>
  );
};

export default ProductsView;
