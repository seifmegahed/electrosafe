// React
// Firebase
// MUI
import { Add, Close } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
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
  ListerFieldPropsType,
  CheckboxPropsType,
} from "../../globalTypes";
import { labelToName } from "../../utils/conversions";

type FieldSelectorPropsType = {
  fieldData: FieldsPropsTypes;
  value?: ValueType;
  index?: number;
  onChange?: (name: string, value: ValueType) => void;
  onAddOption?: (value: OptionType) => void;
};

const FieldSelector = ({
  fieldData,
  value,
  index,
  onChange,
  onAddOption,
}: FieldSelectorPropsType) => {
  const [localOptions, setLocalOptions] = useState<OptionType[]>([]);
  const [localValue, setLocalValue] = useState<string>("");
  const [inputProps, setInputProps] = useState<
    | { endAdornment: ReactElement }
    | { startAdornment: ReactElement }
    | undefined
  >(undefined);

  useEffect(() => {
    if (fieldData.input === "text") {
      const { preFix, postFix } = fieldData;
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
      else setInputProps(undefined);
    }
  }, [fieldData]);

  switch (fieldData.input) {
    case "text": {
      const { label, span, type, name } = fieldData as TextFieldPropsType;

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(name, event.target.value);
      };

      return (
        <TextField
          label={label}
          sx={{ gridColumn: `span ${span}` }}
          type={type ? (typeof type === "string" ? type : type?.name) : "text"}
          value={value}
          onChange={handleChange}
          InputProps={inputProps}
        />
      );
    }
    case "select": {
      const { name, label, span, options } = fieldData as SelectFieldPropsType;
      return (
        <SelectInput
          name={name}
          label={label}
          span={span}
          options={options}
          onChange={onChange}
          value={value || ""}
        />
      );
    }
    case "toggle": {
      const { name, span, options } = fieldData as ToggleFieldPropsType;
      return (
        <Box
          display="flex"
          justifyContent={
            index ? (index % 2 === 0 ? "flex-start" : "flex-end") : "flex-start"
          }
          sx={{ gridColumn: `span ${span}` }}
        >
          <ToggleButtonGroup
            exclusive
            color="primary"
            value={value}
            onChange={(event, value) => onChange?.(name, value)}
            sx={{ width: "100%" }}
          >
            {options?.map((option, index) => (
              <ToggleButton
                key={index}
                name={name}
                value={option}
                sx={{ minWidth: "70px", maxWidth: "150px", width: "100%" }}
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
      const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        const value = event.target;
        if (key === "Enter") console.log(event);
      };
      return (
        <SelectInputAdvanced
          name={name}
          label={label}
          span={span}
          options={options || []}
          value={(value as OptionType) || null}
          onKeyDown={handleKeyboard}
          onChange={(name, value) => onChange?.(name, value)}
          onAddOption={(value) => onAddOption?.(value)}
        />
      );
    }
    case "lister": {
      const { name, label, span } = fieldData as ListerFieldPropsType;

      const handleSubmit = () => {
        let isNotIncluded = true;
        const newOption = { label: localValue, name: labelToName(localValue) };
        localOptions.forEach(
          (option) => (isNotIncluded &&= option.name !== newOption.name)
        );
        if (isNotIncluded)
          setLocalOptions((prev) => {
            const newOptions = [...prev, newOption];
            onChange?.(name, newOptions);
            setLocalValue("");
            return newOptions;
          });
        else setLocalValue("");
      };

      return (
        <FormControl sx={{ gridColumn: `span ${span}` }}>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <OutlinedInput
            name={name}
            label={label}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSubmit();
            }}
            value={localValue}
            onChange={(event) => setLocalValue(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleSubmit}>
                  <Add />
                </IconButton>
              </InputAdornment>
            }
          />
          <div style={{ paddingTop: "10px" }}>
            {localOptions?.map((option) => (
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() =>
                    setLocalOptions((prev) => {
                      const newOptions = prev.filter(
                        (item) => item.name !== option.name
                      );
                      onChange?.(name, newOptions);
                      return newOptions;
                    })
                  }
                >
                  <Close fontSize="small" />
                </IconButton>
                <Typography>{option.label}</Typography>
              </div>
            ))}
          </div>
        </FormControl>
      );
    }
    case "checkbox": {
      const { name, span, label } = fieldData as CheckboxPropsType;

      return (
        <div
          style={{
            gridColumn: `span ${span}`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox name={name} defaultChecked={fieldData.default} />
            }
            label={label}
          />
        </div>
      );
    }
    default:
      return <></>;
  }
};

export default FieldSelector;
