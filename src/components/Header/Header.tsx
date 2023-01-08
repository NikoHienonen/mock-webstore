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
      <Typography variant="subtitle1">We have cake!</Typography>
    </Container>
  );
};

export default Header;
