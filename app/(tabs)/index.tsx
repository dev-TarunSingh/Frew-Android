import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigation } from '@react-navigation/native';
import ProductContext from "../../Contexts/ProductContext";
import CartContext from "../../Contexts/CartContext";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const { products, loading, refreshing, refreshProducts, error } =
    useContext(ProductContext);

  const { addItem, isInCart } = useContext(CartContext);

  const capitalizeFirstLetter = (string: string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const categories = ["Men", "Women", "Accessories", "Kids", "Shoes"];
  return (
    <>
      <StatusBar style="dark" />
      <View style={{ paddingTop: insets.top }}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Hi, {capitalizeFirstLetter(user)}</Text>
          <Text style={styles.title}>Let's find your new outfit Today?</Text>
          <TouchableOpacity
            style={styles.search}
            onPress={() => router.push("/Search")}
          >
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshProducts}
            />
          }
        >
          <View style={styles.categoryStack}>
            <Text style={styles.catText}>Categories</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.catPills}
            >
              {categories.map((category) => (
                <TouchableOpacity key={category} style={styles.Pill}>
                  <Text>{category}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#FFAA00"
              style={styles.loader}
            />
          ) : (
            <View>
              <Text style={styles.sectionTitle}>Featured Products</Text>
              <View style={styles.productList}>
                {products.map(
                  (product ) => (
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ProductDetails', { product })}
                      key={product.id}
                      style={styles.productCard}
                    >
                      <Image
                        source={{ uri: product.image }}
                        style={styles.productImage}
                      />
                      <Text style={styles.productName}>
                        {product.title.slice(0, 35)}
                      </Text>
                      <Text style={styles.productPrice}>
                        ₹ {product.price}
                      </Text>
                      <TouchableOpacity
                        onPress={() => addItem(product)}
                        style={{
                          backgroundColor: isInCart(product.id)
                            ? "gray"
                            : "#FFAA00",
                          padding: 10,
                          borderRadius: 10,
                          marginTop: 10,
                        }}
                        disabled={isInCart(product.id)}
                      >
                        <Text>
                          {isInCart(product.id) ? "Added" : "Add To Cart"}
                        </Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  )
                )}
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 24,
    marginTop: 10,
  },
  titleContainer: {
    gap: 8,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFAA00",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  categoryStack: {
    padding: 10,
  },
  catText: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  catPills: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Pill: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
    width: 100,
    alignItems: "center",
    margin: 5,
  },
  search: {
    padding: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 1000,
    fontSize: 16,
    justifyContent: "center",
  },
  loader: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 200,
  },
  productCard: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});
