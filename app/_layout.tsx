import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../Contexts/AuthContext";
import { ProductProvider } from "../Contexts/ProductContext";
import { CartProvider } from "../Contexts/CartContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="Register" options={{ headerShown: false }} />
            <Stack.Screen name="Search" options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" options={{ title: "Product Details" }} />
          </Stack>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}