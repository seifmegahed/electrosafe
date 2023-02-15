import { IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { OptionType } from "../../../globalTypes";

const ListOption = ({
  option,
  onRemove,
}: {
  option: OptionType;
  onRemove: (option: OptionType) => void;
}) => {
  const { label } = option;
  const handleRemove = onRemove;
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <IconButton onClick={() => handleRemove(option)}>
        <Close fontSize="small" />
      </IconButton>
      <Typography>{label}</Typography>
    </div>
  );
};

export default ListOption;
