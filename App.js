import React from 'react'
import { Text, View } from 'react-native'
import Provider from './context/Provider'
import List from './pages/List'
import Registration from './pages/Registration'

export default function App() {
  return (
    <View style={{ backgroundColor: 'pink' }}>
      <Text>oláaaaaaaaaaaaaaa</Text>
      <Registration />
      <List />
    </View>
  )
}
