import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const User = useLoaderData();

    const params = useParams();
    console.log(params)
    const {website,name} = User;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h3>Link:{website}</h3>
        </div>
    );
}

export default UserDetails;