import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";
import sampleFreelancingProjects from "../SampleFreeLancingProjects";
import FeedCard from "../FeedCard";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import icons from "../../constonants/icons.js";
import { Button } from "react-native-paper";

export default function Page() {
  
  return (
    <>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.header}>
          <Text style={{ color: "black", fontSize: 40, padding: 5 }}>
            Frew!
          </Text>
        </View>
        <Posts />
      </View>
    </>
  );
}
const Posts = () => {
    
  
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.productslist}>
        {sampleFreelancingProjects.map((project, index) => (
          <FeedCard
            key={index}
            project={project}
            title={project.title}
            description={project.description}
            accountName={project.accountName}
            price={project.price}
          />))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    borderBottomLeftRadius: 16,
    flexDirection: "row",
    borderBottomRightRadius: 16,
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
  productslist: {},
});
