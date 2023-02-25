// Firebase
import { AuthErrorCodes } from "firebase/auth";

export const initErrors = {
  oldPassword: false,
  newPassword: false,
  verifyPassword: false,
};

export const initValues = {
  oldPassword: "",
  newPassword: "",
  verifyPassword: "",
};

export const errorMessages = {
  format: {
    oldPassword: ["Password is incorrect"],
    newPassword: [
      "A minimum 8 characters password contains",
      "A combination of uppercase and lowercase",
      "Letters and Numbers are required.",
    ],
  },
  match: {
    oldNew: ["Use a new Password"],
    newVerify: ["Passwords do Not Match"],
  },
  error: {
    [AuthErrorCodes.INVALID_PASSWORD]: ["You have entered a wrong password"],
    [AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER]: [
      "Too many attempts. Your Account has been temporarily disabled",
      "Please contact your Admin for support",
    ],
  },
};
