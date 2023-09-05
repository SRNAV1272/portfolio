import { Outlet } from "react-router-dom";
import DashboardLayout from "../modules/Dashboard/DashboardLayout";
import Settings from "../modules/Dashboard/Settings/Settings";
import Account from "../modules/Dashboard/Account/Account";
import Payment from "../modules/Dashboard/Payment/Payment";
import Notification from "../modules/Dashboard/Notification/Notification";
import SignUp from "../modules/Global/SignUp";
import SignIn from "../modules/Global/SignIn";
import Footer from "../modules/Global/Footer";
import Home from "../modules/Global/Home/Home";
import SubHome from "../modules/Global/Home/SubHome";
import Work from "../modules/Global/Home/Work";
import DashboardHome from "../modules/Dashboard/Home/Home";
import Movies from "../modules/Movies/Movies";
import Experience from "../modules/Global/Experience";

export const routingpaths = [
    {
        path: '',
        element:
            <Home>
                <Outlet />
                <Footer />
            </Home>,
        children: [
            {
                path: '',
                element: <SubHome />
            },
            {
                path: 'work',
                element: <Work />
            },
            {
                path: 'experience',
                element: <Experience />
            }
        ]
    },
    {
        path: 'showcase',
        element:
            <Movies>
                <Outlet />
            </Movies>
    },
    {
        path: 'dashboard',
        element:
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>,
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
                path: 'account',
                element: <Account />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'notifications',
                element: <Notification />
            }
        ]
    },
    {
        path: 'signup',
        element: <SignUp />
    },
    {
        path: 'signin',
        element: <SignIn />
    }
]