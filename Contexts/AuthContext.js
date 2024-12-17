import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            if (user != null) {
                console.log('User is logged in');
                router.replace('/');
            } else {
                router.replace('/Login');
            }
        };

        checkAuth();
    }, [user]);

    const login = async (username) => {
        console.log('Logged in as ' + username);
        setUser(username);
        router.replace('/');
    };

    const logout = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;