// MUI
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

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
  fieldData,
  value,
  index,
  onChange,
}: ToggleInputPropsType) => {
  const { name, span, options } = fieldData as ToggleFieldPropsType;
  const handleChange = onChange;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: `${
          index ? (index % 2 === 0 ? "flex-start" : "flex-end") : "flex-start"
        }`,
        gridColumn: `span ${span}`,
      }}
    >
      <ToggleButtonGroup
        exclusive
        color="primary"
        value={value}
        onChange={(event, value) => handleChange(name, value)}
        sx={{ width: "100%" }}
      >
        {options.map((option, index) => (
          <ToggleButton
            key={index}
            name={name}
            value={option}
            sx={{ minWidth: "70px", maxWidth: "150px", width: "100%" }}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleInput;
