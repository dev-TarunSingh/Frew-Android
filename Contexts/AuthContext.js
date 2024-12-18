import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUser(storedUser);
                    console.log('User is logged in');
                    router.replace('/');
                } else {
                    router.replace('/Login');
                }
            } catch (error) {
                console.error('Failed to load user from storage:', error);
                router.replace('/Login');
            }
        };

        checkAuth();
    }, []);

    const login = async (username) => {
        try {
            await AsyncStorage.setItem('user', username);
            setUser(username);
            console.log('Logged in as ' + username);
            router.replace('/');
        } catch (error) {
            console.error('Failed to save user to storage:', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
            router.replace('/Login');
        } catch (error) {
            console.error('Failed to remove user from storage:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;