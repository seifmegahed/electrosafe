// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Firebase

// MUI
import { Typography } from "@mui/material";

// Components
import FormContainer from "../../../components/Containers/FormContainer";

// Function
import { getItem } from "../firestore/items";

// Types
import { GenericObject } from "../../../globalTypes";

const ItemPage = () => {
  const location = useLocation();
  const itemId = location.state.id;
  const [itemData, setItemData] = useState<GenericObject>();

  useEffect(() => {
    getItem(itemId)
      .catch((error) => {
        console.error(error);
      })
      .then((response) => setItemData(response as GenericObject));
  }, [itemId]);

  if (itemData !== undefined) {
    const keys = Object.keys(itemData as GenericObject);
    return (
      <FormContainer title={itemData.name as string}>
        {keys.map((key) => {
          if (typeof itemData[key] === "string" && itemData[key] !== "")
            return (
              <div
                key={key}
                className="flex-row-div"
                style={{ gridColumn: "span 4" }}
              >
                <div className="data-display-key-div">
                  <Typography>{key}</Typography>
                </div>
                <div>
                  <Typography>{itemData[key] as string}</Typography>
                </div>
              </div>
            );
          return null;
        })}
      </FormContainer>
    );
  }
  return null;
};

export default ItemPage;
