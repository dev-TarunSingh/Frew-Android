import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import CartContext from "../../Contexts/CartContext";
import { router } from "expo-router";
import { useRoute } from '@react-navigation/native';

const Cart = () => {
    const route = useRoute();
  const { cart, removeItem, totalAmount, setCart } = useContext(CartContext);
  const navigation = useNavigation();

  const confirmRemoveItem = (item) => {
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

  const handleCheckout = () => {
    setCart([]);
    navigation.replace('Checkout');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.title}</Text>
      <Text style={styles.itemPrice}>${Number(item.price).toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text onPress={() => confirmRemoveItem(item)} style={styles.btnText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <View style={styles.cartList}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartList: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Cart;