// MUI
import { InputAdornment, TextField } from "@mui/material";

// Types
import { TextFieldPropsType } from "../../../globalTypes";

type TextInputPropsType = {
  fieldData: TextFieldPropsType;
  value: string | number;
  error?: boolean;
  onChange: (name: string, value: string | number) => void;
};

const getInputFixProps = (
  preFix: string | false | undefined,
  postFix: string | false | undefined
) => {
  if (!!preFix && preFix !== "")
    return {
      startAdornment: (
        <InputAdornment position="start">{preFix}</InputAdornment>
      ),
    };
  if (postFix && postFix !== "")
    return {
      endAdornment: <InputAdornment position="end">{postFix}</InputAdornment>,
    };
  return undefined;
};

const TextInput = ({
  fieldData,
  value,
  error,
  onChange,
}: TextInputPropsType) => {
  const { name, label, preFix, postFix, type, span } = fieldData;
  const handleChange = onChange;

  return (
    <TextField
      label={label}
      name={name}
      sx={{ gridColumn: `span ${span}` }}
      helperText={error && "Required"}
      type={typeof type === "string" ? type : type?.name ?? "text"}
      value={(value as string | number) || ""}
      error={error ?? false}
      onChange={(event) => handleChange(name, event.target.value)}
      InputProps={getInputFixProps(preFix, postFix)}
    />
  );
};

export default TextInput;
