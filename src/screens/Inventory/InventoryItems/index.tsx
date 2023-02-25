// React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import ItemCard from "../ItemCard";
import SearchBar from "./SearchBar";
import AddItemButton from "./NewItemButton";
import PaginationComponent from "./PaginationComponent";

// Constants
import { COMPONENT_MAX_WIDTH } from "../../../globalConstants";

// Functions
import { getHelperItems, HelperItemType } from "../firestore/items";

const itemsPerPage = 10;

const InventoryItems = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<HelperItemType[]>([]);
  const [pageItems, setPageItems] = useState<HelperItemType[]>([]);
  const numberPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    const lastItemIndex = page * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    setPageItems(items.slice(firstItemIndex, lastItemIndex));
  };

  useEffect(() => {
    getHelperItems().then((response) => {
      if (response !== undefined && response.data !== undefined) {
        setItems(response.data);
      }
    });
  }, []);

  useEffect(() => {
    handlePageChange(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div
      className="floating-items-page-container"
      style={{ maxWidth: COMPONENT_MAX_WIDTH }}
    >
      <div className="two-items-container">
        <SearchBar />
        <AddItemButton onClick={() => navigate("new")} />
      </div>
      {pageItems.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
      <PaginationComponent
        numberPages={numberPages}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default InventoryItems;
