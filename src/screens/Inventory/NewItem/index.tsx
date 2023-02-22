// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import FormContainer from "../../../components/Containers/FormContainer";
import EditOptionButton from "./EditOptionButton";
import CategoryInputField from "./CategoryInputField";
import SaveButton from "./SaveButton";

// Types
import { OptionType } from "../../../globalTypes";
import { getCategories } from "../../../firestore/ItemPrototypes";

const NewItem = () => {
  const location = useLocation();
  const [category, setCategory] = useState<OptionType>();
  const [categories, setCategories] = useState<OptionType[]>([]);

  useEffect(() => {
    getCategories()
      .catch((error) => console.log(error))
      .then((result) => {
        if (result?.data()?.data) setCategories(result?.data()?.data);
        if (location.state) setCategory(location.state);
      });
  }, [location]);

  return (
    <FormContainer
      title="New Item"
      iconButton={<EditOptionButton category={category} />}
    >
      <CategoryInputField
        value={category}
        categories={categories}
        onChange={(value) => setCategory(value)}
      />
      <SaveButton />
    </FormContainer>
  );
};

export default NewItem;
