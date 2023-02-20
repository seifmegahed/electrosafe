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

type CategoryFieldProps = {
  value?: OptionType;
  onChange: (value: OptionType) => void;
};

const CategoryInputField = ({ value, onChange }: CategoryFieldProps) => {
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

export default CategoryInputField;
