import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{border:'2px solid red', margin:'5px'}}>
            <h3>{id}.{title}</h3>
            <Link to={`/posts/${id}`}>Show details</Link>
            <button onClick={handleNavigate}>Details of-{id}</button>
        </div>
    );
}

export default Post;