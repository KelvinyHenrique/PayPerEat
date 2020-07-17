import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Client from './Client';
import Saler from './Saler'; 
import Login from  './src/Screens/StarterScreen';
import Intro from './src/Screens/Intro';

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
        >
          <Stack.Screen name="Login"  component={Login} />
          <Stack.Screen name="Client" component={Client}/>
          <Stack.Screen name="Saler"  component={Saler}/>
          <Stack.Screen name="Intro"  component={Intro}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;