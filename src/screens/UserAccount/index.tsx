// React
import { ChangeEvent, useState } from "react";
// Firebase

// MUI
import { Typography, Box, Divider, Button } from "@mui/material";

// Components
import { FormContainer } from "../../components";
import { useAuth } from "../../contexts/AuthProvider";

// Types
type UserAccountProps = {
  span: 1 | 2;
};
const UserAccount = ({ span }: UserAccountProps) => {
  const { user } = useAuth();
  const initialValues = {
    displayName: user?.displayName || "",
    phoneNumber: user?.phoneNumber || "",
  };
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState(initialValues);

  const resetValues = () => {
    setUserData(initialValues);
    setChange(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData((prev) => {
      const newValues = {
        ...prev,
        [name as "displayName" | "phoneNumber"]: value,
      };

      console.log(user?.displayName);
      setChange(
        newValues.displayName !== initialValues.displayName ||
          newValues.phoneNumber !== initialValues.phoneNumber
      );
      return newValues;
    });
  };

  return (
    <FormContainer>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ gridColumn: "span 4" }}
      >
        <Box display="flex" width="100%" flexDirection="column">
          <Typography variant="h3"> User Profile</Typography>
          <Box
            display="flex"
            gap="30px"
            mt="30px"
            sx={
              span === 2
                ? { flexDirection: { xs: "column", sm: "row" } }
                : { flexDirection: "column" }
            }
          >
            <Box display="flex" height="fit-content" justifyContent="center">
              <img
                src="../../assets/images/user.png"
                style={{ maxWidth: "140px" }}
              ></img>
            </Box>
            <Box display="flex" flexDirection="column" width="100%">
              <Box display="flex" justifyContent="space-between">
                <Typography>Name</Typography>
                <input
                  className="editable-text-display"
                  name="displayName"
                  value={userData.displayName}
                  onChange={handleChange}
                />
              </Box>
              <Divider />
              <Box display="flex" justifyContent="space-between" mt="30px">
                <Typography>Email</Typography>
                <Typography>{user?.email}</Typography>
              </Box>
              <Divider />
              <Box display="flex" justifyContent="space-between" mt="30px">
                <Typography>Phone Number</Typography>
                <input
                  className="editable-text-display"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
              </Box>
              <Divider />
            </Box>
          </Box>
        </Box>

        <Box
          m="30px 0"
          alignItems="flex-end"
          display="flex"
          justifyContent="space-between"
          visibility={change ? "visible" : "hidden"}
        >
          <Button onClick={resetValues} variant="contained">
            Cancel
          </Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </FormContainer>
  );
};

export default UserAccount;
