import React, {createContext, useState} from 'react';


    const userData = "Crowy92";

    export const UserContext = createContext();

    export const UserProvider = (props) => {
        const [user, setUser] = useState(userData)
        return (
            <UserContext.Provider value={[user, setUser]}>
                {props.children}
            </UserContext.Provider>
        )

    }
