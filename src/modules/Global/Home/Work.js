import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import portfolio from '../../../images/portfolio.png'
import dashboard from '../../../images/dashboard.png'
import signin from '../../../images/signin.png'
import signup from '../../../images/signup.png'
import Showcase from '../../../images/Showcase.png'
import { Link } from "react-router-dom";

export default function Work() {
    const links = [
        {
            image: portfolio,
            work: 'Portfolio',
            navigate: '/',
            code: ''
        },
        {
            image: dashboard,
            work: 'Dashboard',
            navigate: '/dashboard/home',
            code: ''
        },
        {
            image: signup,
            work: 'Sign Up Page',
            navigate: '/signup',
            code: ''
        },
        {
            image: signin,
            work: 'Sign In Page',
            navigate: '/signin',
            code: ''
        },
        {
            image: Showcase,
            work: 'Movies Page',
            navigate: '/showcase',
            code: ''
        }
    ]

    return (
        <Grid container>
            <Grid
                xs={12}
                display={'flex'}
                direction={'column'}
                justifyContent={'end'}
                alignItems={'center'}
                borderBottom={'1px solid lightgray'}
            >
                <Typography
                    variant="h4"
                    className="kanit"
                    fontWeight={'bold'}
                    color={'saddlebrown'}
                >
                    Works
                </Typography>
            </Grid>
            {
                links.map((item, idx) => {
                    return (
                        <Grid
                            key={idx}
                            xs={12}
                            lg={4}
                            p={2}
                        >
                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography className="kanit" fontWeight={'bold'} gutterBottom variant="h5" component="div">
                                        {item.work}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'end',
                                        p: 2
                                    }}
                                >
                                    <Link to={item.navigate}>
                                        <Button size="medium" variant="outlined" className="kanit" sx={{ fontWeight: 'bold', borderRadius: '50px' }}>Navigate</Button>
                                    </Link>
                                    <Link to={item.code}>
                                        <Button size="medium" variant="outlined" className="kanit" sx={{ fontWeight: 'bold', borderRadius: '50px' }}>Code</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}