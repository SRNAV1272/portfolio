import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
    return (
        <Typography variant="body2" className='kanit' fontWeight={'bolder'} color="text.secondary">
            {'Copyright © '}
            K Sai Rajesh &nbsp;
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
            }}
        >
            <Copyright />
        </Container>
    );
}