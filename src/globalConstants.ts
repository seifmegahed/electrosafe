import {
  CheckboxPropsType,
  ListerFieldPropsType,
  TextFieldPropsType,
  ToggleFieldPropsType,
} from "./globalTypes";

export const componentMaxWidth = "700px";
export const componentBoxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
export const formButtonStyle = { maxWidth: "120px", width: "100%" };

export const singleButtonFormContainerStyle = {
  gridColumn: "span 4",
  display: "flex",
  justifyContent: "flex-end",
};

export const nameField: TextFieldPropsType = {
  input: "text",
  name: "name",
  label: "Name",
  span: 2,
  type: "text",
  required: true,
};

export const labelField: TextFieldPropsType = {
  name: "label",
  label: "Label",
  input: "text",
  type: "text",
  required: true,
  span: 2,
};

export const optionsField: ListerFieldPropsType = {
  name: "options",
  label: "Options",
  input: "lister",
  required: true,
  span: 4,
};

export const requiredField: CheckboxPropsType = {
  name: "required",
  input: "checkbox",
  label: "Required",
  span: 1,
};

export const editableField: CheckboxPropsType = {
  name: "editable",
  input: "checkbox",
  label: "Editable",
  span: 1,
};

export const FieldGeneratorFormFields = {
  text: [
    labelField,
    nameField,
    {
      name: "type",
      input: "toggle",
      options: [
        { name: "text", label: "Text" },
        { name: "number", label: "Number" },
      ],
      span: 2,
    } as ToggleFieldPropsType,
    requiredField,
    editableField,
    {
      name: "preFix",
      label: "Pre Fix",
      input: "text",
      type: "text",
      required: true,
      span: 2,
    } as TextFieldPropsType,
    {
      name: "postFix",
      label: "Post Fix",
      input: "text",
      type: "text",
      required: true,
      span: 2,
    } as TextFieldPropsType,
  ],
  select: [labelField, nameField, requiredField, editableField, optionsField],
  toggle: [nameField, requiredField, editableField, optionsField],
  file: [
    nameField,
    {
      name: "type",
      label: "Type",
      input: "toggle",
      options: [
        { name: "image", label: "Image" },
        { name: "document", label: "Document" },
      ],
      required: true,
      span: 2,
    } as ToggleFieldPropsType,
    requiredField,
    editableField,
  ],
  lister: [nameField, labelField, requiredField, editableField],
  checkbox: [nameField, labelField, requiredField, editableField],
};
