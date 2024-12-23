import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Cart: undefined;
};

const Checkout = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFAA00" />
      <View style={{ paddingTop: insets.top }}></View>

      <View style={styles.container}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/b6/ca/09/b6ca0911d437228d182ffc4eb968e233.jpg",
          }}
          style={styles.tickImage}
        />
        <Text style={styles.message}>Order placed successfully!</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.homeButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  homeButtonText: {
    color: "#FFAA00",
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAA00",
  },
  tickImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 24,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Checkout;
