// React
import { useEffect, useState } from "react";
// MUI
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

// Firebase
import { getCategories } from "../../../firestore/ItemPrototypes";

// Components
import GridWrapper from "../../../components/Containers/GridWrapper";
import AutoSelectInput from "../../../components/InputFields/AutoSelectInput";

// Types
import { OptionType, SelectFieldPropsType } from "../../../globalTypes";
import AddOptionModal from "../../../components/Modals/AddOptionModal";
import { isDuplicateOption } from "../../../utils/validation";

type CategoryFieldProps = {
  value?: OptionType;
  onChange: (value: OptionType) => void;
};

const CategoryInputField = ({ value, onChange }: CategoryFieldProps) => {
  const handleChange = onChange;
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [modal, setModal] = useState(false);

  const categoryFieldData: SelectFieldPropsType = {
    name: "category",
    label: "Category",
    input: "select",
    span: 4,
    options: categories,
  };

  useEffect(() => {
    getCategories()
      .catch((error) => console.log(error))
      .then((result) => {
        setCategories(result?.data()?.data);
      });
  }, []);

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
        title="Category"
        handleClose={() => setModal(false)}
        addOption={(newCategory) =>
          setCategories((prev) => {
            if (!prev) return [newCategory];
            if (isDuplicateOption(newCategory, prev)) return prev;
            return [...prev, newCategory];
          })
        }
      />
      <GridWrapper>
        <AutoSelectInput
          fieldData={categoryFieldData}
          value={value as OptionType}
          onChange={(name, newValue) => handleChange(newValue)}
        />
      </GridWrapper>
      <Button
        variant="outlined"
        color="inherit"
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
