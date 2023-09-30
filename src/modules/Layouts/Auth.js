import { Navigate, Outlet } from "react-router-dom"
import DashboardLayout from "../Dashboard/DashboardLayout"
import { useSelector } from "react-redux"

export default function Auth() {

    const { login } = useSelector(state => state.LoginReducers)

    return (
        <>
            {
                login ?
                    <DashboardLayout>
                        <Outlet />
                    </DashboardLayout>
                    :
                    <Navigate to={'/login'} replace={true} />
            }
        </>
    )
}