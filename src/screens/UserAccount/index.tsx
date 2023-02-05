// React
// Firebase

// MUI
import { Typography, Box, Table } from "@mui/material";
import { height } from "@mui/system";
import { User } from "firebase/auth";
import { useEffect } from "react";

// Components
import { FormContainer } from "../../components";
import DataDisplay from "../../components/DataDisplay";
import { useAuth } from "../../contexts/AuthProvider";

// Types

const UserAccount = () => {
  const { user } = useAuth();
  useEffect(() => {console.log(user)},[])
  return (
    <Box
      display="flex"
      width="100%"
      mt="65px"
      p="100px 0"
      height="calc(100vh - 65px)"
      alignItems="flex-start"
      justifyContent="center"
    >
      <FormContainer>
        <Box width="100%" sx={{gridColumn: "span 4"}}>
        <Typography variant="h3"> User Profile</Typography>
        </Box>
        <Box display="flex" alignItems="flex-start" justifyContent="center" sx={{gridColumn: "span 1", gridRow: "span 3"}}>
          <img src="../../assets/images/user.png" style={{maxWidth: "150px"}}></img>
        </Box>
        <Table sx={{gridColumn: "span 3"}} >
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
      </FormContainer>
    </Box>
  );
};

export default UserAccount;
