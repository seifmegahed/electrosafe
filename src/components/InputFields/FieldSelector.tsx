// MUI
import AutoSelectInput from "./AutoSelectInput";
import CheckboxInput from "./CheckboxInput";

// Components
import Lister from "./ListerInput";
import TextInput from "./TextInput";
import ToggleInput from "./ToggleInput";

// Types
import {
  BooleanChangeCallback,
  ChangeCallbackTypes,
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
  index?: number;
  value?: ValueType;
  error?: boolean;
  fieldData: FieldsPropsTypes;
  onChange?: ChangeCallbackTypes;
};

const FieldSelector = ({
  index,
  value,
  error,
  fieldData,
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
          value={value as OptionType}
          error={error}
          fieldData={fieldData as ToggleFieldPropsType}
          onChange={handleChange as OptionChangeCallback}
        />
      );
    }
    case "lister":
      return (
        <Lister
          value={value as OptionType[]}
          error={error}
          fieldData={fieldData as ListerFieldPropsType}
          onChange={handleChange as OptionsChangeCallback}
        />
      );
    case "select": {
      return (
        <AutoSelectInput
          value={value as OptionType}
          error={error}
          fieldData={fieldData as SelectFieldPropsType}
          onChange={handleChange as OptionChangeCallback}
        />
      );
    }
    case "checkbox": {
      return (
        <CheckboxInput
          value={value as boolean}
          fieldData={fieldData as CheckboxPropsType}
          onChange={handleChange as BooleanChangeCallback}
        />
      );
    }
    default:
      return null;
  }
};

export default FieldSelector;
