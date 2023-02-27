// React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Firebase
import { getCategories, getForms } from "../firestore/forms";

// Components
import { useAuth } from "../../../contexts/AuthProvider";
import AutoForm from "../../../components/Forms/AutoForm";
import FormContainer from "../../../components/Containers/FormContainer";
import EditOptionButton from "./EditOptionButton";
import CategoryInputField from "./CategoryInputField";
import SaveButton from "./SaveButton";
import GridWrapper from "../../../components/Containers/GridWrapper";

// Types
import {
  FieldsPropsTypes,
  GenericObject,
  OptionType,
  ValueType,
} from "../../../globalTypes";

// Functions
import { checkFormValidity } from "../../../utils/validation";
import { initFormErrors, initFormValues } from "../../../utils/formInit";
import { createItem } from "../firestore/items";
import Loading from "../../../components/Modals/Loading";
import BreadNav from "../../../components/Navigation/BreadNav";
import routes from "../../../routes";

const NewItem = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [category, setCategory] = useState<OptionType>();
  const [categories, setCategories] = useState<OptionType[]>([]);
  const [forms, setForms] = useState<{ [key: string]: FieldsPropsTypes[] }>();
  const [values, setValues] = useState<GenericObject>();
  const [errors, setErrors] = useState<{ [key: string]: boolean }>();
  const [loading, setLoading] = useState(false);

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
    if (category && forms) {
      const initValues = initFormValues(forms[category.name]);
      setValues(initValues);
      setErrors(initFormErrors(Object.keys(initValues)));
    }
  }, [category, forms]);
  const handleChange = (name: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetErrors = () => {
    setErrors((prev) => {
      if (!prev) return undefined;
      const newErrors: { [key: string]: boolean } = {};
      Object.keys(prev).forEach((key) => {
        newErrors[key] = false;
      });
      return newErrors;
    });
  };

  const handleSubmit = () => {
    if (!category || !forms || !values || !errors) return;
    resetErrors();
    const errorCheck = checkFormValidity(forms[category.name], values);
    if (errorCheck.state) {
      setErrors((prev) => ({ ...prev, ...errorCheck.errors }));
      return;
    }
    setLoading(true);
    createItem({
      ...values,
      category,
      createdBy: user?.displayName || "",
    })
      .catch((error) => {
        if (error === "Item name already exists!") {
          // TODO Error modal
          // setCategory(undefined); // temp
        }
        console.warn(error);
      })
      .then(() => {
        setCategory(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <BreadNav page={routes.newItem} />
      <FormContainer
        title="New Item"
        iconButton={<EditOptionButton category={category} />}
      >
        <Loading state={loading} />
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
              errors={errors}
              onChange={handleChange}
            />
            <SaveButton onClick={handleSubmit} />
          </GridWrapper>
        ) : null}
      </FormContainer>
    </>
  );
};

export default NewItem;
