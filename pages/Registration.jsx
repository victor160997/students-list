import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Context from '../context/Context';

export default function Registration() {

  const context = useContext(Context);

  return (
    <View style={{ backgroundColor: 'red' }}>
      { console.log(context) }
      <Text>
        Matricular aluno
      </Text>
    </View>
  )
}
