import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import CartContext from "../../Contexts/CartContext";

const Cart = () => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <View>
            <Text>Shopping Cart</Text>
            <View>
                {cart.map(item  => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <Button onPress={() => removeFromCart(item.id)} title="Remove" />
                    </li>
                ))}
            </View>
            <Text>Total: ${total.toFixed(2)}</Text>
        </View>
    );
};

export default Cart;