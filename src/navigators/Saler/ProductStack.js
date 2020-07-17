import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Product from '../../Screens/Saler/Product';
import ActionBox from '../../Components/SalerComponents/ActionBox';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>

            <MainStack.Screen name="Product" component={Product} options={({ navigation }) => ({
                title: 'Meus Produtos',
                headerTitleAlign: 'center',
            })} />


            <MainStack.Screen name="ActionBox" component={ActionBox} options={({ navigation }) => ({
                title: 'Meus Produtos',
                headerTitleAlign: 'center',
            })} />


        </MainStack.Navigator>
    );
}