import { Button, Container, Grid, Typography } from "@mui/material";
import Header from "../components/Header/Header";

const Landing = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Header />
      <Typography variant="h5" align="center" sx={{}}>
        We have fake products!
      </Typography>
      <Button>Check them out!</Button>
    </Grid>
  );
};

export default Landing;
