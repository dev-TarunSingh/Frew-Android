import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import  AuthContext  from "../../Contexts/AuthContext"

const UserPage = () => {
    const { user } = useContext(AuthContext);

    const userDetail = {
        name: {user},
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
        bio: 'Software developer with a passion for creating amazing applications.'
    };

    

    return (
        <View style={styles.container}>
            <Image source={{ uri: userDetail.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{user}</Text>
            <Text style={styles.email}>{userDetail.email}</Text>
            <Text style={styles.bio}>{userDetail.bio}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    email: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10
    },
    bio: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center'
    }
});

export default UserPage;