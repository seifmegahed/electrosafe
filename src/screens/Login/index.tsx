// React
import { useState } from "react";

// Firebase

// MUI
import { Box, Button, TextField, Typography } from "@mui/material";

// Functions
import {
  checkEmailValidity,
  checkPasswordValidity,
} from "../../utils/validation";
import { useAuth } from "../../contexts/AuthProvider";

// Components
// import { Loading, FormContainer, PasswordField } from "../../components";
import Loading from "../../components/Loading";
import FormContainer from "../../components/FormContainer";
import PasswordField from "../../components/PasswordField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<"wrong" | "invalid">(
    "invalid"
  );
  const { login } = useAuth();

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const element = event.target;
    if (key === "Enter") handleSubmit();
    if (key === "Escape") {
      if ((element as HTMLInputElement).id === "email") setEmail("");
      if ((element as HTMLInputElement).id === "password") setPassword("");
    }
  };

  const handleSubmit = async () => {
    if (!checkEmailValidity(email) || !checkPasswordValidity(password)) {
      setError(true);
      setErrorMessage("invalid");
    } else {
      setLoading(true);
      await login(email, password)
        .then((response) => {
          setError(false);
          navigate("/home");
        })
        .catch((error) => {
          setError(true);
          setErrorMessage("wrong");
          setLoading(false);
          console.log(error);
        });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        p: { xs: "50px 0px", sm: "50px", md: "50px" },
      }}
    >
      <form style={{ alignSelf: "center", width: "100%", maxWidth: "600px" }}>
        <Loading state={loading} />
        <FormContainer title="Login">
          <TextField
            autoFocus
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={error}
            sx={{ gridColumn: "span 4" }}
            onKeyDown={handleKeyboard}
          />
          <PasswordField
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            span={4}
            error={error}
            onKeyDown={handleKeyboard}
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
            mt="20px"
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
    </Box>
  );
};

export default Login;
