export type SpanType = 1 | 2 | 3 | 4;
export type InputType =
  | "text"
  | "select"
  | "toggle"
  | "lister"
  | "checkbox"
  | "file";

export type TextFieldTypesType = "text" | "number" | OptionType;
export type ChangeEventCallbackReturnType = { name: string; value: OptionType };
export type ChangeEventCallbackType = () => ChangeEventCallbackReturnType;
export type ValueType =
  | string
  | boolean
  | number
  | OptionType
  | OptionType[]
  | null;

export type GenericObject = { [key: string]: ValueType };
export type FieldsPropsTypes =
  | TextFieldPropsType
  | SelectFieldPropsType
  | ToggleFieldPropsType
  | ListerFieldPropsType
  | CheckboxPropsType;


  export type OptionsChangeCallback = (name: string, value: OptionType[]) => void;
  export type OptionChangeCallback = (name: string, value: OptionType) => void;
  export type TextChangeCallback = (name: string, value: string | number) => void;
  export type BooleanChangeCallback = (name: string, value: boolean) => void;
  export type ChangeCallbackTypes = OptionsChangeCallback | OptionChangeCallback | TextChangeCallback | BooleanChangeCallback

export type InitValuesTypes =
  | "name"
  | "label"
  | "span"
  | "options"
  | "type"
  | "preFix"
  | "postFix";

export type TextFieldPropsType = {
  input: "text";
  name: string;
  label: string;
  span: SpanType;
  type: TextFieldTypesType;
  preFix?: string;
  postFix?: string;
  required?: boolean;
  editable?: boolean;
  draggable?: boolean;
};

export type SelectFieldPropsType = {
  input: "select";
  name: string;
  label: string;
  span: SpanType;
  options: OptionType[];
  required?: boolean;
  editable?: boolean;
  draggable?: boolean;
};

export type AdvancedSelectFieldPropsType = {
  input: "expandableSelect";
  name: string;
  label: string;
  span: SpanType;
  options: OptionType[];
  required?: boolean;
  editable?: boolean;
  draggable?: boolean;
};

export type ListerFieldPropsType = {
  input: "lister";
  name: string;
  label: string;
  span: SpanType;
  required?: boolean;
  editable?: boolean;
  draggable?: boolean;
};

export type ToggleFieldPropsType = {
  input: "toggle";
  name: string;
  span: SpanType;
  options: OptionType[];
  required?: boolean;
  editable?: boolean;
  draggable?: boolean;
};

export type CheckboxPropsType = {
  input: "checkbox";
  name: string;
  label: string;
  span: SpanType;
  default: boolean;
  required?: boolean;
  editable?: boolean;
  draggable?: boolean;
};

export type EmptyField = {
  input: "";
};

export type OptionType = {
  inputValue?: string;
  name: string;
  label: string;
};
