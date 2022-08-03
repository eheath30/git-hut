import React, {createContext, useState} from 'react';


    const userData = "eheath30";

    export const UserContext = createContext();

    export const UserProvider = (props) => {
        const [user, setUser] = useState(userData)
        return (
            <UserContext.Provider value={[user, setUser]}>
                {props.children}
            </UserContext.Provider>
        )

    }
