// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Button, IconButton } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";

// Firebase
import { getCategories } from "../../firestore/ItemPrototypes";

// Components
import FormContainer from "../../components/Containers/FormContainer";
import GridWrapper from "../../components/Containers/GridWrapper";
import AutoSelectInput from "../../components/InputFields/AutoSelectInput";

// Types
import { OptionType, SelectFieldPropsType } from "../../globalTypes";

const EditOption = ({ category }: { category?: OptionType }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => {
        if (category)
          navigate("/inventory/edit-prototype", {
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

type CategoryFieldProps = {
  value?: OptionType;
  onChange: (value: OptionType) => void;
};

const CategoryField = ({ value, onChange }: CategoryFieldProps) => {
  const handleChange = onChange;
  const [categories, setCategories] = useState<OptionType[]>([]);

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
      <GridWrapper>
        <AutoSelectInput
          fieldData={categoryFieldData}
          value={value as OptionType}
          onChange={(name, newValue) => handleChange(newValue)}
        />
      </GridWrapper>
      <Button variant="outlined" color="inherit" sx={{ height: "100%" }}>
        <Add fontSize="large" />
      </Button>
    </div>
  );
};

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

const NewItem = () => {
  const [category, setCategory] = useState<OptionType>();

  return (
    <FormContainer
      title="New Item"
      iconButton={<EditOption category={category} />}
    >
      <CategoryField
        value={category}
        onChange={(value) => setCategory(value)}
      />
      <SaveButton />
    </FormContainer>
  );
};

export default NewItem;
