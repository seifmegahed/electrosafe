import { OptionType, SpanType, TextFieldTypesType } from "./globalTypes";

export const componentMaxWidth = "700px";
export const componentBoxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
export const formButtonStyle = { maxWidth: "120px", width: "100%" };

export const singleButtonFormContainerStyle = {
  gridColumn: "span 4",
  display: "flex",
  justifyContent: "flex-end",
};

export const nameField = {
  input: "text" as "text",
  name: "name",
  label: "Name",
  span: 2 as SpanType,
  type: "text" as TextFieldTypesType,
  required: true,
};

export const labelField = {
  name: "label",
  label: "Label",
  input: "text" as "text",
  type: "text" as TextFieldTypesType,
  required: true,
  span: 2 as SpanType,
};

export const optionsField = {
  name: "options",
  label: "Options",
  input: "lister" as "lister",
  required: true,
  span: 4 as SpanType,
};

export const requiredField = {
  name: "required",
  input: "checkbox" as "checkbox",
  label: "Required",
  span: 1 as SpanType,
};

export const editableField = {
  name: "editable",
  input: "checkbox" as "checkbox",
  label: "Editable",
  span: 1 as SpanType,
};

export const FieldGeneratorFormFields = {
  text: [
    labelField,
    nameField,
    {
      name: "type",
      input: "toggle" as "toggle",
      options: [
        { name: "text", label: "Text" },
        { name: "number", label: "Number" },
      ],
      span: 2 as SpanType,
    },
    requiredField,
    editableField,
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
  select: [labelField, nameField, requiredField, editableField, optionsField],
  toggle: [nameField, requiredField, editableField, optionsField],
  file: [
    nameField,
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
    requiredField,
    editableField,
  ],
  lister: [nameField, labelField, requiredField, editableField],
  checkbox: [nameField, labelField, requiredField, editableField],
};
