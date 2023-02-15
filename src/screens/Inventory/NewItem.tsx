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

// Types

const NewItem = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);
  const navigate = useNavigate();

  const getCategoryObject = (categoryValue: string) => {
    let categoryObject = { label: "", value: "" };
    categories.forEach((item) => {
      if (item.value === categoryValue) categoryObject = item;
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
        label="Category"
        value={category}
        options={categories}
        setValue={(value) => setCategory(value)}
        addOption={(option) =>
          addCategory(
            { value: option.toLowerCase(), label: option },
            categories
          )
            .catch((error) => console.log(error))
            .then((value) =>
              setCategories(value?.data as { value: string; label: string }[])
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
