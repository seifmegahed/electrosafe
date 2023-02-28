// React
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

// Components
import ItemCard from "../ItemCard";
import SearchBar from "../../../components/InputFields/SearchBar";
import AddItemButton from "./AddItemButton";
import PaginationComponent from "../../../components/Navigation/PaginationComponent";

// Constants
import { COMPONENT_MAX_WIDTH } from "../../../globalConstants";

// Functions
import { getHelperItems, HelperItemType } from "../firestore/items";
import routes from "../../../routes";
import ChipMenu from "./ChipMenu";

const itemsPerPage = 10;

const InventoryItems = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<HelperItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<HelperItemType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedMap, setCheckedMap] = useState(
    new Map<HelperItemType, boolean>()
  );

  const numberPages = Math.ceil(filteredItems.length / itemsPerPage);
  const amountChecked = [...checkedMap.keys()].length;

  const pageItems = useMemo(() => {
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    return filteredItems.slice(firstItemIndex, lastItemIndex);
  }, [filteredItems, currentPage]);

  const handleSearch = (value: string) => {
    setFilteredItems(
      items.filter(
        (item) =>
          item.category.label.toLowerCase().includes(value.toLowerCase()) ||
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.make.toLowerCase().includes(value.toLowerCase()) ||
          item.mpn.toLowerCase().includes(value.toLowerCase())
      )
    );
    setCurrentPage(1);
  };

  const handleChecked = (item: HelperItemType, value: boolean) => {
    setCheckedMap((prev) => {
      const newCheckedMap = new Map(prev);
      if (value) newCheckedMap.set(item, value);
      else newCheckedMap.delete(item);
      return newCheckedMap;
    });
  };

  const handleClear = () => setCheckedMap(new Map<HelperItemType, boolean>());

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
        <SearchBar onChange={handleSearch} />
        <AddItemButton onClick={() => navigate(routes.newItem.path)} />
      </div>
      {amountChecked > 0 && (
        <ChipMenu selectedCount={amountChecked} onClear={handleClear} />
      )}
      {pageItems.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          checked={checkedMap.get(item) ?? false}
          onChecked={handleChecked}
        />
      ))}
      <PaginationComponent
        page={currentPage}
        numberPages={numberPages}
        onChange={setCurrentPage}
      />
    </div>
  );
};

export default InventoryItems;
