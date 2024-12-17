import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AuthContext from "../Contexts/AuthContext";
import { useRouter } from "expo-router";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const router = useRouter();

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("https://frew-backend.onrender.com/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("here");
        console.log(res.data);
        login(res.data.username);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response:", error.response.data);
          alert(`Error: ${error.response.data.message}`);
        } else if (error.request) {
          console.error("Error request:", error.request);
          alert("Error: No response from server.");
        } else {
          console.error("Error message:", error.message);
          alert(`Error: ${error.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => router.replace("/Register")}
      >
        <Text style={styles.linkText}>Register</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#FFAA00" style="dark" />
      <View style={styles.headText}>
        <Text style={styles.header}>Sign In</Text>
        <Text style={styles.breif}>
          Sign In to your account to continue using our app!
        </Text>
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
        <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.btnText}>Login</Text>
          )}
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    height: "50%",
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
    paddingStart: 20,
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
    top: 40,
    margin: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  linkText: {
    color: "#FFAA00",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Login;