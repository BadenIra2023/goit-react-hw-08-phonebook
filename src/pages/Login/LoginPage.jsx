import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import {selectAuthorization} from "../../redux/selectors";
import {loginUserThunk} from "../../redux/authOperations"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { blue} from '@mui/material/colors';


const LoginPage = () => {
const dispatch = useDispatch();

   const handleSubmit = e => {
  e.preventDefault();
    console.log(e.target)
  
const email = e.target.email.value;
const password = e.target.password.value;

  const finallUserData = {
       email, password
  }  
  console.log(finallUserData)
 dispatch(loginUserThunk(finallUserData));
    };

   const authorization = useSelector(selectAuthorization);
   const navigate = useNavigate();
   const primary = blue;
   if(authorization) return navigate("/contacts");
     return ( <Container component="main" maxWidth="xs">
       
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

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
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>      
      )} 
export default  LoginPage;