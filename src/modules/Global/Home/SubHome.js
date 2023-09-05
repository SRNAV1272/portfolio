import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import image from '../../../images/15.png'
import contact from '../../../images/contact.svg'
import nodejs from '../../../images/nodeJs.png'
import git from '../../../images/github.svg'
import js from '../../../images/react.png'
import db from '../../../images/db.svg'
import docker from '../../../images/docker.png'
import mui from '../../../images/mui.png'
import Footer from "../../Global/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SubHome() {
    const skills = [
        {
            icon: git,
            skill: 'Git',
            status: 'Intermediate'
        },
        {
            icon: nodejs,
            skill: "Nodejs",
            status: 'Intermediate'
        },
        {
            icon: js,
            skill: "Reactjs",
            status: 'Intermediate'
        },
        {
            icon: db,
            skill: "MongoDB",
            status: 'Intermediate'
        },
        {
            icon: docker,
            skill: 'Docker',
            status: 'Beginner'
        },
        {
            icon: mui,
            skill: 'Material UI',
            status: 'Intermediate'
        }
    ]

    return (
        <>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    py={window.innerWidth <= 768 ? 1 : 8}
                >
                    <Box
                        width={'100%'}
                        display={'flex'}
                        flexDirection={'column'}
                        px={2}
                        py={4}
                        justifyContent={'space-between'}
                    >
                        <Typography
                            variant='p'
                            fontWeight={'bold'}
                            sx={{
                                color: 'burlywood',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}
                            className='kanit'
                        >Software Engineer</Typography>
                        <Typography
                            variant='h6'
                            fontWeight={'bold'}
                            className='kanit'
                        >
                            Hey ! I Am
                        </Typography>
                        <Typography
                            variant='h4'
                            fontWeight={'bold'}
                            color={'lightslategray'}
                            className='kanit'
                        >
                            K Sai Rajesh
                        </Typography>
                        <Typography
                            variant='p'
                            fontSize={'12px'}
                            color={'Gray'}
                            className='kanit'
                            fontWeight={'bold'}
                        >
                            Am Indian based Software Developer passionate and experienced in building Web applications.
                        </Typography>
                        <Grid
                            xs={12}
                            py={3}
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Typography
                                variant='p'
                                fontSize={'12px'}
                                color={'Gray'}
                                className='kanit'
                                fontWeight={'bold'}
                            >7024899020</Typography>&emsp;
                            <Typography
                                variant='p'
                                fontSize={'12px'}
                                color={'Gray'}
                                className='kanit'
                                fontWeight={'bold'}
                            >sairajeshk17@gmail.com</Typography>&emsp;
                            <Button href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFXCgcH2_4oBgAAAYplTgbYidRj5khf6ARflPVZ_XFQHqo3E2dKSG6EdulXhjSPn_WwiDFMrzoCWSchX4d15q0EWkLX1k8WDk7w01mVGKStYsnm4mU3YQ3kDiMkHyyZnl5RCVA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsai-rajesh-k-539424255" >
                                <LinkedInIcon />
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
                <Grid
                    item
                    lg={6}
                    p={3}
                >
                    <img
                        src={image}
                        alt='diff'
                        width={'100%'}
                    />
                </Grid>
                <Grid
                    item
                    lg={6}
                    p={3}
                >
                    <img
                        src={contact}
                        alt='contact'
                        width={'100%'}
                    />
                </Grid>
                <Grid
                    item
                    lg={6}
                    py={window.innerWidth <= 768 ? 1 : 9}
                    display={'flex'}
                    direction={'column'}
                >
                    <Typography
                        variant='h4'
                        className='kanit'
                        fontWeight={'bold'}
                    >
                        Why hire Me ?
                    </Typography><br />
                    <Typography className='kanit' variant='p' sx={{ fontSize: '13px', fontWeight: 'bold' }}>I'm 25 years old creative <strong>SOFTWARE DEVELOPER</strong><strong>
                    </strong> based in <a href="https://goo.gl/maps/WGmDTgzrpYfMFhcN6"><strong> Hyderabad, India</strong></a>&nbsp;
                        specializing in User Interface Design and Development. I build clean, appealing, and functional interfaces which comply with the latest web standards
                        <span style={{ color: "#2ecc71" }}>.</span></Typography><br />
                    <Typography className='kanit' variant='p' sx={{ fontSize: '13px', fontWeight: '900', color: 'slategray' }}>
                        MERN Stack Developer
                    </Typography><br />
                    <Typography className='kanit' variant='p' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                        I'm currently working in Navajna Technology Pvt. ltd.
                    </Typography><br />
                </Grid>
            </Grid>
            <Divider />
            <Grid container py={4}>
                <Grid
                    item
                    xs={12}
                    display={'flex'}
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography variant="p" fontSize={'12px'} className="kanit" fontWeight={'bold'} color={'error'} >
                        MY SKILLS PROGRESS SO FAR
                    </Typography>
                    <Typography variant="h4" className="kanit" fontWeight={'bolder'}>
                        My Skills
                    </Typography>
                </Grid>
                {
                    skills.map((item, idx) => {
                        return (
                            <Grid
                                key={idx}
                                xs={12}
                                lg={4}
                                p={1}
                            >
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        py: 2
                                    }}
                                >
                                    <CardActionArea
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <CardContent>
                                            <Avatar src={item.icon} sizes="large" sx={{ color: 'grey' }} />
                                        </CardContent>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" className="kanit" fontWeight={'bold'} component="div">
                                                {item.skill}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button className="kanit" variant="outlined" sx={{ borderRadius: '50px', color: 'burlywood', fontWeight: 'bold' }} size="large" color="primary">
                                            {item.status}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
                <Footer />
            </Grid>
        </>
    )
}