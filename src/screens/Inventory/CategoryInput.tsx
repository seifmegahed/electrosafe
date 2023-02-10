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
import AddOptionModal from "../../components/Modals/AddOptionModal";

const CategoryInput = ({
  span,
  value,
  options,
  setValue,
  addOption,
}: {
  span: number;
  value: string;
  options?: string[];
  setValue: (value: string) => void;
  addOption: (value: string) => void;
}) => {
  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <div style={{ gridColumn: `span ${span}` }}>
      <AddOptionModal
        id="category-option-modal"
        title="Add New Category"
        open={categoryModal}
        handleClose={() => setCategoryModal(false)}
        addOption={addOption}
      />
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          labelId="category-select-label"
          label="Category"
        >
          <MenuItem value={""} onClick={() => setCategoryModal(true)}>
            <ListItemText primary="Add Option" />
            <Add />
          </MenuItem>
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
