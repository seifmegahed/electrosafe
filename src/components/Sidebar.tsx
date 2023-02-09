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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// Components

// Types
type SidenavProps = {
  navWidth: number;
  open: boolean;
  handleClose: () => void;
};

const pages = [
  { label: "Home", path: "/" },
  { label: "Inventory", path: "/inventory" },
  { label: "Sales", path: "/sales" },
  { label: "Treasury", path: "/treasury" },
  { label: "Purchasing", path: "/purchasing" },
];

const Sidenav = ({ navWidth, open, handleClose }: SidenavProps) => {
  const navigate = useNavigate();

  const navItems = (
    <List>
      {pages.map((item, index) => (
        <>
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ color: "background.paper" }} />
        </>
      ))}
    </List>
  );

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
          zIndex: { md: 1000 },
          borderRight: "none",
          "& .MuiDrawer-paper": {
            backgroundColor: "background.default",
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
