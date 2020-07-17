import React from 'react';
import { Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Screens/Profile';

const OrdersStack = createStackNavigator();

export default () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="OrderDetail" component={Profile} options={({ navigation }) => ({
                title: 'Meu Perfil',
                headerTitleAlign: 'center',
                //headerLeft: null,
            })} />
        </OrdersStack.Navigator>
    );
}