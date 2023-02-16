// React
import { useLocation } from "react-router-dom";
// Firebase
// MUI
import { Button, TextField, Typography } from "@mui/material";
// Components
import FormContainer from "../../Containers/FormContainer";
import FieldGenerator from "../FieldGenerator/FieldGenerator";
// Types
// Constants
import {
  formButtonStyle,
  singleButtonFormContainerStyle,
} from "../../../globalConstants";

const EditPrototype = () => {
  const location = useLocation();
  return (
    <>
      <Typography variant="h3">{`${location.state?.label} Form Test}`}</Typography>
      <FormContainer title="Form Tester">
        <TextField label="Name" sx={{ gridColumn: "span 2" }} draggable />
        <TextField label="Make" sx={{ gridColumn: "span 2" }} draggable />
        <div style={singleButtonFormContainerStyle}>
          <Button variant="contained" sx={formButtonStyle}>
            Test
          </Button>
        </div>
      </FormContainer>
      <FieldGenerator />
    </>
  );
};

export default EditPrototype;
