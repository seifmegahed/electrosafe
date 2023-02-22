// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

// Firebase
import {
  getCategories,
  updateCategories,
} from "../../../firestore/ItemPrototypes";

// Components
import GridWrapper from "../../../components/Containers/GridWrapper";
import AutoSelectInput from "../../../components/InputFields/AutoSelectInput";

// Types
import { OptionType, SelectFieldPropsType } from "../../../globalTypes";
import AddOptionModal from "../../../components/Modals/AddOptionModal";
import { isDuplicateOption } from "../../../utils/validation";
import { descendingSortObjectArray } from "../../../utils/sortFunctions";
import Loading from "../../../components/Modals/Loading";

type CategoryFieldProps = {
  value?: OptionType;
  onChange: (value: OptionType) => void;
};

const CategoryInputField = ({ value, onChange }: CategoryFieldProps) => {
  const handleChange = onChange;
  const navigate = useNavigate();
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
        if (result?.data()?.data) setCategories(result?.data()?.data);
      });
  }, []);

  const handleNewOption = (newValue: OptionType) => {
    setLoading(true);
    if (categories) {
      if (isDuplicateOption(newValue, categories)) return;
      updateCategories(
        descendingSortObjectArray(
          [...categories, newValue],
          "name"
        ) as OptionType[]
      )
        .catch((error) => console.log(error))
        .then((response) => {
          const newCategories = response?.data;
          if (newCategories) {
            navigate("/inventory/edit-form", {
              state: newValue,
            });
          }
        })
        .finally(() => setLoading(false));
    }
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
      <Loading state={loading} />
      <AddOptionModal
        id="add-category"
        open={modal}
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
