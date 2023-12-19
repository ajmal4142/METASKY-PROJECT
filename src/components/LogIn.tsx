import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { loginSuccess } from "../utils/auth";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const isUsernameValid: boolean =
      /^[a-z]+$/.test(username) || /\S+@\S+\.\S+/.test(username);

    const isPasswordValid: boolean = password.length >= 8;

    if (isUsernameValid && isPasswordValid) {
      alert("Login successful!");
      dispatch(loginSuccess(username));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      navigate("/");
    } else {
      if (!isUsernameValid) {
        alert(
          "Username should contain only small letters or be a valid email.",
        );
      }
      if (!isPasswordValid) {
        alert("Password should have at least 8 characters.");
      }
    }
  };

  const styles = {
    header: {
      mb: "30px",
      fontWeight: "700",
      "@media(max-width:1000px)": {
        fontSize: "27px",
      },
      "@media(max-width:539px)": {
        fontSize: "23px",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    formContainer: {
      width: "40%",
      "@media(max-width:1000px)": {
        width: "60%",
      },
      "@media(max-width:539px)": {
        width: "90%",
      },
      padding: "16px",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      gap: "10px",
    },
    inputField: {
      marginBottom: "30px",
    },
    loginButton: {
      backgroundColor: "#4caf50", // Green color, you can customize it
      color: "#fff",
      "&:hover": {
        backgroundColor: "#45a049", // Darker shade on hover
      },
    },
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formContainer}>
        <Typography variant="h4" align="center" sx={styles.header}>
          Welcome Back !..
        </Typography>
        <TextField
          sx={styles.inputField}
          id="outlined-textarea-username"
          label="Enter Your Name"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          autoComplete="off"
        />
        <TextField
          sx={styles.inputField}
          id="outlined-textarea-password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          autoComplete="off"
        />
        <Button
          sx={{ ...styles.inputField, ...styles.loginButton }}
          variant="contained"
          fullWidth
          onClick={handleLogin}>
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LogIn;
