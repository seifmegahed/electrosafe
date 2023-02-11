// React
// Firebase
// MUI
import { TextField } from "@mui/material";
// Components
// Types
import { InputType, SpanType } from "../../globalTypes";

const FieldSelector = ({
  label,
  span,
  input,
}: {
  label: string;
  span: SpanType;
  input: InputType;
}) => {
  switch (input) {
    case "text":
      return <TextField label={label} sx={{ gridColumn: `span ${span}` }} />;
    default:
      return <></>;
  }
};

export default FieldSelector;
