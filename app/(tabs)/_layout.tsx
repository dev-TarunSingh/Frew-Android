import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Cart',
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
        }}
      />
    </Tabs>
  );
}