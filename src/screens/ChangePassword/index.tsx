// React
import { useState } from "react";

// Firebase
import {
  User,
  updatePassword,
  AuthErrorCodes,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

// MUI
import { Box, Button, Typography } from "@mui/material";

// Components
import { checkPasswordValidity } from "../../utils/validation";
import FormContainer from "../../components/Containers/FormContainer";
import PasswordField from "../../components/InputFields/PasswordField";
import Loading from "../../components/Modals/Loading";

import { useAuth } from "../../contexts/AuthProvider";
import { componentMaxWidth } from "../../globalConstants";

// Types

const ChangePassword = () => {
  const { user, logout } = useAuth();

  const initErrors = {
    oldPassword: false,
    newPassword: false,
    verifyPassword: false,
  };

  const initValues = {
    oldPassword: "",
    newPassword: "",
    verifyPassword: "",
  };

  const [formData, setFormData] = useState(initValues);

  const [errors, setErrors] = useState(initErrors);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string[]>(null);
  const [disabled, setDisabled] = useState(false);

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const element = event.target;
    if (key === "Enter") handleSubmit();
    if (key === "Escape") {
      setFormData((prev) => ({
        ...prev,
        [(element as HTMLInputElement).id]: "",
      }));
      console.log((element as HTMLInputElement).id)
    }
  };

  let errorMessages = {
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

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const startCountDown = async (seconds: number) => {
    for (let index = seconds; index >= 0; --index) {
      setErrorMessage([
        ...errorMessages.error[AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER],
        `You will be Logged out in ${index}`,
      ]);
      await timeout(1000);
    }
    logout();
  };

  const checkFieldValidity = (field: "oldPassword" | "newPassword") => {
    if (checkPasswordValidity(formData[field])) return true;
    setErrors((prev) => ({ ...prev, [field]: true }));
    setErrorMessage(errorMessages.format[field]);
    return false;
  };

  const checkFormValidity = () => {
    setErrors(initErrors);
    if (!checkFieldValidity("oldPassword")) return false;
    if (!checkFieldValidity("newPassword")) return false;
    if (formData.oldPassword === formData.newPassword) {
      setErrorMessage(errorMessages.match.oldNew);
      setErrors({ oldPassword: true, newPassword: true, verifyPassword: true });
      return false;
    }
    if (formData.newPassword !== formData.verifyPassword) {
      setErrorMessage(errorMessages.match.newVerify);
      setErrors({
        oldPassword: false,
        newPassword: true,
        verifyPassword: true,
      });
      return false;
    }
    return true;
  };

  const reAuthenticate = async () =>
    reauthenticateWithCredential(
      user as User,
      EmailAuthProvider.credential(user?.email as string, formData.oldPassword)
    );

  const handleSubmit = () => {
    if (!checkFormValidity()) return;
    setLoading(true);
    reAuthenticate()
      .then(async (reAuthenticatedUserCredential) => {
        await updatePassword(
          reAuthenticatedUserCredential.user,
          formData.verifyPassword
        );
      })
      .then(() => {
        setFormData(initValues);
        setErrorMessage(null);
        // TODO! successModal();
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
          setErrors((prev) => ({ ...prev, oldPassword: true }));
          setErrorMessage(errorMessages.error[AuthErrorCodes.INVALID_PASSWORD]);
        }
        if (error.code === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
          setErrors((prev) => ({ ...prev, oldPassword: true }));
          setDisabled(true);
          startCountDown(5);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form style={{maxWidth: componentMaxWidth, width: "100%"}}>
      <Loading state={loading} />
      <FormContainer title="Change Password">
        <PasswordField
          id="oldPassword"
          label="Old Password"
          error={errors.oldPassword}
          span={4}
          value={formData.oldPassword}
          onKeyDown={handleKeyboard}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, oldPassword: e.target.value }))
          }
        />
        <PasswordField
          id="newPassword"
          label="New Password"
          error={errors.newPassword}
          span={4}
          value={formData.newPassword}
          onKeyDown={handleKeyboard}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
          }
        />
        <PasswordField
          id="verifyPassword"
          label="Verify New Password"
          error={errors.verifyPassword}
          span={4}
          value={formData.verifyPassword}
          onKeyDown={handleKeyboard}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, verifyPassword: e.target.value }))
          }
        />
        <Box
          display="flex"
          textAlign="center"
          flexDirection="column"
          sx={{ gridColumn: "span 4" }}
          visibility={!!errorMessage ? "visible" : "hidden"}
        >
          {errorMessage?.map((message) => (
            <Typography key={message} color="error">
              {message}
            </Typography>
          ))}
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ gridColumn: "span 4" }}
        >
          <Button
            disabled={disabled}
            onClick={handleSubmit}
            variant="contained"
            sx={{ width: "100px" }}
          >
            Save
          </Button>
        </Box>
      </FormContainer>
    </form>
  );
};

export default ChangePassword;
