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
// Types
import {
  SelectFieldPropsType,
  TextFieldPropsType,
  ToggleFieldPropsType,
} from "../../globalTypes";

import SelectInput from "../../components/SelectInput";

const FieldSelector = ({
  fieldData,
  value,
  onChange,
}: {
  fieldData: TextFieldPropsType | SelectFieldPropsType | ToggleFieldPropsType;
  value?: string | boolean | number;
  onChange?: (name: string, value: string | number | boolean) => void;
}) => {
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
    default:
      return <></>;
  }
};

export default FieldSelector;
