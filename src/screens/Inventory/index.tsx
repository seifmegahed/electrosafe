// React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// MUI
import { Box, Input, IconButton, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

// Types

// Constants
import { componentMaxWidth } from "../../globalConstants";

// Functions
import { getHelperItems, HelperItemType } from "./firestore/items";
import ItemCard from "./ItemCard";

const Inventory = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<HelperItemType[]>();
  useEffect(() => {
    getHelperItems().then((response) => {
      if (response !== undefined && response.data !== undefined)
        setItems(response.data);
    });
  }, []);
  return (
    <Box
      maxWidth={componentMaxWidth}
      width="100%"
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap="20px"
        width="100%"
      >
        <Box
          display="flex"
          borderRadius="50px"
          sx={{ backgroundColor: "background.paper" }}
        >
          <Input
            disableUnderline
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search"
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </Box>
        <Button
          size="large"
          variant="contained"
          name="newItem"
          onClick={() => navigate("new")}
          sx={{ minWidth: "110px" }}
        >
          New Item
        </Button>
      </Box>
      {items?.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </Box>
  );
};

export default Inventory;
