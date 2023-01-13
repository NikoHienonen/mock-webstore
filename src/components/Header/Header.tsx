import { Container, Typography } from "@mui/material";

export const StoreTitle = () => (
  <Typography
    variant="h3"
    style={{
      textTransform: "uppercase",
      fontWeight: "lighter",
    }}
  >
    A mock webstore for fake products
  </Typography>
);

const Header = () => {
  return (
    <Container sx={{ margin: "10px 0" }}>
      <StoreTitle />
    </Container>
  );
};

export default Header;
