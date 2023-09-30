import { Avatar, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

export default function Profile() {

    return (
        <>
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                    lg={6}
                >
                    <Typography className="kanit" variant="h4">Profile</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    display={'flex'}
                    justifyContent={'end'}
                    alignItems={'center'}
                >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link className="kanit" underline="hover" color="inherit" href="/">
                            Dashboard
                        </Link>
                        <Typography color="text.primary" className="kanit">Profile</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid
                    xs={12}
                    lg={3}
                    mt={3}
                >
                    <Avatar
                        alt="Remy Sharp"
                        sx={{ width: 100, height: 100 }}
                    >
                        <LoginIcon />
                    </Avatar>
                </Grid>
                <Grid
                    xs={12}
                    lg={3}
                    mt={3}
                >
                    <Typography variant="h4" className="kanit">Student</Typography>
                </Grid>
            </Grid>
        </>
    )
}