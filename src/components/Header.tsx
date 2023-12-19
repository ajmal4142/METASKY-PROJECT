import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

interface ButtonAppBarProps {}

const Header: React.FC<ButtonAppBarProps> = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = (nav = "/") => {
    navigate(nav);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "linear-gradient(to right,#d7d7d7,#c8b197)",
          position: "static",
        }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#00000",
              fontSize: "36px",
              cursor: "pointer",
            }}>
            Users
          </Typography>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => handleCloseDrawer("/")}
            sx={{ display: { xs: "block", sm: "none", width: "100%" } }}>
            <List>
              <ListItem
                sx={{ width: "200px", textAlign: "center" }}
                button
                onClick={() => handleCloseDrawer("/")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                sx={{ width: "200px", textAlign: "center" }}
                button
                onClick={() => handleCloseDrawer("/")}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                sx={{ width: "200px", textAlign: "center" }}
                button
                onClick={() => handleCloseDrawer("/")}>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem
                sx={{ width: "200px", textAlign: "center" }}
                button
                onClick={() => handleCloseDrawer("/")}>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem
                button
                sx={{ width: "200px", textAlign: "center" }}
                onClick={() => {
                  localStorage.clear();
                  handleCloseDrawer("/login");
                }}>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Button
              color="inherit"
              onClick={() => handleCloseDrawer("/")}
              sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => handleCloseDrawer("/")}
              sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}>
              About
            </Button>
            <Button
              color="inherit"
              onClick={() => handleCloseDrawer("/")}
              sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}>
              Services
            </Button>
            <Button
              color="inherit"
              onClick={() => handleCloseDrawer("/")}
              sx={{ mb: { xs: 1, sm: 0 } }}>
              Contact
            </Button>
          </Box>
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" } }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
