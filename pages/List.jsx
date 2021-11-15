import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Context from '../context/Context'
import { BodyHead, StyledHead, StyleText } from './ListStyle';

export default function List() {
  const context = useContext(Context);
  const { data } = context;
  return (
    <BodyHead>
      { data.length > 0 && data.map((d) => {
        return (
          <StyledHead key={ d.cpf } >
            <StyleText>Nome: { d.nome }</StyleText>
            <StyleText>CPF: { d.cpf }</StyleText>
            <StyleText>Matéria: { d.materia }</StyleText>
          </StyledHead>
        );
      })}
    </BodyHead>
  )
}
