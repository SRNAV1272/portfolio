import React, { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Avatar, Box, Button, Container, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyOtp } from '../../reducers/Slices/SignIn';
import { useNavigate } from 'react-router-dom';
import { Load } from '../../reducers/Slices/Loading';
import { Notify } from '../../reducers/Slices/Notification';

const defaultTheme = createTheme();

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

export default function OTP() {
    const [otp, setOtp] = useState('');
    const { signupdata } = useSelector(state => state.LoginReducers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (event) => {
        setOtp(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.set('OTP', otp)
        Object.keys(signupdata).forEach((key, id) => {
            data.set(`${key}`, signupdata[key])
        })
        if (otp.length === 5) {
            dispatch(VerifyOtp({ data, navigate }, { dispatch }))
            dispatch(Load(true))
        } else
            dispatch(Notify({ msg: 'Invalid OTP !', type: 'error' }))
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
                        OTP
                    </Typography>
                    <Box component="form" overflow={'auto'} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <MuiOtpInput value={otp} onChange={handleChange} length={5} width='100%' overflow={'auto'} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Verify
                        </Button>
                        <Grid container justifyContent={'end'} display={'flex'}>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Back
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