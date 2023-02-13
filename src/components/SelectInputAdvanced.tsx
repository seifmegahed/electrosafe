import { TextField, FilterOptionsState } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { SyntheticEvent } from "react";
import { labelToName } from "../utils/conversions";
import { OptionType } from "../globalTypes";

const filter = createFilterOptions<OptionType>();

const filterOptions = (
  options: OptionType[],
  params: FilterOptionsState<OptionType>
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

type SelectInputAdvancedPropsType = {
  name: string;
  label: string;
  span: number;
  options: OptionType[];
  value: OptionType | null;
  onChange: (name: string, value: OptionType | null) => void;
  onAddOption: (option: OptionType) => void;
};

const SelectInputAdvanced = ({
  name,
  label,
  span,
  options,
  value,
  onChange,
  onAddOption,
}: SelectInputAdvancedPropsType) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: OptionType | null
  ) => {
    if (value && value.inputValue) {
      const newOption = {
        label: value.inputValue,
        name: labelToName(value.inputValue),
      };
      onChange(name, newOption);
      onAddOption(newOption);
    } else onChange(name, value);
  };

  return (
    <Autocomplete
      id={name}
      value={value}
      onChange={handleChange}
      filterOptions={filterOptions}
      autoSelect
      clearOnBlur
      handleHomeEndKeys
      getOptionLabel={(option) => (option.label || "")}
      options={options}
      sx={{ gridColumn: `span ${span}` }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default SelectInputAdvanced;
