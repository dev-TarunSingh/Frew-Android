import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ProductDetails = () => {
  const route = useRoute();
  const { product } = route.params;

  if (!product) {
    return (
      <View>
        <Text>Product not found!</Text>
      </View>
    );
  } else {
    return (
      <>
        <GestureHandlerRootView>
          <ScrollView contentContainerStyle={styles.container}>
            <Image
              source={{ uri: product.image }}
              style={styles.ProductimageStyle}
            />
            <View style={styles.name}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>$ {product.price}</Text>
            </View>
            <View style={styles.desc}>
              <Text>{product.description}</Text>
              <View style={styles.btns}>
                <View style={styles.rating}>
                  <Text style={styles.count}>
                    Rated by: {product.rating.count}
                  </Text>
                </View>
                <View style={styles.rating}>
                  <Text style={styles.rate}>Rating: {product.rating.rate}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.addbtn}>
          <Text style={styles.add}>Add To Cart</Text>
        </TouchableOpacity>
        </GestureHandlerRootView>
        
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ProductimageStyle: {
    width: 300,
    height: 400,
  },
  name: {
    flexDirection: "column",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    backgroundColor: "#FFAA00",
  },
  desc: {
    flexDirection: "column",
    margin: 10,
    marginTop: 0,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    backgroundColor: "#FFAA00",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  rating: {
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    borderRadius: 16,
    alignItems: "center",
    elevation: 5,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginBottom: 0,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 50,
    width: 100,
    elevation: 5,
    marginTop: 10,
  },
  rate: {
    fontSize: 15,
    fontWeight: "bold",
    elevation: 5,
  },
  count: {
    fontSize: 15,
    fontWeight: "bold",
  },
    add: {
        color: "white",
        fontSize: 20,
    
  },
  addbtn: {
    backgroundColor: "black",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    elevation: 5,
  }
});

export default ProductDetails;
