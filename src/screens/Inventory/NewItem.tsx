// React
import { useEffect, useState } from "react";
// Firebase
// MUI

// Components
import FormContainer from "../../components/FormContainer";
import { addCategory, getCategories } from "../../firestore/ItemPrototypes";
import SelectInput from "../../components/SelectInput";

// Types

const NewItem = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories()
      .catch((error) => console.log(error))
      .then((value) => {
        setCategories(value?.data()?.data);
      });
  }, []);

  return (
    <FormContainer title="New Item">
      <SelectInput
        span={4}
        id="category-select"
        label="Category"
        value={category}
        options={categories}
        setValue={(value) => setCategory(value)}
        addOption={(option) =>
          addCategory(option, categories)
            .catch((error) => console.log(error))
            .then((value) => setCategories(value?.data as string[]))
        }
      />
    </FormContainer>
  );
};

export default NewItem;
