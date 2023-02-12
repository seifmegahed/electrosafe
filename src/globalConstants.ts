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
      input: "toggle",
      options: [
        { value: "text", label: "Text" },
        { value: "number", label: "Number" },
      ],
      span: 2,
    },
    { name: "name", label: "Name", input: "text", required: true, span: 2 },
    { name: "label", label: "Label", input: "text", required: true, span: 2 },
    {
      name: "preFix",
      label: "Pre Fix",
      input: "text",
      required: true,
      span: 2,
    },
    {
      name: "postFix",
      label: "Post Fix",
      input: "text",
      required: true,
      span: 2,
    },
  ],
  select: [
    { name: "name", label: "Name", input: "text", required: true, span: 2 },
    { name: "label", label: "Label", input: "text", required: true, span: 2 },
    {
      name: "options",
      label: "Options",
      input: "select",
      required: true,
      span: 4,
    },
  ],
  toggle: [
    { name: "name", label: "Name", input: "text", required: true, span: 2 },
    {
      name: "options",
      label: "Options",
      input: "select",
      required: true,
      span: 2,
    },
  ],
  file: [
    { name: "name", label: "Name", input: "text", required: true, span: 2 },
    {
      name: "type",
      label: "Type",
      input: "toggle",
      options: [
        { value: "image", label: "Image" },
        { value: "document", label: "Document" },
      ],
      required: true,
      span: 2,
    },
  ],
};
