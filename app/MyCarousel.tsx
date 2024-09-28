import {
  ListRenderItemInfo,
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native-gesture-handler";
import icons from "../constonants/icons";

const screenWidth = Dimensions.get("window").width;

const carouselData = [
  {
    title: "Item 1",
    Image: icons.banner1,
  },
  {
    title: "Item 2",
    Image: icons.banner2,
  },
  {
    title: "Item 3",
    Image: icons.banner3,
  },
];

const renderItem = ({ item, index }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.ImageBanner} source={item.Image} />
    </View>
  );
};

export default function MyCarousel() {
  const flatListRef = useRef(null);
  const scrollIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndex.current = (scrollIndex.current + 1) % carouselData.length;
      flatListRef.current.scrollToIndex({
        animated: true,
        index: scrollIndex.current,
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBanner: {
    width: screenWidth - 20,
    height: 200,
    borderRadius: 10,
    elevation: 5,
    margin: 10,
  },
});
