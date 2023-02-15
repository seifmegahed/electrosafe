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
  navigate,
}: {
  item: ItemType;
  selected: boolean;
  navigate: NavigateFunction;
}) => {
  return (
    <>
      <ListItem selected={selected} disablePadding>
        <ListItemButton onClick={() => navigate(item.path)}>
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
      <Divider sx={{ color: "background.paper" }} />
    </>
  );
};

export default NonNestedItem;
