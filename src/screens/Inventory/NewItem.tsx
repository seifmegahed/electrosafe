// React
import { useState } from "react";
// Firebase
// MUI

// Components
import FormContainer from "../../components/FormContainer";
import CategoryInput from "./CategoryInput";

// Types

const NewItem = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <FormContainer title="New Item">
      <CategoryInput
        span={4}
        value={category}
        setValue={(value) => setCategory(value)}
        options={categories}
        addOption={(option) => setCategories((prev) => [...prev, option])}
      />
    </FormContainer>
  );
};

export default NewItem;
