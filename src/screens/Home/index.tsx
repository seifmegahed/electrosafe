// React
// Firebase
// MUI
import { Typography } from "@mui/material";
// Components
import FormContainer from "../../components/FormContainer";

import { useAuth } from "../../contexts/AuthProvider";
import UserAccount from "../UserAccount";
// Types

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <FormContainer title="Home">
        <Typography
          sx={{ gridColumn: "span 4" }}
          variant="h6"
          color="primary"
        >{`Welcome ${user?.displayName || user?.email}`}</Typography>
      </FormContainer>
      <UserAccount span={1} />
    </>
  );
};

export default Home;
