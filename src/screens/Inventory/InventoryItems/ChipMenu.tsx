// React
// Firebase
// MUI
// Components
// Types

import { Chip } from "@mui/material";
import { useState } from "react";
import PopperMenu, { MenuItemType } from "../../../components/Menus/PopperMenu";

type ChipMenuProps = {
  selectedCount: number;
  menuItems: MenuItemType[];
  onClear: () => void;
};

const ChipMenu = ({
  selectedCount,
  onClear: handleClear,
  menuItems,
}: ChipMenuProps) => {
  const [optionsMenuElement, setOptionsMenuElement] =
    useState<HTMLElement | null>(null);

  const closeOptionsMenu = () => {
    setOptionsMenuElement(null);
  };

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
