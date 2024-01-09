import React, {createContext} from 'react';

export const UserContext = createContext(null);

const UserInfoContext = ({children}) => {
    const userInfo = {
        name: 'Joe',
        age: '18',
    };
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserInfoContext;
