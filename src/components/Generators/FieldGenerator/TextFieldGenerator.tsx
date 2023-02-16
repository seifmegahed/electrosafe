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
  TextFieldPropsType,
  TextFieldTypesType,
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
import { mirrorNameToLabel } from "../../../utils/conversions";

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

const TextFieldGenerator = ({ onSubmit }: TextFieldGeneratorProps) => {
  const passValues = onSubmit;

  const [values, setValues] = useState(initValues);

  const handleChange = (name: string, value: ValueType) => {
    if (name === "label")
      setValues((prev) => mirrorNameToLabel(prev, value as string));
    else setValues((prev) => ({ ...prev, [name]: value }));
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
