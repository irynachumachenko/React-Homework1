import React, { useContext } from 'react';
import { UserContext } from '../../context/UserInfoContext';

const UserCard = () => {
    const data = useContext(UserContext);
    return (
        <div>
            <p>User name: {data.name}</p>
        </div>
    );
};

export default UserCard;
