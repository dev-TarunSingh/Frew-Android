import {
  ListRenderItemInfo,
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import icons from "../constonants/icons";
import samplefeaturedProducts from "./SamplefeaturedProducts.js";

const screenWidth = Dimensions.get("window").width;

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.ImageBanner} source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.accountName}>{item.accountName}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

export default function MyCarouselFeatured() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.carouselContainer}>
        <FlatList
          data={samplefeaturedProducts}
          renderItem={renderItem}
          horizontal={false}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: screenWidth - 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  ImageBanner: {
    width: screenWidth - 60,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
  accountName: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFAA00",
  },
});