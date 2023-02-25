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
import { COMPONENT_MAX_WIDTH } from "../../globalConstants";

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
      <div style={{ width: "100%", maxWidth: COMPONENT_MAX_WIDTH }}>
        <Typography variant="h3">{`${category.label} Form Editor`}</Typography>
      </div>
      <FormPreview fields={fields} onSubmit={handleSubmit} />
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
