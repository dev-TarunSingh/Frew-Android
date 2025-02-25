import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken) {
                    const decodedProfile = jwtDecode(storedToken);
                    setUserProfile(decodedProfile);
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

    const login = async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
            const decodedProfile = jwtDecode(token);
            setUserProfile(decodedProfile);
            router.replace('/');
        } catch (error) {
            console.error('Failed to save user to storage:', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            setUserProfile(null);
            router.replace('/Login');
        } catch (error) {
            console.error('Failed to remove user from storage:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ userProfile, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;