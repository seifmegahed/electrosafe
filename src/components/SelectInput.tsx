// React
import { useState } from "react";
// Firebase
// MUI
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import AddOptionModal from "./Modals/AddOptionModal";
import { OptionType, SpanType } from "../globalTypes";

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
  span: SpanType;
  label: string;
  value: string;
  options?: OptionType[];
  setValue: (value: string) => void;
  addOption?: (value: string) => void;
}) => {
  const [Modal, setModal] = useState(false);

  return (
    <Box sx={{ gridColumn: `span ${span}` }}>
      <AddOptionModal
        id={`${id}-option-modal`}
        title={`Add New ${label}`}
        open={Modal}
        handleClose={() => setModal(false)}
        addOption={(value) => addOption && addOption(value)}
      />
      <FormControl fullWidth>
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          labelId={`${id}-select-label`}
          label={label}
        >
          {addOption && (
            <MenuItem value={""} onClick={() => setModal(true)}>
              Add Option
              <Add />
            </MenuItem>
          )}
          {options?.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
