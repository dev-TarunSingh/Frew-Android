import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AuthContext from "../Contexts/AuthContext";
import { useRouter } from "expo-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const router = useRouter();

  const handleSubmit = () => {
    login(email);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFAA00" style="dark" />
      <View style={styles.headText}>
        <Text style={styles.header}>Sign In</Text>
        <Text style={styles.breif}>
          Sign In to your account to continue using our app!
        </Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => router.replace("/Register")}
        >
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
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
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFAA00",
  },
  headText: {
    padding: 20,
    top: 80,
    position: "absolute",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    paddingTop: 32,
    borderRadius: 40,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    height: "70%",
  },
  header: {
    fontSize: 42,
    marginBottom: 16,
    fontWeight: "bold",
  },
  breif: {
    fontSize: 24,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 60,
    textAlign: "left",
    paddingLeft: 8,
    borderRadius: 50,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#e3e4e5",
  },
  btn: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 50,
    elevation: 10,
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    position: "absolute",
    top: 5,
    margin: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 20,
    elevation: 10,
    
  },
  linkText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Login;
