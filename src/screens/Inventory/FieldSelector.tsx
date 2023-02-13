// React
// Firebase
// MUI
import {
  Box,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
// Components
import SelectInput from "../../components/SelectInput";
import SelectInputAdvanced from "../../components/SelectInputAdvanced";

// Types
import {
  AdvancedSelectFieldPropsType,
  FieldsPropsTypes,
  ValueType,
  SelectFieldPropsType,
  TextFieldPropsType,
  ToggleFieldPropsType,
  OptionType,
} from "../../globalTypes";

type FieldSelectorPropsType = {
  fieldData: FieldsPropsTypes;
  value?: ValueType;
  onChange?: (name: string, value: ValueType) => void;
  onAddOption?: (value: OptionType) => void;
};

const FieldSelector = ({
  fieldData,
  value,
  onChange,
  onAddOption,
}: FieldSelectorPropsType) => {
  switch (fieldData.input) {
    case "text": {
      const { label, span, preFix, postFix, type, name } =
        fieldData as TextFieldPropsType;
      const [inputProps, setInputProps] = useState<
        | false
        | { endAdornment: ReactElement }
        | { startAdornment: ReactElement }
      >(false);

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(name, event.target.value);
      };

      useEffect(() => {
        if (postFix)
          setInputProps({
            endAdornment: (
              <InputAdornment position="end">{postFix}</InputAdornment>
            ),
          });
        else if (preFix)
          setInputProps({
            startAdornment: (
              <InputAdornment position="start">{preFix}</InputAdornment>
            ),
          });
        else setInputProps(false);
      }, [postFix, preFix]);

      return (
        <TextField
          label={label}
          sx={{ gridColumn: `span ${span}` }}
          type={type ?? "text"}
          value={value}
          onChange={handleChange}
          InputProps={
            (inputProps as
              | { endAdornment: ReactElement }
              | { startAdornment: ReactElement }) || undefined
          }
        />
      );
    }
    case "select": {
      const { name, label, span, options } = fieldData as SelectFieldPropsType;
      return (
        <SelectInput
          id={name}
          label={label}
          span={span}
          options={options}
          value={""}
          setValue={(value) => console.log(value)}
        />
      );
    }
    case "toggle": {
      const { name, span, options } = fieldData as ToggleFieldPropsType;
      return (
        <Box
          display="flex"
          justifyContent={"flex-end"}
          sx={{ gridColumn: `span ${span}` }}
        >
          <ToggleButtonGroup
            exclusive
            color="primary"
            sx={{ width: "100%", maxWidth: 200 }}
          >
            {options?.map((option, index) => (
              <ToggleButton
                key={index}
                name={name}
                value={option.name}
                sx={{ minWidth: "70px", maxWidth: "100px", width: "100%" }}
              >
                {option.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      );
    }
    case "expandableSelect": {
      const { name, label, span, options } =
        fieldData as AdvancedSelectFieldPropsType;
      return (
        <SelectInputAdvanced
          name={name}
          label={label}
          span={span}
          options={options || []}
          value={(value as OptionType) || null}
          onChange={(name, value) => onChange?.(name, value)}
          onAddOption={(value) => onAddOption?.(value)}
        />
      );
    }

    default:
      return <></>;
  }
};

export default FieldSelector;
