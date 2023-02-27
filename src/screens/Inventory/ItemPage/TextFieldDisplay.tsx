// MUI
import { Typography } from "@mui/material";

import { ValueType } from "../../../globalTypes";

// Types
import getFormattedDate, { DateMultiType } from "../../../utils/dateFormatting";

type TextFieldDisplayProps = {
  label: string;
  type: string;
  value: ValueType;
};
const TextFieldDisplay = ({ label, type, value }: TextFieldDisplayProps) => {
  const text =
    type === "date"
      ? getFormattedDate(value as DateMultiType)
      : (value as string);
  return (
    <div className="flex-row-div" style={{ gridColumn: "span 4" }}>
      <div className="data-display-key-div">
        <Typography>{label}</Typography>
      </div>
      <div>
        <Typography>{text}</Typography>
      </div>
    </div>
  );
};

export default TextFieldDisplay;
