import { OptionType, SpanType, TextFieldTypesType } from "./globalTypes";

export const componentMaxWidth = "700px";
export const formButtonStyle = { maxWidth: "120px", width: "100%" };
export const singleButtonFormContainerStyle = {
  gridColumn: "span 4",
  display: "flex",
  justifyContent: "flex-end",
};

const name = {
  input: "text" as "text",
  name: "name",
  label: "Name",
  span: 2 as SpanType,
  type: "text" as TextFieldTypesType,
  required: true,
};

const label = {
  name: "label",
  label: "Label",
  input: "text" as "text",
  type: "text" as TextFieldTypesType,
  required: true,
  span: 2 as SpanType,
};

const options = {
  name: "options",
  label: "Options",
  input: "lister" as "lister",
  required: true,
  span: 4 as SpanType,
};

const required = {
  name: "required",
  input: "checkbox" as "checkbox",
  label: "Required",
  default: false,
  span: 1 as SpanType,
};

const editable = {
  name: "editable",
  input: "checkbox" as "checkbox",
  label: "Editable",
  default: false,
  span: 1 as SpanType,
};

export const FieldGeneratorFormFields = {
  text: [
    label,
    name,
    {
      name: "type",
      input: "toggle" as "toggle",
      options: [
        { name: "text", label: "Text" },
        { name: "number", label: "Number" },
      ],
      span: 2 as SpanType,
    },
    required,
    editable,
    {
      name: "preFix",
      label: "Pre Fix",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
    {
      name: "postFix",
      label: "Post Fix",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
  ],
  select: [label, name, required, editable, options],
  expandableSelect: [label, name, required, editable, options],
  toggle: [name, required, editable, options],
  file: [
    name,
    {
      name: "type",
      label: "Type",
      input: "toggle" as "toggle",
      options: [
        { name: "image", label: "Image" },
        { name: "document", label: "Document" },
      ],
      required: true,
      span: 2 as SpanType,
    },
    required,
    editable,
  ],
  lister: [name, label, required, editable],
  checkbox: [
    name,
    label,
    required,
    editable,
    {
      name: "default",
      input: "checkbox" as "checkbox",
      label: "Default Value",
      default: false,
      span: 2 as SpanType,
    },
  ],
};
