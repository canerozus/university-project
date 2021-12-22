import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";
import { Alert, Snackbar } from "@mui/material";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const [error, setError] = useState(false);
  const { loggedIn } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    if (loggedIn == false) {
      setError(true);
    } else {
      setError(false);
    }
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              value="LOGIN"
            >
              Sign in
            </Button>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?<Link href="#">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
        {error && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Snackbar
              open={error}
              onClose={() => {
                setError(false);
              }}
              message="I love snacks"
            />
          </Box>
        )}
      </form>
    </>
  );
}

export default Login;
