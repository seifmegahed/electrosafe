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
import { initFormValues } from "../../utils/formInit";

// Constants
import {
  FORM_BUTTON_STYLE,
  singleButtonFormContainerStyle,
} from "../../globalConstants";

type FormTesterProps = {
  fields: FieldsPropsTypes[];
  onSubmit: () => void;
};

const FormPreview = ({ fields, onSubmit }: FormTesterProps) => {
  const handleSubmit = onSubmit;
  const [values, setValues] = useState(initFormValues(fields));

  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContainer title="Form Preview">
      <AutoForm fields={fields} values={values} onChange={handleChange} />
      <div style={singleButtonFormContainerStyle}>
        <Button
          variant="contained"
          sx={FORM_BUTTON_STYLE}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </FormContainer>
  );
};

export default FormPreview;
