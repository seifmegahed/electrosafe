// React
// Firebase
// MUI
import { Typography } from "@mui/material";
// Components
import { FormContainer } from "../../components/";
import { useAuth } from "../../contexts/AuthProvider";
import UserAccount from "../UserAccount";
// Types

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <FormContainer>
        <Typography sx={{ gridColumn: "span 4" }} variant="h2">
          Home
        </Typography>
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
