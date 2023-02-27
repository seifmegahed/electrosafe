// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Timestamp } from "firebase/firestore";

// MUI

// Components
import GridWrapper from "../../../components/Containers/GridWrapper";
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
import getFormattedDate from "../../../utils/dateFormatting";

const autoFields = [
  { name: "dataOfCreation", label: "Created On", type: "date" },
  { name: "createdBy", label: "Created By", type: "text" },
  { name: "modifiedOn", label: "Last Modified On", type: "date" },
  { name: "modifiedBy", label: "Modified By", type: "text" },
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
      <GridWrapper>
        {fields.map((field) => {
          const { name, input } = field;
          const value = itemData[name];
          if (input === "text" && value !== "")
            return (
              <TextFieldDisplay
                key={name}
                label={field.label}
                value={value as string}
              />
            );
          return null;
        })}
      </GridWrapper>
      <GridWrapper>
        {autoFields.map(({ name, label, type }) => {
          const value = itemData[name];
          console.log(value);
          if (value && value !== "")
            return (
              <TextFieldDisplay
                key={name}
                label={label}
                value={
                  type === "date"
                    ? getFormattedDate(value as Timestamp)
                    : (value as string)
                }
              />
            );
          return null;
        })}
      </GridWrapper>
    </FormContainer>
  );
};

export default ItemPage;
