import React from 'react';

const Cart: React.FC = () => {
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
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => addItem(1, 'Sample Item', 10)}>Add Sample Item</button>
        </div>
    );
};

export default Cart;