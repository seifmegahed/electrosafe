// React
// Firebase
// MUI
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
// Components

// Types
type SidenavProps = {
  navWidth: number;
  open: boolean;
  handleClose: () => void;
};

const pages = ["Home", "Inventory", "Sales", "Treasury", "Purchasing"];

const navItems = (
  <List>
    {pages.map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton>
          <ListItemText primary={item} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

const Sidenav = ({ navWidth, open, handleClose }: SidenavProps) => {
  return (
    <Box component="nav">
      <Drawer
        anchor="left"
        variant="temporary"
        open={open}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          zIndex:{md: 1000},
          borderRight: "none",
          "& .MuiDrawer-paper": {
            backgroundColor: "#fefefe",
            width: navWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {navItems}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: navWidth,
            mt: { md: "64px" },
          },
        }}
        open
      >
        {navItems}
      </Drawer>
    </Box>
  );
};

export default Sidenav;
