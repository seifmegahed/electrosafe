// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import AddOptionModal from "../../../components/Modals/AddOptionModal";
import AutoSelectInput from "../../../components/InputFields/AutoSelectInput";
import GridWrapper from "../../../components/Containers/GridWrapper";

// Types
import { OptionType, SelectFieldPropsType } from "../../../globalTypes";
import routes from "../../../routes";

type CategoryFieldProps = {
  value?: OptionType;
  categories: OptionType[];
  onChange: (value: OptionType) => void;
};

const CategoryInputField = ({
  value,
  categories,
  onChange,
}: CategoryFieldProps) => {
  const handleChange = onChange;
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const categoryFieldData: SelectFieldPropsType = {
    name: "category",
    label: "Category",
    input: "select",
    span: 4,
    options: categories,
  };

  const handleNewOption = (newValue: OptionType) => {
    navigate(routes.editForm.path, {
      state: newValue,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "span 4",
        gap: "20px",
      }}
    >
      <AddOptionModal
        id="add-category"
        open={modal}
        options={categories}
        title="Category"
        handleClose={() => setModal(false)}
        addOption={handleNewOption}
      />
      <GridWrapper>
        <AutoSelectInput
          fieldData={categoryFieldData}
          value={value as OptionType}
          onChange={(ignore, newValue) => handleChange(newValue)}
        />
      </GridWrapper>
      <Button
        variant="outlined"
        color="inherit"
        name="newCategory"
        onClick={() => setModal(true)}
        style={{
          height: "100%",
          color: "#888",
          borderColor: "#c5c5c5",
        }}
      >
        <Add fontSize="large" />
      </Button>
    </div>
  );
};

export default CategoryInputField;
