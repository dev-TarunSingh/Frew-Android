import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CartContext from '../Contexts/CartContext';

const ProductDetails = () => {
  const route = useRoute();
  const { product } = route.params;
  const { addItem, isInCart } = useContext(CartContext);

  const rating = product.rating.rate.$numberDecimal || product.rating.rate;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>₹ {product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productCategory}>Category: {product.category}</Text>
      <Text style={styles.productRating}>Rating: {rating} ({product.rating.count} reviews)</Text>
      <Text style={styles.productDistance}>Distance: {product.distance} km</Text>
      <Text style={styles.productSupplier}>Supplier: {product.supplier}</Text>
      <TouchableOpacity
        onPress={() => addItem(product)}
        style={[styles.addButton, isInCart(product.id) && styles.addedButton]}
        disabled={isInCart(product.id)}
      >
        <Text style={styles.addButtonText}>{isInCart(product.id) ? "Added to Cart" : "Add to Cart"}</Text>
      </TouchableOpacity>
      <View style={styles.reviewBox}>
      <Text style={styles.reviewsTitle}>Reviews:</Text>
      {product.reviews.map((review: { _id: React.Key | null | undefined; username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
        <View key={review._id} style={styles.reviewContainer}>
          <Text style={styles.reviewUsername}>{review.username}</Text>
          <Text style={styles.reviewComment}>{review.comment}</Text>
        </View>
      ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  productRating: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  productDistance: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  productSupplier: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#FFAA00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addedButton: {
    backgroundColor: 'gray',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  reviewUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewComment: {
    fontSize: 14,
    color: 'gray',
  },
  reviewBox:{
    marginBottom: 20,
  }
});

export default ProductDetails;