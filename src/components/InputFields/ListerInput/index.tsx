// React
import { useState } from "react";

// MUI
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// Types
import {
  OptionType,
  ListerFieldPropsType,
  OptionsChangeCallback,
} from "../../../globalTypes";

import { labelToOption } from "../../../utils/conversions";
import AddButtonAdornment from "./AddButtonAdornment";
import ListOption from "./ListOption";

type ListerPropsType = {
  fieldData: ListerFieldPropsType;
  value: OptionType[];
  error?: boolean;
  onChange?: OptionsChangeCallback;
};

const removeOption = (option: OptionType, options: OptionType[]) =>
  options.filter((item) => item.name !== option.name);

const checkIncluded = (option: OptionType, options: OptionType[]) => {
  return !!options?.filter((item) => item.name === option.name).length;
};

const addOption = (option: OptionType, options: OptionType[]) => {
  if (checkIncluded(option, options)) return options;
  return [...options, option];
};

const ListerInput = ({
  fieldData,
  value,
  error,
  onChange,
}: ListerPropsType) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { name, label, span } = fieldData;
  const options = value || [];
  const passChange = onChange;

  const handleAdd = () => {
    passChange?.(name, addOption(labelToOption(inputValue), options));
    setInputValue("");
  };

  const handleRemove = (option: OptionType) => {
    passChange?.(name, removeOption(option, options));
  };

  return (
    <FormControl error={error} sx={{ gridColumn: `span ${span}` }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        name={name}
        label={label}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        endAdornment={<AddButtonAdornment onClick={handleAdd} />}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleAdd();
        }}
      />
      {error && <FormHelperText>Required</FormHelperText>}
      <div style={{ paddingTop: "10px" }}>
        {(options || []).map((option) => (
          <ListOption
            key={option.name}
            option={option}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </FormControl>
  );
};

export default ListerInput;
