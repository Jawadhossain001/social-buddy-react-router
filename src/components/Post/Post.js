import React, { useEffect, useState } from 'react';
import { Button, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Post.css';
import { useHistory } from 'react-router-dom';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 60
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    avatar: {
      backgroundColor: red[500],
    },
    pos: {
      marginBottom: 12,
    }, 
  });

const Post = (props) => {
    const {id, title, body} = props.post;

    const classes = useStyles();
    const history = useHistory();
    
    const handleClick = (postDet) => {
        const url = `/post/${postDet}`;
        history.push(url);
    }
    
    return (
      <div>
    <Card className={classes.root}>
          <CardHeader
              avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                R
            </Avatar>
                }
              action={
            <IconButton aria-label="settings">
                  <MoreVertIcon />
            </IconButton>
                }
              title="Shrimp"
              subheader="September 14, 2020"
          />
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {body}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary">
            Share
        </Button>
        <Button size="small" color="primary" onClick={() => handleClick(id)}>
            See more
        </Button>
        </CardActions>
    </Card>
     </div>     
    );
}


export default Post;