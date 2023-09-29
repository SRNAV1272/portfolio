import { Snackbar, Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotifyOut } from "../../reducers/Slices/Notification";

export default function Notification() {
    const { msg, notify, type } = useSelector((state) => state.NotificationReducers);
    const dispatch = useDispatch()
    useEffect(() => {
        if (notify)
            setTimeout(() => { dispatch(NotifyOut()) }, 3000) // eslint-disable-next-line
    }, [notify])
    // console.log(type)
    return (
        <Snackbar
            open={notify}
            sx={{ width: '50%' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                variant="filled"
                severity={type}
            >
                {msg}
            </Alert>
        </Snackbar>
    );
};
