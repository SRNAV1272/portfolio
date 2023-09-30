import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Button, Grid, ListItemText, Paper, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Logout, Notifications } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/Slices/SignIn';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const icons = [<HomeIcon />, <PaymentIcon />, <AccountCircleIcon />, <SettingsIcon />, <Notifications />]

export default function DashboardLayout() {

    const theme = useTheme();
    const [value, setValue] = React.useState('home');
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.LoginReducers)
    const navList = ['home', 'bill']
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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

    // const list = (anchor) => (
    //     <Box
    //         sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, paddingX: '20px', paddingY: '60px' }}
    //         role="presentation"
    //         onClick={toggleDrawer(anchor, false)}
    //         onKeyDown={toggleDrawer(anchor, false)}
    //     >
    //         <List>
    //             {['home', 'account', 'settings', 'payment', 'notifications'].map((text, index) => (
    //                 <NavLink
    //                     style={({ isActive }) => {
    //                         return {
    //                             color: isActive ? 'blue' : 'grey',
    //                             textDecorationLine: 'none'
    //                         }
    //                     }}
    //                     to={`/dashboard/${text}`}
    //                 >
    //                     <ListItem key={text} disablePadding>
    //                         <ListItemButton>
    //                             <ListItemIcon
    //                                 sx={{
    //                                     color: 'inherit'
    //                                 }}
    //                             >
    //                                 {icons[index]}
    //                             </ListItemIcon>
    //                             <ListItemText>
    //                                 <span style={{ fontWeight: 'bold' }}>{capitalizeFirstLetter(text)}</span>
    //                             </ListItemText>
    //                         </ListItemButton>
    //                     </ListItem>
    //                 </NavLink>
    //             ))}
    //         </List>
    //         <Divider />
    //     </Box>
    // );

    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    {
                        window.innerWidth >= 768 ?
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            :
                            <Button onClick={toggleDrawer('left', true)} sx={{ color: 'white' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    // edge="start"
                                    sx={{
                                        ...(open && { display: 'none' }),
                                    }}
                                >
                                    {/* <MenuIcon /> */}
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>xing2</title>
                                        <path d="M4.862 6.319c-0.275 0-0.513 0.1-0.631 0.287-0.119 0.2-0.1 0.45 0.025 0.706l3.119 5.4c0.006 0.012 0.006 0.019 0 0.025l-4.9 8.662c-0.125 0.256-0.119 0.512 0 0.706 0.119 0.188 0.325 0.313 0.6 0.313h4.613c0.688 0 1.025-0.469 1.256-0.894 0 0 4.794-8.481 4.981-8.813-0.019-0.031-3.175-5.531-3.175-5.531-0.231-0.406-0.575-0.862-1.287-0.862h-4.6z"></path>
                                        <path d="M24.25 0c-0.688 0-0.988 0.431-1.238 0.881 0 0-9.944 17.631-10.269 18.212 0.019 0.031 6.556 12.031 6.556 12.031 0.231 0.406 0.581 0.881 1.288 0.881h4.613c0.275 0 0.494-0.106 0.613-0.294 0.125-0.2 0.119-0.456-0.012-0.712l-6.5-11.894c-0.006-0.012-0.006-0.019 0-0.031l10.219-18.069c0.125-0.256 0.131-0.512 0.012-0.713-0.119-0.188-0.337-0.294-0.613-0.294h-4.669z"></path>
                                    </svg>
                                </IconButton>
                            </Button>
                    }
                    <div style={{ width: '300px' }}>
                        <Typography className='kanit'>Hello, {name}</Typography>
                    </div>
                    <Grid
                        container
                        display={'flex'}
                        justifyContent={'end'}
                    >
                        {/* <Grid
                            xs={3}
                            sm={3}
                            lg={1}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={"center"}
                        >
                            <Badge badgeContent={0} color="primary" sx={{ cursor: 'pointer' }}>
                                <Notifications className='bell' />
                            </Badge>
                        </Grid> */}
                        <Grid
                            xs={4}
                            sm={4}
                            lg={1}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={"center"}
                        >
                            <Button
                                variant='outlined'
                                sx={{ border: '2px solid white', color: 'white', borderRadius: '50px' }}
                                onClick={() => { dispatch(logout()); navigate('/login') }}
                            >
                                {window?.innerWidth <= 550 ? <Logout /> : 'logout'}
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* <div>
                <React.Fragment>
                    <SwipeableDrawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {list('left')}
                    </SwipeableDrawer>
                </React.Fragment>
            </div> */}
            <Divider />

            <Drawer
                sx={{
                    display: `${window.innerWidth >= 768 ? 'block' : 'none'}`,
                }}
                variant="permanent"
                open={open}
            >
                <DrawerHeader sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '50px' }}>
                    {
                        theme.direction !== 'rtl' &&
                        // <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 36 32" fill="none" class="css-1170n61"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>xing2</title>
                            <path d="M4.862 6.319c-0.275 0-0.513 0.1-0.631 0.287-0.119 0.2-0.1 0.45 0.025 0.706l3.119 5.4c0.006 0.012 0.006 0.019 0 0.025l-4.9 8.662c-0.125 0.256-0.119 0.512 0 0.706 0.119 0.188 0.325 0.313 0.6 0.313h4.613c0.688 0 1.025-0.469 1.256-0.894 0 0 4.794-8.481 4.981-8.813-0.019-0.031-3.175-5.531-3.175-5.531-0.231-0.406-0.575-0.862-1.287-0.862h-4.6z"></path>
                            <path d="M24.25 0c-0.688 0-0.988 0.431-1.238 0.881 0 0-9.944 17.631-10.269 18.212 0.019 0.031 6.556 12.031 6.556 12.031 0.231 0.406 0.581 0.881 1.288 0.881h4.613c0.275 0 0.494-0.106 0.613-0.294 0.125-0.2 0.119-0.456-0.012-0.712l-6.5-11.894c-0.006-0.012-0.006-0.019 0-0.031l10.219-18.069c0.125-0.256 0.131-0.512 0.012-0.713-0.119-0.188-0.337-0.294-0.613-0.294h-4.669z"></path>
                        </svg>
                    }
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {navList.map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? 'blue' : 'grey',
                                        textDecorationLine: 'none',
                                    }
                                }}
                                to={`/dashboard/${text}`}
                            >
                                <ListItemButton
                                    sx={{
                                        color: 'inherit',
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            color: 'inherit',
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {icons[index]}
                                    </ListItemIcon>
                                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                        <span style={{ fontWeight: 'bold' }}>{capitalizeFirstLetter(text)}</span>
                                    </ListItemText>
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'whitesmoke', height: `${window.innerHeight - 3}px`, overflow: 'auto' }}>
                <DrawerHeader />
                {
                    window.innerWidth < 768 &&
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={3}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                navigate(`/dashboard/${newValue}`)
                            }}
                        >
                            {
                                navList.map((item, index) => {
                                    return (
                                        <BottomNavigationAction key={index} color='inherit' value={item} icon={icons[index]} />

                                    )
                                })
                            }
                        </BottomNavigation>
                    </Paper>
                }
                <Outlet />
            </Box>
        </Box>
    );
}