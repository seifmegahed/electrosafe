// React
import { ChangeEvent, useEffect, useState } from "react";
// Firebase

// MUI
import { Typography, Box, Divider, Button } from "@mui/material";

// Components
import { FormContainer, Loading } from "../../components";
import { useAuth } from "../../contexts/AuthProvider";
import { updateProfile, User } from "firebase/auth";

// Types
type UserAccountProps = {
  span: 1 | 2;
};
const UserAccount = ({ span }: UserAccountProps) => {
  const { user } = useAuth();
  let initialValues = user?.displayName || "";
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const resetValues = () => {
    setUserData(initialValues);
    setChange(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChange(value !== initialValues);
    setUserData(value);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const saveData = async () => {
    setLoading(true);
    await updateProfile(user as User, { displayName: userData })
      .then(() => {
        setChange(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <FormContainer>
      <Loading state={loading} />
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
                  value={userData}
                  onChange={handleChange}
                />
              </Box>
              <Divider />
              <Box display="flex" justifyContent="space-between" mt="30px">
                <Typography>Email</Typography>
                <Typography>{user?.email}</Typography>
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
        >
          <Button
            disabled={!change}
            onClick={resetValues}
            variant="contained"
            sx={{ width: "100px" }}
          >
            Cancel
          </Button>
          <Button
            disabled={!change}
            onClick={saveData}
            variant="contained"
            sx={{ width: "100px" }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </FormContainer>
  );
};

export default UserAccount;
