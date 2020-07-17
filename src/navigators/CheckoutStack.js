import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../Screens/Checkout';
import Cart from '../Screens/Cart';
import CheckoutFinish from '../Screens/CheckoutFinish';

const CheckoutStack = createStackNavigator();

export default () => {
    return (
        <CheckoutStack.Navigator>

            <CheckoutStack.Screen name="Cart" component={Cart} options={({ navigation }) => ({
                title: 'Carrinho',
                headerTitleAlign: 'center',
                headerLeft: null,
            })} />

            <CheckoutStack.Screen name="Checkout" component={Checkout}  options={({ navigation }) => ({
              headerShown:true,
              headerTitleAlign: 'center',
            })} />
           
            <CheckoutStack.Screen name="CheckoutFinish" component={CheckoutFinish}  options={({ navigation }) => ({
              headerShown:false,
            })} />

        </CheckoutStack.Navigator>
    );
}