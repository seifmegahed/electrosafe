// React
// Firebase
// MUI
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
// Components
import SelectInput from "../../components/SelectInput";
import SelectInputAdvanced from "../../components/SelectInputAdvanced";
import Lister from "../../components/InputFields/ListerInput";

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
import ToggleInput from "../../components/InputFields/ToggleInput";
import TextInput from "../../components/InputFields/TextInput";

type OptionsChangeCallback = (name: string, value: OptionType[]) => void;
type OptionChangeCallback = (name: string, value: OptionType) => void;
type TextChangeCallback = (name: string, value: string | number) => void;

type FieldSelectorPropsType = {
  fieldData: FieldsPropsTypes;
  value?: ValueType;
  index?: number;
  error?: boolean;
  onChange?: (name: string, value: ValueType) => void;
  onAddOption?: (value: OptionType) => void;
};

const FieldSelector = ({
  fieldData,
  value,
  index,
  error,
  onChange,
  onAddOption,
}: FieldSelectorPropsType) => {
  const handleChange = onChange;
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
    case "text":
      return (
        <TextInput
          value={value as string | number}
          error={error}
          fieldData={fieldData as TextFieldPropsType}
          onChange={handleChange as TextChangeCallback}
        />
      );
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
      return (
        <ToggleInput
          index={index}
          fieldData={fieldData as ToggleFieldPropsType}
          value={value as OptionType}
          onChange={handleChange as OptionChangeCallback}
        />
      );
    }
    case "lister":
      return (
        <Lister
          fieldData={fieldData as ListerFieldPropsType}
          value={value as OptionType[]}
          onChange={handleChange as OptionsChangeCallback}
          error={error ?? false}
        />
      );
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
