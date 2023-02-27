// MUI
import { Typography } from "@mui/material";

// Types
type TextFieldDisplayProps = {
  label: string;
  value: string;
};
const TextFieldDisplay = ({ label, value }: TextFieldDisplayProps) => {
  return (
    <div className="flex-row-div" style={{ gridColumn: "span 4" }}>
      <div className="data-display-key-div">
        <Typography>{label}</Typography>
      </div>
      <div>
        <Typography>{value}</Typography>
      </div>
    </div>
  );
};

export default TextFieldDisplay;
