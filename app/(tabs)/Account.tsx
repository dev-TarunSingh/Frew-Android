import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthContext from "@/Contexts/AuthContext";

const Account = () => {
  const insets = useSafeAreaInsets();
  const userDetails = {
    name: "John Doe",
    email: "tarun@cgc.in",
    profilePicture:
      "https://i.pinimg.com/564x/a9/79/5a/a9795ab92d0ef1d2b9a807a4a67a9aed.jpg",
  };

  const capitalizeFirstLetter = (string: string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <View style={{ paddingTop: insets.top }}></View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: userDetails.profilePicture }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{capitalizeFirstLetter(user)}</Text>
          <Text style={styles.userEmail}>{userDetails.email}</Text>
        </View>
        <View >
          <TouchableOpacity onPress={() => Alert.alert("Server Unreachable! Try again later.")} style={styles.button}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => logout()}
           style={styles.button1}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "gray",
  },
  profileBtns: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    flex: 1,
  },
  button: {
    backgroundColor: "#FFAA00",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
    elevation: 5,
  },
  button1: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  postsSection: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  post: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postDescription: {
    fontSize: 14,
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Account;
