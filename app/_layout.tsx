import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../Contexts/AuthContext';
import { ProductProvider } from '../Contexts/ProductContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProductProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
        <Stack.Screen name="Search" options={{ headerShown: false }} />
      </Stack>
      </ProductProvider>
    </AuthProvider>
  );
}