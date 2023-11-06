import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PostSignUp } from '../../reducers/Slices/SignIn';
import { Load } from '../../reducers/Slices/Loading';
import HomeIcon from '@mui/icons-material/Home';
import { Notify } from '../../reducers/Slices/Notification';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://ksairajesh.co.in">
        ksairajesh.co.in
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = React.useState({
    firstName: false,
    lastName: false,
    ph_no: false,
    password: false
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!error.firstName &&
      !error.lastName &&
      !error.ph_no &&
      !error.password &&
      data.get('firstName') !== '' &&
      data.get('lastName') !== '' &&
      data.get('ph_no') !== '' &&
      data.get('password') !== ''
    ) {
      dispatch(PostSignUp({ data, navigate }, { dispatch }))
      dispatch(Load(true))
      return
    }
    dispatch(Notify({ msg: 'Please fill all the fields !', type: 'error' }))
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  error={error.firstName}
                  required
                  onChange={(e) => {
                    if (e.target.value === '') setError(prev => { return { ...prev, firstName: true } })
                    else setError(prev => { return { ...prev, firstName: false } })
                  }}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  error={error.lastName}
                  id="lastName"
                  onChange={(e) => {
                    if (e.target.value === '') setError(prev => { return { ...prev, lastName: true } })
                    else setError(prev => { return { ...prev, lastName: false } })
                  }}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ph_no"
                  sx={{
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& input[type=number]::-webkit-outer-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    "& input[type=number]::-webkit-inner-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    }
                  }}
                  error={error.ph_no}
                  type='number'
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                    if (!/^[6-9]\d{9}$/gi.test(e.target.value)) setError(prev => { return { ...prev, ph_no: true } })
                    else setError(prev => { return { ...prev, ph_no: false } })
                  }}
                  label="Mobile Number"
                  name="ph_no"
                  autoComplete="Mobile Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  error={error.password}
                  onChange={(e) => {
                    if (e.target.value === '') setError(prev => { return { ...prev, password: true } })
                    else setError(prev => { return { ...prev, password: false } })
                  }}
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
              variant="outlined"
              sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
            >
              Sign Up
            </Button>
            <Grid
              container
              display={'flex'}
              alignItems={'center'}
              justifyContent="space-between"
            >
              <Grid item xs>
                <Link href="/" variant="body2">
                  <HomeIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider >
  );
}