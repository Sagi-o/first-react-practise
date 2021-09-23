import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email: string, password: string) => { },
});

const initialState = {
    isLoggedIn: false,
    onLogout: () => {
        console.log('Logout...');
    },
    onLogin: (email: string, password: string) => {
        console.log(`Login with ${email} and password: ${password}...`);
    },
}

export const AuthContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <AuthContext.Provider value={initialState}>{props.children}</AuthContext.Provider>
    );
};

export default AuthContext;