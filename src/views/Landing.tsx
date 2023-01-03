import { CircularProgress, Container, Typography } from "@mui/material";
import Products from "../components/Products/Products";
import { useGetProductsQuery } from "../services/products";

const Landing = () => {
  const { isLoading, data } = useGetProductsQuery("");

  return (
    <Container>
      <Typography variant="h2" style={{ textTransform: "uppercase" }}>
        The latest products
      </Typography>
      {isLoading ? <CircularProgress /> : <Products products={data} />}
    </Container>
  );
};

export default Landing;
