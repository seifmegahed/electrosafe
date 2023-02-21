// React
import { useState } from "react";
// Firebase
// MUI
// Components
import FormTester from "./FormTester";
import FieldGenerator from "../Generators/FieldGenerator";
import { FieldsPropsTypes } from "../../globalTypes";
import FormFieldsSorter from "./FormFieldsSorter";
// Types
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
const FormEditor = ({ name }: { name: string }) => {
  const [fields, setFields] = useState<FieldsPropsTypes[]>(templateFields);

  return (
    <>
      <FormFieldsSorter
        fields={fields}
        onSort={(values) => setFields(values)}
      />
      <FormTester label={name} fields={fields} />
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
