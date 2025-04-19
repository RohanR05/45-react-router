import React, { use } from 'react';

const UserDetails2 = ({usersPromise}) => {
    const {name,username} = use(usersPromise);
    return (
        <div>
            <p><small>Username : {username}</small></p>
            <p>Name : {name}</p>
        </div>
    );
}

export default UserDetails2;