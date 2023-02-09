// React
// Firebase
// MUI
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { ItemType } from "./pages";
// Components

const NestedItem = ({
  item,
  selected,
  navigate,
  setSelected,
}: {
  item: ItemType;
  selected: boolean;
  navigate: NavigateFunction;
  setSelected: () => void;
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!selected) setOpen(false);
  }, [selected]);
  return (
    <>
      <ListItem disablePadding selected={selected}>
        <ListItemButton>
          <ListItemText
            primary={item.label}
            onClick={() => {
              setSelected();
              navigate(item.path);
            }}
          />
        </ListItemButton>
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          {open ? <ExpandMore /> : <ChevronRight />}
        </IconButton>
      </ListItem>
      <Divider sx={{ color: "background.paper" }} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subPages?.map((subItem, index) => (
            <Box key={index}>
              <ListItemButton
                onClick={() => {
                  setSelected();
                  navigate(subItem.path);
                }}
                sx={{ pl: 4, backgroundColor: "background.paper" }}
              >
                <ListItemText primary={subItem.label} />
              </ListItemButton>
              <Divider sx={{ color: "background.paper" }} />
            </Box>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NestedItem;
