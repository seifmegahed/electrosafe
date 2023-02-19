import { useEffect, useState } from "react";
import { NavigateFunction, useLocation } from "react-router-dom";
import { List } from "@mui/material";
import NonNestedItem from "./NonNestedItem";
import NestedItem from "./NestedItem";
import { PagesType } from "./pages";

const NavItems = ({
  navigate,
  pages,
}: {
  navigate: NavigateFunction;
  pages: PagesType;
}) => {
  const location = useLocation();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    let selectedIndex = -1;
    pages.forEach((page, index) => {
      if (location.pathname.includes(page.path)) selectedIndex = index;
    });
    setSelected(selectedIndex);
  }, [location.pathname, pages]);

  return (
    <List>
      {pages.map((item, index) =>
        item.subPages ? (
          <NestedItem
            key={item.label}
            item={item}
            navigate={navigate}
            selected={selected === index}
          />
        ) : (
          <NonNestedItem
            item={item}
            key={item.label}
            navigate={navigate}
            selected={selected === index}
          />
        )
      )}
    </List>
  );
};

export default NavItems;
