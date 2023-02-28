// React
// Firebase
// MUI
// Components
// Types

import { Chip } from "@mui/material";
import { useState } from "react";
import arabic from "../../../arabic";
import PopperMenu from "../../../components/Menus/PopperMenu";

type ChipMenuProps = {
  selectedCount: number;
  onClear: () => void;
};

const ChipMenu = ({ selectedCount, onClear: handleClear }: ChipMenuProps) => {
  const [optionsMenuElement, setOptionsMenuElement] =
    useState<HTMLElement | null>(null);

  const closeOptionsMenu = () => {
    setOptionsMenuElement(null);
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
      label: "Delete",
      callback: () => console.log("delete"),
      color: errorColor,
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}>
      <Chip
        onClick={(event) => setOptionsMenuElement(event.currentTarget)}
        onDelete={() => handleClear()}
        label={`${selectedCount} Item${
          selectedCount === 1 ? "" : "s"
        } Selected`}
      />
      <PopperMenu
        element={optionsMenuElement}
        handleClose={closeOptionsMenu}
        menuItems={menuItems}
      />
    </div>
  );
};

export default ChipMenu;
