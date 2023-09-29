import { useLocation, useRoutes } from "react-router-dom"
import { routingpaths } from "../../common/routingpaths"
import { useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Notification from "./Notification";

export default function Layout() {
    const { load } = useSelector(state => state.LoadingReducers)
    const location = useLocation()
    useEffect(() => {
        document.title = location.pathname.split('/')[location.pathname.split('/').length - 1] === '' ? 'K Sai Rajesh' : location.pathname.split('/')[location.pathname.split('/').length - 1]?.toLocaleUpperCase()
    }, [location.pathname])
    const routes = useRoutes(routingpaths)
    return (
        <>
            <Notification />
            {
                routes
            }
            < Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }
                }
                open={load}
            >
                <CircularProgress color="inherit" />
            </Backdrop >
        </>
    )
}