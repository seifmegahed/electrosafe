// MUI
import { Box, Checkbox, FormControlLabel } from "@mui/material";

// Types
import { CheckboxPropsType } from "../../../globalTypes";

type CheckboxInputPropsType = {
  fieldData: CheckboxPropsType;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
};

const CheckboxInput = ({
  fieldData,
  value,
  onChange,
}: CheckboxInputPropsType) => {
  const { name, span, label } = fieldData;
  const handleChange = onChange;
  return (
    <Box sx={{ gridColumn: `span ${span}` }}>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            onChange={(event, checked) => handleChange(name, checked)}
            name={name}
            checked={(value as boolean) || false}
          />
        }
      />
    </Box>
  );
};

export default CheckboxInput;
