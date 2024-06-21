import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.warn("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.productslist}>
        {data.map((product, index) => (
          <TouchableOpacity style={styles.cards} key={index}>
            <View>
              <Image
                source={{ uri: product.image }}
                style={{
                  width: 400,
                  height: 200,
                  borderRadius: 16,
                  margin: 5,
                }}
              />
            </View>
            <View style={{ alignItems: "center", alignContent: "center" }}>
              <Text style={styles.prod_title}>{product.title}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={styles.price}>
                <Text style={styles.btnText1}>$ {product.price}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  productslist: {
    width: "100%",
    paddingTop: 0,
    padding: 10,
    flexGrow: 1,
    alignItems: "center",
  },
  cards: {
    backgroundColor: "#FFAA00",
    borderRadius: 16,
    alignContent: "center",
    margin: 10,
    padding: 10,
    width: "100%",
    elevation: 5,
  },
  prod_title: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
  },
  price: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 16,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 60,
    width: "45%",
    elevation: 5,
    margin: 5,
  },
  btn: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    borderRadius: 16,
    marginTop: 10,
    margin: 5,
    fontWeight: "bold",
    fontSize: 35,
    width: "45%",
    elevation: 5,
  },
  btnText1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "black",
  },
});

export default Products;
