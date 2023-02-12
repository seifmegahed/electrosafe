export type SpanType = 1 | 2 | 3 | 4;
export type InputType = "text" | "select" | "toggle" | "file";
export type OptionType = { label: string; value: string };
export type TextFieldTypesType = "text" | "number"
export type ChangeEventCallbackReturnType = { name: string; value: OptionType }
export type ChangeEventCallbackType = () => ChangeEventCallbackReturnType

export type TextFieldPropsType = {
  input: "text";
  name: string;
  label: string;
  span: SpanType;
  type: TextFieldTypesType;
  preFix: string | false;
  postFix: string | false;
  required: boolean;
  editable: boolean;
  value?: OptionType;
  handleChange?: ChangeEventCallbackType;
};

export type SelectFieldPropsType = {
  input: "select";
  name: string;
  label: string;
  span: SpanType;
  options: OptionType[];
  required: boolean;
  editable: boolean;
  value?: OptionType;
  handleChange?: ChangeEventCallbackType;
};

export type ToggleFieldPropsType = {
  input: "toggle";
  name: string;
  label: string;
  span: SpanType;
  options: OptionType[];
  required: boolean;
  editable: boolean;
  value?: OptionType;
  handleChange?: ChangeEventCallbackType;
};

export type EmptyField = {
  input: "";
}

