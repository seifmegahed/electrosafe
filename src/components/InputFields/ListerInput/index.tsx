// React
import { useState } from "react";

// MUI
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

// Types
import { OptionType, ListerFieldPropsType, OptionsChangeCallback } from "../../../globalTypes";

type ListerPropsType = {
  fieldData: ListerFieldPropsType;
  value: OptionType[];
  error?: boolean;
  onChange?: OptionsChangeCallback;
};

import { labelToOption } from "../../../utils/conversions";
import AddButtonAdornment from "./AddButtonAdornment";
import ListOption from "./ListOption";

const removeOption = (option: OptionType, options: OptionType[]) =>
  options.filter((item) => item.name !== option.name);

const addOption = (option: OptionType, options: OptionType[]) => {
  if (checkIncluded(option, options)) return options;
  return [...options, option];
};

const checkIncluded = (option: OptionType, options: OptionType[]) => {
  return !!options?.filter((item) => item.name === option.name).length;
};

const ListerInput = ({ fieldData, value, onChange }: ListerPropsType) => {
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
    <FormControl sx={{ gridColumn: `span ${span}` }}>
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
      <div style={{ paddingTop: "10px" }}>
        {(options || []).map((option, index) => (
          <ListOption key={index} option={option} onRemove={handleRemove} />
        ))}
      </div>
    </FormControl>
  );
};

export default ListerInput;
