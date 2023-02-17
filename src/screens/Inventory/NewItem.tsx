// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Firebase
import { addCategory, getCategories } from "../../firestore/ItemPrototypes";
// MUI
import { Button, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

// Components
import SelectInput from "../../components/InputFields/SelectInput";
import FormContainer from "../../components/Containers/FormContainer";
import { OptionType } from "../../globalTypes";

// Types

const NewItem = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<
    OptionType[]
  >([]);
  const navigate = useNavigate();

  const getCategoryObject = (categoryValue: string) => {
    let categoryObject = { label: "", name: "" };
    categories.forEach((item) => {
      if (item.name === categoryValue) categoryObject = item;
    });
    return categoryObject;
  };

  useEffect(() => {
    getCategories()
      .catch((error) => console.log(error))
      .then((value) => {
        setCategories(value?.data()?.data);
      });
  }, []);

  return (
    <FormContainer title="New Item">
      <IconButton
        onClick={() =>
          navigate("/inventory/edit-prototype", {
            state: getCategoryObject(category),
          })
        }
        sx={{
          position: "absolute",
          right: "20px",
          visibility: `${category === "" ? "hidden" : "visible"}`,
        }}
      >
        <Edit fontSize="large" />
      </IconButton>
      <SelectInput
        span={4}
        id="category-select"
        name="category-select"
        label="Category"
        value={category}
        options={categories}
        setValue={(value) => setCategory((value as string) || "")}
        addOption={(option) =>
          addCategory(
            { name: option.toLowerCase(), label: option },
            categories
          )
            .catch((error) => console.log(error))
            .then((value) =>
              setCategories(value?.data as OptionType[])
            )
        }
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gridColumn: "span 4",
        }}
      >
        <Button
          variant="contained"
          disabled={true}
          sx={{ maxWidth: "120px", width: "100%" }}
        >
          Save
        </Button>
      </div>
    </FormContainer>
  );
};

export default NewItem;
