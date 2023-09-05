import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetMoviesData } from '../../reducers/Slices/Movies';
import ApexChart from './Graphs';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import MoviesCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" className='kanit' color="text.secondary" align="center" {...props}>
            <span style={{ fontWeight: 'bold' }}>{'Copyright © '}</span>
            <Link color="inherit" sx={{ fontWeight: 'bold' }} href="/">
                K Sai Rajesh
            </Link>{' '}
            <span style={{ fontWeight: 'bold' }}>{new Date().getFullYear()}
                {'.'}</span>
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Movies() {

    const dispatch = useDispatch()
    const { MoviesData } = useSelector(state => state.MoviesReducers)
    const [chartData, setChartData] = useState({
        rating: [],
        movies: []
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(GetMoviesData())
    }, [dispatch])

    useEffect(() => {
        let chartData = []
        let movies = []
        MoviesData.forEach(item => {
            chartData.push(item.imdb.rating)
            movies.push(item.title.substring(0, 10))
        })
        setChartData(prev => {
            return {
                ...prev,
                rating: chartData,
                movies: movies
            }
        })
    }, [MoviesData])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid p={2} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} item component={Paper} elevation={2} xs={12}>
                <Typography className='kanit' px={2} fontSize={25} >This Movie DataBase is Connected to MongoDB.</Typography>
            </Grid>
            <Grid container component="main" sx={{ backgroundColor: 'whitesmoke' }} p={3}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center'
                }}>
                    <Button variant='outlined' sx={{ alignSelf: 'end', borderRadius: '50px' }} onClick={() => navigate(-1)} >Back</Button>
                </Grid>
                <Grid item xs={12} lg={5} height={`${window.innerHeight - 100}px`} sx={{ overflow: 'scroll' }}>
                    {
                        MoviesData?.map((item, idx) => {
                            return (
                                <Grid item xs={12} id={idx} p={2}>
                                    <MoviesCard movie={item} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} lg={7} p={2}>
                    <Paper elevation={2} sx={{ paddingX: 2, paddingY: 3 }}>
                        <Typography className='kanit' px={2} fontSize={25} >Movies Rating</Typography>
                        <ApexChart rating={chartData.rating} movies={chartData.movies} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}