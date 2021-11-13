import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Context from '../context/Context'

export default function List() {
  const context = useContext(Context);
  const { data } = context;
  return (
    <View style={{ backgroundColor: 'blue' }}>
      { data.length > 0 && data.map((d) => {
        return (
          <View key={ d.cpf } >
            <Text>{ d.nome }</Text>
            <Text>{ d.cpf }</Text>
            <Text>{ d.materia }</Text>
          </View>
        );
      })}
    </View>
  )
}
