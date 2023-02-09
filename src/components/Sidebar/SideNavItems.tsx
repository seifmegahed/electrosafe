import { List } from "@mui/material";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
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
  const [selected, setSelected] = useState(0);
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
