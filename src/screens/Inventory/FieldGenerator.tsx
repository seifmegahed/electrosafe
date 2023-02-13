// React
import { useEffect, useState } from "react";
// Firebase
// MUI
import { Divider, Slider } from "@mui/material";

// Components
import FormContainer from "../../components/FormContainer";
import SelectInput from "../../components/SelectInput";
import FieldSelector from "./FieldSelector";
import SelectInputAdvanced from "../../components/SelectInputAdvanced";

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
import { FieldGeneratorFormFields } from "../../globalConstants";

const inputOptions = [
  { name: "text", label: "Text" },
  { name: "select", label: "Select" },
  { name: "expandableSelect", label: "Expandable Select" },
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
  options: [] as OptionType[],
};

export const FieldGenerator = () => {
  const [inputType, setInputType] = useState<InputType | "">("");
  const [values, setValues] = useState<GenericObject>();
  const [span, setSpan] = useState<SpanType>(2);

  const handleChange = (name: string, value: ValueType) => {
    switch (name) {
      case "preFix":
      case "postFix": {
        setValues((prev) => ({ ...prev, postFix: false, preFix: false }));
        if (value !== "") setValues((prev) => ({ ...prev, [name]: value }));
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
      }
      case "options":
        break;
      default:
        setValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  const addOption = (value: OptionType) => {
    setValues((prev) => {
      if (prev?.options)
        return {
          ...prev,
          options: [...(prev.options as OptionType[]), value],
        };
      return { ...prev, options: [value] };
    });
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
                values?.[field.name] ||
                initValues[field.name as InitValuesTypes]
              }
              onChange={handleChange}
              onAddOption={addOption}
            />
          );
        })
      ) : (
        <></>
      )}
    </FormContainer>
  );
};

export default FieldGenerator;
