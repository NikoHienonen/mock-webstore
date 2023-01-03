import { CircularProgress } from "@mui/material";
import Products from "../components/Products/Products";
import { useGetProductsQuery } from "../services/products";

const Landing = () => {
  const { isLoading, data } = useGetProductsQuery("");

  return (
    <div>
      <h1>Landing</h1>
      {isLoading ? <CircularProgress /> : <Products products={data} />}
    </div>
  );
};

export default Landing;
