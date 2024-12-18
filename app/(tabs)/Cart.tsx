import React from 'react';
import { Button, View, Text } from 'react-native';

const Cart = () => {
    const [items, setItems] = React.useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

    const addItem = (id: number, name: string, price: number) => {
        setItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { id, name, price, quantity: 1 }];
        });
    };

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <View>
            <Text>Shopping Cart</Text>
            <View>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <Button onPress={() => removeItem(item.id)} title="Remove" />
                    </li>
                ))}
            </View>
            <Text>Total: ${total.toFixed(2)}</Text>
            <Button title="Add Sample Item" onPress={() => addItem(1, 'Sample Item', 10)} />
        </View>
    );
};

export default Cart;