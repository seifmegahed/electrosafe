// React
import { useState } from "react";
import { useLocation } from "react-router-dom";
// Firebase
// MUI
// Components
import FormTester from "../../components/Forms/FormTester";
import FieldGenerator2 from "../../components/Generators/FieldGenerator/FieldGenerator2";
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

const FormEditor = ({ name }: { name: string }) => {
  const [fields, setFields] = useState<FieldsPropsTypes[]>(templateFields);

  return (
    <>
      <FormFieldsSorter
        fields={fields}
        onSort={(values) => setFields(values)}
      />
      <FormTester label={name} fields={fields} />
      <FieldGenerator2
        onSubmit={(values) => setFields((prev) => [...prev, values])}
      />
    </>
  );
};

export default FormEditor;
