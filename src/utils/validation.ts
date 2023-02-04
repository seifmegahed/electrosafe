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
