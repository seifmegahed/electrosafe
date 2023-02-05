import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

type PasswordFieldProps = {
  id: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  span?: number;
  error: boolean
  onKeyDown: React.KeyboardEventHandler<HTMLElement>
};

const PasswordField = ({ value, onChange, span, error, onKeyDown, id}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{gridColumn: `span ${span || 4}`}}>
      <InputLabel error={error} htmlFor={id}>Password</InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        value={value}
        autoComplete="password"
        onChange={(event) => onChange(event)}
        error={error}
        onKeyDown={onKeyDown}
      />
    </FormControl>
  );
};

export default PasswordField;
