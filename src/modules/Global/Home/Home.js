import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BottomNavigation, BottomNavigationAction, Button, Grid, Paper, SwipeableDrawer } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const icons = [<HomeIcon />, <ContactEmergencyIcon />, <SchoolIcon />, <LockOpenIcon />]
const links = [' ', 'experience', 'classes', 'login']

export default function Home() {
    const open = false;
    const navigate = useNavigate()
    const [value, setValue] = React.useState('home');

    // smaller screens
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    console.log('Show =>', process.env.NODE_ENV)

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, paddingX: '20px', paddingY: '60px' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {links.map((text, index) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? 'blue' : 'grey',
                                textDecorationLine: 'none'
                            }
                        }}
                        to={text === 'home' ? '/' : `/${text}`}
                    >
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText>
                                    <span style={{ fontWeight: 'bold' }}>{capitalizeFirstLetter(text)}</span>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider />
        </Box>
    );

    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white' }}>
                    <Toolbar>
                        {
                            window.innerWidth < 768 &&
                            <Button onClick={toggleDrawer('bottom', true)}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    // edge="start"
                                    sx={{
                                        ...(open && { display: 'none' }),
                                    }}
                                >
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>xing2</title>
                                        <path d="M4.862 6.319c-0.275 0-0.513 0.1-0.631 0.287-0.119 0.2-0.1 0.45 0.025 0.706l3.119 5.4c0.006 0.012 0.006 0.019 0 0.025l-4.9 8.662c-0.125 0.256-0.119 0.512 0 0.706 0.119 0.188 0.325 0.313 0.6 0.313h4.613c0.688 0 1.025-0.469 1.256-0.894 0 0 4.794-8.481 4.981-8.813-0.019-0.031-3.175-5.531-3.175-5.531-0.231-0.406-0.575-0.862-1.287-0.862h-4.6z"></path>
                                        <path d="M24.25 0c-0.688 0-0.988 0.431-1.238 0.881 0 0-9.944 17.631-10.269 18.212 0.019 0.031 6.556 12.031 6.556 12.031 0.231 0.406 0.581 0.881 1.288 0.881h4.613c0.275 0 0.494-0.106 0.613-0.294 0.125-0.2 0.119-0.456-0.012-0.712l-6.5-11.894c-0.006-0.012-0.006-0.019 0-0.031l10.219-18.069c0.125-0.256 0.131-0.512 0.012-0.713-0.119-0.188-0.337-0.294-0.613-0.294h-4.669z"></path>
                                    </svg>
                                </IconButton>
                            </Button>
                        }
                        <Grid
                            container
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Grid
                                xs={4}
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Button
                                    className='kanit'
                                    onClick={() => navigate('/')}
                                >K Sai Rajesh</Button>
                            </Grid>
                            {
                                window.innerWidth >= 768 &&
                                <Grid
                                    lg={6}
                                    display={'flex'}
                                    justifyContent={'end'}
                                    alignItems={'center'}
                                >
                                    {
                                        links.map((item, idx) => {
                                            return (
                                                <>
                                                    <NavLink
                                                        key={idx}
                                                        className={'kanit'}
                                                        style={({ isActive }) => {
                                                            return {
                                                                color: isActive ? 'burlywood' : 'grey',
                                                                textDecorationLine: 'none',
                                                                fontSize: '16px',
                                                                fontWeight: 'bold'
                                                            }
                                                        }}
                                                        // hrefLang={`#${item}`}
                                                        to={item === 'home' ? "" : `/${item}`}
                                                    >{capitalizeFirstLetter(item)}</NavLink>&emsp;&ensp;
                                                </>
                                            )
                                        })
                                    }
                                </Grid>
                            }
                        </Grid>
                    </Toolbar>
                </AppBar>

                <div>
                    <React.Fragment>
                        <SwipeableDrawer
                            anchor={'bottom'}
                            open={state['bottom']}
                            onClose={toggleDrawer('bottom', false)}
                            onOpen={toggleDrawer('bottom', true)}
                        >
                            {list('bottom')}
                        </SwipeableDrawer>
                    </React.Fragment>
                </div>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                </Drawer>
                <Main open={open} sx={{ height: `${window.innerHeight - 10}px`, overflow: 'auto', backgroundColor: 'whitesmoke' }}>
                    <DrawerHeader />
                    {
                        window.innerWidth < 768 &&
                        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={3}>
                            <BottomNavigation
                                showLabels
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                    navigate(`/${newValue}`)
                                }}
                            >
                                {
                                    links.map((item, index) => {
                                        return (
                                            <BottomNavigationAction key={index} color='inherit' value={item} icon={icons[index]} />

                                        )
                                    })
                                }
                            </BottomNavigation>
                        </Paper>
                    }
                    <Outlet />
                </Main>
            </Box>
        </>
    );
}