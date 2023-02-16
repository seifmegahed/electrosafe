// React
import { useState } from "react";
// Firebase
// MUI
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import AutoForm from "../../Forms/AutoForm";
import FieldDemo from "./FieldDemo";
import GridWrapper from "../../Containers/GridWrapper";
import SpanSlider from "../../InputFields/SpanSlider";

// Types
import {
  OptionType,
  SpanType,
  FieldsPropsTypes,
  TextFieldPropsType,
  TextFieldTypesType,
  ValueType,
  GenericObject,
} from "../../../globalTypes";

//Constants
import {
  editableField,
  formButtonStyle,
  labelField,
  nameField,
  requiredField,
  singleButtonFormContainerStyle,
} from "../../../globalConstants";
import { mirrorNameToLabel } from "../../../utils/conversions";
import { checkFormValidity, initFormErrors } from "../../../utils/validation";

const fields = [
  labelField,
  nameField,
  {
    name: "type",
    input: "toggle" as "toggle",
    options: [
      { name: "text", label: "Text" },
      { name: "number", label: "Number" },
    ],
    span: 2 as SpanType,
  },
  requiredField,
  editableField,
  {
    name: "preFix",
    label: "Pre Fix",
    input: "text" as "text",
    type: "text" as TextFieldTypesType,
    required: true,
    span: 2 as SpanType,
  },
  {
    name: "postFix",
    label: "Post Fix",
    input: "text" as "text",
    type: "text" as TextFieldTypesType,
    required: true,
    span: 2 as SpanType,
  },
];

const initValues: TextFieldPropsType = {
  input: "text",
  span: 2 as SpanType,
  label: "",
  name: "",
  type: { name: "text", label: "Text" } as OptionType,
  required: false,
  editable: false,
  preFix: "",
  postFix: "",
};

type TextFieldGeneratorProps = {
  onSubmit: (values: TextFieldPropsType) => void;
};

const initErrors = (keys: string[]) => {
  let errors: { [key: string]: boolean } = {};
  keys.forEach((key) => (errors[key] = false));
  return errors;
};

const checkValidity = (fields: FieldsPropsTypes[], values: GenericObject) => {
  let errors: { [key: string]: boolean } = {};
  let state = false;
  fields.forEach((field) => {
    if (field.required) {
      const value = values[field.name];
      if (value === "" || value === null || !(value as OptionType[]).length) {
        errors[field.name] = true;
        state = true;
      }
    }
  });
  return { errors, state };
};

const TextFieldGenerator = ({ onSubmit }: TextFieldGeneratorProps) => {
  const passValues = onSubmit;
  const initErrorValues = initFormErrors(Object.keys(initValues));
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState(initErrorValues);

  const handleChange = (name: string, value: ValueType) => {
    if (name === "label")
      setValues((prev) => mirrorNameToLabel(prev, value as string));
    else setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const errorCheck = checkFormValidity(fields, values);

    if (errorCheck.state)
      setErrors({ ...initErrorValues, ...errorCheck.errors });
    passValues(values);
  };

  return (
    <GridWrapper>
      <FieldDemo fieldData={values} />
      <SpanSlider
        value={values.span}
        onChange={(value) => handleChange("span", value)}
        display={true}
      />
      <AutoForm
        fields={fields}
        values={values}
        errors={errors}
        onChange={handleChange}
      />
      <div style={singleButtonFormContainerStyle}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={formButtonStyle}
          endIcon={<Add />}
        >
          ADD
        </Button>
      </div>
    </GridWrapper>
  );
};

export default TextFieldGenerator;
