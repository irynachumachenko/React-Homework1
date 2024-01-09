import React, { useContext } from 'react';
import { UserInfoContext } from '../../App';

const UserCard = () => {
    const data = useContext(UserInfoContext);
    return (
        <div>
            <p>User name: {data.name}</p>
        </div>
    );
};

export default UserCard;
