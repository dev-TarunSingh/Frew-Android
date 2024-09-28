import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import icons from "../constonants/icons.js";

const FeedCard = ({ project, title, description, accountName, price }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
        <View style={styles.pricePill}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textInfo: {
    width: "100%",
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  pills: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFAA00",
    padding: 5,
    borderRadius: 50,
  },
  pricePill: {
    backgroundColor: "#FFAA00",
    padding: 5,
    borderRadius: 50,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  accountImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

export default FeedCard;