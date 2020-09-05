import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { useHistory } from 'react-router-dom';

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
    pos: {
      marginBottom: 12,
    }, 
  });

const Post = (props) => {
    const {userId, id, title, body} = props.post;

    const classes = useStyles();
    const history = useHistory();
    
    const handleClick = (postDet) => {
        const url = `/post/${postDet}`;
        history.push(url);
    }
    
    return (
      <div>
    <Card className={classes.root}>
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