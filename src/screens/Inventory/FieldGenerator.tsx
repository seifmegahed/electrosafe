// React
import { ChangeEvent, ReactElement, useState } from "react";
// Firebase
// MUI
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
// Components
import FormContainer from "../../components/FormContainer";
import SelectInput from "../../components/SelectInput";
import FieldSelector from "./FieldSelector";
// Types
import { InputType, SpanType, TextFieldPropsType } from "../../globalTypes";
import { FieldGeneratorFormFields } from "../../globalConstants";
import { Add } from "@mui/icons-material";

const inputOptions = [
  { value: "text", label: "Text" },
  { value: "select", label: "Select" },
  { value: "toggle", label: "Toggle" },
  { value: "file", label: "File" },
];

const fieldDisplayStyle = {
  gridColumn: "span 4",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
};

const FieldGenerator = () => {
  const [fieldData, setFieldData] = useState<TextFieldPropsType>({
    // | ToggleFieldPropsType
    // | SelectFieldPropsType
    // | EmptyField
    name: "",
    span: 2,
    label: "",
    input: "text",
    type: "text",
    preFix: false,
    postFix: false,
    required: false,
    editable: false,
  });
  const labelToName = (value: string) => value.toLowerCase().replace(/ /g, "-");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    if (
      name === "label" &&
      labelToName((fieldData as TextFieldPropsType).label) ===
        (fieldData as TextFieldPropsType).name
    )
      setFieldData((prev) => ({
        ...prev,
        label: value,
        name: labelToName(value),
      }));
    else setFieldData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    setFieldData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAdornmentChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setFieldData((prev) => ({ ...prev, preFix: false, postFix: false }));
    if (value !== "")
      setFieldData((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  return (
    <FormContainer title="Field Generator">
      <div style={fieldDisplayStyle}>
        <FieldSelector
          fieldData={fieldData}
        />
      </div>
      <Divider sx={{ gridColumn: "span 4" }} />
      {/* {fieldData.input !== "image" && fieldData.input !== "" ? ( */}
      <Slider
        defaultValue={2}
        value={fieldData.span}
        name="span"
        onChange={(e, value) =>
          setFieldData((prev) => ({ ...prev, span: value as SpanType }))
        }
        step={null}
        min={0}
        max={4}
        marks={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
        sx={{ gridColumn: "span 4" }}
      />
      {/*}   ) : (
        <></>
      )} */}
      <SelectInput
        id="input-type"
        span={2}
        label="Input Type"
        value={fieldData.input}
        options={inputOptions}
        setValue={
          (value) => console.log(value)
          // setFieldData((prev) => ({ ...prev, input: value as InputType }))
        }
      />
      <Box
        display="flex"
        justifyContent={"flex-end"}
        sx={{ gridColumn: `span 2` }}
      >
        <ToggleButtonGroup
          exclusive
          color="primary"
          value={fieldData.type}
          onChange={(event, value) =>
            setFieldData((prev) => ({ ...prev, type: value }))
          }
          sx={{ width: "100%", maxWidth: 200 }}
        >
          {[
            { label: "Text", value: "text" },
            { label: "Number", value: "number" },
          ].map((option) => (
            <ToggleButton
              key={option.label}
              name="type"
              value={option.value}
              sx={{ minWidth: "70px", maxWidth: "100px", width: "100%" }}
            >
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
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
        name="preFix"
        label="Pre Fix"
        type="text"
        value={fieldData.preFix || ""}
        onChange={handleAdornmentChange}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        name="postFix"
        label="Post Fix"
        type="text"
        value={fieldData.postFix || ""}
        onChange={handleAdornmentChange}
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

export const FieldGenerator2 = () => {
  const [inputType, setInputType] = useState<InputType | "">("");
  return (
    <FormContainer title="Field Creator">
      <SelectInput
        id="input-type"
        span={2}
        label="Input Type"
        value={inputType}
        options={inputOptions}
        setValue={(value) => setInputType(value as InputType)}
      />
      {inputType !== "" ? (
        FieldGeneratorFormFields[inputType as InputType].map((field, index) => {
          return <FieldSelector key={index} fieldData={field} />;
        })
      ) : (
        <></>
      )}
    </FormContainer>
  );
};

export default FieldGenerator;
