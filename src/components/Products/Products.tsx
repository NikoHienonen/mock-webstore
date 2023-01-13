import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models";

interface ProductProps {
  product: Product;
}

const useLocalStyles = makeStyles({
  productsContainer: {
    display: "flex",
  },
  product: {
    padding: 2,
    "&:hover": {
      cursor: "pointer",
      transition: "all 0.5s",
      transform: "scale(1.01)",
    },
  },
});

const ProductComponent = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const localClasses = useLocalStyles();
  const { title, price, category, image, id } = product;
  const navigateToProduct = () => navigate(`/products/${id}`);
  return (
    <Tooltip title={title}>
      <Grid
        item
        xs={4}
        padding={2}
        className={localClasses.product}
        onClick={() => navigateToProduct()}
      >
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
    </Tooltip>
  );
};

interface Props {
  products: Product[];
}

const Products = ({ products }: Props) => {
  const localClasses = useLocalStyles();
  return (
    <Grid className={localClasses.productsContainer} container spacing={2}>
      {products.map((product) => (
        <ProductComponent product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default Products;
