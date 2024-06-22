import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import icons from "../constonants/icons.js";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={Styles.BigText}>Frew </Text>
        <Text style={Styles.smallText}>Express Yourself, Freely.</Text>
      </View>
      <Image source={icons.gifIcon} style={Styles.gif} />
      <Link style={Styles.beginBtn} href="/Home">
        Let's Begin
      </Link>
    </View>
  );
};

const Styles = StyleSheet.create({
  beginBtn: {
    backgroundColor: "#FFAA00",
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: 200,
  },
  gif: {
    width: 200,
    height: 200,
    margin: 40,
  },
  BigText: {
    fontWeight: "bold",
    fontSize: 80,
  },
  smallText: {
    fontSize: 30,

  }
});

export default index;
