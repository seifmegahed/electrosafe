// React
import { useState } from "react";
// Firebase
// MUI
import { Box, Button, TextField } from "@mui/material";

// Components
import ModalWrapper from "../Containers/ModalWrapper";

const AddOptionModal = ({
  id,
  open,
  title,
  handleClose,
  addOption,
}: {
  id: string;
  open: boolean;
  title: string;
  handleClose: () => void;
  addOption: (value: string) => void;
}) => {
  const [newOption, setNewOption] = useState("");

  const handleSubmit = () => {
    handleClose();
    addOption(newOption);
    setNewOption("");
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === "Enter") handleSubmit();
  };

  return (
    <ModalWrapper id={id} title={title} open={open} handleClose={handleClose}>
      <TextField
        label="New Option"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        onKeyDown={handleKeyboard}
      />
      <Box display="flex" width="100%" justifyContent="flex-end">
        <Button
          variant="contained"
          fullWidth
          sx={{ maxWidth: "120px" }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </ModalWrapper>
  );
};

export default AddOptionModal;
