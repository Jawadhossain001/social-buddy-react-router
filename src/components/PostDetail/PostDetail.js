import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 50
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
            {/* <h3>This is Friend detail Component: {postDet}</h3> */}
            {/* <p>User Id: {post.userId}</p>
            <p>ID: {post.id}</p>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p> */}

            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="body2" component="p">
                        User Id: {post.userId}
                    </Typography><Typography gutterBottom variant="body2" component="p">
                        ID: {post.id}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.body}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            
            <h6>Comment: {comments.length}</h6>
            {
                comments.map(comment => <Comments comment={comment}></Comments> )
            }
            
        </div>
    );
};

export default PostDetail;