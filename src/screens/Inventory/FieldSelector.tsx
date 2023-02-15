// React
// Firebase
// MUI
import { Checkbox, FormControlLabel } from "@mui/material";
// Components
import SelectInput from "../../components/SelectInput";
import Lister from "../../components/InputFields/ListerInput";

// Types
import {
  FieldsPropsTypes,
  ValueType,
  SelectFieldPropsType,
  TextFieldPropsType,
  ToggleFieldPropsType,
  OptionType,
  ListerFieldPropsType,
  CheckboxPropsType,
  OptionsChangeCallback,
  OptionChangeCallback,
  TextChangeCallback,
} from "../../globalTypes";

import ToggleInput from "../../components/InputFields/ToggleInput";
import TextInput from "../../components/InputFields/TextInput";

type FieldSelectorPropsType = {
  fieldData: FieldsPropsTypes;
  value?: ValueType;
  index?: number;
  error?: boolean;
  onChange?: (name: string, value: ValueType) => void;
};

const FieldSelector = ({
  fieldData,
  value,
  index,
  error,
  onChange,
}: FieldSelectorPropsType) => {
  const handleChange = onChange;
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
