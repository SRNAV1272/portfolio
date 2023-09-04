import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function MoviesCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    const { movie } = props
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(props)

    return (
        <Card>
            <CardMedia
                component="img"
                height="400"
                image={movie?.poster}
                alt={movie?.title}
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Typography paragraph className='kanit'>
                        {movie?.title}
                    </Typography>
                    <Typography paragraph className='kanit'>
                        {new Date(movie?.released).getDate()}&ensp;{month[new Date(movie?.released).getMonth() - 1]}&ensp;{new Date(movie?.released).getFullYear()}
                    </Typography>
                    <Typography paragraph className='kanit'>
                        {movie?.genres[0]}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography paragraph className='kanit'>
                        imdb : {movie?.imdb?.rating} / Votes :{movie?.imdb?.votes}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography paragraph className='kanit'>
                        Director : {movie?.directors[0]}
                    </Typography>
                    <Typography paragraph className='kanit'>
                        {movie?.countries[0]}
                    </Typography>
                </Box>
                <Typography variant="body2" className='kanit' color="text.secondary">
                    {
                        movie?.plot
                    }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className='kanit'>
                        {movie?.plot}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}