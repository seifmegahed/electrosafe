import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { PasswordField } from "../components";
import FormContainer from "../components/FormContainer";
import { useAuth } from "../contexts/AuthProvider";
import { checkEmailValidity, checkPasswordValidity } from "../utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<"wrong" | "invalid">(
    "invalid"
  );
  const { login } = useAuth();

  const handleSubmit = async () => {
    if (!checkEmailValidity(email) || !checkPasswordValidity(password)) {
      setError(true);
      setErrorMessage("invalid");
      console.log("Failed!");
    } else {
      await login(email, password)
        .then((response) => {
          setError(false);
          console.log(response);
        })
        .catch((error) => {
          setError(true);
          setErrorMessage("wrong");
          console.log(error);
        });
    }
  };

  return (
    <form>
      <FormContainer padding="50px 50px">
        <Typography variant="h3">Login</Typography>
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={error}
          sx={{ gridColumn: "span 4" }}
        />
        <PasswordField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          span={4}
          error={error}
        />
        <Box sx={{ gridColumn: "span 4" }} textAlign="center">
          {error && (
            <Typography color="error">
              {errorMessage === "invalid"
                ? "Please make sure you enter a valid Email and Password"
                : "Email or Password are wrong!"}
            </Typography>
          )}
          {error && errorMessage === "wrong" && (
            <>
              Would you like to reset your <a href="#">password ?</a>
            </>
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
          width="100%"
          m="20px 0"
          sx={{ gridColumn: "span 4" }}
        >
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ width: "200px", height: "50px" }}
          >
            sign in
          </Button>
        </Box>
      </FormContainer>
    </form>
  );
};

export default Login;
