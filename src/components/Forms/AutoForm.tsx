// React
// Firebase
// MUI
// Components

import { useState } from "react";
import {
  ChangeCallbackTypes,
  FieldsPropsTypes,
  GenericObject,
} from "../../globalTypes";
import GridWrapper from "../Containers/GridWrapper";

import FieldSelector from "../InputFields/FieldSelector";

// Types
const containerStyle = {
  gridColumn: "span 4",
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "20px",
};
type AutoFormProps = {
  fields: FieldsPropsTypes[];
  values: GenericObject;
  onChange: ChangeCallbackTypes;
};

const initValues = {
  text: "",
  toggle: null,
  select: null,
  checkbox: false,
  lister: [],
};

const AutoForm = ({ fields, values, onChange }: AutoFormProps) => {
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const handleChange = onChange;

  return (
    <GridWrapper>
      {fields.map((fieldData, index) => {
        return (
          <FieldSelector
            key={index}
            fieldData={fieldData}
            value={values?.[fieldData.name] || initValues[fieldData.input]}
            onChange={handleChange}
            error={errors[fieldData.name] || false}
          />
        );
      })}
    </GridWrapper>
  );
};

export default AutoForm;
