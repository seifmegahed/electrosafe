import {
  MenuItem,
  Popper,
  ClickAwayListener,
  Paper,
  Typography,
} from "@mui/material";

type MenuItemType = {
  label: string;
  arabic: boolean;
  callback: () => void;
  disabled: boolean;
  color?: "error" | "primary" | "secondary";
};

const MenuItemSelector = ({
  item,
  lastItem,
  handleClose,
}: MenuItemSelectorProps) => {
  const arabicMenuItemStyle = {
    borderBottom: `1px solid #e1e1e1`,
    justifyContent: "flex-end",
    fontWeight: "bold",
  };

  const englishMenuItemStyle = {
    borderBottom: `1px solid #e1e1e1`,
  };
  const menuStyleProps = () => {
    if (item.arabic) return arabicMenuItemStyle;
    return lastItem ? {} : englishMenuItemStyle;
  };

  return (
    <MenuItem
      disabled={item.disabled}
      sx={menuStyleProps}
      id={`menu-item-${item.label.toLowerCase()}`}
      onClick={() => {
        handleClose();
        item.callback();
      }}
    >
      <Typography color={item.color ?? undefined}>{item.label}</Typography>
    </MenuItem>
  );
};

type PopperMenuProps = {
  menuItems: MenuItemType[];
  element: HTMLElement | null;
  handleClose: () => void;
  placement: "bottom-start" | "bottom-end";
};

type MenuItemSelectorProps = {
  item: MenuItemType;
  lastItem: boolean;
  handleClose: () => void;
};

const PopperMenu = ({
  menuItems,
  element,
  handleClose,
  placement,
}: PopperMenuProps) => {
  const open = Boolean(element);

  return (
    <Popper
      id="moreMenu"
      aria-labelledby="moreMenuButton"
      anchorEl={element}
      open={open}
      placement={placement || "bottom-start"}
      sx={{ zIndex: 1101 }}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Paper sx={{ width: "180px", backgroundColor: "background.paper" }}>
          {menuItems.map((item, index) => (
            <MenuItemSelector
              key={item.label}
              item={item}
              lastItem={index + 1 === menuItems.length}
              handleClose={handleClose}
            />
          ))}
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default PopperMenu;
