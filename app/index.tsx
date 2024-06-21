import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "./Products";
import frewPng from '../assets/frew-png.png';

export default function Page() {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFAA00"}
      />
      <View style={styles.header}>
      <Image source={frewPng} style={styles.imageStyle} />
        <Text style={{ color: "white", fontSize: 40, padding: 10 }}>Frew!</Text>
      </View>
      <View>
        <Text style={styles.begin}>Available Products!</Text>
      </View>
        <Products  />
      <TouchableOpacity
        onPress={() => console.log("Floating button pressed")}
        style={styles.floatingButton}
      >
        <Text style={styles.buttonText}>cart</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    borderBottomRightRadius: 16,
    elevation: 5, 
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    elevation: 5, 
  },
  begin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    padding: 10,
    elevation: 5, 
  },
  floatingButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
});
