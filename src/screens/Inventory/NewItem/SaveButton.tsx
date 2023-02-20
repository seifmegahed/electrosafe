// MUI
import { Button } from "@mui/material";

const SaveButton = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gridColumn: "span 4",
      }}
    >
      <Button
        variant="contained"
        disabled
        sx={{ maxWidth: "120px", width: "100%" }}
      >
        Save
      </Button>
    </div>
  );
};

export default SaveButton;
