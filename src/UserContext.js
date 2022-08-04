import React, { createContext, useState } from 'react';

let userData = "";
if (Math.random() < 0.5) {
    userData = 'eheath30'
} else {
    userData = 'allanstocco'
}


export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(userData)
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
