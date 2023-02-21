// React
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

// Firebase

// MUI
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, Person } from "@mui/icons-material";

// Components
import { useAuth } from "../../contexts/AuthProvider";
import PopperMenu from "../Menus/PopperMenu";

// Types
type TopbarProps = {
  openSideNav?: () => void;
};

const Topbar = ({ openSideNav }: TopbarProps) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [userMenuElement, setUserMenuElement] = useState<HTMLElement | null>(
    null
  );

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
      label: "Change Password",
      disabled: false,
      arabic: false,
      callback: () => {
        navigate("change-password");
      },
    },
    {
      label: "Logout",
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
                display: { sm: "flex", md: "none" },
                borderRadius: "50%",
              }}
            >
              <Menu />
            </IconButton>
          )}
          <Box
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer", ml: 2, flexGrow: 1 }}
          >
            <Typography variant="h4">Electrosafe</Typography>
          </Box>
          {!!user && (
            <>
              <IconButton
                onClick={openUserMenu}
                name="user-menu"
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
