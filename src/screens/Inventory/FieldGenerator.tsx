// React
import { ChangeEvent, useState } from "react";
// Firebase
// MUI
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
// Components
import FormContainer from "../../components/FormContainer";
import SelectInput from "../../components/SelectInput";
import FieldSelector from "./FieldSelector";
// Types
import { InputType, SpanType } from "../../globalTypes";

const inputOptions = [
  { value: "text", label: "Text" },
  { value: "select", label: "Select" },
  { value: "toggle", label: "Toggle" },
  { value: "image", label: "Image" },
];

const fieldDisplayStyle = {
  gridColumn: "span 4",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
};


const FieldGenerator = () => {
  const [fieldData, setFieldData] = useState<{
    name: string;
    label: string;
    span: SpanType;
    input: InputType;
    required: boolean;
    editable: boolean;
  }>({
    name: "",
    span: 2,
    label: "",
    input: "text",
    required: false,
    editable: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFieldData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    setFieldData((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <FormContainer title="Field Generator">
      <div style={fieldDisplayStyle}>
        <FieldSelector
          input={fieldData.input}
          span={fieldData.span}
          label={fieldData.label}
        />
      </div>
      <Divider sx={{ gridColumn: "span 4" }} />
      <SelectInput
        id="input-type"
        span={2}
        label="Input Type"
        value={fieldData.input}
        options={inputOptions}
        setValue={(value) =>
          setFieldData((prev) => ({ ...prev, input: value as InputType }))
        }
      />
      <TextField
        name="name"
        label="Name"
        value={fieldData.name}
        onChange={handleChange}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        name="label"
        label="Label"
        value={fieldData.label}
        onChange={handleChange}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        name="span"
        label="Default Span"
        type="number"
        value={fieldData.span}
        onChange={handleChange}
        sx={{ gridColumn: "span 2" }}
      />
      <div
        style={{
          display: "flex",
          paddingRight: "4px",
          flexDirection: "column",
          alignItems: "flex-end",
          gridColumn: "span 4",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleCheckedChange}
              checked={fieldData.required}
              name="required"
            />
          }
          label="Required"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleCheckedChange}
              checked={fieldData.editable}
              name="editable"
            />
          }
          label="Editable"
          labelPlacement="start"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gridColumn: "span 4",
        }}
      >
        <Button
          variant="contained"
          disabled={true}
          sx={{ maxWidth: "120px", width: "100%" }}
        >
          Add
        </Button>
      </div>
    </FormContainer>
  );
};

export default FieldGenerator;
