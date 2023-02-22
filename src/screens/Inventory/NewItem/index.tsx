// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import FormContainer from "../../../components/Containers/FormContainer";
import EditOptionButton from "./EditOptionButton";
import CategoryInputField from "./CategoryInputField";
import SaveButton from "./SaveButton";

// Types
import {
  FieldsPropsTypes,
  GenericObject,
  OptionType,
  ValueType,
} from "../../../globalTypes";
import { getCategories, getForms } from "../firestore/forms";
import AutoForm from "../../../components/Forms/AutoForm";
import { initFormValues } from "../../../utils/formInit";
import GridWrapper from "../../../components/Containers/GridWrapper";

const NewItem = () => {
  const location = useLocation();
  const [category, setCategory] = useState<OptionType>();
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [forms, setForms] = useState<{ [key: string]: FieldsPropsTypes[] }>();
  const [values, setValues] = useState<GenericObject>();

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

  useEffect(() => {
    if (category && forms) setValues(initFormValues(forms[category.name]));
  }, [category, forms]);

  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

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
        <GridWrapper>
          <AutoForm
            fields={forms?.[category?.name]}
            values={values ?? {}}
            onChange={handleChange}
          />
          <SaveButton />
        </GridWrapper>
      ) : null}
    </FormContainer>
  );
};

export default NewItem;
