import React from 'react';
import {Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../Screens/Checkout';
import OrderDetail from '../Screens/OrderDetail';
import Orders from '../Screens/Orders';

const OrdersStack = createStackNavigator();

export default () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Pedidos" component={Orders} options={({ navigation }) => ({
                title: 'Pedidos',
                headerTitleAlign: 'center',
            })} />
            <OrdersStack.Screen name="OrderDetail" component={OrderDetail} options={({ navigation }) => ({
                title: 'Detalhes do pedido',
                headerTitleAlign: 'center',
                //headerLeft: null,
            })} />
        </OrdersStack.Navigator>
    );
}