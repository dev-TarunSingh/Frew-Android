import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import sampleProducts from "../SampleProducts";
import FeedCard from "../FeedCard";
import icons from "../../constonants/icons.js";
import MyCarousel from "../MyCarousel";




const Home = () => {
  

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Frew!</Text>
        </View>

        <MyCarousel />

        
        <View style={styles.productList}>
          {sampleProducts.map((product, index) => (
            <FeedCard
              key={index}
              project={product}
              title={product.title}
              description={product.description}
              accountName={product.accountName}
              price={product.price}
            />
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  bannerImage: {
    height: 200,
    resizeMode: "cover",
  },
  carouselContainer: {
    marginTop: 20,
  },
  productList: {
    padding: 10,
  },
});

export default Home;