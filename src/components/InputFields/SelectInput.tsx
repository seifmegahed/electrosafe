// React
import { useState } from "react";
// Firebase
// MUI
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import AddOptionModal from "../Modals/AddOptionModal";
import { OptionType, SpanType, ValueType } from "../../globalTypes";

const SelectInput = ({
  id,
  name,
  span,
  label,
  value,
  options,
  setValue,
  addOption,
  onChange,
}: {
  id?: string;
  name: string;
  span: SpanType;
  label: string;
  value: ValueType;
  options?: OptionType[];
  setValue?: (value: ValueType) => void | undefined;
  onChange?: (name: string, value: ValueType) => void | undefined;
  addOption?: (value: string) => void;
}) => {
  const [Modal, setModal] = useState(false);

  return (
    <Box sx={{ gridColumn: `span ${span}` }}>
      <AddOptionModal
        id={`${id ?? name}-option-modal`}
        title={`Add New ${label}`}
        open={Modal}
        handleClose={() => setModal(false)}
        addOption={(value) => addOption && addOption(value)}
      />
      <FormControl fullWidth>
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <Select
          value={(value as OptionType).name ?? value ?? undefined}
          onChange={(e) => {
            setValue?.(e.target.value);
            onChange?.(name, e.target.value);
          }}
          labelId={`${id}-select-label`}
          label={label}
        >
          {addOption && (
            <MenuItem value={""} onClick={() => setModal(true)}>
              Add Option
              <Add />
            </MenuItem>
          )}
          {options?.map((option, index) => (
            <MenuItem key={index} value={option.name}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
