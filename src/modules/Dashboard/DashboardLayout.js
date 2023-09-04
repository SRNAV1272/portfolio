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
import { Badge, Button, Grid, ListItemText, SwipeableDrawer } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Logout, Notifications } from '@mui/icons-material';

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

const icons = [<HomeIcon />, <AccountCircleIcon />, <SettingsIcon />, <PaymentIcon />, <Notifications />]

export default function DashboardLayout() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
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

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, paddingX: '20px', paddingY: '60px' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['home', 'account', 'settings', 'payment', 'notifications'].map((text, index) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? 'blue' : 'grey',
                                textDecorationLine: 'none'
                            }
                        }}
                        to={`/dashboard/${text}`}
                    >
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit'
                                    }}
                                >
                                    {icons[index]}
                                </ListItemIcon>
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
                                    <MenuIcon />
                                </IconButton>
                            </Button>
                    }
                    <Grid
                        container
                        display={'flex'}
                        justifyContent={'end'}
                    >
                        <Grid
                            xs={2}
                            sm={2}
                            lg={1}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={"center"}
                        >
                            <Badge badgeContent={0} color="primary" sx={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard/notifications')}>
                                <Notifications className='bell' />
                            </Badge>
                        </Grid>
                        <Grid
                            xs={2}
                            sm={2}
                            lg={1}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={"center"}
                        >
                            <Button
                                variant='outlined'
                                sx={{ border: '2px solid white', color: 'white', borderRadius: '50px' }}
                                onClick={() => navigate('/')}
                            >
                                {window?.innerWidth <= 550 ? <Logout /> : 'logout'}
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <div>
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
            </div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 36 32" fill="none" class="css-1170n61"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
                    }
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['home', 'account', 'settings', 'payment', 'notifications'].map((text, index) => (
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
                <Outlet />
            </Box>
        </Box>
    );
}