// React
import { useState } from "react";

// Components
import FieldGenerator from "../Generators/FieldGenerator";
import FormFieldsSorter from "./FormFieldsSorter";
import FormPreview from "./FormPreview";

// Types
import { FieldsPropsTypes, OptionType } from "../../globalTypes";

const templateFields: FieldsPropsTypes[] = [
  {
    name: "name",
    label: "Name",
    input: "text",
    type: "text",
    span: 2,
    required: true,
    editable: false,
    permanent: true,
  },
  {
    name: "mpn",
    label: "Part Number",
    input: "text",
    type: "text",
    span: 2,
    required: true,
    editable: false,
    permanent: true,
  },
  {
    name: "make",
    label: "Make",
    input: "text",
    type: "text",
    span: 2,
    required: true,
    editable: false,
    permanent: true,
  },
  {
    name: "quantity",
    label: "Opening Quantity",
    input: "text",
    type: "number",
    span: 2,
    required: false,
    editable: false,
    permanent: true,
  },
  {
    name: "description",
    label: "Description",
    input: "text",
    type: "text",
    span: 4,
    required: false,
    editable: true,
    permanent: true,
  },
  {
    name: "notes",
    label: "Notes",
    input: "text",
    type: "text",
    span: 4,
    required: false,
    editable: true,
    permanent: true,
  },
];

type FormEditorProps = {
  category: OptionType;
  onSubmit: (fields: FieldsPropsTypes[]) => void;
};

const FormEditor = ({ category, onSubmit }: FormEditorProps) => {
  const [fields, setFields] = useState<FieldsPropsTypes[]>(templateFields);
  const handleSubmit = () => onSubmit(fields);

  return (
    <>
      <FormPreview
        label={category.label}
        fields={fields}
        onSubmit={handleSubmit}
      />
      <FormFieldsSorter
        fields={fields}
        onChange={(values) => setFields(values)}
      />
      <FieldGenerator
        fields={fields}
        onSubmit={(values) => setFields((prev) => [...prev, values])}
      />
    </>
  );
};

export default FormEditor;
