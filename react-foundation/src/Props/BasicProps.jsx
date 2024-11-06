import React from 'react';

const BasicProps = ({user}) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.location}</h3>
        </div>
    );
};

const user = {
    name: 'Ovi',
    location: 'Pune'
}

const showData = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <BasicProps user = {user}></BasicProps>
        </div>
    )
}


export default showData;