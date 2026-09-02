import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <AppBar position="static">
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          OPS
        </Typography>

        <Box>

          <Button
            color="inherit"
            component={Link}
            to="/products"
          >
            Products
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/suppliers"
          >
            Suppliers
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/customers"
          >
            Customers
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/profile"
          >
            Profile
          </Button>

          {!isLoggedIn ? (
            <Button
              color="inherit"
              component={Link}
              to="/login"
            >
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
            >
              Logout
            </Button>
          )}

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;