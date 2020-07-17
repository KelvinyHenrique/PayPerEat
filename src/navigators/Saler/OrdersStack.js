import React from 'react';
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../../Screens/Saler/Orders';
import OrderDetail from '../../Screens/Saler/OrderDetail';
const OrdersStack = createStackNavigator();

export default () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Pedidos" component={Orders} options={({ navigation }) => ({
                title: 'Pedidos',
                headerTitleAlign: 'center',
            })} />

            <OrdersStack.Screen name="OrderDetail" component={OrderDetail} options={({ navigation }) => ({
                title: 'Detalhes do Pedido',
                headerTitleAlign: 'center',
            })} />

        </OrdersStack.Navigator>
    );
}