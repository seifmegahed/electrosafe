// React
// Firebase
// MUI
// Components

import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckboxPropsType } from "../../../globalTypes";

// Types
type CheckboxInputPropsType = {
  fieldData: CheckboxPropsType;
  value: boolean;
  error?: boolean;
  onChange: (name: string, value: boolean) => void;
};

const CheckboxInput = ({
  fieldData,
  value,
  error,
  onChange,
}: CheckboxInputPropsType) => {
  const { name, span, label } = fieldData;
  const handleChange = onChange;
  return (
    <div
      style={{
        gridColumn: `span ${span}`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            onChange={(event) => handleChange(name, event.target.checked)}
            name={name}
            checked={value ?? fieldData.default ?? false}
            defaultChecked={fieldData.default}
          />
        }
      />
    </div>
  );
};

export default CheckboxInput;
