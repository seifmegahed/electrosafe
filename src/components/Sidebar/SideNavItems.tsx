import { NavigateFunction, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NonNestedItem from "./NonNestedItem";
import NestedItem from "./NestedItem";
import { PagesType } from "./pages";
import { List } from "@mui/material";

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
  }, [location.pathname]);

  return (
    <List>
      {pages.map((item, index) =>
        !!item.subPages ? (
          <NestedItem
            key={index}
            item={item}
            navigate={navigate}
            selected={selected === index}
          />
        ) : (
          <NonNestedItem
            item={item}
            key={index}
            navigate={navigate}
            selected={selected === index}
          />
        )
      )}
    </List>
  );
};

export default NavItems;
