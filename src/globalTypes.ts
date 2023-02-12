export type SpanType = 1 | 2 | 3 | 4;
export type InputType = "text" | "select" | "toggle" | "file";
export type OptionType = { label: string; value: string };
export type TextFieldTypesType = "text" | "number";
export type ChangeEventCallbackReturnType = { name: string; value: OptionType };
export type ChangeEventCallbackType = () => ChangeEventCallbackReturnType;
export type GenericObject = { [key: string]: string | number | boolean };

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
  preFix?: string | false;
  postFix?: string | false;
  required?: boolean;
  editable?: boolean;
  draggable?: boolean | undefined;
};

export type SelectFieldPropsType = {
  input: "select";
  name: string;
  label: string;
  span: SpanType;
  options?: OptionType[];
  required?: boolean;
  editable?: boolean;
  draggable?: boolean | undefined;
};

export type ToggleFieldPropsType = {
  input: "toggle";
  name: string;
  span: SpanType;
  options: OptionType[];
  required?: boolean;
  editable?: boolean;
  draggable?: boolean | undefined;
};

export type EmptyField = {
  input: "";
};
