import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { NavigateFunction, useLocation } from "react-router-dom";
import NestedItem from "./NestedItem";
import NonNestedItem from "./NonNestedItem";
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
      if (
        (page.label !== "Home" && location.pathname.includes(page.path)) ||
        location.pathname === page.path
      )
        selectedIndex = index;
    });
    setSelected(selectedIndex);
  }, [location.pathname]);
  return (
    <List>
      {pages.map((item, index) =>
        !!item.subPages ? (
          <NestedItem
            key={index}
            selected={selected === index}
            setSelected={() => setSelected(index)}
            item={item}
            navigate={navigate}
          />
        ) : (
          <NonNestedItem
            key={index}
            selected={selected === index}
            setSelected={() => setSelected(index)}
            item={item}
            navigate={navigate}
          />
        )
      )}
    </List>
  );
};

export default NavItems;
