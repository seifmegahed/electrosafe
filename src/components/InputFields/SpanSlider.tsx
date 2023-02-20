import { Slider } from "@mui/material";
import { SpanType } from "../../globalTypes";

type SpanSliderProps = {
  value: SpanType;
  onChange: (value: SpanType) => void;
  display: boolean;
};

const SpanSlider = ({ value, onChange, display }: SpanSliderProps) => {
  const handleChange = onChange;
  return (
    <Slider
      value={value}
      name="span"
      onChange={(e, newValue) => {
        return handleChange(newValue as SpanType);
      }}
      step={null}
      min={0}
      max={4}
      marks={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
      sx={{
        gridColumn: "span 4",
        display: `${display ? "block" : "none"}`,
      }}
    />
  );
};

export default SpanSlider;
