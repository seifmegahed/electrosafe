import { FieldsPropsTypes, GenericObject, OptionType } from "../globalTypes";

type FieldValidityType = (value: string) => boolean;

export const checkEmailValidity: FieldValidityType = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return true;
  return false;
};

export const checkPasswordValidity: FieldValidityType = (value) => {
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) return true;
  if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)) return true;
  return false;
};

export const initFormErrors = (keys: string[]) => {
  let errors: { [key: string]: boolean } = {};
  keys.forEach((key) => (errors[key] = false));
  return errors;
};

export const checkFormValidity = (fields: FieldsPropsTypes[], values: GenericObject) => {
  let errors: { [key: string]: boolean } = {};
  let state = false;
  fields.forEach((field) => {
    if (field.required) {
      const value = values[field.name];
      if (value === "" || value === null || !(value as OptionType[]).length) {
        errors[field.name] = true;
        state = true;
      }
    }
  });
  return { errors, state };
};
