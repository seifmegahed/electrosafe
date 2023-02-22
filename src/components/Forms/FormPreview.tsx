// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Button } from "@mui/material";

// Components
import FormContainer from "../Containers/FormContainer";
import AutoForm from "./AutoForm";

// Types
import { FieldsPropsTypes, OptionType, ValueType } from "../../globalTypes";

// Functions
import { initFormValues } from "../../utils/formInit";

// Constants
import {
  formButtonStyle,
  singleButtonFormContainerStyle,
} from "../../globalConstants";
import { addForm } from "../../firestore/ItemPrototypes";
import Loading from "../Modals/Loading";

type FormTesterProps = {
  category: OptionType;
  fields: FieldsPropsTypes[];
};

const FormPreview = ({ fields, category }: FormTesterProps) => {
  const [values, setValues] = useState(initFormValues(fields));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    addForm(
      fields.map((field) => ({ ...field, display: true })),
      category
    )
      .catch((error) => console.warn(error))
      .then(() => navigate("/inventory/new", { state: category }))
      .finally(() => setLoading(false));
  };

  return (
    <FormContainer title="Form Preview">
      <Loading state={loading} />
      <AutoForm fields={fields} values={values} onChange={handleChange} />
      <div style={singleButtonFormContainerStyle}>
        <Button variant="contained" sx={formButtonStyle} onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </FormContainer>
  );
};

export default FormPreview;
