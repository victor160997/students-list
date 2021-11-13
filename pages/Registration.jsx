import React, { useContext, useState } from 'react'
import { Text, TextInput, View, Picker, Button } from 'react-native'
import Context from '../context/Context';

export default function Registration() {

  const context = useContext(Context);
  const { data, setData } = context;

  const [studentInfos, setInfos] = useState({
    nome: '',
    cpf: '',
    materia: 'Java',
  });

  return (
    <View style={{ backgroundColor: 'red' }}>
      <TextInput
        type="text"
        value={ studentInfos.nome }
        onChangeText={ text => setInfos({
          ...studentInfos,
          nome: text,
        }) }
        style={{ backgroundColor: 'pink' }}
      />
      <TextInput
        keyboardType="numeric"
        value={ studentInfos.cpf }
        onChangeText={ text => setInfos({
          ...studentInfos,
          cpf: text,
        }) }
        style={{ backgroundColor: 'green' }}
      />
      <Picker
        selectedValue={ studentInfos.materia }
        style={{ height: 50, width: 150 }}
        onValueChange={ (item) => setInfos({
          ...studentInfos,
          materia: item,
        }) }
      >
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="JavaScript" value="JavaScript" />
      </Picker>
      <Button
        title="Registrar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={ () => {
          setData([...data, {
            nome: studentInfos.nome,
            cpf: studentInfos.cpf,
            materia: studentInfos.materia,
          }]);
          setInfos({
            nome: '',
            cpf: '',
            materia: 'Java',
          });
        }}
      />
    </View>
  )
}
