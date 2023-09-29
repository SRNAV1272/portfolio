
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
// import git from '../../../images/github.svg'
// import db from '../../../images/db.svg'
// import docker from '../../../images/docker.png'
import vpc from '../../images/VTC.jpg'
// import full from '../../images/full.jpg'/
import js from '../../images/mern.jpg';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import reactdata from '../../images/React.pdf'
import nodedata from '../../images/nodejs.pdf'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from './Footer';

export default function Classes() {

    return (
        <>
            <Grid container justifyContent='space-between' component={Paper}>
                <Grid
                    xs={12}
                    lg={4}
                    p={1}
                >
                    <CardMedia
                        component="img"
                        sx={{ width: '100%' }}
                        image={js}
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid
                    xs={12}
                    lg={4}
                    p={5}
                >
                    <Typography className="kanit" fontSize='25px'>React</Typography>
                    <Box>
                        <ul className='kanit'>
                            <li>Environment Setup</li>
                            <li>ES6 Modules</li>
                            <li>React Hooks</li>
                            <li>Graphical Representation of data</li>
                        </ul>
                        <Button
                            variant='outlined'
                            endIcon={<ArrowCircleDownIcon />}
                            sx={{ borderRadius: '50px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}
                        >
                            <a
                                className='kanit'
                                style={{
                                    textDecorationLine: 'none'
                                }}
                                href={reactdata}
                                download="React_Syllbus.pdf"
                            >Syllbus</a>
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    xs={12}
                    lg={4}
                    p={5}
                >
                    <Typography className="kanit" fontSize='25px'>Node</Typography>
                    <Box>
                        <ul className='kanit'>
                            <li>Environment Setup</li>
                            <li>Rest APIs</li>
                            <li>Establishing Database Connection</li>
                            <li>Deploying Server</li>
                        </ul>
                        <Button
                            variant='outlined'
                            endIcon={<ArrowCircleDownIcon />}
                            sx={{ borderRadius: '50px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}
                        >
                            <a
                                style={{
                                    textDecorationLine: 'none'
                                }}
                                className='kanit'
                                href={nodedata}
                                download="React_Syllbus.pdf"
                            >Syllbus</a>
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    xs={12}
                    lg={4}
                    p={2}
                    display='flex'
                    direction='column'
                    justifyContent='center'
                // alignItems='center'
                >
                    <Box>
                        <Typography className='kanit' color='blue' fontSize='20px'>
                            Free
                        </Typography>
                        <span className="kanit" style={{ fontSize: '13px' }}>Cloud Introduction and Tour Classes for</span>&ensp;
                        <span className="kanit" style={{ fontSize: '20px', color: 'blue' }}>First 10 Students.</span>
                        {/* <span className="kanit">Batch of 5 Students only !</span>  */}
                    </Box>
                    <Box>
                        <Typography className='kanit' color='blue'>
                            Online Classes
                        </Typography>
                        {/* <span className="kanit" style={{ fontSize: '13px' }}>Complete MERN Stack Course</span> */}
                        <span className="kanit" style={{ fontSize: '20px', color: '#880808' }}>at ₹ 3999 /-</span><br />
                        <span className="kanit">Batch of 5 Students only !</span>
                    </Box>
                </Grid>
                <Grid
                    xs={12}
                    p={2}
                    lg={2}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Button
                        variant='outlined'
                        endIcon={<WhatsAppIcon />}
                        className='kanit'
                        href='https://wa.me/7024899020'
                        sx={{ borderRadius: '50px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}
                    >
                        Connect
                    </Button>
                </Grid>
                {/* <Grid
                    xs={12}
                    lg={5}
                    p={2}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <img src={full} style={{ width: '100%' }} alt='full stack' />
                </Grid> */}
                <Grid
                    xs={12}
                    lg={6}
                    p={2}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <img src={vpc} style={{ width: '100%' }} alt='VPC' />
                </Grid>
            </Grid><br />
            <Footer />
        </>
    )
}