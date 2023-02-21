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
  SpanType,
  ToggleFieldPropsType,
  ValueType,
} from "../../../globalTypes";

// Constants
import {
  editableField,
  formButtonStyle,
  nameField,
  optionsField,
  requiredField,
  singleButtonFormContainerStyle,
} from "../../../globalConstants";

// Functions
import { checkFormValidity } from "../../../utils/validation";
import { initFormErrors } from "../../../utils/formInit";

const fields = [nameField, requiredField, editableField, optionsField];

const initValues: ToggleFieldPropsType = {
  input: "toggle",
  span: 2 as SpanType,
  name: "",
  options: [] as OptionType[],
  required: false,
  editable: true,
};

type ToggleFieldGeneratorProps = {
  onSubmit: (values: ToggleFieldPropsType) => void;
};

const ToggleFieldGenerator = ({ onSubmit }: ToggleFieldGeneratorProps) => {
  const passValues = onSubmit;
  const initErrorValues = initFormErrors(Object.keys(initValues));
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState(initErrorValues);

  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
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
          sx={formButtonStyle}
          endIcon={<Add />}
        >
          ADD
        </Button>
      </div>
    </GridWrapper>
  );
};

export default ToggleFieldGenerator;
