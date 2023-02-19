// React
import { useState } from "react";

// MUI
import { Button } from "@mui/material";

// Components
import FormContainer from "../Containers/FormContainer";
import AutoForm from "./AutoForm";

// Types
import { FieldsPropsTypes, ValueType } from "../../globalTypes";

// Functions
import { initFormErrors, initFormValues } from "../../utils/formInit";

// Constants
import {
  formButtonStyle,
  singleButtonFormContainerStyle,
} from "../../globalConstants";
import { checkFormValidity } from "../../utils/validation";

type FormTesterProps = {
  label: string;
  fields: FieldsPropsTypes[];
};

const FormTester = ({ label, fields }: FormTesterProps) => {
  const initErrorValues = initFormErrors(Object.keys(fields));
  const [values, setValues] = useState(initFormValues(fields));
  const [errors, setErrors] = useState(initErrorValues);

  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const errorCheck = checkFormValidity(fields, values);
    setErrors(initErrorValues);
    if (errorCheck.state)
      setErrors({ ...initErrorValues, ...errorCheck.errors });
  };

  return (
    <FormContainer title={`${label} Form Test`}>
      <AutoForm
        fields={fields}
        values={values}
        errors={errors}
        onChange={handleChange}
      />
      <div style={singleButtonFormContainerStyle}>
        <Button variant="contained" sx={formButtonStyle} onClick={handleSubmit}>
          Test
        </Button>
      </div>
    </FormContainer>
  );
};

export default FormTester;
