// React
// Firebase
// MUI
import { Box, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
// Components
import NavItems from "./SideNavItems";
// Types
type SidenavProps = {
  navWidth: number;
  open: boolean;
  handleClose: () => void;
};

const pages = [
  { label: "Home", path: "/", subPages: null },
  {
    label: "Inventory",
    path: "/inventory",
    subPages: [
      { label: "All Items", path: "/inventory" },
      { label: "NewItem", path: "/inventory/new" },
    ],
  },
  { label: "Sales", path: "/sales", subPages: null },
  { label: "Treasury", path: "/treasury", subPages: null },
  { label: "Purchasing", path: "/purchasing", subPages: null },
];

const Sidenav = ({ navWidth, open, handleClose }: SidenavProps) => {
  const navigate = useNavigate();

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
        <NavItems pages={pages} navigate={navigate} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            backgroundColor: "background.paper",
            boxSizing: "border-box",
            width: navWidth,
            mt: { md: "64px" },
          },
        }}
        open
      >
        <NavItems pages={pages} navigate={navigate} />
      </Drawer>
    </Box>
  );
};

export default Sidenav;
