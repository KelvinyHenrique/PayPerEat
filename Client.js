import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';
import SalerTab from './src/navigators/SalerTab';

function Client() {


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF'
    },
  };


  return (
    <NavigationContainer independent={true} theme={MyTheme}>
      <MainTab />
    </NavigationContainer>
  );
}

export default Client;