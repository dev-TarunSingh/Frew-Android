import Recat from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
    const { product } = route.params;
    
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{ color: "white", fontSize: 40, padding: 10 }}>Frew!</Text>
        </View>
        <View style={styles.product}>
            <Image
            source={{ uri: product.image }}
            style={{
                width: 400,
                height: 200,
                borderRadius: 16,
                margin: 5,
            }}
            />
            <Text style={styles.prod_title}>{product.title}</Text>
            <Text style={styles.prod_desc}>{product.description}</Text>
            <Text style={styles.prod_price}>$ {product.price}</Text>
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        width: "100%",
        backgroundColor: "#FFAA00",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    product: {
        alignItems: "center",
        alignContent: "center",
    },
    prod_title: {
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left",
    },
    prod_desc: {
        marginBottom: 5,
        fontSize: 16,
        textAlign: "left",
    },
    prod_price: {
        marginBottom: 5,
        fontSize: 16,
        textAlign: "left",
    },
    btn: {
        backgroundColor: "black",
        color: "white",
        padding: 10,
        borderRadius: 16,
        margin: 5,
    },
    btnText: {
        color: "white",
    },
});

export default ProductDetails;