// React
import { useState, MouseEvent } from "react";

// Firebase

// MUI
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, Person } from "@mui/icons-material";

// Components
import { useAuth } from "../contexts/AuthProvider";
import PopperMenu from "./PopperMenu";
import { useNavigate } from "react-router-dom";

// Types
type TopbarProps = {
  openSideNav: () => void;
};

const Topbar = ({ openSideNav }: TopbarProps) => {
  const { logout, user } = useAuth();
  const [userMenuElement, setUserMenuElement] = useState<HTMLElement | null>(
    null
  );
  const navigate = useNavigate();

  const closeUserMenu = () => {
    setUserMenuElement(null);
  };

  const openUserMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenuElement(event.currentTarget);
  };

  const userMenuItems = [
    {
      label: "Account",
      disabled: false,
      arabic: false,
      callback: () => {
        navigate("user-account");
      },
    },
    {
      label: "logout",
      disabled: false,
      arabic: false,
      callback: () => {
        logout();
      },
    },
  ];

  return (
    <Box mb="64px" sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: "64px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          {!!user && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={openSideNav}
              sx={{
                display: { sm: "block", md: "none" },
                borderRadius: "50%",
              }}
            >
              <Menu />
            </IconButton>
          )}
          <Typography variant="h4" component="div" sx={{ ml: 2, flexGrow: 1 }}>
            Electrosafe
          </Typography>
          {!!user && (
            <>
              <IconButton
                onClick={openUserMenu}
                size="large"
                edge="end"
                color="inherit"
                aria-label="user"
              >
                <Person />
              </IconButton>
              <PopperMenu
                menuItems={userMenuItems}
                element={userMenuElement}
                handleClose={closeUserMenu}
                placement="bottom-end"
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
