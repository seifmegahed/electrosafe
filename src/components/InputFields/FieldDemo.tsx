// React
import { useEffect, useState } from "react";
// Firebase
// MUI
import { Divider } from "@mui/material";

// Components
import FieldSelector from "./FieldSelector";

// Types
import {
  InputType,
  ValueType,
  FieldsPropsTypes,
  OptionType,
} from "../../globalTypes";

const fieldDisplayStyle = {
  gridColumn: "span 4",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
};

const initValues = {
  text: "",
  select: null,
  toggle: null,
  lister: [] as OptionType[],
  checkbox: false,
};

const FieldDemo = ({
  fieldData,
}: {
  fieldData: FieldsPropsTypes;
  input?: InputType;
}) => {
  const [value, setValue] = useState<ValueType>();

  useEffect(() => {
    setValue(initValues[fieldData.input]);
  }, [fieldData.input]);

  return (
    <div style={fieldDisplayStyle}>
      <FieldSelector
        fieldData={fieldData}
        value={value}
        onChange={(name: string, newValue: ValueType) => {
          setValue(newValue);
        }}
      />
      {fieldData.span !== 4 && (
        <Divider orientation="vertical" sx={{ justifySelf: "flex-start" }} />
      )}
      <Divider sx={{ gridColumn: "span 4" }} />
    </div>
  );
};

export default FieldDemo;
