// React
// Firebase
// MUI
// Components
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

import FormContainer from "../../components/FormContainer";
import ModalWrapper from "../../components/ModalWrapper";

// Types

const NewItem = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  return (
    <FormContainer title="New Item">
      <ModalWrapper
        id="new-category-modal"
        title="New Category"
        open={categoryModal}
        handleClose={() => setCategoryModal(false)}
      >
        <Box display="flex" width="100%" justifyContent="flex-end">
          <Button variant="contained" onClick={() => setCategoryModal(false)}>
            Save
          </Button>
        </Box>
      </ModalWrapper>
      <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select labelId="category-select-label" label="Category">
          <MenuItem onClick={() => setCategoryModal(true)}>
            <ListItemText primary="Add Category" />
            <Add />
          </MenuItem>
        </Select>
      </FormControl>
    </FormContainer>
  );
};

export default NewItem;
