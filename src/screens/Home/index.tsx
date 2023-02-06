// React
// Firebase
// MUI
import { Typography, Box } from "@mui/material";
// Components
import { FormContainer, ScreenNavigator } from "../../components/";
import { useAuth } from "../../contexts/AuthProvider";
import UserAccount from "../UserAccount";
// Types

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <FormContainer span={4}>
        <Typography sx={{ gridColumn: "span 4" }} variant="h2">
          Home
        </Typography>
        <Typography
          sx={{ gridColumn: "span 4" }}
          variant="h6"
          color="primary"
        >{`Welcome ${user?.email}`}</Typography>
      </FormContainer>
    </>
  );
};

export default Home;
