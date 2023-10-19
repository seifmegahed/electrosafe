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
import Loading from "../../components/Modals/Loading";
import ChangePasswordFormFields from "./ChangePasswordFormFields";

import { useAuth } from "../../contexts/AuthProvider";

import { COMPONENT_MAX_WIDTH, FORM_BUTTON_STYLE } from "../../globalConstants";
import {
  errorMessages,
  initErrors,
  initValues,
} from "./changePasswordConstants";
// Types

const ChangePassword = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState(initValues);
  const [errors, setErrors] = useState(initErrors);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string[]>(null);
  const [disabled, setDisabled] = useState(false);

  function timeout(ms: number) {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
    return promise;
  }

  const startCountDown = async (seconds: number) => {
    for (let index = seconds; index >= 0; index -= 1) {
      setErrorMessage([
        ...errorMessages.error[AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER],
        `You will be Logged out in ${index}`,
      ]);
      // eslint-disable-next-line no-await-in-loop
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
    <form style={{ maxWidth: COMPONENT_MAX_WIDTH, width: "100%" }}>
      <Loading state={loading} />
      <FormContainer title="Change Password">
        <ChangePasswordFormFields
          values={formData}
          errors={errors}
          onChange={(name, value) =>
            setFormData((prev) => ({ ...prev, [name]: value }))
          }
          onSubmit={handleSubmit}
        />
        <Box
          display="flex"
          textAlign="center"
          flexDirection="column"
          sx={{ gridColumn: "span 4" }}
          visibility={errorMessage ? "visible" : "hidden"}
        >
          {errorMessage?.map((message) => (
            <Typography key={message} color="error">
              {message}
            </Typography>
          ))}
        </Box>
        {user?.email === "guest@electrosafe.com" ? (
          <Box
            display="flex"
            textAlign="center"
            flexDirection="column"
            sx={{ gridColumn: "span 4" }}
            visibility={
              user?.email === "guest@electrosafe.com" ? "visible" : "hidden"
            }
          >
            <Typography color="error">
              Operation not allowed for this user.
            </Typography>
          </Box>
        ) : null}
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ gridColumn: "span 4" }}
        >
          <Button
            disabled={user?.email === "guest@electrosafe.com" ? true : disabled}
            onClick={handleSubmit}
            variant="contained"
            sx={FORM_BUTTON_STYLE}
          >
            Save
          </Button>
        </Box>
      </FormContainer>
    </form>
  );
};

export default ChangePassword;
