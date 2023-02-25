// React
import { useState, MouseEvent } from "react";

// MUI
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// Functions
import PopperMenu from "../../../components/Menus/PopperMenu";

const OptionsMenu = () => {
  const [optionsMenuElement, setOptionsMenuElement] =
    useState<HTMLElement | null>(null);

  const closeOptionsMenu = () => {
    setOptionsMenuElement(null);
  };

  const openOptionsMenu = (event: MouseEvent<HTMLElement>) => {
    setOptionsMenuElement(event.currentTarget);
  };
  const userMenuItems = [
    {
      label: "Account",
      disabled: false,
      arabic: false,
      callback: () => {
        console.log("user-account");
      },
    },
    {
      label: "Change Password",
      disabled: false,
      arabic: false,
      callback: () => {
        console.log("change-password");
      },
    },
    {
      label: "Logout",
      disabled: false,
      arabic: false,
      callback: () => {
        console.log("logout");
      },
    },
  ];
  return (
    <>
      <IconButton onClick={openOptionsMenu}>
        <MoreVert fontSize="large" />
      </IconButton>
      <PopperMenu
        element={optionsMenuElement}
        handleClose={closeOptionsMenu}
        menuItems={userMenuItems}
      />
    </>
  );
};

export default OptionsMenu;
