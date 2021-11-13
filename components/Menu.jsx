import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Provider from '../context/Provider';
import List from '../pages/List';
import Registration from '../pages/Registration';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Provider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Registrar Matrícula" component={ Registration } />
          <Drawer.Screen name="Lista de Matrículas" component={ List } />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
