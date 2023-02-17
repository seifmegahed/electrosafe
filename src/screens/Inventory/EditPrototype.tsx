// React
import { useLocation } from "react-router-dom";
// Firebase
// MUI
// Components
import FormEditor from "../../components/Forms/FormEditor";
// Types
// Constants


const EditPrototype = () => {
  const location = useLocation();
  return (
    <FormEditor name={location.state?.label} />
  );
};

export default EditPrototype;
