// React
import { useState } from "react";
// Firebase
// MUI
import { Box, Button, TextField } from "@mui/material";

// Components
import ModalWrapper from "../Containers/ModalWrapper";
import { labelToName } from "../../utils/conversions";
import { OptionType } from "../../globalTypes";

type AddOptionModalProps = {
  id: string;
  open: boolean;
  title: string;
  handleClose: () => void;
  addOption: (value: OptionType) => void;
};

const AddOptionModal = ({
  id,
  open,
  title,
  handleClose,
  addOption,
}: AddOptionModalProps) => {
  const [newOption, setNewOption] = useState<string>();

  const handleSubmit = () => {
    if (!newOption) return;
    addOption({ label: newOption, name: labelToName(newOption) });
    setNewOption(undefined);
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === "Enter") handleSubmit();
  };

  return (
    <ModalWrapper
      id={id}
      title={title}
      open={open}
      handleClose={() => {
        setNewOption(undefined);
        handleClose();
      }}
    >
      <TextField
        label="New Option"
        name="newOption"
        value={newOption ?? null}
        onChange={(e) => setNewOption(e.target.value)}
        onKeyDown={handleKeyboard}
      />
      <Box display="flex" width="100%" justifyContent="flex-end">
        <Button
          disabled={!newOption}
          variant="contained"
          fullWidth
          name="saveOption"
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
