import { TextField, FilterOptionsState } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { labelToName } from "../utils/conversions";

type OptionsType = {
  inputValue?: string;
  name: string;
  label: string;
};

const filter = createFilterOptions<OptionsType>();

const filterOptions = (
  options: OptionsType[],
  params: FilterOptionsState<OptionsType>
) => {
  const filtered = filter(options, params);
  const { inputValue } = params;
  // Suggest the creation of a new value
  const isExisting = options.some((option) => inputValue === option.label);
  if (inputValue !== "" && !isExisting) {
    filtered.push({
      inputValue: inputValue,
      label: `Add "${inputValue}"`,
      name: inputValue,
    });
  }
  return filtered;
};

const SelectInputAdvanced = () => {
  const [value, setValue] = useState<OptionsType | null>(null);
  const [options, setOptions] = useState<OptionsType[]>([]);

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: OptionsType | null
  ) => {
    if (value && value.inputValue) {
      const newOption = {
        label: value.inputValue,
        name: labelToName(value.inputValue),
      };
      setValue(newOption);
      setOptions((prev) => [...prev, newOption]);
    } else setValue(value);
  };

  return (
    <Autocomplete
      id="autocomplete"
      value={value}
      onChange={handleChange}
      filterOptions={filterOptions}
      autoSelect
      clearOnBlur
      handleHomeEndKeys
      options={options}
      sx={{ gridColumn: "span 2" }}
      renderInput={(params) => <TextField {...params} label="Autocomplete" />}
    />
  );
};

export default SelectInputAdvanced;
