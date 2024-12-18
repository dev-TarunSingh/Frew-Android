import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthContext from "../../Contexts/AuthContext";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useContext(AuthContext);
  return (
    <>
      <View style={{ paddingTop: insets.top }}> </View>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>Hi, {user}</Text>

        <Text style={styles.title}>Let's find your new outfit Today?</Text>
        <TextInput placeholder="Search" style={styles.search} />
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
    padding: 10,
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  search: {
    padding: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
    fontSize: 16,
  },
});
