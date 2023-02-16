// React
import { useState } from "react";
// Firebase
// MUI

// Components
import GridWrapper from "../../Containers/GridWrapper";
import SpanSlider from "../../InputFields/SpanSlider";
import FieldDemo from "./FieldDemo";

// Types
import {
  SpanType,
  OptionType,
  TextFieldTypesType,
  TextFieldPropsType,
  ValueType,
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
import AutoForm from "../../Forms/AutoForm";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

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

const TextFieldGenerator = ({
  onSubmit,
}: {
  onSubmit: (values: TextFieldPropsType) => void;
}) => {
  const passValues = onSubmit;

  const [values, setValues] = useState(initValues);

  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
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
      <AutoForm fields={fields} values={values} onChange={handleChange} />
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
