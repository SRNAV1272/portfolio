import { Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import Footer from "./Footer";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AdjustIcon from '@mui/icons-material/Adjust';
import resume from '../../images/ksairajesh.png'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Experience() {

    const content = [
        {
            project: 'Pixofix',
            description: 'This project was designed to provides Image Editing services using a highly vetted team of in-house graphic designers and world-class automation tools.',
            points: [
                'Building a page that supports editing of image such as image annotation and saving the data points.',
                'Creating a aws lambda function for upload and download of the files.']
        },
        {
            project: 'Authentication',
            description: 'This project is developed for verifing mobile number through otp service.',
            points: [
                'Developed a mobile verification through sms otp verification.'
            ]
        },
        {
            project: 'NHAI POC',
            description: 'This project was an AI powered server that can analyse and serve the data about the Highway health, greenary and Vehicles count plus demographic details relayed by a drone inspecting the Highway.',
            points: ['Graphical Representation Data and Data Sorting', 'Data Sorting.']
        },
        {
            project: 'Crowd-Analytics',
            description: 'This project was designed with AI powered servers that can provide information about customers arriving and leaving the convenient store. Registered customers are displayed in notifications as loyal and new customers as new.',
            points: ['Bugs Fixing.', 'Routing of the pages.']
        },
    ]

    return (
        <>
            <Grid
                container
                id="my-node"
                component={Paper}
                elevation={5}
            >
                <Grid
                    xs={12}
                    p={3}
                    bgcolor={'#212934'}
                >
                    <Box
                        display={'flex'}
                        justifyContent={'end'}
                        alignItems={'center'}
                    >
                        <Button
                            sx={{
                                float: 'end'
                            }}
                            startIcon={<CloudDownloadIcon sx={{ color: "white", fontSize: "50px" }} />}
                            onClick={() => {
                                var link = document.createElement('a');
                                link.download = 'ksairajesh.jpeg';
                                link.href = resume;
                                link.click();
                            }} />
                    </Box>
                    <Typography
                        color={'white'}
                        variant="h3"
                        className="kanit"
                    >K Sai Rajesh</Typography>
                    <Typography
                        color={'#FA807F'}
                        variant="h6"
                        className="kanit"
                    >Software Developer (MERN Stack)</Typography>
                </Grid>
                <Grid
                    xs={12}
                    lg={3}
                    p={3}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <MailOutlineIcon />&ensp;
                    <Typography className="kanit">sairajeshk17@gmail.com</Typography>
                </Grid>
                <Grid
                    xs={12}
                    lg={3}
                    p={3}
                    display={'flex'}
                    alignItems={'center'}
                // justifyContent={'center'}
                >
                    <PhoneIcon />&ensp;
                    <Typography className="kanit">7024899020</Typography>
                </Grid>
                <Grid
                    xs={12}
                    lg={3}
                    p={3}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <LocationOnIcon />&ensp;
                    <Typography className="kanit">Madhapur, Hyderabad</Typography>
                </Grid>
                <Grid
                    xs={12}
                    lg={3}
                    p={3}
                    display={'flex'}
                    alignItems={'center'}
                // justifyContent={'center'}
                >
                    <LanguageIcon />&ensp;
                    <Typography className="kanit">www.ksairajesh.co.in</Typography>
                </Grid>
                <Grid
                    xs={12}
                    lg={8}
                    p={3}
                >
                    <Box
                        borderBottom={'2px solid #212934'}
                    >
                        <Typography variant="h4" className="kanit">Work Experience</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" className="kanit">Software Developer</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        width={'100%'}
                        py={2}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <CalendarMonthIcon />&ensp;
                            <Typography className="kanit" fontSize={'15px'} fontWeight={'bolder'}>June, 2022 - current</Typography>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <LocationOnIcon />&ensp;
                            <Typography className="kanit">Hi-Tech City, Hyderabad</Typography>
                        </div>
                    </Box>
                    {
                        content.map((item, idx) => {
                            return (
                                <>
                                    <Box>
                                        <Typography variant="h5"
                                            className="kanit"
                                            color={'#FA807F'}
                                            fontWeight={'bolder'}>{item.project}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography className="kanit" fontWeight={'bolder'}>{item.description}</Typography>
                                    </Box>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'space-between'}
                                        width={'100%'}
                                        py={2}
                                    >
                                        <nav aria-label="main mailbox folders">
                                            <List>
                                                {
                                                    item?.points?.map((key, idx) => {
                                                        return (
                                                            <>
                                                                <ListItem disablePadding key={idx}>
                                                                    <ListItemButton>
                                                                        <ListItemIcon>
                                                                            <AdjustIcon />
                                                                        </ListItemIcon>
                                                                        <ListItemText>
                                                                            <Typography className="kanit">{key}</Typography>
                                                                        </ListItemText>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </List>
                                        </nav>
                                        <Divider />
                                    </Box>
                                </>
                            )
                        })
                    }
                </Grid>
                <Grid
                    xs={12}
                    lg={4}
                    p={3}
                >
                    <Grid
                        xs={12}
                    >
                        <Box
                            borderBottom={'2px solid #212934'}
                        >
                            <Typography variant="h4" className="kanit">Career Objective</Typography>
                        </Box>
                        <Box
                            py={2}
                        >
                            <Typography className="kanit">
                                A motivated individual with in-depth knowledge of languages and development tools,
                                seeking a position in a growth-oriented company where I can use my skills to the advantage
                                of the company while having the scope to develop my own skills.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        xs={12}
                    >
                        <Box
                            borderBottom={'2px solid #212934'}
                        >
                            <Typography variant="h4" className="kanit">Skills</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            width={'100%'}
                            py={2}
                        >
                            <nav aria-label="main mailbox folders">
                                <List>
                                    {
                                        [
                                            "HTML, CSS, and JavaScript",
                                            "Visual Studio Code and Git",
                                            "ReactJS",
                                            "NodeJS",
                                            "MongoDB"
                                        ]?.map((key, idx) => {
                                            return (
                                                <>
                                                    <ListItem disablePadding key={idx}>
                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                <AdjustIcon />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <Typography className="kanit">{key}</Typography>
                                                            </ListItemText>
                                                        </ListItemButton>
                                                    </ListItem>
                                                </>
                                            )
                                        })
                                    }
                                </List>
                            </nav>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid
                        xs={12}
                    >
                        <Box
                            borderBottom={'2px solid #212934'}
                        >
                            <Typography variant="h4" className="kanit">Education</Typography>
                        </Box>
                        <Box
                            pt={2}
                        >
                            <Typography variant="h6" className="kanit">B.TECH</Typography>
                            <div
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FA807F' }}
                            >
                                <Typography className="kanit">Computer Science Engineering</Typography>
                                <Typography className="kanit">CSVTU</Typography>
                            </div>
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            width={'100%'}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <CalendarMonthIcon />&ensp;
                                <Typography className="kanit" fontSize={'15px'} fontWeight={'bolder'}>June, 2017 - April, 2021</Typography>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <LocationOnIcon />&ensp;
                                <Typography className="kanit">SSGI,SSTC, Bhilai</Typography>
                            </div>
                        </Box>


                        <Box
                            pt={2}
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            color={'#FA807F'}
                        >
                            <Typography variant="h6" className="kanit">12th</Typography>
                            <Typography className="kanit">CBSE</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            width={'100%'}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <CalendarMonthIcon />&ensp;
                                <Typography className="kanit" fontSize={'15px'} fontWeight={'bolder'}>June, 2015 - April, 2017</Typography>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <LocationOnIcon />&ensp;
                                <Typography className="kanit">Nirmal Vidyalaya, Jagdalpur</Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Grid><br />
            <Footer />
        </>
    )
}