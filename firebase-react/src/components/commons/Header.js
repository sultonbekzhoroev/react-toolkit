import { Grid, Button, Box, Typography, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../../context/GeneralCards";
function Header() {
  const { allProductsInCard } = useContext(CardContext);
  const amountOfProducts = allProductsInCard.reduce(
    (acc, product) => product.qqt + acc,
    0
  );
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid item sx={12} md={4}>
          <Link to="/">
            <CardMedia
              component="img"
              image="https://www.yiiframework.com/image/design/logo/yii3_sign.png"
              height="80"
            />
          </Link>
        </Grid>
        <Grid
          item
          sx={12}
          md={8}
          style={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Link to="/">
              <Typography sx={{ minWidth: 100 }}>Home</Typography>
            </Link>
            <Link to="/dashboard">
              <Typography sx={{ minWidth: 100 }}>DashBoard</Typography>
            </Link>
            <Typography sx={{ minWidth: 100 }}>About Us</Typography>
            <Link to="/card-description">
              <Button color="secondary" variant="contained">
                Card {amountOfProducts} Products
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Header;
