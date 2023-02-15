// React
import { useEffect, useState } from "react";
// Firebase
// MUI
import { Button, Divider, Slider } from "@mui/material";

// Components
import FormContainer from "../../components/FormContainer";
import SelectInput from "../../components/SelectInput";
import FieldSelector from "./FieldSelector";

// Types
import {
  TextFieldTypesType,
  InputType,
  SpanType,
  GenericObject,
  InitValuesTypes,
  OptionType,
  ValueType,
  FieldsPropsTypes,
} from "../../globalTypes";

// Util Functions
import { labelToName } from "../../utils/conversions";

// Constants
import {
  FieldGeneratorFormFields,
  formButtonStyle,
  singleButtonFormContainerStyle,
} from "../../globalConstants";
import { Add, Close } from "@mui/icons-material";

const inputOptions = [
  { name: "text", label: "Text" },
  { name: "select", label: "Select" },
  { name: "toggle", label: "Toggle" },
  { name: "lister", label: "List Input" },
  { name: "checkbox", label: "Checkbox" },
  { name: "file", label: "File" },
];

const fieldDisplayStyle = {
  gridColumn: "span 4",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
};

const initValues = {
  name: "",
  label: "",
  type: "text" as TextFieldTypesType,
  span: 2 as SpanType,
  preFix: "",
  postFix: "",
  options: [] as OptionType[],
};

export const FieldGenerator = () => {
  const [inputType, setInputType] = useState<InputType | "">("");
  const [values, setValues] = useState<GenericObject>();
  const [span, setSpan] = useState<SpanType>(2);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>();
  const fields = FieldGeneratorFormFields[inputType as InputType];
  const handleChange = (name: string, value: ValueType) => {
    switch (name) {
      case "preFix":
      case "postFix": {
        setValues((prev) => ({
          ...prev,
          postFix: null,
          preFix: null,
        }));
        if (value !== "") setValues((prev) => ({ ...prev, [name]: value }));
        break;
      }
      case "label": {
        if (
          ((values?.name as string) || "") ===
          labelToName((values?.label as string) || "")
        )
          setValues((prev) => ({
            ...prev,
            label: value,
            name: labelToName((value as string) || ""),
          }));
        else
          setValues((prev) => ({
            ...prev,
            label: value,
          }));
        break;
      }
      default:
        setValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  const resetErrors = () => {
    fields?.forEach((field) =>
      setErrors((prev) => ({ ...prev, [field.name]: true }))
    );
  };
  const checkValidity = () => {
    resetErrors();
  };

  const handleSubmit = () => {
    checkValidity();
  };

  useEffect(() => {
    setValues(undefined);
  }, [inputType]);

  return (
    <FormContainer title="Field Maker">
      <div style={fieldDisplayStyle}>
        <FieldSelector
          fieldData={{ ...values, input: inputType, span } as FieldsPropsTypes}
        />
        {(inputType === "checkbox" || inputType === "toggle") && span !== 4 ? (
          <Divider orientation="vertical" sx={{ justifySelf: "flex-start" }} />
        ) : (
          <></>
        )}
        <Divider sx={{ gridColumn: "span 4" }} />
      </div>
      <Slider
        value={span}
        name="span"
        onChange={(e, value) => setSpan(value as SpanType)}
        step={null}
        min={0}
        max={4}
        marks={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
        sx={{
          gridColumn: "span 4",
          display: `${inputType === "" ? "none" : "block"}`,
        }}
      />
      <SelectInput
        span={4}
        name="input-type"
        label="Input Type"
        value={inputType}
        options={inputOptions}
        setValue={(value) => setInputType(value as InputType)}
      />
      {inputType !== "" ? (
        fields?.map((field, index) => {
          return (
            <FieldSelector
              key={index}
              fieldData={field}
              index={index}
              error={errors?.[field.name]}
              value={
                values?.[field.name] ||
                initValues[field.name as InitValuesTypes]
              }
              onChange={handleChange}
            />
          );
        })
      ) : (
        <></>
      )}
      <div style={singleButtonFormContainerStyle}>
        <Button
          variant="contained"
          sx={formButtonStyle}
          endIcon={<Add />}
          onClick={handleSubmit}
        >
          ADD
        </Button>
      </div>
    </FormContainer>
  );
};

export default FieldGenerator;
