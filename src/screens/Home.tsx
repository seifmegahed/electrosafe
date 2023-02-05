// React
// Firebase
// MUI
import { Typography, Box } from "@mui/material";
// Components
import { FormContainer } from "../components";
import { useAuth } from "../contexts/AuthProvider";
// Types

const Home = () => {
const { user } = useAuth();

return(
  <Box
  display="flex"
  width="100%"
  height="calc(100vh - 165px)"
  alignItems="center"
  justifyContent="center"
>
  <FormContainer>
    <Typography sx={{gridColumn: "span 4"}} variant="h2">Home</Typography>
    <Typography sx={{gridColumn: "span 4"}} variant="h6" color="primary">{`Welcome ${user?.email}`}</Typography>
  </FormContainer>
</Box>
);
};

export default Home;
