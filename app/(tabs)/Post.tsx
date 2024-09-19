import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";
import icons from "../../constonants/icons";

export default function Post() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    console.log("Input 1:", Title);
    console.log("Input 2:", Description);
    console.log("Input 3:", Name);
    console.log("Input 4:", price);
  };

  return (
    <>
      <GestureHandlerRootView>
        <View style={styles.header}>
          <Text style={{ color: "black", fontSize: 40, padding: 5 }}>Post</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.container}>
            <Image
              source={icons.FrewPost}
              style={{ width: "90%", height: 300, marginBottom: 20 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={Title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Describe Your Offer"
              value={Description}
              onChangeText={setDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={Name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Offer"
              value={price}
              keyboardType="numeric"
              onChangeText={setPrice}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
    paddingBottom: 100, // Add padding to the bottom
  },
  header: {
    width: "100%",
    borderBottomLeftRadius: 16,
    flexDirection: "row",
    borderBottomRightRadius: 16,
    top: 0,
  },
  input: {
    height: 40,
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: "white",
    elevation: 5,
  },
  button: {
    backgroundColor: "#FFAA00",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});