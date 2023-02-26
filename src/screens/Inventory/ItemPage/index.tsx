// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Firebase
import { getItem } from "../firestore/items";
// MUI

// Components
import FormContainer from "../../../components/Containers/FormContainer";

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
        {keys.map((item) => (
          <div key={item} style={{ gridColumn: "span 4" }}>
            <p>{`${item}: ${itemData[item]?.toString()}`}</p>
          </div>
        ))}
      </FormContainer>
    );
  }
  return null;
};

export default ItemPage;
