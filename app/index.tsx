import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    }}>   
        
      <Text>index</Text>
      <Link options={{headerShown: false}} href="/Home">Go to Home</Link>
    </View>
  )
}

export default index