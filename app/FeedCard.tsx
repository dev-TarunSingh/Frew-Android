import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import icons from "../constonants/icons.js";

export default function FeedCard({ project, title, description, accountName, price }) {
  return (
    <TouchableOpacity style={styles.Posts_Box}>
      <View style={styles.textInfo}>
        <Text style={styles.Box_text}>{title}</Text>
        <Text style={styles.Box_desc}>
          {description}
        </Text>
      </View>
      <View style={styles.pills}>
        <View style={styles.pill}>
          <Image
            source={icons.AccountIcon}
            style={styles.accountImage}
            alt="account_img"
          />
          <Text>{accountName}</Text>
        </View>
        <View style={styles.price_pill}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }} >{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Posts_Box: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textInfo: {
    width: "100%",
    padding: 5,
  },
  Box_text: {
    fontSize: 23,
    fontWeight: "bold",
  },
  Box_desc: {
    fontSize: 16,
  },
  pills: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 5
  },
  pill: {
    backgroundColor: "#FFAA00",
    margin: 5,
    padding: 5,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    fontSize: 16,
    width: 40,
    height: 40,
    flex: 1,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  price_pill: {
    backgroundColor: "#FFAA00",
    margin: 5,
    padding: 5,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    width: 20,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    flex: 1
  },
  accountImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
