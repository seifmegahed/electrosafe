// MUI
import { Autocomplete, TextField } from "@mui/material";

// Types
import {
  OptionChangeCallback,
  OptionType,
  SelectFieldPropsType,
} from "../../../globalTypes";

type CheckboxInputPropsType = {
  fieldData: SelectFieldPropsType;
  value: OptionType;
  error?: boolean;
  onChange: OptionChangeCallback;
};

const AutoSelectInput = ({
  fieldData,
  value,
  error,
  onChange,
}: CheckboxInputPropsType) => {
  const { name, label, span, options } = fieldData;
  const handleChange = onChange;
  return (
    <Autocomplete
      disablePortal
      autoSelect
      clearOnBlur
      clearOnEscape
      id={label}
      value={value || null}
      options={options}
      getOptionLabel={(option) => option.label}
      sx={{ width: "100%", gridColumn: `span ${span}` }}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={(event, value) => handleChange(name, value as OptionType)}
    />
  );
};

export default AutoSelectInput;
