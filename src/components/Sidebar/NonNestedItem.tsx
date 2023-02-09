// React
// Firebase
// MUI
import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { NavigateFunction } from "react-router-dom";
// Types

import { ItemType } from "./pages";

const NonNestedItem = ({
  item,
  selected,
  setSelected,
  navigate,
}: {
  item: ItemType;
  selected: boolean;
  setSelected: () => void;
  navigate: NavigateFunction;
}) => {
  return (
    <>
      <ListItem selected={selected} disablePadding>
        <ListItemButton
          onClick={() => {
            setSelected();
            navigate(item.path);
          }}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
      <Divider sx={{ color: "background.paper" }} />
    </>
  );
};

export default NonNestedItem;
