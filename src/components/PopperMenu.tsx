import {
  useTheme,
  MenuItem,
  Popper,
  ClickAwayListener,
  Paper,
  Typography,
} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

type menuItem = {
  label: string;
  arabic: boolean;
  callback: () => void;
  disabled: boolean;
  color?: "error" | "primary" | "secondary";
};

type PopperMenuProps = {
  menuItems: menuItem[];
  element: HTMLElement | null;
  handleClose: () => void;
  placement: "bottom-start" | "bottom-end";
};

type MenuItemSelectorProps = {
  item: menuItem;
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
      sx={{zIndex:1101}}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Paper sx={{ width: "180px" }}>
          {menuItems.map((item, index) => (
            <MenuItemSelector
              key={index}
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

const MenuItemSelector = ({
  item,
  lastItem,
  handleClose,
}: MenuItemSelectorProps) => {
  const theme = useTheme();

  const arabicMenuItemStyle = {
    borderBottom: `1px solid #e1e1e1`,
    justifyContent: "flex-end",
    fontWeight: "bold",
  };

  const englishMenuItemStyle = {
    borderBottom: `1px solid #e1e1e1`,
  };
  return (
    <MenuItem
      disabled={item.disabled}
      sx={
        item.arabic ? arabicMenuItemStyle : lastItem ? {} : englishMenuItemStyle
      }
      onClick={() => {
        handleClose();
        item.callback();
      }}
    >
      {!!item.color ? (
        <Typography color={item.color}>{item.label}</Typography>
      ) : (
        <>{item.label}</>
      )}
    </MenuItem>
  );
};

export default PopperMenu;
