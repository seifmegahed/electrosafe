// React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import ItemCard from "../ItemCard";
import SearchBar from "./SearchBar";
import AddItemButton from "./NewItemButton";

// Constants
import { COMPONENT_MAX_WIDTH } from "../../../globalConstants";

// Functions
import { getHelperItems, HelperItemType } from "../firestore/items";

const InventoryItems = () => {
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
        <AddItemButton onClick={() => navigate("new")} />
      </div>
      {items.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default InventoryItems;
