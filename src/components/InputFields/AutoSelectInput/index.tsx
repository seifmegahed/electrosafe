// MUI
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

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
  const [inputValue, setInputValue] = useState("");
  const handleChange = onChange;
  return (
    <Autocomplete
      disablePortal
      autoSelect
      clearOnBlur
      clearOnEscape
      id={label}
      isOptionEqualToValue={(option, checkValue) =>
        option.name === checkValue.name
      }
      value={(value as OptionType) || null}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      options={(options as OptionType[]) || []}
      getOptionLabel={(option) => option.label}
      sx={{ width: "100%", gridColumn: `span ${span}` }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          helperText={error && "Required"}
          error={error}
          label={label}
        />
      )}
      onChange={(event, newValue) => handleChange(name, newValue as OptionType)}
    />
  );
};

export default AutoSelectInput;
