// React
import { useState } from "react";

// Components
import FormContainer from "../../../components/Containers/FormContainer";
import EditOptionButton from "./EditOptionButton";
import CategoryInputField from "./CategoryInputField";
import SaveButton from "./SaveButton";

// Types
import { OptionType } from "../../../globalTypes";

const NewItem = () => {
  const [category, setCategory] = useState<OptionType>();

  return (
    <FormContainer
      title="New Item"
      iconButton={<EditOptionButton category={category} />}
    >
      <CategoryInputField
        value={category}
        onChange={(value) => setCategory(value)}
      />
      <SaveButton />
    </FormContainer>
  );
};

export default NewItem;
