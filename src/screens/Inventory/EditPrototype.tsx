// React
import { useLocation } from "react-router-dom";
// Firebase
// MUI
import { TextField } from "@mui/material";
// Components
import FormContainer from "../../components/FormContainer";
import FieldGenerator from "./FieldGenerator";
// Types

const EditPrototype = () => {
  const location = useLocation();
  return (
    <>
      <FormContainer title={`${location.state?.label} Prototype`}>
        <TextField label="Name" sx={{ gridColumn: "span 2" }} />
        <TextField label="Value " sx={{ gridColumn: "span 2" }} />
      </FormContainer>
      <FieldGenerator />
    </>
  );
};

export default EditPrototype;
