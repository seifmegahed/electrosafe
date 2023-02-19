// MUI
import {
  FormControl,
  FormHelperText,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

// Types
import { OptionType, ToggleFieldPropsType } from "../../../globalTypes";

type ToggleInputPropsType = {
  fieldData: ToggleFieldPropsType;
  value: OptionType;
  index?: number;
  error?: boolean | undefined;
  onChange: (name: string, value: OptionType) => void;
};

const ToggleInput = ({
  index,
  value,
  error,
  fieldData,
  onChange,
}: ToggleInputPropsType) => {
  const { name, span, options } = fieldData as ToggleFieldPropsType;
  const handleChange = onChange;
  return (
    <FormControl sx={{ gridColumn: `span ${span}` }} error={error}>
      <div
        style={{
          display: "flex",
          justifyContent: `${index ?? 0 % 2 === 0 ? "flex-start" : "flex-end"}`,
          gridColumn: `span ${span}`,
        }}
      >
        <ToggleButtonGroup
          exclusive
          color="primary"
          value={value}
          onChange={(event, newValue) => handleChange(name, newValue)}
          sx={{ width: "100%" }}
        >
          {options?.map((option) => (
            <ToggleButton
              key={option.name}
              name={name}
              value={option}
              sx={{ minWidth: "70px", maxWidth: "150px", width: "100%" }}
            >
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      {error && <FormHelperText color="error">Required</FormHelperText>}
    </FormControl>
  );
};

export default ToggleInput;
