import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    msg: '',
    notify: false,
    type: 'info'
}

export const NotificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        Notify: (state, action) => {
            return {
                ...state,
                msg: action.payload.msg,
                notify: true,
                type: action.payload.type
            }
        },
        NotifyOut: (state) => {
            return {
                ...state,
                msg: '',
                notify: false,
                type: 'info'
            }
        }
    }
})
export const { Notify, NotifyOut } = NotificationSlice.actions
export default NotificationSlice.reducer