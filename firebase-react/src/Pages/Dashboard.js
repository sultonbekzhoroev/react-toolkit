import { Grid } from "@mui/material";
import Header from "../components/commons/Header";
import FormProducts from "../components/FormProducts";

function Dashboard() {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item sx={2} md={4}>
          Lateral Menu
        </Grid>
        <Grid item sx={2} md={4}>
          <FormProducts />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
