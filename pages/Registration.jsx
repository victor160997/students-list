import React, { useContext, useState } from 'react'
import { Picker, StyleSheet } from 'react-native'
import Context from '../context/Context';
import { BodyRegistration, styleComponent, StyledButton, StyledPicker, StyledTextInput } from './RegistrationStyle';
import { Button } from 'react-native-elements';

export default function Registration() {

  const context = useContext(Context);
  const { data, setData } = context;

  const [studentInfos, setInfos] = useState({
    nome: '',
    cpf: '',
    materia: 'Java',
  });

  return (
    <BodyRegistration>
      <StyledTextInput
        type="text"
        value={ studentInfos.nome }
        onChangeText={ text => setInfos({
          ...studentInfos,
          nome: text,
        }) }
        placeholder="Nome do aluno"
      />
      <StyledTextInput
        keyboardType="numeric"
        value={ studentInfos.cpf }
        onChangeText={ text => setInfos({
          ...studentInfos,
          cpf: text,
        }) }
        placeholder="CPF"
      />
      <StyledPicker>
        <Picker
          selectedValue={ studentInfos.materia }
          style={{ height: 31, width: '100%', color: 'white' }}
          onValueChange={ (item) => setInfos({
            ...studentInfos,
            materia: item,
          }) }
        >
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Node" value="Node" />
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="MySQL" value="MySQL" />
        </Picker>
      </StyledPicker>
      <Button
        buttonStyle={ styleComponent.button }
        title="Registrar"
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
    </BodyRegistration>
  )
}
