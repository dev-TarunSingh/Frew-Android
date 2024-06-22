import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import icons from "../../constonants/icons.js";

export default function Page() {
  const [dataloaded, setdataloaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
        setdataloaded(!dataloaded);
      } catch (error) {
        console.warn("Error fetching data: ", error);
        setData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={"#FFAA00"} />
        <View style={styles.header}>
          <Image source={icons.icon} style={styles.imageStyle} />
          <Text style={{ color: "white", fontSize: 40, padding: 10 }}>
            Frew!
          </Text>
        </View>
        <View>
          <Text style={styles.begin}>Available Products!</Text>
        </View>
        {dataloaded ? (
          <Products data={data} />
        ) : data === null ? (
          <Text>Can't Retrieve data, check your connection..</Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </>
  );
}

const Products = ({ data }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const navigation = useNavigation();

  const openProductDetails = (product) => {
    if (!product) {
      console.error("Product is undefined");
      return;
    }
    console.log("Navigating with product:", product);
    navigation.navigate('ProductDetails', { product } );
  }

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.productslist}>
        {data.map((product, index) => (
          <TouchableOpacity onPress={() => openProductDetails(product)} style={styles.cards} key={index}>
            <View>
              <Image
                source={{ uri: product.image }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 16,
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
              <TouchableOpacity
                onPress={() => addToCart(product)}
                style={styles.btn}
              >
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
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#FFAA00",
    borderBottomLeftRadius: 16,
    flexDirection: "row",
    borderBottomRightRadius: 16,
    elevation: 5,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    elevation: 5,
  },
  begin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    padding: 10,
    elevation: 5,
  },
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
