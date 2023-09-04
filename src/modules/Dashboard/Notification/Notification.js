import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Notification() {
    const navigate = useNavigate()

    return (
        <>
            <Button
                variant='outlined'
                onClick={() => {
                    navigate('/dashboard/notifications')
                }}
            >
                Notification
            </Button>
        </>
    )
}
