// React
import { useState } from "react";
// Firebase
// MUI
import { Typography } from "@mui/material";
// Components
import FieldGenerator from "../Generators/FieldGenerator";
import FormFieldsSorter from "./FormFieldsSorter";
import FormPreview from "./FormPreview";
// Types
import { FieldsPropsTypes, OptionType } from "../../globalTypes";
// Constants
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
const nameCheckGuard = (value: FieldsPropsTypes, array: FieldsPropsTypes[]) => {
  const exists = array.filter((item) => item.name === value.name);
  console.log(exists.length);
  return !exists.length;
};
const FormEditor = ({ category }: { category: OptionType }) => {
  const [fields, setFields] = useState<FieldsPropsTypes[]>(templateFields);

  return (
    <>
      <Typography variant="h3">{`${category.label} Form Editor`}</Typography>
      <FormPreview fields={fields} category={category} />
      <FormFieldsSorter
        fields={fields}
        onSort={(values) => setFields(values)}
      />
      <FieldGenerator
        onSubmit={(values) => {
          setFields((prev) => {
            if (nameCheckGuard(values, prev)) return [...prev, values];
            return prev;
          });
        }}
      />
    </>
  );
};

export default FormEditor;
