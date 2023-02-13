import { SpanType, TextFieldTypesType } from "./globalTypes";

export const componentMaxWidth = "700px";
export const formButtonStyle = { maxWidth: "120px", width: "100%" };
export const singleButtonFormContainerStyle = {
  gridColumn: "span 4",
  display: "flex",
  justifyContent: "flex-end",
};

export const FieldGeneratorFormFields = {
  text: [
    {
      name: "type",
      input: "toggle" as "toggle",
      options: [
        { name: "text", label: "Text" },
        { name: "number", label: "Number" },
      ],
      span: 2 as SpanType,
    },
    {
      name: "name",
      label: "Name",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
    {
      name: "label",
      label: "Label",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
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
  select: [
    {
      name: "name",
      label: "Name",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
    {
      name: "label",
      label: "Label",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
    {
      name: "options",
      label: "Options",
      input: "select" as "select",
      required: true,
      span: 4 as SpanType,
    },
  ],
  toggle: [
    {
      input: "text" as "text",
      name: "name",
      label: "Name",
      span: 2 as SpanType,
      type: "text" as TextFieldTypesType,
      required: true,
    },
    {
      input: "select" as "select",
      name: "options",
      label: "Options",
      span: 2 as SpanType,
      options: [],
      required: true,
    },
  ],
  file: [
    {
      name: "name",
      label: "Name",
      input: "text" as "text",
      type: "text" as TextFieldTypesType,
      required: true,
      span: 2 as SpanType,
    },
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
  ],
};
