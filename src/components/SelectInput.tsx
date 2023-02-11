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

const SelectInput = ({
  id,
  span,
  label,
  value,
  options,
  setValue,
  addOption,
}: {
  id: string;
  span: 1 | 2 | 3 | 4;
  label: string;
  value: string;
  options?: { value: string; label: string }[];
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
            <MenuItem value={option.value}>
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
