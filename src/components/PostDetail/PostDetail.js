import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faGrin } from '@fortawesome/free-solid-svg-icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import { Button, IconButton, CardActions, CardHeader, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 20
    },
    title: {
      fontSize: 1,
    },
    pos: {
      fontSize: 15,
      color: 'blue',
      marginRight: 450
    },
    avatar: {
        backgroundColor: red[500],
      },
    
    inp: {
        marginBottom: 30,
        width: '70%',
        height: 30,
        borderRadius: 20
    },
    btn: {
        marginLeft: 10
    }
  });

const PostDetail = () => {
    const {postDet} = useParams();
    const classes = useStyles();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        showPost();
        showComment();
    }, [])

    const showPost = () => {
        const url = (`https://jsonplaceholder.typicode.com/posts/${postDet}`);
        fetch(url)
        .then(res => res.json())
        .then(postData => {
            // console.log(postData);
            setPost(postData);
        })
        };

    const showComment = () => {
        const url = (`https://jsonplaceholder.typicode.com/comments?postId=${postDet}`);
        fetch(url)
        .then(res => res.json())
        .then(commentData => {
            // console.log(commentData);
            setComments(commentData);
        });
    };
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader className={classes.titHeader}
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
                <Typography gutterBottom variant="body2" component="p">
                        ID: {post.id}
                </Typography>
                <Typography gutterBottom variant="h4" component="h2">
                        {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                        {post.body}
                </Typography>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardContent>
            </CardActionArea>
        </Card>
            
            <CardContent className={classes.pos}>
                <h6>Comment: {comments.length}</h6>
            </CardContent>
            {
                comments.map(comment => <Comments comment={comment}></Comments> )
            }
            <CardContent >
                <input className={classes.inp} placeholder="write a reply" type="text"/>
                {/* <FontAwesomeIcon icon={ faGift } /> 
                <FontAwesomeIcon icon={ faGrin } /> */}
                <Button className={classes.btn} variant="contained" color="primary">
                    comment
                </Button>
            </CardContent>
        </div>
    );
};

export default PostDetail;