// MUI
import { Checkbox, colors, FormControlLabel } from "@mui/material";

// Types
import { CheckboxPropsType } from "../../../globalTypes";
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
    <FormControlLabel
      sx={{
        gridColumn: `span ${span}`,
        colors: `${error ? "error" : "primary"}`,
      }}
      label={label}
      control={
        <Checkbox
          onChange={(event, checked) => handleChange(name, checked)}
          name={name}
          checked={(value as boolean) || false}
        />
      }
    />
  );
};

export default CheckboxInput;
