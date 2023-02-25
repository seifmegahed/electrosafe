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
  OptionType,
  SelectFieldPropsType,
  SpanType,
  ValueType,
} from "../../../globalTypes";

// Constants
import {
  editableField,
  FORM_BUTTON_STYLE,
  labelField,
  nameField,
  optionsField,
  requiredField,
  singleButtonFormContainerStyle,
} from "../../../globalConstants";

// Functions
import { mirrorNameToLabel } from "../../../utils/conversions";
import { checkFormValidity } from "../../../utils/validation";
import { initFormErrors } from "../../../utils/formInit";

const fields = [
  labelField,
  nameField,
  requiredField,
  editableField,
  optionsField,
];

const initValues: SelectFieldPropsType = {
  input: "select",
  span: 2 as SpanType,
  label: "",
  name: "",
  options: [] as OptionType[],
  required: false,
  editable: true,
};

type SelectFieldGeneratorProps = {
  onSubmit: (values: SelectFieldPropsType) => void;
};

const SelectFieldGenerator = ({ onSubmit }: SelectFieldGeneratorProps) => {
  const passValues = onSubmit;
  const initErrorValues = initFormErrors(Object.keys(initValues));
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState(initErrorValues);

  const handleChange = (name: string, value: ValueType) => {
    if (name === "label")
      setValues(
        (prev) =>
          mirrorNameToLabel(prev, value as string) as SelectFieldPropsType
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
          name="selectField-add"
          sx={FORM_BUTTON_STYLE}
          endIcon={<Add />}
        >
          ADD
        </Button>
      </div>
    </GridWrapper>
  );
};

export default SelectFieldGenerator;
