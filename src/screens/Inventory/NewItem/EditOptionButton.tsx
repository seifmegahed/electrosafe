// React
import { useNavigate } from "react-router-dom";
// MUI
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { OptionType } from "../../../globalTypes";

const EditOptionButton = ({ category }: { category?: OptionType }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      id="edit-category-form"
      onClick={() => {
        if (category)
          navigate("/inventory/edit-form", {
            state: category,
          });
      }}
      sx={{
        display: "flex",
        visibility: `${category ? "visible" : "hidden"}`,
      }}
    >
      <Edit fontSize="large" />
    </IconButton>
  );
};

export default EditOptionButton;
