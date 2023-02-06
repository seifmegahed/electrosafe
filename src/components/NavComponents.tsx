// React
// Firebase
// MUI
import { Box } from "@mui/material";
import { useState } from "react";
// Components
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
// Types

const navWidth = 240;

const NavComponents = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Box display="flex">
      <Topbar openSideNav={toggleOpen} />
      <Sidebar open={open} handleClose={toggleOpen} navWidth={navWidth} />
    </Box>
  );
};

export default NavComponents;
