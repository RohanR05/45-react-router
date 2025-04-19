import React, { Suspense, useState } from 'react';
import { Link, useParams } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user})=>{

    const [showInfo,setShowInfo] = useState(false);
    const {name,id,username,email,phono} = user;

    const usersPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

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
            <Link to={`/users/${id}`}>SHow Deails</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'}detail Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading.......</span>}>
                    <UserDetails2 usersPromise={usersPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
}

export default User;