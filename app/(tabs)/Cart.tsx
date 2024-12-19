import React, { useContext } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CartContext from "../../Contexts/CartContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Cart = () => {
  const { cart, removeItem, totalAmount } = useContext(CartContext);
  const insets = useSafeAreaInsets();

  const confirmRemoveItem = (item: any) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from the cart?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => removeItem(item),
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: { id: number; title: string; price: number } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price ? item.price : "N/A"}</Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text onPress={() => confirmRemoveItem(item)} style={styles.btnText}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={{ paddingTop: insets.top }}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Cart</Text>
        <View style={styles.cartList}>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <TouchableOpacity style={styles.checkoutButton}>
            <Text
              onPress={() => console.log("Proceed to checkout")}
              style={styles.btnText}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalAmount}>Total: {totalAmount}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartList: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Cart;
