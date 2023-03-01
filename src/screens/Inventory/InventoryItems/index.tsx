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
import arabic from "../../../arabic";

const itemsPerPage = 10;

const InventoryItems = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<HelperItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<HelperItemType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(new Map<HelperItemType, boolean>());

  const numberPages = Math.ceil(filteredItems.length / itemsPerPage);
  const amountChecked = [...selected.keys()].length;

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

  const handleSelected = (item: HelperItemType, value: boolean) => {
    setSelected((prev) => {
      const newCheckedMap = new Map(prev);
      if (value) newCheckedMap.set(item, value);
      else newCheckedMap.delete(item);
      return newCheckedMap;
    });
  };

  const handleClear = () => setSelected(new Map<HelperItemType, boolean>());

  useEffect(() => {
    getHelperItems().then((response) => {
      if (response !== undefined && response.data !== undefined) {
        setItems(response.data);
        setFilteredItems(response.data);
      }
    });
  }, []);

  const errorColor = "error";
  const menuItems = [
    {
      label: arabic.EDAFA,
      arabic: true,
      callback: () => console.log([...selected.keys()]),
    },
    {
      label: arabic.SARF,
      arabic: true,
      callback: () => console.log([...selected.keys()]),
    },
    {
      label: arabic.TALAB,
      arabic: true,
      callback: () => console.log([...selected.keys()]),
    },
    {
      label: arabic.KHOROOG,
      arabic: true,
      callback: () => console.log([...selected.keys()]),
    },
    {
      label: "Delete",
      callback: () => console.log([...selected.keys()]),
      color: errorColor,
    },
  ];

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
        <ChipMenu
          menuItems={menuItems}
          selectedCount={amountChecked}
          onClear={handleClear}
        />
      )}
      {pageItems.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          checked={selected.get(item) ?? false}
          onChecked={handleSelected}
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
