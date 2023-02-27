// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// MUI

// Components
import FormContainer from "../../../components/Containers/FormContainer";
import TextFieldDisplay from "./TextFieldDisplay";

// Function
import { getItem } from "../firestore/items";
import { getForms } from "../firestore/forms";

// Types
import {
  FieldsPropsTypes,
  GenericObject,
  OptionType,
} from "../../../globalTypes";

const autoFields = [
  { name: "dataOfCreation", label: "Created On", input: "date" },
  { name: "createdBy", label: "Created By", input: "text" },
  { name: "modifiedOn", label: "Last Modified On", input: "date" },
  { name: "modifiedBy", label: "Modified By", input: "text" },
];

const ItemPage = () => {
  const location = useLocation();
  const itemId = location.state.id;
  const [itemData, setItemData] = useState<GenericObject>();
  const [fields, setFields] = useState<FieldsPropsTypes[]>();

  useEffect(() => {
    getItem(itemId)
      .catch((error) => {
        console.error(error);
      })
      .then((response) => setItemData(response as GenericObject));
  }, [itemId]);

  useEffect(() => {
    if (itemData && itemData.category) {
      console.log(itemData);
    }
    getForms()
      .catch((error) => console.error(error))
      .then((response) => {
        const forms = response?.data();
        const categoryName = (itemData?.category as OptionType).name;
        if (forms?.[categoryName]) setFields(forms[categoryName]);
      });
  }, [itemData]);

  if (!fields || !itemData) return null;
  return (
    <FormContainer title={itemData.name as string}>
      {[...fields, ...autoFields].map((field) => {
        const { name, input } = field;
        const value = itemData[name];
        if (
          (input === "text" || input === "date") &&
          value !== "" &&
          value !== undefined
        )
          return (
            <TextFieldDisplay
              key={name}
              type={input}
              label={field.label}
              value={value as string}
            />
          );
        return null;
      })}
    </FormContainer>
  );
};

export default ItemPage;
