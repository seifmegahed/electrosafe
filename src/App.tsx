import { Box } from "@mui/material";
import Login from "./screens/Login";

const App = () => {
  return (
    <div className="App">
      <Box
        display="flex"
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Login />
      </Box>
    </div>
  );
};

export default App;
