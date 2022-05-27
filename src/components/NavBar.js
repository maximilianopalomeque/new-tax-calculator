import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: "red" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calcu
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
