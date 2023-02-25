// React
import { useState, MouseEvent } from "react";

// MUI
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// Functions
import PopperMenu from "../../../components/Menus/PopperMenu";

const ARABIC_MENU = {
  EDAFA: "إضافه",
  SARF: "صرف",
  KHOROOG: "خروج",
  TALAB: "طلب شراء",
};

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
      label: ARABIC_MENU.EDAFA,
      arabic: true,
      callback: () => console.log("edafa"),
    },
    {
      label: ARABIC_MENU.SARF,
      arabic: true,
      callback: () => console.log("SARF"),
    },
    {
      label: ARABIC_MENU.TALAB,
      arabic: true,
      callback: () => console.log("TALAB"),
    },
    {
      label: ARABIC_MENU.KHOROOG,
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
