import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import AuthContext from '../Contexts/AuthContext';
import { useRouter } from 'expo-router';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const router = useRouter();

    const handleSubmit = () => {
        login(email);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign In</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress= {() => router.replace('/Register')}>
                <Text style={styles.linkText}>Don't have an account? Register</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        paddingLeft: 8,
        borderRadius: 50,
    },
    btn: {
        backgroundColor: '#FFAA00',
        padding: 5,
        borderRadius: 50,
        elevation: 10,
    },
    btnText: {
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 10,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    }
});

export default Login;