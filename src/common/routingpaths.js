import { Outlet } from "react-router-dom";
import DashboardLayout from "../modules/Dashboard/DashboardLayout";
import Settings from "../modules/Dashboard/Settings/Settings";
import Account from "../modules/Dashboard/Account/Account";
import Payment from "../modules/Dashboard/Payment/Payment";
import Notification from "../modules/Dashboard/Notification/Notification";
import SignUp from "../modules/Global/SignUp";
import SignIn from "../modules/Global/SignIn";
import Home from "../modules/Global/Home/Home";
import SubHome from "../modules/Global/Home/SubHome";
import Work from "../modules/Global/Home/Work";
import DashboardHome from "../modules/Dashboard/Home/Home";
import Experience from "../modules/Global/Experience";
import Classes from "../modules/Global/Classes";

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
                path: 'work',
                element: <Work />
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