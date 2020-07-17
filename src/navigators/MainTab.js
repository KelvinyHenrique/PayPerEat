import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Donation from '../Screens/Donation';
import CheckoutStack from './CheckoutStack';
import OrdersStack from './OrdersStack';
import Profile from '../Screens/Profile';
import { Image, Text, View } from 'react-native';
import MainStack from './MainStack';
import ProfileStack from './ProfileStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Em breve!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#2BB673',
            }}
        >
            <Tab.Screen
                name="Home"
                component={MainStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Doar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Carrinho"
                component={CheckoutStack}
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size} />
                    ),
                }}
            />


            <Tab.Screen
                name="Pedidos"
                component={OrdersStack}
                options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="playlist-check" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default () => {
    return (
        <MyTabs />
    );
}
