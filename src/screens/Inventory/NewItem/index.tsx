// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import FormContainer from "../../../components/Containers/FormContainer";
import EditOptionButton from "./EditOptionButton";
import CategoryInputField from "./CategoryInputField";
import SaveButton from "./SaveButton";

// Types
import { FieldsPropsTypes, OptionType, ValueType } from "../../../globalTypes";
import { getCategories, getForms } from "../firestore/forms";
import AutoForm from "../../../components/Forms/AutoForm";

const NewItem = () => {
  const location = useLocation();
  const [category, setCategory] = useState<OptionType>();
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [forms, setForms] = useState<{ [key: string]: FieldsPropsTypes[] }>();

  useEffect(() => {
    const getData = async () => {
      await getCategories()
        .catch((error) => console.log(error))
        .then((result) => {
          if (result?.data()?.data) setCategories(result?.data()?.data);
        });
      await getForms()
        .catch((error) => console.log(error))
        .then((result) => {
          if (result?.data()) setForms(result.data());
        });
    };
    getData();
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
      {forms && category && forms[category.name] ? (
        <AutoForm
          fields={forms?.[category?.name]}
          values={{}}
          onChange={(name: string, value: ValueType) =>
            console.log(name, value)
          }
        />
      ) : null}
      <SaveButton />
    </FormContainer>
  );
};

export default NewItem;
