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
  showMenu: boolean;
};

const Topbar = ({ showMenu }: TopbarProps) => {
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
    <Box mb="65px" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {showMenu && !!user && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          )}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
