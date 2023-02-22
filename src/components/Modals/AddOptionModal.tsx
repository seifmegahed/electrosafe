// React
import { useState } from "react";
// Firebase
// MUI
import { Box, Button, TextField } from "@mui/material";

// Components
import ModalWrapper from "../Containers/ModalWrapper";
import { labelToName } from "../../utils/conversions";
import { OptionType } from "../../globalTypes";
import { isDuplicateOption } from "../../utils/validation";

type AddOptionModalProps = {
  id: string;
  open: boolean;
  title: string;
  options: OptionType[];
  handleClose: () => void;
  addOption: (value: OptionType) => void;
};

const AddOptionModal = ({
  id,
  open,
  title,
  options,
  handleClose,
  addOption,
}: AddOptionModalProps) => {
  const [value, setValue] = useState<string>();
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    setError(false);
    if (!value) return;
    const newOption: OptionType = { label: value, name: labelToName(value) };
    if (options && isDuplicateOption(newOption, options)) {
      setError(true);
      return;
    }
    addOption(newOption);
    setValue(undefined);
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
        setValue(undefined);
        handleClose();
      }}
    >
      <TextField
        label="New Option"
        name="newOption"
        value={value ?? null}
        error={error}
        onChange={(e) => {
          setError(false);
          setValue(e.target.value);
        }}
        onKeyDown={handleKeyboard}
        helperText={error && "Option already exists"}
      />
      <Box display="flex" width="100%" justifyContent="flex-end">
        <Button
          disabled={!value}
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
