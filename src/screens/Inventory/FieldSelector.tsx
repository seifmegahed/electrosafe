// MUI
import AutoSelectInput from "../../components/InputFields/AutoSelectInput";
import CheckboxInput from "../../components/InputFields/CheckboxInput";

// Components
import Lister from "../../components/InputFields/ListerInput";
import TextInput from "../../components/InputFields/TextInput";
import ToggleInput from "../../components/InputFields/ToggleInput";

// Types
import {
  BooleanChangeCallback,
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
  onChange?: (name: string, value: ValueType) => void;
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
          error={error}
          fieldData={fieldData as CheckboxPropsType}
          onChange={handleChange as BooleanChangeCallback}
        />
      );
    }
  }
};

export default FieldSelector;
