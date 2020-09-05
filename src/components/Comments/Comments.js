import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postDet} = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/comments/${postDet}`);
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
    }, []);
    return (
        <div>
            <h1>This is Comments: {comment.length}</h1>
            
        </div>
    );
};

export default Comments;