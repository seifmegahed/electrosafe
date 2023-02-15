import { InputAdornment, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

const AddButtonAdornment = ({ onClick }: { onClick: () => void }) => (
  <InputAdornment position="end">
    <IconButton onClick={onClick}>
      <Add />
    </IconButton>
  </InputAdornment>
);

export default AddButtonAdornment;
