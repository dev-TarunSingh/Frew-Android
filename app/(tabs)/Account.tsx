import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import icons from "../../constonants/icons";

const Account = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture:
      "https://i.pinimg.com/564x/a9/79/5a/a9795ab92d0ef1d2b9a807a4a67a9aed.jpg",
    rating: 4.5,
    projectsDone: 10,
  };

  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", description: "Description for post 1" },
    { id: 2, title: "Post 2", description: "Description for post 2" },
    { id: 3, title: "Post 3", description: "Description for post 3" },
  ]);

  const deletePost = (postId) => {
    Alert.alert("Delete Post", "Are you sure you want to delete this post?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: () => setPosts(posts.filter((post) => post.id !== postId)),
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: user.profilePicture }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.userRating}>Rating: {user.rating} ⭐</Text>
        <Text style={styles.projectsDone}>
          Projects Done: {user.projectsDone}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.Password} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.Edit} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={icons.Logout} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Your Posts</Text>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postDescription}>{post.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deletePost(post.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
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
    width: 100,
    height: 100,
    borderRadius: 50,
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
  userRating: {
    fontSize: 16,
    marginTop: 10,
  },
  projectsDone: {
    fontSize: 16,
    marginTop: 5,
  },
  profileBtns: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    flex: 1,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FFAA00",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
    elevation: 5

  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
