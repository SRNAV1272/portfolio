// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
// import { PostLogin } from '../../reducers/Slices/SignIn';
// import { Load } from '../../reducers/Slices/Loading';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" target='_blank' href="https://ksairajesh.co.in">
//         ksairajesh.co.in
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const navigate = useNavigate()
//   const [error, setError] = React.useState({
//     email: false,
//     password: false
//   })
//   const dispatch = useDispatch()

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const creds = {
//       email: data.get('email'),
//       password: data.get('password'),
//     }
//     if (creds.email === '')
//       setError((prev) => {
//         return {
//           ...prev,
//           email: true
//         }
//       })
//     if (creds.password === '')
//       setError((prev) => {
//         return {
//           ...prev,
//           password: true
//         }
//       })

//     if (creds.email !== '' && creds.password !== '') {
//       dispatch(Load(true))
//       dispatch(PostLogin({ creds, navigate }, { dispatch }))
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 error={error.email}
//                 id="email"
//                 label="User Name"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 error={error.password}
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ mt: 3, mb: 2, borderRadius: '50px' }}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 variant='outlined'
//                 fullWidth
//                 sx={{ alignSelf: 'end', borderRadius: '50px', mb: 2 }}
//                 onClick={() => navigate('/signup')}>Sign Up</Button>
//               <Button
//                 variant='outlined'
//                 fullWidth
//                 sx={{ alignSelf: 'end', borderRadius: '50px' }}
//                 onClick={() => navigate('/')}>Home</Button>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PostLogin } from '../../reducers/Slices/SignIn';
import { Load } from '../../reducers/Slices/Loading';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target='_blank' href="https://ksairajesh.co.in">
        ksairajesh.co.in
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = React.useState({
    ph_no: false,
    password: false
  })
  const dispatch = useDispatch()

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const creds = {
      ph_no: data.get('ph_no'),
      password: data.get('password'),
    }
    if (creds.ph_no === '')
      setError((prev) => {
        return {
          ...prev,
          ph_no: true
        }
      })
    if (creds.password === '')
      setError((prev) => {
        return {
          ...prev,
          password: true
        }
      })

    if (creds.email !== '' && creds.password !== '') {
      dispatch(Load(true))
      dispatch(PostLogin({ creds: data, navigate }, { dispatch }))
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              error={error.password}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Home
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}