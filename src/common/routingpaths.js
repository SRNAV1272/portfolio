import { Outlet } from "react-router-dom";
import DashboardLayout from "../modules/Dashboard/DashboardLayout";
import Settings from "../modules/Dashboard/Settings/Settings";
import Profile from "../modules/Dashboard/Profile/Profile";
import SignIn from "../modules/Global/SignIn";
import Home from "../modules/Global/Home/Home";
import SubHome from "../modules/Global/Home/SubHome";
import Work from "../modules/Global/Home/Work";
import DashboardHome from "../modules/Dashboard/Home/Home";
import Experience from "../modules/Global/Experience";
import Classes from "../modules/Global/Classes";
import Bill from "../modules/Dashboard/Bill/Bill";

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
    }
]