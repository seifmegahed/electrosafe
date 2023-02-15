// MUI
import { Checkbox, FormControlLabel } from "@mui/material";

// Components
import Lister from "../../components/InputFields/ListerInput";
import SelectInput from "../../components/InputFields/SelectInput";
import TextInput from "../../components/InputFields/TextInput";
import ToggleInput from "../../components/InputFields/ToggleInput";

// Types
import {
  CheckboxPropsType,
  FieldsPropsTypes,
  ListerFieldPropsType,
  OptionChangeCallback,
  OptionsChangeCallback,
  OptionType,
  SelectFieldPropsType,
  TextChangeCallback,
  TextFieldPropsType,
  ToggleFieldPropsType,
  ValueType,
} from "../../globalTypes";

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
    case "select": {
      // TODO Make Clean Component
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
    case "checkbox": {
      // TODO Make Clean Component
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
