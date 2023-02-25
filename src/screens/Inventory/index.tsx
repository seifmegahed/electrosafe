// React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// MUI
import { Box, Input, IconButton, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

// Constants
import { COMPONENT_MAX_WIDTH } from "../../globalConstants";

// Functions
import { getHelperItems, HelperItemType } from "./firestore/items";
import ItemCard from "./ItemCard";

const SearchBar = () => {
  return (
    <Box
      display="flex"
      borderRadius="50px"
      sx={{ backgroundColor: "background.paper" }}
    >
      <Input disableUnderline sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: 1 }}>
        <Search />
      </IconButton>
    </Box>
  );
};

const NewItemButton = ({ onClick: handleClick }: { onClick: () => void }) => {
  return (
    <Button
      size="large"
      variant="contained"
      name="newItem"
      onClick={handleClick}
      sx={{ minWidth: "110px" }}
    >
      New Item
    </Button>
  );
};

const Inventory = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<HelperItemType[]>([]);
  useEffect(() => {
    getHelperItems().then((response) => {
      if (response !== undefined && response.data !== undefined)
        setItems(response.data);
    });
  }, []);
  return (
    <div
      className="floating-items-page-container"
      style={{ maxWidth: COMPONENT_MAX_WIDTH }}
    >
      <div className="two-items-container">
        <SearchBar />
        <NewItemButton onClick={() => navigate("new")} />
      </div>
      {items.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Inventory;
