// MUI
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FORM_BUTTON_STYLE } from "../../../globalConstants";

const AddItemButton = ({ onClick: handleClick }: { onClick: () => void }) => {
  return (
    <Button
      size="large"
      variant="contained"
      name="newItem"
      onClick={handleClick}
      sx={FORM_BUTTON_STYLE}
    >
      <div className="two-items-container">
        Add
        <Add />
      </div>
    </Button>
  );
};

export default AddItemButton;
