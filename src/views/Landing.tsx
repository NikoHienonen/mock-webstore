import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StoreTitle } from "../components/Header/Header";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <StoreTitle />
      <Typography variant="h5" align="center" sx={{ marginTop: 2 }}>
        We have fake products!
      </Typography>
      <Button
        variant="outlined"
        sx={{ width: "fit-content", alignSelf: "center", marginTop: 5 }}
        onClick={() => navigate("/products")}
      >
        Check them out!
      </Button>
    </Grid>
  );
};

export default Landing;
