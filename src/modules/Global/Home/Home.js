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
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid, SwipeableDrawer, Typography } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

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
// const icons = [<HomeIcon />, <AccountCircleIcon />, <SettingsIcon />, <PaymentIcon />, <Notifications />]
const links = ['home', 'work', 'experience']

export default function Home() {
    const open = false;
    const navigate = useNavigate()

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
                                    <MenuIcon />
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
                                // border={'1px solid grey'}
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Typography
                                    className='kanit'
                                    fontWeight={'bold'}
                                    color={'slateblue'}
                                >
                                    K Sai Rajesh
                                </Typography>
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
                    <Outlet />
                </Main>
            </Box>
        </>
    );
}