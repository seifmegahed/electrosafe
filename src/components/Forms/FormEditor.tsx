// React
import { useState } from "react";

// MUI
import { Typography } from "@mui/material";

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
  },
  {
    name: "mpn",
    label: "Part Number",
    input: "text",
    type: "text",
    span: 2,
    required: true,
    editable: false,
  },
  {
    name: "make",
    label: "Make",
    input: "text",
    type: "text",
    span: 2,
    required: true,
    editable: false,
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
      <Typography variant="h3">{`${category.label} Form Editor`}</Typography>
      <FormPreview fields={fields} onSubmit={handleSubmit} />
      <FormFieldsSorter
        fields={fields}
        onSort={(values) => setFields(values)}
      />
      <FieldGenerator
        fields={fields}
        onSubmit={(values) => {
          setFields((prev) => [...prev, values]);
        }}
      />
    </>
  );
};

export default FormEditor;
