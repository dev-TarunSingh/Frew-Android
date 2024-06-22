import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constonants/icons.js";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: color,
        }}
      />
      <Text
        style={{
          color: "black",
          fontSize: 15,
          fontWeight: `${focused ? "bold" : "normal"}`,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const MainLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFAA00",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.cart}
              color={color}
              focused={focused}
              name="Cart"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
