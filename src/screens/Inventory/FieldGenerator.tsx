// React
import { useEffect, useState } from "react";
// Firebase
// MUI
import { Divider, Slider } from "@mui/material";
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
  TextFieldPropsType,
  SelectFieldPropsType,
  ToggleFieldPropsType,
  OptionType,
} from "../../globalTypes";
import { FieldGeneratorFormFields } from "../../globalConstants";
import SelectInputAdvanced from "../../components/SelectInputAdvanced";
import { labelToName } from "../../utils/conversions";

const inputOptions = [
  { name: "text", label: "Text" },
  { name: "select", label: "Select" },
  { name: "toggle", label: "Toggle" },
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
  options: "",
};

export const FieldGenerator = () => {
  const [inputType, setInputType] = useState<InputType | "">("");
  const [values, setValues] = useState<GenericObject | false>(false);
  const [span, setSpan] = useState<SpanType>(2);

  const [testValue, setTestValue] = useState<OptionType | null>(null);
  const [testOptions, setTestOptions] = useState<OptionType[]>([]);

  const handleChange = (name: string, value: string | number | boolean) => {
    switch (name) {
      case "preFix":
      case "postFix": {
        setValues((prev) => ({ ...prev, postFix: false, preFix: false }));
        if (value !== "") setValues((prev) => ({ ...prev, [name]: value }));
      }
      case "label": {
        if (
          (((values as GenericObject)?.name as string) || "") ===
          labelToName(((values as GenericObject)?.label as string) || "")
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
      }
      default:
        setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    setValues(false);
  }, [inputType]);

  return (
    <FormContainer title="Field Maker">
      <div style={fieldDisplayStyle}>
        <FieldSelector
          fieldData={
            { ...values, input: inputType, span } as
              | TextFieldPropsType
              | SelectFieldPropsType
              | ToggleFieldPropsType
          }
        />
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
        id="input-type"
        span={2}
        label="Input Type"
        value={inputType}
        options={inputOptions}
        setValue={(value) => setInputType(value as InputType)}
      />
      {inputType !== "" ? (
        FieldGeneratorFormFields[inputType as InputType].map((field, index) => {
          return (
            <FieldSelector
              key={index}
              fieldData={field}
              value={
                (values as GenericObject)[field.name] ||
                initValues[field.name as InitValuesTypes]
              }
              onChange={handleChange}
            />
          );
        })
      ) : (
        <></>
      )}
      <SelectInputAdvanced
        name="test"
        label="Test"
        span={2}
        value={testValue}
        options={testOptions}
        onChange={(value) => setTestValue(value)}
        onAddOption={(value) => setTestOptions((prev) => [...prev, value])}
      />
    </FormContainer>
  );
};

export default FieldGenerator;
