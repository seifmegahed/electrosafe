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
  return <FormEditor category={location.state} />;
};

export default EditPrototype;
