import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AuthContext from '../../Contexts/AuthContext';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={styles.titleContainer}>
        <Text>Home</Text>
        <Text>{user}</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>To get started, edit app/(tabs)/index.tsx</Text>
        <Text>Press Cmd + R to reload</Text>
        <Text>Learn More</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});