import { Product } from "../../models";

interface Props {
  products: Product[];
}

const Products = ({ products }: Props) => {
  return <div>{products.map((product) => product.title)}</div>;
};

export default Products;
