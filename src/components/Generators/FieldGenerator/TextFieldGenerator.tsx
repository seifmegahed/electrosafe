// React
import { useState } from "react";
// Firebase
// MUI
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import AutoForm from "../../Forms/AutoForm";
import FieldDemo from "../../InputFields/FieldDemo";
import GridWrapper from "../../Containers/GridWrapper";
import SpanSlider from "../../InputFields/SpanSlider";

// Types
import {
  FieldsPropsTypes,
  TextFieldPropsType,
  ValueType,
} from "../../../globalTypes";

// Constants
import {
  editableField,
  FORM_BUTTON_STYLE,
  labelField,
  nameField,
  requiredField,
  singleButtonFormContainerStyle,
} from "../../../globalConstants";

// Functions
import { mirrorNameToLabel } from "../../../utils/conversions";
import { checkFormValidity } from "../../../utils/validation";
import { initFormErrors } from "../../../utils/formInit";

const fields: FieldsPropsTypes[] = [
  labelField,
  nameField,
  {
    name: "type",
    input: "toggle",
    options: [
      { name: "text", label: "Text" },
      { name: "number", label: "Number" },
    ],
    span: 2,
  },
  requiredField,
  editableField,
  {
    name: "preFix",
    label: "Pre Fix",
    input: "text",
    type: "text",
    required: false,
    span: 2,
  },
  {
    name: "postFix",
    label: "Post Fix",
    input: "text",
    type: "text",
    required: false,
    span: 2,
  },
];

const initValues: TextFieldPropsType = {
  input: "text",
  span: 2,
  label: "",
  name: "",
  type: { name: "text", label: "Text" },
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
  const initErrorValues = initFormErrors(Object.keys(initValues));
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState(initErrorValues);

  const handleChange = (name: string, value: ValueType) => {
    if (name === "label")
      setValues(
        (prev) => mirrorNameToLabel(prev, value as string) as TextFieldPropsType
      );
    else setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const errorCheck = checkFormValidity(fields, values);

    setErrors({ ...initErrorValues, ...errorCheck.errors });
    if (!errorCheck.state) {
      passValues(values);
      setValues(initValues);
    }
  };

  return (
    <GridWrapper>
      <FieldDemo fieldData={values} />
      <SpanSlider
        value={values.span}
        onChange={(value) => handleChange("span", value)}
        display
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
          name="textfield-add"
          sx={FORM_BUTTON_STYLE}
          endIcon={<Add />}
        >
          ADD
        </Button>
      </div>
    </GridWrapper>
  );
};

export default TextFieldGenerator;
