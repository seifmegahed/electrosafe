// React
import { useLocation } from "react-router-dom";
// Firebase
// MUI
import { Button, TextField } from "@mui/material";
// Components
import FormContainer from "../../components/FormContainer";
import FieldGenerator, { FieldGenerator2 } from "./FieldGenerator";
// Types
// Constants
import { formButtonStyle, singleButtonFormContainerStyle } from "../../globalConstants";

const EditPrototype = () => {
  const location = useLocation();
  return (
    <>
      <FormContainer title={`${location.state?.label} Form Test`}>
        <TextField label="Name" sx={{ gridColumn: "span 2" }} />
        <TextField label="Value " sx={{ gridColumn: "span 2" }} />
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
