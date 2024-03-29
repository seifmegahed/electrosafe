// React
import { useState, MouseEvent } from "react";

// MUI
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// Functions
import PopperMenu from "../../../components/Menus/PopperMenu";
import arabic from "../../../arabic";

const OptionsMenu = () => {
  const [optionsMenuElement, setOptionsMenuElement] =
    useState<HTMLElement | null>(null);

  const closeOptionsMenu = () => {
    setOptionsMenuElement(null);
  };

  const openOptionsMenu = (event: MouseEvent<HTMLElement>) => {
    setOptionsMenuElement(event.currentTarget);
  };
  const errorColor = "error";
  const menuItems = [
    {
      label: arabic.EDAFA,
      arabic: true,
      callback: () => console.log("edafa"),
    },
    {
      label: arabic.SARF,
      arabic: true,
      callback: () => console.log("SARF"),
    },
    {
      label: arabic.TALAB,
      arabic: true,
      callback: () => console.log("TALAB"),
    },
    {
      label: arabic.KHOROOG,
      arabic: true,
      callback: () => console.log("edit"),
    },
    {
      label: "Details",
      callback: () => console.log("edit"),
    },
    {
      label: "Edit",
      callback: () => console.log("edit"),
    },
    {
      label: "Delete",
      callback: () => console.log("delete"),
      color: errorColor,
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
        menuItems={menuItems}
      />
    </>
  );
};

export default OptionsMenu;
