import { FieldsPropsTypes, GenericObject, OptionType } from "../globalTypes";

export const initFormValues = (fields: FieldsPropsTypes[]) => {
  let initValues: GenericObject = {};
  fields.forEach((field) => {
    const { input, name } = field;
    switch (input) {
      case "text":
        initValues[name] = "";
        break;
      case "select":
      case "toggle":
        initValues[name] = null;
        break;
      case "lister":
        initValues[name] = [] as OptionType[];
        break;
      case "checkbox":
        initValues[name] = false;
    }
  });
  return initValues;
};

export const initFormErrors = (keys: string[]) => {
  let errors: { [key: string]: boolean } = {};
  keys.forEach((key) => (errors[key] = false));
  return errors;
};
