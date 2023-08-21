import React from "react";
import { useSelector,  useDispatch } from "react-redux";
import { selectAuthorization } from "../../redux/selectors"
import { useNavigate } from "react-router-dom";
import {registerUserThunk} from "../../redux/authOperations"
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
/*import { createTheme } from '@mui/material/styles';*/
import { blue } from '@mui/material/colors';


/*const defaultTheme = createTheme(); */

const RegisterPage = () => {
  const dispatch = useDispatch();
   const primary = blue;

const handleSubmit = e => {
  e.preventDefault();
  console.log(e.target)
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const finallUserData = {
      name, email, password
  }
  console.log(finallUserData)
  dispatch(registerUserThunk(finallUserData));

  };

  const authorization = useSelector(selectAuthorization);
  const navigate = useNavigate();
  if(authorization) return navigate("/contacts");
  return (
/*   <ThemeProvider theme={defaultTheme}> */
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: primary }}>
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background:
                  ' #5275e9',
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
 /*   </ThemeProvider> */
  );
};

export default RegisterPage;