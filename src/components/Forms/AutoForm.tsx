// React
// Firebase
// MUI
// Components

import {
  ChangeCallbackTypes,
  FieldsPropsTypes,
  GenericObject,
} from "../../globalTypes";
import GridWrapper from "../Containers/GridWrapper";

import FieldSelector from "../InputFields/FieldSelector";

// Types
type AutoFormProps = {
  fields: FieldsPropsTypes[];
  values: GenericObject;
  errors?: { [key: string]: boolean };
  onChange: ChangeCallbackTypes;
};

const initValues = {
  text: "",
  toggle: null,
  select: null,
  checkbox: false,
  lister: [],
};

const AutoForm = ({ fields, values, errors, onChange }: AutoFormProps) => {
  const handleChange = onChange;

  return (
    <GridWrapper>
      {fields.map((fieldData) => {
        return (
          <FieldSelector
            key={fieldData.name}
            fieldData={fieldData}
            value={values?.[fieldData.name] || initValues[fieldData.input]}
            onChange={handleChange}
            error={errors?.[fieldData.name] || false}
          />
        );
      })}
    </GridWrapper>
  );
};

export default AutoForm;
