// React
import { useEffect, useState } from "react";
// Firebase
// MUI
import { Button, Divider } from "@mui/material";

// Components
import FormContainer from "../Containers/FormContainer";
import SelectInput from "../InputFields/SelectInput";
import FieldSelector from "../InputFields/FieldSelector";

// Types
import {
  InputType,
  SpanType,
  GenericObject,
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
import { Add } from "@mui/icons-material";
import AutoForm from "../Forms/AutoForm";
import SpanSlider from "../InputFields/SpanSlider";

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

export const FieldGenerator = () => {
  const [inputType, setInputType] = useState<InputType>();
  const [values, setValues] = useState<GenericObject>({});
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
    setValues({});
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
      <SpanSlider
        value={span}
        onChange={(value) => setSpan(value)}
        display={!!inputType}
      />
      <SelectInput
        span={4}
        name="input-type"
        label="Input Type"
        value={inputType || ""}
        options={inputOptions}
        setValue={(value) => setInputType(value as InputType)}
      />
      {!!inputType && (
        <AutoForm fields={fields} values={values} onChange={handleChange} />
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
