import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {postDet} = useParams();
    const [post, setPost] = useState({});
    // const [comments, setComments] = useState({});

    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/posts/${postDet}`);
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])
    return (
        <div>
            <h3>This is Friend detail Component: {postDet}</h3>
            <h4>User Id: {post.userId}</h4>
            <h5>ID: {post.id}</h5>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p>
            
            {/* {
                comments.map(comment => <Comments comment={comment}></Comments> )
            } */}
        </div>
    );
};

export default PostDetail;