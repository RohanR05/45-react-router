import React from 'react';

const User = ({user})=>{
    const {name,id,username,email,phono} = user;
    const style = {
        border:'2px solid blue',
        borderRadius:'20px',
        padding:'10px',
        margin:'5px'
    }
    return (
        <div style={style}> 
            <h3>Name : {name}</h3>
            <p>Email  :{email}</p>
            <p>User Name : {username}</p>
        </div>
    );
}

export default User;