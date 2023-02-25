// Components
import PasswordField from "../../components/InputFields/PasswordField";
import GridWrapper from "../../components/Containers/GridWrapper";

// Types
type ChangePasswordFormFieldsProps = {
  values: {
    oldPassword: string;
    newPassword: string;
    verifyPassword: string;
  };
  errors: {
    oldPassword: boolean;
    newPassword: boolean;
    verifyPassword: boolean;
  };
  onChange: (
    name: "oldPassword" | "newPassword" | "verifyPassword",
    value: string
  ) => void;
  onSubmit: () => void;
};

const ChangePasswordFormFields = ({
  values,
  errors,
  onChange: handleChange,
  onSubmit: handleSubmit,
}: ChangePasswordFormFieldsProps) => {
  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSubmit();
  };

  return (
    <GridWrapper>
      <PasswordField
        name="oldPassword"
        label="Old Password"
        error={errors.oldPassword}
        span={4}
        value={values.oldPassword}
        onKeyDown={handleKeyboard}
        onChange={(e) => handleChange("oldPassword", e.target.value)}
      />
      <PasswordField
        name="newPassword"
        label="New Password"
        error={errors.newPassword}
        span={4}
        value={values.newPassword}
        onKeyDown={handleKeyboard}
        onChange={(e) => handleChange("newPassword", e.target.value)}
      />
      <PasswordField
        name="verifyPassword"
        label="Verify New Password"
        error={errors.verifyPassword}
        span={4}
        value={values.verifyPassword}
        onKeyDown={handleKeyboard}
        onChange={(e) => handleChange("verifyPassword", e.target.value)}
      />
    </GridWrapper>
  );
};

export default ChangePasswordFormFields;
