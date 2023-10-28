import { Outlet } from "react-router-dom";
import Settings from "../modules/Dashboard/Settings/Settings";
import Profile from "../modules/Dashboard/Profile/Profile";
import SignIn from "../modules/Global/SignIn";
import Home from "../modules/Global/Home/Home";
import SubHome from "../modules/Global/Home/SubHome";
import DashboardHome from "../modules/Dashboard/Home/Home";
import Experience from "../modules/Global/Experience";
import Classes from "../modules/Global/Classes";
import Bill from "../modules/Dashboard/Bill/Bill";
import Auth from "../modules/Layouts/Auth";
import SignUp from "../modules/Global/SignUp";
import OTP from "../modules/Global/OTP";

export const routingpaths = [
    {
        path: '',
        element:
            <Home>
                <Outlet />
            </Home>,
        children: [
            {
                path: '',
                element: <SubHome />
            },
            {
                path: 'experience',
                element: <Experience />
            },
            {
                path: 'classes',
                element: <Classes />
            }
        ]
    },
    {
        path: 'dashboard',
        element:
            <Auth>
                <Outlet />
            </Auth>,
        children: [
            {
                path: 'home',
                element:
                    <DashboardHome>
                        <Outlet />
                    </DashboardHome>,
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'bill',
                element: <Bill />
            }
        ]
    },
    {
        path: 'login',
        element: <SignIn />
    },
    {
        path: 'signup',
        element: <SignUp />
    },
    {
        path: 'otp',
        element: <OTP />
    }
]