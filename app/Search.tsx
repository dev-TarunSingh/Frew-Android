import React, { useState, useContext, useEffect } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { TextInput, View, Text, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProductContext from "../Contexts/ProductContext";
import offer1 from "@/assets/images/offer5.jpeg";
import offer2 from "@/assets/images/offer3.jpeg";
import offer3 from "@/assets/images/offer1.jpeg";

const Search = () => {
  const { products, loading } = useContext(ProductContext);
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (query === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [query, products]);

  const handleInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setQuery(event.nativeEvent.text);
  };

  const renderProduct = ({ item }: { item: { id: number, image: string, title: string } }) => (
    <View key={item.id} style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ paddingTop: insets.top, flex: 1 }}>
      <Text style={styles.header}>Search</Text>
      <TextInput
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={styles.searchInput}
      />
      <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productList}
        />
      )}
      </View>
      <ScrollView style={styles.offerContainer}>
        <Text style={styles.headerLine}>Offers</Text>
        <Image 
          source={offer1} 
          style={styles.offerImage} 
        />
        <Image 
          source={offer2} 
          style={styles.offerImage} 
        />
        <Image 
          source={offer3} 
          style={styles.offerImage} 
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  searchInput: {
    height: 50,
    borderColor: "gray",
    borderRadius: 8,
    margin: 10,
    fontSize: 16,
    backgroundColor: "white",
    paddingHorizontal: 8,
    elevation: 5,
  },
  productList: {
    padding: 10,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 5,
    width: "47%"
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
  offerContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 16,
    margin: 10,
    elevation: 5,
  },
  headerLine: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  offerImage: {
    marginBottom: 10,
    borderRadius: 24,
    width: "100%",
    elevation: 100,
    height: 150
  }
});

export default Search;