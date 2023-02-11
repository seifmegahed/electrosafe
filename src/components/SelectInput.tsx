// React
import { useState } from "react";
// Firebase
// MUI
import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import AddOptionModal from "./Modals/AddOptionModal";

const CategoryInput = ({
  id,
  span,
  label,
  value,
  options,
  setValue,
  addOption,
}: {
  id: string;
  span: number;
  label: string;
  value: string;
  options?: string[];
  setValue: (value: string) => void;
  addOption?: (value: string) => void;
}) => {
  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <div style={{ gridColumn: `span ${span}` }}>
      <AddOptionModal
        id={`${id}-option-modal`}
        title="Add New Category"
        open={categoryModal}
        handleClose={() => setCategoryModal(false)}
        addOption={(value) => addOption && addOption(value)}
      />
      <FormControl fullWidth>
        <InputLabel id={`${id}-select-label`}>Category</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          labelId={`${id}-select-label`}
          label={label}
        >
          {addOption && (
            <MenuItem value={""} onClick={() => setCategoryModal(true)}>
              <ListItemText primary="Add Option" />
              <Add />
            </MenuItem>
          )}
          {options?.map((option) => (
            <MenuItem value={option}>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoryInput;
