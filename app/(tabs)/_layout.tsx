import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import home from "../../assets/icons/home.png";
import cart from "../../assets/icons/cart.png";
import account from "../../assets/icons/account.png";
import homeFilled from "../../assets/icons/homeFilled.png";
import cartFilled from "../../assets/icons/cartFilled.png";
import accountFilled from "../../assets/icons/accountFilled.png";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === "index") {
            iconSource = focused ? homeFilled : home;
          } else if (route.name === "Cart") {
            iconSource = focused ? cartFilled : cart;
          } else if (route.name === "Account") {
            iconSource = focused ? accountFilled : account;
          }

          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: "#FFAA00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 10,
          margin: 10,
          borderRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: "Account",
        }}
      />
    </Tabs>
  );
}
