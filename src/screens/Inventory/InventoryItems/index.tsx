// React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// MUI
import { Pagination } from "@mui/material";

// Components
import ItemCard from "../ItemCard";
import SearchBar from "./SearchBar";
import AddItemButton from "./NewItemButton";

// Constants
import { COMPONENT_MAX_WIDTH } from "../../../globalConstants";

// Functions
import { getHelperItems, HelperItemType } from "../firestore/items";

type PaginationComponentProps = {
  numberPages: number;
  onChange: (value: number) => void;
};

const PaginationComponent = ({
  numberPages,
  onChange: handleChange,
}: PaginationComponentProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        onChange={(event, value) => handleChange(value)}
        count={numberPages}
      />
    </div>
  );
};

const itemsPerPage = 10;

const InventoryItems = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<HelperItemType[]>([]);
  const [pageItems, setPageItems] = useState<HelperItemType[]>([]);

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
      <PaginationComponent numberPages={10} onChange={handlePageChange} />
    </div>
  );
};

export default InventoryItems;
