import { useLocation, useRoutes } from "react-router-dom"
import { routingpaths } from "../../common/routingpaths"
import { useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

export default function Layout() {
    const { loading } = useSelector(state => state.MoviesReducers)
    const location = useLocation()
    useEffect(() => {
        document.title = location.pathname.split('/')[location.pathname.split('/').length - 1] === '' ? 'K Sai Rajesh' : location.pathname.split('/')[location.pathname.split('/').length - 1]?.toLocaleUpperCase()
    }, [location.pathname])
    const routes = useRoutes(routingpaths)
    return (
        <>
            {
                routes
            }
            < Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }
                }
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop >
        </>
    )
}