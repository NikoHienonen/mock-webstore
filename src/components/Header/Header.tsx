import { Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", fontWeight: "lighter" }}
      >
        A mock webstore for fake products
      </Typography>
      <Typography variant="subtitle1">We have cake!</Typography>
    </Container>
  );
};

export default Header;
