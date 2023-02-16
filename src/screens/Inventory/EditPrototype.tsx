// React
import { useLocation } from "react-router-dom";
// Firebase
// MUI
import { Button, TextField } from "@mui/material";
// Components
import FormContainer from "../../components/Containers/FormContainer";
import FieldGenerator from "../../components/Generators/FieldGenerator/FieldGenerator";
// Types
// Constants
import {
  formButtonStyle,
  singleButtonFormContainerStyle,
} from "../../globalConstants";
import FieldGenerator2 from "../../components/Generators/FieldGenerator/FieldGenerator2";

const EditPrototype = () => {
  const location = useLocation();
  return (
    <>
      <FormContainer title={`${location.state?.label} Form Test`}>
        <TextField label="Name" sx={{ gridColumn: "span 2" }} draggable />
        <TextField label="Make" sx={{ gridColumn: "span 2" }} draggable />
        <div style={singleButtonFormContainerStyle}>
          <Button variant="contained" sx={formButtonStyle}>
            Test
          </Button>
        </div>
      </FormContainer>
      <FieldGenerator />
      <FieldGenerator2 />
    </>
  );
};

export default EditPrototype;
