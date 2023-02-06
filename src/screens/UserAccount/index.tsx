// React
// Firebase

// MUI
import { Typography, Box, Table } from "@mui/material";
import { height } from "@mui/system";
import { User } from "firebase/auth";
import { useEffect } from "react";

// Components
import { FormContainer, ScreenNavigator } from "../../components";
import DataDisplay from "../../components/DataDisplay";
import { useAuth } from "../../contexts/AuthProvider";

// Types
type UserAccountProps = {
  span?: number;
};
const UserAccount = ({ span }: UserAccountProps) => {
  const { user } = useAuth();
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <FormContainer span={!!span ? span : 4}>
      <Box width="100%" sx={{ gridColumn: "span 4" }}>
        <Typography variant="h3"> User Profile</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        width="fit-content"
        mr="20px"
        sx={{ gridColumn: "span 1", gridRow: "span 3" }}
      >
        <img
          src="../../assets/images/user.png"
          style={{ maxWidth: "150px" }}
        ></img>
      </Box>
      <Box display="flex" justifyContent="flex-end" sx={{ gridColumn: "span 3" }}>
        <Table>
          <DataDisplay
            details={{ label: "Name" }}
            data={(user as User).displayName || ""}
          />
          <DataDisplay
            details={{ label: "Email" }}
            data={(user as User).email || ""}
          />
          <DataDisplay
            details={{ label: "Phone Number" }}
            data={(user as User).phoneNumber || ""}
          />
        </Table>
      </Box>
    </FormContainer>
  );
};

export default UserAccount;
