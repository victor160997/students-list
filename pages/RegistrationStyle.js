import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const BodyRegistration = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00C2CB;
`;

export const StyledTextInput = styled.TextInput`
  border: #fff;
  background-color: transparent;
  margin: 10px;
  padding: 10px;
  width: 80%;
  color: white;
`;

export const StyledPicker = styled.View`
  color: white;
  border: white;
  padding: 10px;
  margin: 10px;
  width: 80%;
`;

/* export const StyledButton = styled.Button`
  background-color: blue;
  width: 80%;
  padding: 80px;
`; */

export const styleComponent = StyleSheet.create({
  button: {
    paddingLeft: 125,
    paddingRight: 125,
    backgroundColor: '#008086',
    borderRadius: 0,
    marginTop:10
  },
});
