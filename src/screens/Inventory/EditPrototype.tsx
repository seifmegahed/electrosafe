// React
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Firebase
import { addForm } from "./firestore/forms";
// MUI
// Components
import FormEditor from "../../components/Forms/FormEditor";
import Loading from "../../components/Modals/Loading";
// Types
import { FieldsPropsTypes, OptionType } from "../../globalTypes";
import BreadNav from "../../components/Navigation/BreadNav";
import routes from "../../routes";
// Constants

const EditPrototype = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const category: OptionType = location.state;

  const handleSubmit = (fields: FieldsPropsTypes[]) => {
    setLoading(true);
    addForm(
      fields.map((field) => ({ ...field, display: true })),
      category
    )
      .catch((error) => console.warn(error))
      .then(() => navigate("/inventory/new", { state: category }))
      .finally(() => setLoading(false));
  };
  return (
    <>
      <Loading state={loading} />
      <BreadNav page={routes.editForm} />
      <FormEditor category={category} onSubmit={handleSubmit} />
    </>
  );
};

export default EditPrototype;
