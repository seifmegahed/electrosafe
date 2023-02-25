// MUI
import { Button } from "@mui/material";

type SaveButtonProps = {
  onClick: () => void;
};
const SaveButton = ({ onClick }: SaveButtonProps) => {
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
        name="save"
        onClick={onClick}
        sx={{ maxWidth: "120px", width: "100%" }}
      >
        Save
      </Button>
    </div>
  );
};

export default SaveButton;
