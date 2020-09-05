import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setPosts(data);
    })
    }, [])
    return (
        <div>
            <h1>This is Home</h1>
            <p>Post: {posts.length}</p>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;