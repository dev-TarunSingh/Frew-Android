import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constonants/icons.js";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 5 }}>
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
          elevation: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
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
        name="Featured"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.AddIcon}
              color={color}
              focused={focused}
              name="Featured"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.AccountIcon}
              color={color}
              focused={focused}
              name="Account"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
