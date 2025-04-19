import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    return (
        <div style={{border:'1px solid blue'}}>
            <p style={{border:'1px solid green', margin:'4px'}}>{post.body}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
}

export default PostDetail; 