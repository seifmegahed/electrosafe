// React
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

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
  const [filteredItems, setFilteredItems] = useState<HelperItemType[]>([]);
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const numberPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageItems = useMemo(() => {
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    return filteredItems.slice(firstItemIndex, lastItemIndex);
  }, [filteredItems, currentPage]);

  const handleSearch = (value: string) => {
    setSearchKey(value);
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getHelperItems().then((response) => {
      if (response !== undefined && response.data !== undefined) {
        setItems(response.data);
        setFilteredItems(response.data);
      }
    });
  }, []);

  return (
    <div
      className="floating-items-page-container"
      style={{ maxWidth: COMPONENT_MAX_WIDTH }}
    >
      <div className="two-items-container">
        <SearchBar value={searchKey} onChange={handleSearch} />
        <AddItemButton onClick={() => navigate("new")} />
      </div>
      {pageItems.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
      <PaginationComponent
        page={currentPage}
        numberPages={numberPages}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default InventoryItems;
