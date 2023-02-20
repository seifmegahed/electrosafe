import { FieldsPropsTypes, GenericObject, OptionType } from "../globalTypes";

type FieldValidityType = (value: string) => boolean;

export const checkEmailValidity: FieldValidityType = (value) => {
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return true;
  return false;
};

export const checkPasswordValidity: FieldValidityType = (value) => {
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) return true;
  if (
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
  )
    return true;
  return false;
};

export const checkFormValidity = (
  fields: FieldsPropsTypes[],
  values: GenericObject
) => {
  const errors: { [key: string]: boolean } = {};
  let state = false;
  fields.forEach((field) => {
    if (field.required === true) {
      const value = values[field.name];
      if (value === "" || value === null || !(value as OptionType[])?.length) {
        errors[field.name] = true;
        state = true;
      }
    }
  });
  return { errors, state };
};

export const isDuplicateOption = (value: OptionType, array: OptionType[]) =>
  !array.reduce(
    (exists, currentValue) => exists && currentValue.name !== value.name,
    true
  );
